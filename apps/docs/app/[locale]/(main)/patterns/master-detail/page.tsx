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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";

const masterData = [
  {
    code: "IC001",
    name: "Incheon Main Office",
    region: "Gyeonggi",
    status: "Active",
  },
  {
    code: "BS001",
    name: "Busan Port Office",
    region: "Gyeongsang",
    status: "Active",
  },
  {
    code: "SL001",
    name: "Seoul Central Office",
    region: "Seoul",
    status: "Active",
  },
  {
    code: "GN001",
    name: "Gangneung Branch",
    region: "Gangwon",
    status: "Inactive",
  },
  {
    code: "JJ001",
    name: "Jeju Branch Office",
    region: "Jeju",
    status: "Active",
  },
];

const selectedDetail = {
  code: "IC001",
  name: "Incheon Main Office",
  nameEn: "Incheon Main Customs Office",
  region: "Gyeonggi",
  address: "123 Customs Rd, Jung-gu, Incheon 22301",
  phone: "032-890-1234",
  fax: "032-890-1235",
  director: "Kim Soo-hyun",
  established: "1970-03-01",
  status: "Active",
};

export default function MasterDetailPage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tc = useTranslations("customs");
  const tCommon = useTranslations("common");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("masterDetail.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("masterDetail.description")}
        </p>
      </div>

      {/* Master: Table */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              {tc("customsOffice")} List
            </CardTitle>
            <div className="flex gap-2">
              <Button size="sm">{tCommon("new")}</Button>
              <Button size="sm" variant="destructive">
                {tCommon("delete")}
              </Button>
            </div>
          </div>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Code</TableHead>
              <TableHead>Office Name</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="w-24">{tc("status")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {masterData.map((row) => (
              <TableRow
                key={row.code}
                className={
                  row.code === "IC001" ? "bg-muted/50" : "cursor-pointer"
                }
              >
                <TableCell className="font-mono text-sm">{row.code}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.region}</TableCell>
                <TableCell>
                  <Badge
                    variant={row.status === "Active" ? "default" : "secondary"}
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

      {/* Detail: Edit Form */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              Detail - {selectedDetail.code}
            </CardTitle>
            <div className="flex gap-2">
              <Button size="sm">{tCommon("save")}</Button>
              <Button size="sm" variant="outline">
                {tCommon("cancel")}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Office Code</Label>
              <Input defaultValue={selectedDetail.code} readOnly />
            </div>
            <div className="space-y-2">
              <Label>Office Name (KR)</Label>
              <Input defaultValue={selectedDetail.name} />
            </div>
            <div className="space-y-2">
              <Label>Office Name (EN)</Label>
              <Input defaultValue={selectedDetail.nameEn} />
            </div>
            <div className="space-y-2">
              <Label>Region</Label>
              <Input defaultValue={selectedDetail.region} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label>Address</Label>
              <Input defaultValue={selectedDetail.address} />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input defaultValue={selectedDetail.phone} />
            </div>
            <div className="space-y-2">
              <Label>Fax</Label>
              <Input defaultValue={selectedDetail.fax} />
            </div>
            <div className="space-y-2">
              <Label>Director</Label>
              <Input defaultValue={selectedDetail.director} />
            </div>
            <div className="space-y-2">
              <Label>Established Date</Label>
              <Input type="date" defaultValue={selectedDetail.established} />
            </div>
            <div className="space-y-2">
              <Label>{tc("status")}</Label>
              <Input defaultValue={selectedDetail.status} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
