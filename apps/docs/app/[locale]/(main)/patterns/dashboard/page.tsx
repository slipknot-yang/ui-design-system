import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Progress } from "@workspace/ui/components/progress";
import { Separator } from "@workspace/ui/components/separator";
import {
  ClipboardList,
  ArrowDownToLine,
  ArrowUpFromLine,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { DeclarationTrendChart } from "@/components/charts/declaration-trend-chart";
import { ActivityTable } from "@/components/activity-table";

const summaryCards = [
  {
    label: "Total Declarations",
    value: "12,847",
    change: "+3.2%",
    positive: true,
    icon: ClipboardList,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  {
    label: "Import Clearance",
    value: "8,234",
    change: "+5.1%",
    positive: true,
    icon: ArrowDownToLine,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    label: "Export Clearance",
    value: "4,613",
    change: "-1.4%",
    positive: false,
    icon: ArrowUpFromLine,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/40",
  },
  {
    label: "Pending Review",
    value: "156",
    change: "-12.3%",
    positive: true,
    icon: Clock,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
];

const topHsCodes = [
  {
    code: "8471.30",
    description: "Portable digital computers",
    count: 1284,
    pct: 85,
  },
  {
    code: "8517.12",
    description: "Telephones for cellular networks",
    count: 1156,
    pct: 76,
  },
  { code: "6109.10", description: "T-shirts, cotton", count: 892, pct: 59 },
  {
    code: "2204.21",
    description: "Wine in containers <= 2L",
    count: 743,
    pct: 49,
  },
  {
    code: "3004.90",
    description: "Medicaments, packaged",
    count: 621,
    pct: 41,
  },
];

export default async function DashboardPatternPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patterns");
  const tDash = await getTranslations("dashboard");
  const tc = await getTranslations("customs");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("dashboard.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("dashboard.description")}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.label} size="sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardDescription className="text-xs font-medium uppercase tracking-wide">
                  {card.label}
                </CardDescription>
                <div className={`rounded-lg p-2 ${card.bg}`}>
                  <card.icon className={`h-4 w-4 ${card.color}`} />
                </div>
              </div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-2xl font-bold tracking-tight">
                  {card.value}
                </span>
                <span
                  className={`mb-0.5 inline-flex items-center gap-0.5 text-xs font-medium ${
                    card.positive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {card.positive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {card.change}
                </span>
              </div>
              <p className="text-muted-foreground text-[11px]">
                vs. previous month
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Charts + Top HS Codes */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DeclarationTrendChart />

        {/* Top HS Codes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Top {tc("hsCode")}s by Volume
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topHsCodes.map((item) => (
              <div key={item.code} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span>
                    <span className="font-mono font-medium">{item.code}</span>
                    <span className="text-muted-foreground ml-2">
                      {item.description}
                    </span>
                  </span>
                  <span className="font-medium">
                    {item.count.toLocaleString()}
                  </span>
                </div>
                <Progress value={item.pct} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Recent Activity Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{tDash("recentActivity")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ActivityTable />
        </CardContent>
      </Card>
    </div>
  );
}
