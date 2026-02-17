import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@workspace/ui/components/button";
import { DeclarationTrendChart } from "@/components/charts/declaration-trend-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Input } from "@workspace/ui/components/input";
import { Separator } from "@workspace/ui/components/separator";
import { RecentDeclarationsTable } from "@/components/recent-declarations-table";
import {
  Search,
  TrendingUp,
  TrendingDown,
  ClipboardList,
  Clock,
  CheckCircle2,
  DollarSign,
  Globe,
  MapPin,
  Coins,
  BookOpen,
  Warehouse,
  CalendarDays,
  FileText,
  Archive,
  ArrowRight,
  Bell,
  CircleDot,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Static sample data                                                        */
/* -------------------------------------------------------------------------- */

const summaryCards = [
  {
    key: "totalDeclarations" as const,
    value: "1,247",
    trend: "+12.5%",
    trendUp: true,
    icon: ClipboardList,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  {
    key: "pendingReview" as const,
    value: "23",
    trend: "-3.2%",
    trendUp: false,
    icon: Clock,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
  {
    key: "completedToday" as const,
    value: "89",
    trend: "+8.1%",
    trendUp: true,
    icon: CheckCircle2,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    key: "totalDuty" as const,
    value: "\u20A924\uC5B5",
    trend: "+5.7%",
    trendUp: true,
    icon: DollarSign,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
  },
] as const;

const notices = [
  {
    id: 1,
    type: "noticeSystem" as const,
    title: "UNI-PASS 시스템 정기 점검 안내 (02/20 02:00~06:00)",
    date: "2026-02-15",
    variant: "default" as const,
  },
  {
    id: 2,
    type: "noticeRegulation" as const,
    title: "2026년 관세율표 개정에 따른 HS코드 변경 사항 안내",
    date: "2026-02-14",
    variant: "secondary" as const,
  },
  {
    id: 3,
    type: "noticeGeneral" as const,
    title: "전자통관시스템 수출신고 간소화 적용 범위 확대 공지",
    date: "2026-02-13",
    variant: "outline" as const,
  },
  {
    id: 4,
    type: "noticeSystem" as const,
    title: "보세구역 반출입 실시간 모니터링 기능 업데이트",
    date: "2026-02-12",
    variant: "default" as const,
  },
] as const;

const exchangeRates = [
  { pair: "USD/KRW", rate: "1,382.50", change: "+4.30", up: true },
  { pair: "EUR/KRW", rate: "1,498.20", change: "-2.10", up: false },
  { pair: "JPY/KRW", rate: "9.21", change: "+0.05", up: true },
  { pair: "CNY/KRW", rate: "190.85", change: "0.00", up: null },
] as const;

const quickMenuItems = [
  { key: "countryCode" as const, icon: Globe, href: "/base-info/country" },
  { key: "regionCode" as const, icon: MapPin, href: "/base-info/region" },
  { key: "currencyCode" as const, icon: Coins, href: "/base-info/currency" },
  { key: "hsCode" as const, icon: BookOpen, href: "/base-info/hs-code" },
  {
    key: "warehouseInfo" as const,
    icon: Warehouse,
    href: "/base-info/warehouse",
  },
  {
    key: "holidayCalendar" as const,
    icon: CalendarDays,
    href: "/base-info/calendar",
  },
  { key: "declarationDocument" as const, icon: FileText, href: "/declaration" },
  { key: "documentBoxMenu" as const, icon: Archive, href: "/document-box" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Page component (server)                                                   */
/* -------------------------------------------------------------------------- */

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tc = await getTranslations("customs");
  const td = await getTranslations("dashboard");
  const tCommon = await getTranslations("common");

  return (
    <div className="space-y-6">
      {/* ------ Page header ------ */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {td("portalTitle")}
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          {td("portalDescription")}
        </p>
      </div>

      {/* ================================================================== */}
      {/*  1. Summary Cards                                                  */}
      {/* ================================================================== */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map(
          ({ key, value, trend, trendUp, icon: Icon, color, bg }) => (
            <Card key={key} size="sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardDescription className="text-xs font-medium uppercase tracking-wide">
                    {tc(key)}
                  </CardDescription>
                  <div className={`rounded-lg p-2 ${bg}`}>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                </div>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-2xl font-bold tracking-tight">
                    {value}
                  </span>
                  <span
                    className={`mb-0.5 inline-flex items-center gap-0.5 text-xs font-medium ${
                      trendUp
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {trendUp ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {trend}
                  </span>
                </div>
                <p className="text-muted-foreground text-[11px]">
                  {td("vsYesterday")}
                </p>
              </CardHeader>
            </Card>
          ),
        )}
      </div>

      {/* ================================================================== */}
      {/*  1.5. Declaration Trend Chart                                      */}
      {/* ================================================================== */}
      <DeclarationTrendChart />

      {/* ================================================================== */}
      {/*  2. Cargo Tracking + 3. Recent Notices (side by side)              */}
      {/* ================================================================== */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* --- Cargo Tracking Search --- */}
        <Card className="md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              {td("cargoTrackingTitle")}
            </CardTitle>
            <CardDescription className="text-xs">
              {td("cargoTrackingDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Radio-like toggle using static buttons */}
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="bg-primary text-primary-foreground flex h-8 items-center justify-center rounded-lg text-xs font-medium">
                  <CircleDot className="mr-1.5 h-3 w-3" />
                  {td("searchByCrn")}
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-muted text-muted-foreground flex h-8 items-center justify-center rounded-lg text-xs font-medium">
                  {td("searchByBl")}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder={td("searchPlaceholderCrn")}
                className="flex-1"
              />
              <Button size="default">
                <Search className="h-4 w-4" />
                {tCommon("search")}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* --- Recent Notices --- */}
        <Card className="md:col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              {td("notices")}
            </CardTitle>
            <CardAction>
              <Button variant="ghost" size="sm" className="text-xs">
                {td("viewAll")}
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {notices.map((notice, idx) => (
                <div key={notice.id}>
                  <div className="flex items-start gap-3 py-2.5">
                    <Badge
                      variant={notice.variant}
                      className="mt-0.5 shrink-0 text-[10px]"
                    >
                      {td(notice.type)}
                    </Badge>
                    <p className="text-sm leading-snug line-clamp-1 flex-1">
                      {notice.title}
                    </p>
                    <span className="text-muted-foreground shrink-0 text-xs tabular-nums">
                      {notice.date}
                    </span>
                  </div>
                  {idx < notices.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ================================================================== */}
      {/*  4. Exchange Rates + 5. Quick Menu (side by side)                  */}
      {/* ================================================================== */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* --- Exchange Rates --- */}
        <Card className="md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-4 w-4 text-muted-foreground" />
              {tc("exchangeRate")}
            </CardTitle>
            <CardDescription className="text-xs">
              2026-02-16 {td("baseRate")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {exchangeRates.map((rate, idx) => (
                <div key={rate.pair}>
                  <div className="flex items-center justify-between py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold tracking-wide">
                        {rate.pair}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold tabular-nums">
                        {rate.rate}
                      </span>
                      <span
                        className={`inline-flex items-center gap-0.5 font-mono text-xs tabular-nums ${
                          rate.up === true
                            ? "text-red-600 dark:text-red-400"
                            : rate.up === false
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-muted-foreground"
                        }`}
                      >
                        {rate.up === true && (
                          <ArrowUpRight className="h-3 w-3" />
                        )}
                        {rate.up === false && (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {rate.up === null && <Minus className="h-3 w-3" />}
                        {rate.change}
                      </span>
                    </div>
                  </div>
                  {idx < exchangeRates.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* --- Quick Menu --- */}
        <Card className="md:col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>{tc("quickMenu")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickMenuItems.map(({ key, icon: Icon, href }) => (
                <Link key={key} href={href}>
                  <div className="hover:bg-muted/80 flex flex-col items-center gap-2 rounded-xl p-3 transition-colors">
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-xl">
                      <Icon className="text-foreground/70 h-5 w-5" />
                    </div>
                    <span className="text-center text-[11px] font-medium leading-tight">
                      {key === "declarationDocument" ||
                      key === "documentBoxMenu"
                        ? td(key)
                        : tc(key)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ================================================================== */}
      {/*  6. Recent Declarations Table                                      */}
      {/* ================================================================== */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            {tc("recentDeclarations")}
          </CardTitle>
          <CardAction>
            <Button variant="ghost" size="sm" className="text-xs">
              {td("viewAll")}
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <RecentDeclarationsTable />
        </CardContent>
      </Card>
    </div>
  );
}
