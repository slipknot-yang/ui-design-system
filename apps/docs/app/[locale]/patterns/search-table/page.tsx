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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";
import { Separator } from "@workspace/ui/components/separator";

const sampleData = [
  {
    id: "20260101-001",
    declarationNo: "D2026-0001-12345",
    hsCode: "8471.30-0000",
    declarationType: "Import",
    customsOffice: "Incheon",
    status: "Cleared",
    amount: "$12,450.00",
  },
  {
    id: "20260101-002",
    declarationNo: "D2026-0002-67890",
    hsCode: "6109.10-0000",
    declarationType: "Import",
    customsOffice: "Busan",
    status: "Pending",
    amount: "$8,320.00",
  },
  {
    id: "20260102-003",
    declarationNo: "D2026-0003-11223",
    hsCode: "2204.21-0000",
    declarationType: "Export",
    customsOffice: "Seoul",
    status: "Under Review",
    amount: "$3,780.00",
  },
  {
    id: "20260102-004",
    declarationNo: "D2026-0004-44556",
    hsCode: "8517.12-0000",
    declarationType: "Import",
    customsOffice: "Incheon",
    status: "Cleared",
    amount: "$45,600.00",
  },
  {
    id: "20260103-005",
    declarationNo: "D2026-0005-77889",
    hsCode: "3004.90-0000",
    declarationType: "Import",
    customsOffice: "Gimpo",
    status: "Rejected",
    amount: "$1,250.00",
  },
];

function statusVariant(status: string) {
  switch (status) {
    case "Cleared":
      return "default" as const;
    case "Pending":
      return "secondary" as const;
    case "Rejected":
      return "destructive" as const;
    default:
      return "outline" as const;
  }
}

export default function SearchTablePage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tc = useTranslations("customs");
  const tCommon = useTranslations("common");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("searchTable.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("searchTable.description")}
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">{tCommon("search")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input type="date" defaultValue="2026-01-01" />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input type="date" defaultValue="2026-01-31" />
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
            <div className="space-y-2">
              <Label>{tc("status")}</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="cleared">Cleared</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button>{tCommon("search")}</Button>
            <Button variant="outline">{tCommon("reset")}</Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {tCommon("total")}: <strong>5</strong> records
          </p>
          <Button variant="outline" size="sm">
            {tCommon("export")}
          </Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{tc("declarationNo")}</TableHead>
                <TableHead>{tc("hsCode")}</TableHead>
                <TableHead>{tc("declarationType")}</TableHead>
                <TableHead>{tc("customsOffice")}</TableHead>
                <TableHead>{tc("status")}</TableHead>
                <TableHead className="text-right">{tc("amount")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">
                    {row.declarationNo}
                  </TableCell>
                  <TableCell>{row.hsCode}</TableCell>
                  <TableCell>{row.declarationType}</TableCell>
                  <TableCell>{row.customsOffice}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(row.status)}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
