import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import {
  Search,
  SearchCheck,
  SplitSquareVertical,
  FileText,
  CalendarDays,
  GitPullRequest,
  BarChart3,
} from "lucide-react";

const patterns = [
  {
    key: "searchTable",
    href: "/patterns/search-table",
    icon: Search,
    pct: "60%",
  },
  {
    key: "advancedSearch",
    href: "/patterns/advanced-search",
    icon: SearchCheck,
    pct: "15%",
  },
  {
    key: "masterDetail",
    href: "/patterns/master-detail",
    icon: SplitSquareVertical,
    pct: "10%",
  },
  {
    key: "complexForm",
    href: "/patterns/complex-form",
    icon: FileText,
    pct: "8%",
  },
  {
    key: "calendar",
    href: "/patterns/calendar",
    icon: CalendarDays,
    pct: "2%",
  },
  {
    key: "workflow",
    href: "/patterns/workflow",
    icon: GitPullRequest,
    pct: "3%",
  },
  { key: "dashboard", href: "/patterns/dashboard", icon: BarChart3, pct: "2%" },
] as const;

export default function HomePage() {
  const t = useTranslations("patterns");
  const tNav = useTranslations("nav");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground mt-2">{t("description")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map(({ key, href, icon: Icon, pct }) => (
          <Link key={key} href={href}>
            <Card className="hover:border-primary/50 transition-colors h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="secondary">{pct}</Badge>
                </div>
                <CardTitle className="text-base">
                  {t(`${key}.title` as any)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t(`${key}.description` as any)}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
