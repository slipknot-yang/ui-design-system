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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Separator } from "@workspace/ui/components/separator";
import { Badge } from "@workspace/ui/components/badge";

export default function ComplexFormPage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tc = useTranslations("customs");
  const tCommon = useTranslations("common");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {t("complexForm.title")}
          </h1>
          <p className="text-muted-foreground mt-1">
            {t("complexForm.description")}
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">Draft</Badge>
          <Button>{tCommon("save")}</Button>
          <Button variant="outline">{tCommon("cancel")}</Button>
        </div>
      </div>

      {/* Header Info */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Declaration Header</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label>{tc("declarationNo")}</Label>
              <Input defaultValue="D2026-0001-12345" readOnly />
            </div>
            <div className="space-y-2">
              <Label>{tc("declarationType")}</Label>
              <Select defaultValue="import">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="import">Import</SelectItem>
                  <SelectItem value="export">Export</SelectItem>
                  <SelectItem value="transit">Transit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{tc("customsOffice")}</Label>
              <Select defaultValue="incheon">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="incheon">Incheon</SelectItem>
                  <SelectItem value="busan">Busan</SelectItem>
                  <SelectItem value="seoul">Seoul</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Filing Date</Label>
              <Input type="date" defaultValue="2026-02-15" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabbed Form Sections */}
      <Tabs defaultValue="parties">
        <TabsList>
          <TabsTrigger value="parties">Parties</TabsTrigger>
          <TabsTrigger value="goods">Goods Info</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="valuation">Valuation</TabsTrigger>
          <TabsTrigger value="docs">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="parties">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">
                {tc("importer")} / {tc("exporter")} Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">{tc("importer")}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Business Registration No.</Label>
                    <Input defaultValue="123-45-67890" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input defaultValue="Samsung Electronics Co., Ltd." />
                  </div>
                  <div className="space-y-2">
                    <Label>Representative</Label>
                    <Input defaultValue="Lee Jae-yong" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Address</Label>
                    <Input defaultValue="129 Samsung-ro, Yeongtong-gu, Suwon-si" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input defaultValue="031-200-1234" />
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium mb-3">{tc("exporter")}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input defaultValue="TSMC Limited" />
                  </div>
                  <div className="space-y-2">
                    <Label>{tc("country")}</Label>
                    <Input defaultValue="Taiwan" />
                  </div>
                  <div className="space-y-2">
                    <Label>Address</Label>
                    <Input defaultValue="8 Li-Hsin Rd., Hsinchu Science Park" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goods">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Goods Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label>{tc("hsCode")}</Label>
                  <Input defaultValue="8471.30-0000" />
                </div>
                <div className="space-y-2">
                  <Label>Item Description</Label>
                  <Input defaultValue="Semiconductor Wafer (300mm)" />
                </div>
                <div className="space-y-2">
                  <Label>{tc("quantity")}</Label>
                  <Input type="number" defaultValue="500" />
                </div>
                <div className="space-y-2">
                  <Label>Unit</Label>
                  <Select defaultValue="ea">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ea">EA</SelectItem>
                      <SelectItem value="kg">KG</SelectItem>
                      <SelectItem value="mt">MT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{tc("weight")} (kg)</Label>
                  <Input type="number" defaultValue="1200" />
                </div>
                <div className="space-y-2">
                  <Label>Country of Origin</Label>
                  <Input defaultValue="Taiwan" />
                </div>
                <div className="space-y-2">
                  <Label>Brand</Label>
                  <Input defaultValue="TSMC" />
                </div>
                <div className="space-y-2">
                  <Label>Model</Label>
                  <Input defaultValue="N5-300W" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transport">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Transport Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>Transport Mode</Label>
                  <Select defaultValue="sea">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sea">Sea</SelectItem>
                      <SelectItem value="air">Air</SelectItem>
                      <SelectItem value="road">Road</SelectItem>
                      <SelectItem value="rail">Rail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Vessel / Flight No.</Label>
                  <Input defaultValue="EVER GOLDEN V.025E" />
                </div>
                <div className="space-y-2">
                  <Label>B/L No.</Label>
                  <Input defaultValue="EGLV-TPE-2026-001234" />
                </div>
                <div className="space-y-2">
                  <Label>Port of Loading</Label>
                  <Input defaultValue="Kaohsiung (TWKHH)" />
                </div>
                <div className="space-y-2">
                  <Label>Port of Discharge</Label>
                  <Input defaultValue="Incheon (KRICN)" />
                </div>
                <div className="space-y-2">
                  <Label>ETA</Label>
                  <Input type="date" defaultValue="2026-02-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="valuation">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Customs Valuation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>{tc("currency")}</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                      <SelectItem value="cny">CNY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Invoice Amount</Label>
                  <Input type="number" defaultValue="234500" />
                </div>
                <div className="space-y-2">
                  <Label>Freight</Label>
                  <Input type="number" defaultValue="3200" />
                </div>
                <div className="space-y-2">
                  <Label>Insurance</Label>
                  <Input type="number" defaultValue="468" />
                </div>
                <div className="space-y-2">
                  <Label>CIF Value</Label>
                  <Input type="number" defaultValue="238168" readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Duty Rate (%)</Label>
                  <Input type="number" defaultValue="0" readOnly />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Attached Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Invoice No.</Label>
                  <Input defaultValue="INV-2026-TSMC-001234" />
                </div>
                <div className="space-y-2">
                  <Label>Packing List No.</Label>
                  <Input defaultValue="PL-2026-TSMC-001234" />
                </div>
                <div className="space-y-2">
                  <Label>Certificate of Origin</Label>
                  <Input defaultValue="CO-TW-2026-005678" />
                </div>
                <div className="space-y-2">
                  <Label>Insurance Certificate</Label>
                  <Input defaultValue="IC-2026-MARIN-009012" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
