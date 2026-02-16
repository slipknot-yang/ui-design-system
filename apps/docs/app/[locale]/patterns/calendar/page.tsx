import { useTranslations } from "next-intl";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { Calendar } from "@workspace/ui/components/calendar";

const scheduleData = [
  {
    id: 1,
    date: "2026-02-16",
    title: "Incheon Port Inspection",
    type: "Inspection",
    office: "Incheon",
    officer: "Park Ji-sung",
    status: "Scheduled",
  },
  {
    id: 2,
    date: "2026-02-17",
    title: "Busan Container Audit",
    type: "Audit",
    office: "Busan",
    officer: "Kim Min-jae",
    status: "Confirmed",
  },
  {
    id: 3,
    date: "2026-02-18",
    title: "Seoul Warehouse Check",
    type: "Inspection",
    office: "Seoul",
    officer: "Lee Soo-jin",
    status: "Scheduled",
  },
  {
    id: 4,
    date: "2026-02-20",
    title: "Gimpo Air Cargo Review",
    type: "Review",
    office: "Gimpo",
    officer: "Choi Yun-ah",
    status: "Pending",
  },
  {
    id: 5,
    date: "2026-02-23",
    title: "Quarterly Compliance Meeting",
    type: "Meeting",
    office: "Seoul",
    officer: "Park Ji-sung",
    status: "Confirmed",
  },
];

function typeVariant(type: string) {
  switch (type) {
    case "Inspection":
      return "default" as const;
    case "Audit":
      return "destructive" as const;
    case "Review":
      return "secondary" as const;
    default:
      return "outline" as const;
  }
}

export default function CalendarPage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tc = useTranslations("customs");
  const tCommon = useTranslations("common");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("calendar.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("calendar.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr]">
        {/* Left: Calendar + Search */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-3">
              <Calendar mode="single" className="rounded-md" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Filter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label>Schedule Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                    <SelectItem value="audit">Audit</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{tc("customsOffice")}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Offices</SelectItem>
                    <SelectItem value="incheon">Incheon</SelectItem>
                    <SelectItem value="busan">Busan</SelectItem>
                    <SelectItem value="seoul">Seoul</SelectItem>
                    <SelectItem value="gimpo">Gimpo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" size="sm">
                {tCommon("search")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right: Schedule List + Detail */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  February 2026 Schedule
                </CardTitle>
                <Button size="sm">{tCommon("new")}</Button>
              </div>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>{tc("customsOffice")}</TableHead>
                  <TableHead>Officer</TableHead>
                  <TableHead>{tc("status")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((row) => (
                  <TableRow
                    key={row.id}
                    className={row.id === 1 ? "bg-muted/50" : "cursor-pointer"}
                  >
                    <TableCell className="font-mono text-sm">
                      {row.date}
                    </TableCell>
                    <TableCell className="font-medium">{row.title}</TableCell>
                    <TableCell>
                      <Badge variant={typeVariant(row.type)}>{row.type}</Badge>
                    </TableCell>
                    <TableCell>{row.office}</TableCell>
                    <TableCell>{row.officer}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          row.status === "Confirmed" ? "default" : "secondary"
                        }
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <Separator />

          {/* Detail Form */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Schedule Detail</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm">{tCommon("save")}</Button>
                  <Button size="sm" variant="outline">
                    {tCommon("delete")}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" defaultValue="2026-02-16" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Title</Label>
                  <Input defaultValue="Incheon Port Inspection" />
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select defaultValue="inspection">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inspection">Inspection</SelectItem>
                      <SelectItem value="audit">Audit</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{tc("customsOffice")}</Label>
                  <Input defaultValue="Incheon" />
                </div>
                <div className="space-y-2">
                  <Label>Assigned Officer</Label>
                  <Input defaultValue="Park Ji-sung" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
