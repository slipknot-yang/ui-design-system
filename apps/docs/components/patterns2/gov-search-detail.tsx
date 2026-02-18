"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Input } from "@workspace/ui/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Separator } from "@workspace/ui/components/separator";
import {
  DateRangePicker,
  type DateRange,
} from "@workspace/ui/components/date-range-picker";
import {
  Search,
  RotateCcw,
  Download,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  FormGrid,
  FormGridRow,
  FormGridLabel,
  FormGridCell,
} from "./form-grid";

type DeclStatus = "통관완료" | "심사대기" | "심사중" | "반려" | "접수";
type DeclType = "수입" | "수출" | "환적";

interface DeclarationRow {
  declarationNo: string;
  type: DeclType;
  hsCode: string;
  goodsDescription: string;
  customsOffice: string;
  declarer: string;
  importer: string;
  cifValue: string;
  dutyRate: string;
  dutyAmount: string;
  status: DeclStatus;
  declarationDate: string;
  acceptDate: string;
  origin: string;
  weight: string;
  quantity: string;
  containerNo: string;
  blNo: string;
  vessel: string;
  portOfLoading: string;
  portOfDischarge: string;
}

const statusStyles: Record<DeclStatus, string> = {
  통관완료:
    "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400",
  심사대기:
    "bg-amber-500/15 text-amber-700 border-amber-500/25 dark:text-amber-400",
  심사중: "bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400",
  반려: "bg-red-500/15 text-red-700 border-red-500/25 dark:text-red-400",
  접수: "bg-violet-500/15 text-violet-700 border-violet-500/25 dark:text-violet-400",
};

const typeStyles: Record<DeclType, string> = {
  수입: "bg-sky-500/15 text-sky-700 border-sky-500/25 dark:text-sky-400",
  수출: "bg-teal-500/15 text-teal-700 border-teal-500/25 dark:text-teal-400",
  환적: "bg-purple-500/15 text-purple-700 border-purple-500/25 dark:text-purple-400",
};

const declarations: DeclarationRow[] = [
  {
    declarationNo: "D2026-ICN-00142",
    type: "수입",
    hsCode: "8471.30.0000",
    goodsDescription: "노트북 컴퓨터 (Laptop Computer)",
    customsOffice: "인천세관",
    declarer: "(주)글로벌무역",
    importer: "(주)테크솔루션",
    cifValue: "45,230,000",
    dutyRate: "0%",
    dutyAmount: "0",
    status: "통관완료",
    declarationDate: "2026-02-15",
    acceptDate: "2026-02-15",
    origin: "CN",
    weight: "150.00",
    quantity: "100",
    containerNo: "MSKU1234567",
    blNo: "HDMU-ICN-2026-0142",
    vessel: "HMM ALGECIRAS",
    portOfLoading: "CNSHA (Shanghai)",
    portOfDischarge: "KRICN (Incheon)",
  },
  {
    declarationNo: "D2026-BSN-00089",
    type: "수출",
    hsCode: "6109.10.0000",
    goodsDescription: "면 티셔츠 (Cotton T-shirt)",
    customsOffice: "부산세관",
    declarer: "(주)한국섬유",
    importer: "Global Textile Co., Ltd.",
    cifValue: "12,500,000",
    dutyRate: "13%",
    dutyAmount: "1,625,000",
    status: "심사대기",
    declarationDate: "2026-02-15",
    acceptDate: "",
    origin: "KR",
    weight: "2,500.00",
    quantity: "5,000",
    containerNo: "OOLU7654321",
    blNo: "HDMU-BSN-2026-0089",
    vessel: "EVER GIVEN",
    portOfLoading: "KRPUS (Busan)",
    portOfDischarge: "USLAX (Los Angeles)",
  },
  {
    declarationNo: "D2026-ICN-00138",
    type: "수입",
    hsCode: "2204.21.1000",
    goodsDescription: "프랑스산 적포도주 (French Red Wine)",
    customsOffice: "인천세관",
    declarer: "(주)와인코리아",
    importer: "(주)와인코리아",
    cifValue: "8,750,000",
    dutyRate: "15%",
    dutyAmount: "1,312,500",
    status: "심사중",
    declarationDate: "2026-02-14",
    acceptDate: "",
    origin: "FR",
    weight: "3,600.00",
    quantity: "1,200",
    containerNo: "CMAU9876543",
    blNo: "MAER-ICN-2026-0138",
    vessel: "MAERSK SENTOSA",
    portOfLoading: "FRLEH (Le Havre)",
    portOfDischarge: "KRICN (Incheon)",
  },
  {
    declarationNo: "D2026-SEL-00215",
    type: "수출",
    hsCode: "8517.12.0000",
    goodsDescription: "스마트폰 단말기 (Smartphone)",
    customsOffice: "서울세관",
    declarer: "삼성전자(주)",
    importer: "Samsung Electronics America",
    cifValue: "1,280,000,000",
    dutyRate: "0%",
    dutyAmount: "0",
    status: "통관완료",
    declarationDate: "2026-02-14",
    acceptDate: "2026-02-14",
    origin: "KR",
    weight: "5,000.00",
    quantity: "10,000",
    containerNo: "EISU1122334",
    blNo: "HDMU-SEL-2026-0215",
    vessel: "HMM COPENHAGEN",
    portOfLoading: "KRICN (Incheon)",
    portOfDischarge: "USLAX (Los Angeles)",
  },
  {
    declarationNo: "D2026-BSN-00084",
    type: "수입",
    hsCode: "3004.90.9000",
    goodsDescription: "의약품 - 항생제 (Antibiotics)",
    customsOffice: "부산세관",
    declarer: "(주)메디팜",
    importer: "(주)메디팜",
    cifValue: "23,100,000",
    dutyRate: "8%",
    dutyAmount: "1,848,000",
    status: "반려",
    declarationDate: "2026-02-13",
    acceptDate: "",
    origin: "DE",
    weight: "200.00",
    quantity: "500",
    containerNo: "HLBU5566778",
    blNo: "HLCU-BSN-2026-0084",
    vessel: "HAPAG HAMBURG",
    portOfLoading: "DEHAM (Hamburg)",
    portOfDischarge: "KRPUS (Busan)",
  },
  {
    declarationNo: "D2026-ICN-00131",
    type: "환적",
    hsCode: "8703.23.0000",
    goodsDescription: "승용자동차 (Passenger Cars, 1500-3000cc)",
    customsOffice: "인천세관",
    declarer: "현대자동차(주)",
    importer: "Hyundai Motor Europe GmbH",
    cifValue: "892,000,000",
    dutyRate: "8%",
    dutyAmount: "71,360,000",
    status: "통관완료",
    declarationDate: "2026-02-13",
    acceptDate: "2026-02-13",
    origin: "KR",
    weight: "45,000.00",
    quantity: "30",
    containerNo: "RORO-UNIT",
    blNo: "HDMU-ICN-2026-0131",
    vessel: "GLOVIS CAPTAIN",
    portOfLoading: "KRPTK (Pyeongtaek)",
    portOfDischarge: "NLRTM (Rotterdam)",
  },
  {
    declarationNo: "D2026-GMP-00047",
    type: "수입",
    hsCode: "0901.11.0000",
    goodsDescription: "커피 원두 (Coffee Beans, not roasted)",
    customsOffice: "김포세관",
    declarer: "(주)커피빈로스터스",
    importer: "(주)커피빈로스터스",
    cifValue: "5,320,000",
    dutyRate: "2%",
    dutyAmount: "106,400",
    status: "접수",
    declarationDate: "2026-02-12",
    acceptDate: "",
    origin: "ET",
    weight: "18,000.00",
    quantity: "300",
    containerNo: "MSCU3344556",
    blNo: "MSCU-GMP-2026-0047",
    vessel: "MSC ISABELLA",
    portOfLoading: "DJJIB (Djibouti)",
    portOfDischarge: "KRICN (Incheon)",
  },
  {
    declarationNo: "D2026-SEL-00208",
    type: "수출",
    hsCode: "3304.99.0000",
    goodsDescription: "화장품 스킨케어 세트 (Skincare Set)",
    customsOffice: "서울세관",
    declarer: "(주)아모레퍼시픽",
    importer: "Amore Pacific US Inc.",
    cifValue: "67,800,000",
    dutyRate: "6.5%",
    dutyAmount: "4,407,000",
    status: "통관완료",
    declarationDate: "2026-02-12",
    acceptDate: "2026-02-12",
    origin: "KR",
    weight: "1,200.00",
    quantity: "3,000",
    containerNo: "OOLU4455667",
    blNo: "OOCL-SEL-2026-0208",
    vessel: "OOCL HONG KONG",
    portOfLoading: "KRICN (Incheon)",
    portOfDischarge: "CNSHA (Shanghai)",
  },
  {
    declarationNo: "D2026-PTK-00033",
    type: "수입",
    hsCode: "7208.51.0000",
    goodsDescription: "열간압연 강판 (Hot-rolled steel plate)",
    customsOffice: "평택세관",
    declarer: "포스코인터내셔널(주)",
    importer: "포스코인터내셔널(주)",
    cifValue: "340,500,000",
    dutyRate: "0%",
    dutyAmount: "0",
    status: "심사중",
    declarationDate: "2026-02-11",
    acceptDate: "",
    origin: "JP",
    weight: "500,000.00",
    quantity: "1",
    containerNo: "BULK",
    blNo: "NYKK-PTK-2026-0033",
    vessel: "NYK VEGA",
    portOfLoading: "JPYOK (Yokohama)",
    portOfDischarge: "KRPTK (Pyeongtaek)",
  },
  {
    declarationNo: "D2026-ICN-00125",
    type: "수입",
    hsCode: "8541.40.0000",
    goodsDescription: "반도체 소자 - LED (Semiconductor LED)",
    customsOffice: "인천세관",
    declarer: "SK하이닉스(주)",
    importer: "SK하이닉스(주)",
    cifValue: "2,150,000,000",
    dutyRate: "0%",
    dutyAmount: "0",
    status: "통관완료",
    declarationDate: "2026-02-11",
    acceptDate: "2026-02-11",
    origin: "TW",
    weight: "500.00",
    quantity: "500,000",
    containerNo: "EISU7788990",
    blNo: "EVCL-ICN-2026-0125",
    vessel: "EVER ACE",
    portOfLoading: "TWKHH (Kaohsiung)",
    portOfDischarge: "KRICN (Incheon)",
  },
];

export function GovSearchDetail() {
  const [declNo, setDeclNo] = useState("");
  const [declType, setDeclType] = useState("all");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 1, 1),
    to: new Date(2026, 1, 16),
  });
  const [office, setOffice] = useState("all");
  const [status, setStatus] = useState("all");
  const [selectedRow, setSelectedRow] = useState<DeclarationRow | null>(null);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedRow && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedRow]);

  const filtered = useMemo(() => {
    const dateFrom = dateRange?.from
      ? dateRange.from.toISOString().slice(0, 10)
      : "";
    const dateTo = dateRange?.to ? dateRange.to.toISOString().slice(0, 10) : "";

    return declarations.filter((d) => {
      if (
        declNo &&
        !d.declarationNo.toLowerCase().includes(declNo.toLowerCase())
      )
        return false;
      if (declType !== "all" && d.type !== declType) return false;
      if (office !== "all" && d.customsOffice !== office) return false;
      if (status !== "all" && d.status !== status) return false;
      if (dateFrom && d.declarationDate < dateFrom) return false;
      if (dateTo && d.declarationDate > dateTo) return false;
      return true;
    });
  }, [declNo, declType, office, status, dateRange]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage,
  );

  function handleReset() {
    setDeclNo("");
    setDeclType("all");
    setDateRange({
      from: new Date(2026, 1, 1),
      to: new Date(2026, 1, 16),
    });
    setOffice("all");
    setStatus("all");
    setPage(0);
    setSelectedRow(null);
  }

  function handleSearch() {
    setPage(0);
  }

  function openDetail(row: DeclarationRow) {
    setSelectedRow(
      selectedRow?.declarationNo === row.declarationNo ? null : row,
    );
  }

  return (
    <div className="space-y-4">
      {/* Search Criteria - FormGrid */}
      <FormGrid>
        <FormGridRow>
          <FormGridLabel>Declaration No.</FormGridLabel>
          <FormGridCell>
            <Input
              placeholder="e.g. D2026-ICN-00142"
              value={declNo}
              onChange={(e) => setDeclNo(e.target.value)}
              className="h-8"
            />
          </FormGridCell>
          <FormGridLabel>Declaration Type</FormGridLabel>
          <FormGridCell>
            <Select value={declType} onValueChange={setDeclType}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="수입">Import</SelectItem>
                <SelectItem value="수출">Export</SelectItem>
                <SelectItem value="환적">Transit</SelectItem>
              </SelectContent>
            </Select>
          </FormGridCell>
        </FormGridRow>
        <FormGridRow>
          <FormGridLabel>Period</FormGridLabel>
          <FormGridCell>
            <DateRangePicker
              value={dateRange}
              onChange={setDateRange}
              numberOfMonths={2}
              className="h-8 text-sm"
              placeholder="Select period"
            />
          </FormGridCell>
          <FormGridLabel>Customs Office</FormGridLabel>
          <FormGridCell>
            <Select value={office} onValueChange={setOffice}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Offices</SelectItem>
                <SelectItem value="인천세관">Incheon</SelectItem>
                <SelectItem value="부산세관">Busan</SelectItem>
                <SelectItem value="서울세관">Seoul</SelectItem>
                <SelectItem value="김포세관">Gimpo</SelectItem>
                <SelectItem value="평택세관">Pyeongtaek</SelectItem>
              </SelectContent>
            </Select>
          </FormGridCell>
        </FormGridRow>
        <FormGridRow>
          <FormGridLabel>Status</FormGridLabel>
          <FormGridCell colSpan={3}>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="통관완료">Cleared</SelectItem>
                <SelectItem value="심사대기">Pending Review</SelectItem>
                <SelectItem value="심사중">Under Review</SelectItem>
                <SelectItem value="접수">Received</SelectItem>
                <SelectItem value="반려">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </FormGridCell>
        </FormGridRow>
      </FormGrid>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={handleReset}>
          <RotateCcw className="me-2 h-4 w-4" />
          Reset
        </Button>
        <Button size="sm" onClick={handleSearch}>
          <Search className="me-2 h-4 w-4" />
          Search
        </Button>
      </div>

      {/* Results Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Total{" "}
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{" "}
          results
        </p>
        <Button variant="outline" size="sm">
          <Download className="me-2 h-4 w-4" />
          Excel Download
        </Button>
      </div>

      {/* Full-bordered Result Table */}
      <div className="overflow-hidden rounded-lg border dark:border-foreground/15">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center w-[50px]">
                  No.
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  Declaration No.
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center w-[80px]">
                  Type
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  HS Code
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  Goods Description
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  Customs Office
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  Declarer
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  CIF Value (KRW)
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  Status
                </TableHead>
                <TableHead className="border dark:border-foreground/15 bg-muted font-medium text-center">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={10}
                    className="border dark:border-foreground/15 h-24 text-center text-muted-foreground"
                  >
                    No data available
                  </TableCell>
                </TableRow>
              ) : (
                paginated.map((row, idx) => (
                  <TableRow
                    key={row.declarationNo}
                    className={`hover:bg-muted/50 cursor-pointer ${selectedRow?.declarationNo === row.declarationNo ? "bg-primary/5" : ""}`}
                    onClick={() => openDetail(row)}
                  >
                    <TableCell className="border dark:border-foreground/15 text-center text-muted-foreground">
                      {page * rowsPerPage + idx + 1}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 font-mono text-xs font-medium text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary">
                      {row.declarationNo}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 text-center">
                      <Badge className={typeStyles[row.type]}>{row.type}</Badge>
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 text-center font-mono text-sm">
                      {row.hsCode}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15">
                      {row.goodsDescription}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 text-center">
                      {row.customsOffice}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15">
                      {row.declarer}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 text-end font-mono">
                      {row.cifValue}
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 text-center">
                      <Badge className={statusStyles[row.status]}>
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="border dark:border-foreground/15 text-center text-muted-foreground">
                      {row.declarationDate}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-xs">
          Page {page + 1} of {totalPages || 1}
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            disabled={page === 0}
            onClick={() => setPage(0)}
          >
            <ChevronFirst className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => p + 1)}
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            disabled={page >= totalPages - 1}
            onClick={() => setPage(totalPages - 1)}
          >
            <ChevronLast className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Inline Detail Panel (below table) */}
      {selectedRow && (
        <div
          ref={detailRef}
          className="rounded-lg border dark:border-foreground/15 bg-background"
        >
          {/* Detail Header */}
          <div className="flex items-center justify-between border-b dark:border-foreground/15 bg-muted/50 px-4 py-3">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold">Declaration Detail</h3>
              <span className="font-mono text-sm text-primary font-medium">
                {selectedRow.declarationNo}
              </span>
              <Badge className={typeStyles[selectedRow.type]}>
                {selectedRow.type}
              </Badge>
              <Badge className={statusStyles[selectedRow.status]}>
                {selectedRow.status}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setSelectedRow(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Detail Body */}
          <div className="p-4 space-y-4">
            {/* Basic Info */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Basic Information
              </h4>
              <FormGrid columns={4}>
                <FormGridRow>
                  <FormGridLabel>Declaration No.</FormGridLabel>
                  <FormGridCell readOnly>
                    <span className="font-mono text-sm font-medium">
                      {selectedRow.declarationNo}
                    </span>
                  </FormGridCell>
                  <FormGridLabel>Declaration Type</FormGridLabel>
                  <FormGridCell readOnly>
                    <Badge className={typeStyles[selectedRow.type]}>
                      {selectedRow.type}
                    </Badge>
                  </FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Status</FormGridLabel>
                  <FormGridCell readOnly>
                    <Badge className={statusStyles[selectedRow.status]}>
                      {selectedRow.status}
                    </Badge>
                  </FormGridCell>
                  <FormGridLabel>Customs Office</FormGridLabel>
                  <FormGridCell readOnly>
                    {selectedRow.customsOffice}
                  </FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Declaration Date</FormGridLabel>
                  <FormGridCell readOnly>
                    {selectedRow.declarationDate}
                  </FormGridCell>
                  <FormGridLabel>Accept Date</FormGridLabel>
                  <FormGridCell readOnly>
                    {selectedRow.acceptDate || "-"}
                  </FormGridCell>
                </FormGridRow>
              </FormGrid>
            </div>

            <Separator />

            {/* Parties */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Parties
              </h4>
              <FormGrid columns={4}>
                <FormGridRow>
                  <FormGridLabel>Declarer</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.declarer}</FormGridCell>
                  <FormGridLabel>Importer / Buyer</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.importer}</FormGridCell>
                </FormGridRow>
              </FormGrid>
            </div>

            <Separator />

            {/* Goods Info */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Goods Information
              </h4>
              <FormGrid columns={4}>
                <FormGridRow>
                  <FormGridLabel>HS Code</FormGridLabel>
                  <FormGridCell readOnly>
                    <span className="font-mono">{selectedRow.hsCode}</span>
                  </FormGridCell>
                  <FormGridLabel>Origin</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.origin}</FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Description</FormGridLabel>
                  <FormGridCell readOnly colSpan={3}>
                    {selectedRow.goodsDescription}
                  </FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Quantity</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.quantity}</FormGridCell>
                  <FormGridLabel>Weight (kg)</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.weight}</FormGridCell>
                </FormGridRow>
              </FormGrid>
            </div>

            <Separator />

            {/* Valuation & Duty */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Valuation & Duty
              </h4>
              <FormGrid columns={4}>
                <FormGridRow>
                  <FormGridLabel>CIF Value (KRW)</FormGridLabel>
                  <FormGridCell readOnly>
                    <span className="font-mono">{selectedRow.cifValue}</span>
                  </FormGridCell>
                  <FormGridLabel>Duty Rate</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.dutyRate}</FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Duty Amount (KRW)</FormGridLabel>
                  <FormGridCell readOnly>
                    <span className="font-mono">{selectedRow.dutyAmount}</span>
                  </FormGridCell>
                  <FormGridLabel />
                  <FormGridCell readOnly />
                </FormGridRow>
              </FormGrid>
            </div>

            <Separator />

            {/* Transport */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Transport
              </h4>
              <FormGrid columns={4}>
                <FormGridRow>
                  <FormGridLabel>B/L No.</FormGridLabel>
                  <FormGridCell readOnly>
                    <span className="font-mono text-xs">
                      {selectedRow.blNo}
                    </span>
                  </FormGridCell>
                  <FormGridLabel>Container No.</FormGridLabel>
                  <FormGridCell readOnly>
                    <span className="font-mono text-xs">
                      {selectedRow.containerNo}
                    </span>
                  </FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Vessel</FormGridLabel>
                  <FormGridCell readOnly>{selectedRow.vessel}</FormGridCell>
                  <FormGridLabel>Port of Loading</FormGridLabel>
                  <FormGridCell readOnly>
                    {selectedRow.portOfLoading}
                  </FormGridCell>
                </FormGridRow>
                <FormGridRow>
                  <FormGridLabel>Port of Discharge</FormGridLabel>
                  <FormGridCell readOnly>
                    {selectedRow.portOfDischarge}
                  </FormGridCell>
                  <FormGridLabel />
                  <FormGridCell readOnly />
                </FormGridRow>
              </FormGrid>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
