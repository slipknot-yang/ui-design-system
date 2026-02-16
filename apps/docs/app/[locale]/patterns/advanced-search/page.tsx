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
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";

const sampleData = [
  {
    id: 1,
    declarationNo: "E2026-1001-00112",
    hsCode: "8471.30-0000",
    importer: "Samsung Electronics",
    exporter: "TSMC Ltd.",
    country: "Taiwan",
    customsOffice: "Incheon",
    status: "Cleared",
    amount: "$234,500.00",
    weight: "1,200 kg",
  },
  {
    id: 2,
    declarationNo: "E2026-1002-00223",
    hsCode: "6109.10-0000",
    importer: "Lotte Corporation",
    exporter: "Zara International",
    country: "Spain",
    customsOffice: "Busan",
    status: "Pending",
    amount: "$18,900.00",
    weight: "450 kg",
  },
  {
    id: 3,
    declarationNo: "E2026-1003-00334",
    hsCode: "2204.21-0000",
    importer: "Shilla Duty Free",
    exporter: "Chateau Margaux",
    country: "France",
    customsOffice: "Seoul",
    status: "Under Review",
    amount: "$56,780.00",
    weight: "2,800 kg",
  },
];

function statusVariant(status: string) {
  switch (status) {
    case "Cleared":
      return "default" as const;
    case "Pending":
      return "secondary" as const;
    default:
      return "outline" as const;
  }
}

export default function AdvancedSearchPage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tc = useTranslations("customs");
  const tCommon = useTranslations("common");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("advancedSearch.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("advancedSearch.description")}
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Advanced Search Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Row 1: Date range + text inputs */}
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
              <Label>{tc("declarationNo")}</Label>
              <Input placeholder="E2026-XXXX-XXXXX" />
            </div>
            <div className="space-y-2">
              <Label>{tc("hsCode")}</Label>
              <Input placeholder="XXXX.XX-XXXX" />
            </div>
          </div>

          {/* Row 2: Selects + text inputs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label>{tc("importer")}</Label>
              <Input placeholder="Importer name" />
            </div>
            <div className="space-y-2">
              <Label>{tc("exporter")}</Label>
              <Input placeholder="Exporter name" />
            </div>
            <div className="space-y-2">
              <Label>{tc("country")}</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="cn">China</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="tw">Taiwan</SelectItem>
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
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3: Checkboxes for status */}
          <div className="space-y-2">
            <Label>{tc("status")} (Multi-select)</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="status-cleared" defaultChecked />
                <Label htmlFor="status-cleared">Cleared</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="status-pending" defaultChecked />
                <Label htmlFor="status-pending">Pending</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="status-review" />
                <Label htmlFor="status-review">Under Review</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="status-rejected" />
                <Label htmlFor="status-rejected">Rejected</Label>
              </div>
            </div>
          </div>

          {/* Row 4: Radio for declaration type */}
          <div className="space-y-2">
            <Label>{tc("declarationType")}</Label>
            <RadioGroup defaultValue="all" className="flex flex-row gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="all" id="type-all" />
                <Label htmlFor="type-all">All</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="import" id="type-import" />
                <Label htmlFor="type-import">Import</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="export" id="type-export" />
                <Label htmlFor="type-export">Export</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="transit" id="type-transit" />
                <Label htmlFor="type-transit">Transit</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <Button>{tCommon("search")}</Button>
            <Button variant="outline">{tCommon("reset")}</Button>
            <Button variant="outline">{tCommon("export")}</Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {tCommon("total")}: <strong>3</strong> records
        </p>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{tc("declarationNo")}</TableHead>
                <TableHead>{tc("hsCode")}</TableHead>
                <TableHead>{tc("importer")}</TableHead>
                <TableHead>{tc("exporter")}</TableHead>
                <TableHead>{tc("country")}</TableHead>
                <TableHead>{tc("customsOffice")}</TableHead>
                <TableHead>{tc("status")}</TableHead>
                <TableHead className="text-right">{tc("amount")}</TableHead>
                <TableHead className="text-right">{tc("weight")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">
                    {row.declarationNo}
                  </TableCell>
                  <TableCell>{row.hsCode}</TableCell>
                  <TableCell>{row.importer}</TableCell>
                  <TableCell>{row.exporter}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.customsOffice}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(row.status)}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                  <TableCell className="text-right">{row.weight}</TableCell>
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
