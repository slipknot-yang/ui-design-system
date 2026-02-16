import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";
import { Progress } from "@workspace/ui/components/progress";
import { Separator } from "@workspace/ui/components/separator";

const summaryCards = [
  {
    label: "Total Declarations",
    value: "12,847",
    change: "+3.2%",
    positive: true,
  },
  {
    label: "Import Clearance",
    value: "8,234",
    change: "+5.1%",
    positive: true,
  },
  {
    label: "Export Clearance",
    value: "4,613",
    change: "-1.4%",
    positive: false,
  },
  {
    label: "Pending Review",
    value: "156",
    change: "-12.3%",
    positive: true,
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

const recentActivity = [
  {
    id: 1,
    time: "14:32",
    event: "Import declaration D2026-0523 cleared",
    office: "Incheon",
    status: "Cleared",
  },
  {
    id: 2,
    time: "14:15",
    event: "Export declaration E2026-0891 submitted",
    office: "Busan",
    status: "Submitted",
  },
  {
    id: 3,
    time: "13:58",
    event: "Inspection scheduled for D2026-0518",
    office: "Seoul",
    status: "Inspection",
  },
  {
    id: 4,
    time: "13:40",
    event: "Tariff review completed for D2026-0510",
    office: "Incheon",
    status: "Completed",
  },
  {
    id: 5,
    time: "13:22",
    event: "Declaration D2026-0507 rejected - missing docs",
    office: "Gimpo",
    status: "Rejected",
  },
  {
    id: 6,
    time: "12:55",
    event: "Bulk import batch B2026-0045 processed",
    office: "Busan",
    status: "Processed",
  },
];

function activityVariant(status: string) {
  switch (status) {
    case "Cleared":
    case "Completed":
    case "Processed":
      return "default" as const;
    case "Rejected":
      return "destructive" as const;
    case "Inspection":
      return "outline" as const;
    default:
      return "secondary" as const;
  }
}

export default function DashboardPage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tDash = useTranslations("dashboard");
  const tc = useTranslations("customs");

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
          <Card key={card.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{card.value}</span>
                <Badge variant={card.positive ? "default" : "destructive"}>
                  {card.change}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                vs. previous month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts placeholder + Top HS Codes */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Monthly Declaration Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">
                  {/* ASCII chart placeholder */}
                  <svg
                    viewBox="0 0 200 80"
                    className="h-16 w-48 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="10,60 40,45 70,50 100,30 130,35 160,20 190,25" />
                  </svg>
                </div>
                <p className="text-sm">Chart component placeholder</p>
                <p className="text-xs">
                  Integrate with @workspace/ui/components/chart
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Time</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>{tc("customsOffice")}</TableHead>
              <TableHead>{tc("status")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivity.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono text-sm">{row.time}</TableCell>
                <TableCell>{row.event}</TableCell>
                <TableCell>{row.office}</TableCell>
                <TableCell>
                  <Badge variant={activityVariant(row.status)}>
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
