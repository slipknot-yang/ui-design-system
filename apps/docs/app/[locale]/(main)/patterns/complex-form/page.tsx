import { getTranslations, setRequestLocale } from "next-intl/server";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Separator } from "@workspace/ui/components/separator";
import { Badge } from "@workspace/ui/components/badge";
import { Textarea } from "@workspace/ui/components/textarea";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Save,
  Send,
  Printer,
  Plus,
  Upload,
  FileCheck,
  FileX,
  Package,
  Ship,
  Calculator,
  Users,
} from "lucide-react";

/* ---------------------------------------------------------------------------
 * Sample Data
 * -------------------------------------------------------------------------*/

const goodsItems = [
  {
    no: 1,
    hsCode: "8542.31-0000",
    description: "전자집적회로 (프로세서)",
    origin: "TW",
    quantity: 12000,
    unit: "EA",
    netWeight: 48.0,
    grossWeight: 62.5,
  },
  {
    no: 2,
    hsCode: "8542.32-0000",
    description: "전자집적회로 (메모리)",
    origin: "TW",
    quantity: 25000,
    unit: "EA",
    netWeight: 75.0,
    grossWeight: 98.3,
  },
  {
    no: 3,
    hsCode: "8541.49-0000",
    description: "광전성 반도체 디바이스",
    origin: "TW",
    quantity: 5000,
    unit: "EA",
    netWeight: 15.0,
    grossWeight: 21.7,
  },
];

const documentItems = [
  {
    no: 1,
    type: "commercial-invoice",
    typeLabel: "상업송장 (Commercial Invoice)",
    refNo: "INV-2026-TSMC-007821",
    issueDate: "2026-02-10",
    uploaded: true,
  },
  {
    no: 2,
    type: "packing-list",
    typeLabel: "포장명세서 (Packing List)",
    refNo: "PL-2026-TSMC-007821",
    issueDate: "2026-02-10",
    uploaded: true,
  },
  {
    no: 3,
    type: "bl",
    typeLabel: "선하증권 (B/L)",
    refNo: "EGLV-TPE-2026-003456",
    issueDate: "2026-02-12",
    uploaded: true,
  },
  {
    no: 4,
    type: "certificate-origin",
    typeLabel: "원산지증명서 (C/O)",
    refNo: "",
    issueDate: "",
    uploaded: false,
  },
];

/* ---------------------------------------------------------------------------
 * Page Component
 * -------------------------------------------------------------------------*/

export default async function ComplexFormPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patterns");
  const _tc = await getTranslations("customs");
  const _tCommon = await getTranslations("common");

  return (
    <div className="space-y-6">
      {/* ----------------------------------------------------------------
       * Page Header
       * -------------------------------------------------------------- */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <nav className="text-muted-foreground mb-1 text-sm">
            포털 &gt; 수출입신고 &gt; 신고서 작성
          </nav>
          <h1 className="text-2xl font-bold tracking-tight">
            수출입 신고서 작성
          </h1>
          <p className="text-muted-foreground mt-1">
            {t("complexForm.description")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Save className="mr-1.5 h-4 w-4" />
            임시저장
          </Button>
          <Button size="sm">
            <Send className="mr-1.5 h-4 w-4" />
            신고제출
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-1.5 h-4 w-4" />
            인쇄
          </Button>
        </div>
      </div>

      {/* ----------------------------------------------------------------
       * Declaration Header Card
       * -------------------------------------------------------------- */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">신고서 기본정보</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <Label>신고번호</Label>
              <Input
                defaultValue="D2026-ICN-DRAFT"
                readOnly
                className="bg-muted"
              />
            </div>
            <div className="space-y-2">
              <Label>신고구분</Label>
              <Select defaultValue="import-general">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="import-general">
                    수입신고 (일반)
                  </SelectItem>
                  <SelectItem value="import-simplified">
                    수입신고 (간이)
                  </SelectItem>
                  <SelectItem value="export-general">
                    수출신고 (일반)
                  </SelectItem>
                  <SelectItem value="export-simplified">
                    수출신고 (간이)
                  </SelectItem>
                  <SelectItem value="transit">환적신고</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>신고세관</Label>
              <Select defaultValue="020">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="020">인천세관 (020)</SelectItem>
                  <SelectItem value="050">부산세관 (050)</SelectItem>
                  <SelectItem value="010">서울세관 (010)</SelectItem>
                  <SelectItem value="030">김포공항세관 (030)</SelectItem>
                  <SelectItem value="040">인천공항세관 (040)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>신고일자</Label>
              <Input type="date" defaultValue="2026-02-16" />
            </div>
            <div className="flex items-end space-y-2">
              <Badge
                variant="outline"
                className="border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-400"
              >
                작성중
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ----------------------------------------------------------------
       * Tabs
       * -------------------------------------------------------------- */}
      <Tabs defaultValue="parties">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          <TabsTrigger value="parties" className="gap-1.5">
            <Users className="h-4 w-4" />
            당사자
          </TabsTrigger>
          <TabsTrigger value="goods" className="gap-1.5">
            <Package className="h-4 w-4" />
            물품정보
          </TabsTrigger>
          <TabsTrigger value="transport" className="gap-1.5">
            <Ship className="h-4 w-4" />
            운송
          </TabsTrigger>
          <TabsTrigger value="valuation" className="gap-1.5">
            <Calculator className="h-4 w-4" />
            과세가격
          </TabsTrigger>
          <TabsTrigger value="docs" className="gap-1.5">
            <FileCheck className="h-4 w-4" />
            첨부서류
          </TabsTrigger>
        </TabsList>

        {/* ==============================================================
         * Tab 1: Parties (당사자)
         * ============================================================ */}
        <TabsContent value="parties" className="space-y-4">
          {/* Importer */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">수입자 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>상호 (업체명)</Label>
                  <Input defaultValue="삼성전자 주식회사" />
                </div>
                <div className="space-y-2">
                  <Label>사업자등록번호 (NIF)</Label>
                  <Input defaultValue="124-81-00998" />
                </div>
                <div className="space-y-2 lg:col-span-1">
                  <Label>통관고유부호</Label>
                  <Input defaultValue="SEIC-2000-0124810" />
                </div>
                <div className="space-y-2 sm:col-span-2 lg:col-span-2">
                  <Label>주소</Label>
                  <Input defaultValue="경기도 수원시 영통구 삼성로 129 (매탄동)" />
                </div>
                <div className="space-y-2">
                  <Label>담당자</Label>
                  <Input defaultValue="김수입" />
                </div>
                <div className="space-y-2">
                  <Label>연락처</Label>
                  <Input defaultValue="031-200-7890" />
                </div>
                <div className="space-y-2">
                  <Label>이메일</Label>
                  <Input type="email" defaultValue="import@samsung.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exporter */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">수출자 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>상호 (업체명)</Label>
                  <Input defaultValue="Taiwan Semiconductor Manufacturing Co." />
                </div>
                <div className="space-y-2">
                  <Label>국가</Label>
                  <Select defaultValue="TW">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TW">대만 (TW)</SelectItem>
                      <SelectItem value="CN">중국 (CN)</SelectItem>
                      <SelectItem value="JP">일본 (JP)</SelectItem>
                      <SelectItem value="US">미국 (US)</SelectItem>
                      <SelectItem value="DE">독일 (DE)</SelectItem>
                      <SelectItem value="VN">베트남 (VN)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                  <Label>주소</Label>
                  <Input defaultValue="No. 8, Li-Hsin Rd. VI, Hsinchu Science Park, Hsinchu 300-78, Taiwan" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customs Broker */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">관세사 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>관세사명</Label>
                  <Input defaultValue="(주)대한관세법인" />
                </div>
                <div className="space-y-2">
                  <Label>관세사 등록번호</Label>
                  <Input defaultValue="CB-12-0456" />
                </div>
                <div className="space-y-2">
                  <Label>담당 관세사</Label>
                  <Input defaultValue="박관세" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==============================================================
         * Tab 2: Goods (물품정보)
         * ============================================================ */}
        <TabsContent value="goods" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-base">물품 목록</CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-1.5 h-4 w-4" />
                품목 추가
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12 text-center">란번</TableHead>
                      <TableHead className="w-36">HS 부호</TableHead>
                      <TableHead>품명</TableHead>
                      <TableHead className="w-16 text-center">원산지</TableHead>
                      <TableHead className="w-20 text-right">수량</TableHead>
                      <TableHead className="w-16 text-center">단위</TableHead>
                      <TableHead className="w-24 text-right">
                        순중량 (kg)
                      </TableHead>
                      <TableHead className="w-24 text-right">
                        총중량 (kg)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {goodsItems.map((item) => (
                      <TableRow
                        key={item.no}
                        className={
                          item.no === 1
                            ? "bg-primary/5 border-primary/20"
                            : "cursor-pointer hover:bg-muted/50"
                        }
                      >
                        <TableCell className="text-center font-medium">
                          {item.no}
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {item.hsCode}
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="text-center">
                          {item.origin}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.quantity.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.unit}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.netWeight.toFixed(1)}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.grossWeight.toFixed(1)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Selected Item Detail */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">
                란번 1 - 품목 상세정보
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label>HS 부호</Label>
                  <Input defaultValue="8542.31-0000" className="font-mono" />
                  <p className="text-muted-foreground text-xs">
                    자동조회: 전자집적회로 - 프로세서 및 컨트롤러
                  </p>
                </div>
                <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                  <Label>품명 (한글)</Label>
                  <Input defaultValue="전자집적회로 (프로세서) - 5나노 공정 웨이퍼 기반" />
                </div>
                <div className="space-y-2">
                  <Label>상표 (브랜드)</Label>
                  <Input defaultValue="TSMC" />
                </div>
                <div className="space-y-2">
                  <Label>모델 / 규격</Label>
                  <Input defaultValue="N5P-WFR-300" />
                </div>
                <div className="space-y-2">
                  <Label>성분</Label>
                  <Input defaultValue="실리콘 (Si)" />
                </div>
                <div className="space-y-2">
                  <Label>용도</Label>
                  <Input defaultValue="반도체 제조 원자재" />
                </div>
                <div className="space-y-2 sm:col-span-2 lg:col-span-4">
                  <Label>규격 상세</Label>
                  <Textarea
                    defaultValue={
                      "- 웨이퍼 직경: 300mm\n- 공정: 5nm FinFET (N5P Enhanced)\n- 수율 등급: Prime Grade\n- 포장: FOUP (Front Opening Unified Pod), 25매/FOUP"
                    }
                    className="min-h-24"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==============================================================
         * Tab 3: Transport (운송)
         * ============================================================ */}
        <TabsContent value="transport">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">운송 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Transport mode and vessel */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>운송수단 구분</Label>
                  <Select defaultValue="sea">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sea">해상 (Sea)</SelectItem>
                      <SelectItem value="air">항공 (Air)</SelectItem>
                      <SelectItem value="land">육상 (Land)</SelectItem>
                      <SelectItem value="rail">철도 (Rail)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>선박명 / 항공편명</Label>
                  <Input defaultValue="EVER GOLDEN" />
                </div>
                <div className="space-y-2">
                  <Label>항차 / 편명</Label>
                  <Input defaultValue="V.025E" />
                </div>
              </div>

              <Separator />

              {/* B/L and containers */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>선하증권번호 (B/L No.)</Label>
                  <Input defaultValue="EGLV-TPE2026-003456" />
                </div>
                <div className="space-y-2">
                  <Label>컨테이너번호</Label>
                  <Textarea
                    defaultValue={
                      "EGLU2345678 / 20'GP\nEGLU3456789 / 20'GP\nEGLU4567890 / 40'HC"
                    }
                    className="min-h-20 font-mono text-sm"
                  />
                </div>
              </div>

              <Separator />

              {/* Ports and ETA */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>적출항 (선적항)</Label>
                  <Select defaultValue="TWKHH">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TWKHH">가오슝 (TWKHH)</SelectItem>
                      <SelectItem value="TWKEL">지룽 (TWKEL)</SelectItem>
                      <SelectItem value="CNSHA">상하이 (CNSHA)</SelectItem>
                      <SelectItem value="CNNGB">닝보 (CNNGB)</SelectItem>
                      <SelectItem value="JPYOK">요코하마 (JPYOK)</SelectItem>
                      <SelectItem value="JPKOB">고베 (JPKOB)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>양하항 (하역항)</Label>
                  <Select defaultValue="KRICN">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="KRICN">인천 (KRICN)</SelectItem>
                      <SelectItem value="KRPUS">부산 (KRPUS)</SelectItem>
                      <SelectItem value="KRINC">인천공항 (KRINC)</SelectItem>
                      <SelectItem value="KRPTK">평택 (KRPTK)</SelectItem>
                      <SelectItem value="KRKAN">광양 (KRKAN)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>입항예정일 (ETA)</Label>
                  <Input type="date" defaultValue="2026-02-22" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==============================================================
         * Tab 4: Valuation (과세가격)
         * ============================================================ */}
        <TabsContent value="valuation">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">과세가격 산출</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Invoice and currency */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label>결제통화</Label>
                  <Select defaultValue="USD">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">미국 달러 (USD)</SelectItem>
                      <SelectItem value="EUR">유로 (EUR)</SelectItem>
                      <SelectItem value="JPY">일본 엔 (JPY)</SelectItem>
                      <SelectItem value="CNY">중국 위안 (CNY)</SelectItem>
                      <SelectItem value="GBP">영국 파운드 (GBP)</SelectItem>
                      <SelectItem value="TWD">대만 달러 (TWD)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>송장금액 (Invoice Amount)</Label>
                  <Input
                    type="text"
                    defaultValue="487,500.00"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label>적용환율 (KRW/USD)</Label>
                  <Input
                    defaultValue="1,352.40"
                    readOnly
                    className="bg-muted text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label>원화환산 송장금액</Label>
                  <Input
                    defaultValue="659,295,000"
                    readOnly
                    className="bg-muted text-right"
                  />
                </div>
              </div>

              <Separator />

              {/* Additional costs */}
              <div>
                <h3 className="text-muted-foreground mb-3 text-sm font-medium">
                  가산요소
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <Label>운임 (Freight)</Label>
                    <Input
                      type="text"
                      defaultValue="8,200.00"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>보험료 (Insurance)</Label>
                    <Input
                      type="text"
                      defaultValue="975.00"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>기타비용 (Other Charges)</Label>
                    <Input
                      type="text"
                      defaultValue="0.00"
                      className="text-right"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* CIF value */}
              <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <Label className="font-semibold">CIF 가격 (USD)</Label>
                    <Input
                      defaultValue="496,675.00"
                      readOnly
                      className="bg-background text-right text-lg font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-semibold">CIF 가격 (KRW)</Label>
                    <Input
                      defaultValue="671,704,890"
                      readOnly
                      className="bg-background text-right text-lg font-bold"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Duty and tax calculation */}
              <div>
                <h3 className="text-muted-foreground mb-3 text-sm font-medium">
                  세액 산출
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label>관세율 (%)</Label>
                    <Input
                      type="text"
                      defaultValue="0"
                      className="text-right"
                    />
                    <p className="text-muted-foreground text-xs">
                      HS 8542.31 - 양허세율 0%
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>관세액 (KRW)</Label>
                    <Input
                      defaultValue="0"
                      readOnly
                      className="bg-muted text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>부가세 (VAT 10%)</Label>
                    <Input
                      defaultValue="67,170,489"
                      readOnly
                      className="bg-muted text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>교육세</Label>
                    <Input
                      defaultValue="0"
                      readOnly
                      className="bg-muted text-right"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Total payable */}
              <div className="bg-primary/10 border-primary/30 rounded-lg border p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      납부세액 합계
                    </p>
                    <p className="text-muted-foreground text-xs">
                      관세 + 부가세 + 교육세
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold tracking-tight">
                      67,170,489
                    </p>
                    <p className="text-muted-foreground text-sm">KRW (원)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==============================================================
         * Tab 5: Documents (첨부서류)
         * ============================================================ */}
        <TabsContent value="docs" className="space-y-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">첨부서류 목록</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12 text-center">번호</TableHead>
                      <TableHead className="w-64">서류종류</TableHead>
                      <TableHead>참조번호</TableHead>
                      <TableHead className="w-32">발행일</TableHead>
                      <TableHead className="w-24 text-center">
                        첨부상태
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documentItems.map((doc) => (
                      <TableRow key={doc.no}>
                        <TableCell className="text-center">{doc.no}</TableCell>
                        <TableCell>{doc.typeLabel}</TableCell>
                        <TableCell className="font-mono text-sm">
                          {doc.refNo || (
                            <span className="text-muted-foreground italic">
                              미입력
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          {doc.issueDate || (
                            <span className="text-muted-foreground italic">
                              -
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {doc.uploaded ? (
                            <Badge
                              variant="outline"
                              className="border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                            >
                              완료
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="border-red-300 bg-red-50 text-red-700 dark:border-red-700 dark:bg-red-950 dark:text-red-400"
                            >
                              미첨부
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Upload Area */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">서류 업로드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-muted-foreground/25 bg-muted/30 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 sm:p-10">
                <Upload className="text-muted-foreground mb-3 h-10 w-10" />
                <p className="text-sm font-medium">
                  파일을 드래그하여 업로드하거나
                </p>
                <p className="text-muted-foreground mb-4 text-xs">
                  PDF, JPG, PNG, TIFF (최대 10MB)
                </p>
                <Button variant="outline" size="sm">
                  <Upload className="mr-1.5 h-4 w-4" />
                  파일 선택
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Required Documents Checklist */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">필수서류 확인</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-emerald-600" />
                  <Checkbox checked disabled />
                  <span className="text-sm">상업송장 (Commercial Invoice)</span>
                  <Badge
                    variant="outline"
                    className="ml-auto border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400"
                  >
                    제출완료
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-emerald-600" />
                  <Checkbox checked disabled />
                  <span className="text-sm">포장명세서 (Packing List)</span>
                  <Badge
                    variant="outline"
                    className="ml-auto border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400"
                  >
                    제출완료
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-emerald-600" />
                  <Checkbox checked disabled />
                  <span className="text-sm">선하증권 (B/L)</span>
                  <Badge
                    variant="outline"
                    className="ml-auto border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400"
                  >
                    제출완료
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <FileX className="h-5 w-5 text-red-500" />
                  <Checkbox disabled />
                  <span className="text-sm">
                    원산지증명서 (Certificate of Origin)
                  </span>
                  <Badge
                    variant="outline"
                    className="ml-auto border-red-300 text-red-700 dark:border-red-700 dark:text-red-400"
                  >
                    미제출
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
