import { useTranslations } from "next-intl";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";
import { Search, Download, RotateCcw } from "lucide-react";

// ---------------------------------------------------------------------------
// Domain data -- realistic Korean customs declaration records
// ---------------------------------------------------------------------------

interface DeclarationRow {
  no: number;
  declarationNo: string;
  type: "수입" | "수출" | "환적";
  hsCode: string;
  goodsDescription: string;
  customsOffice: string;
  declarer: string;
  amount: string;
  status: "통관완료" | "심사대기" | "심사중" | "반려";
  date: string;
}

const declarations: DeclarationRow[] = [
  {
    no: 1,
    declarationNo: "D2026-ICN-00142",
    type: "수입",
    hsCode: "8471.30.0000",
    goodsDescription: "노트북 컴퓨터",
    customsOffice: "인천세관",
    declarer: "(주)글로벌무역",
    amount: "45,230,000",
    status: "통관완료",
    date: "2026-02-15",
  },
  {
    no: 2,
    declarationNo: "D2026-BSN-00089",
    type: "수출",
    hsCode: "6109.10.0000",
    goodsDescription: "면 티셔츠",
    customsOffice: "부산세관",
    declarer: "(주)한국섬유",
    amount: "12,500,000",
    status: "심사대기",
    date: "2026-02-15",
  },
  {
    no: 3,
    declarationNo: "D2026-ICN-00138",
    type: "수입",
    hsCode: "2204.21.1000",
    goodsDescription: "프랑스산 적포도주",
    customsOffice: "인천세관",
    declarer: "(주)와인코리아",
    amount: "8,750,000",
    status: "심사중",
    date: "2026-02-14",
  },
  {
    no: 4,
    declarationNo: "D2026-SEL-00215",
    type: "수출",
    hsCode: "8517.12.0000",
    goodsDescription: "스마트폰 단말기",
    customsOffice: "서울세관",
    declarer: "삼성전자(주)",
    amount: "1,280,000,000",
    status: "통관완료",
    date: "2026-02-14",
  },
  {
    no: 5,
    declarationNo: "D2026-BSN-00084",
    type: "수입",
    hsCode: "3004.90.9000",
    goodsDescription: "의약품 (항생제)",
    customsOffice: "부산세관",
    declarer: "(주)메디팜",
    amount: "23,100,000",
    status: "반려",
    date: "2026-02-13",
  },
  {
    no: 6,
    declarationNo: "D2026-ICN-00131",
    type: "환적",
    hsCode: "8703.23.0000",
    goodsDescription: "승용자동차 (1,500cc~3,000cc)",
    customsOffice: "인천세관",
    declarer: "현대자동차(주)",
    amount: "892,000,000",
    status: "통관완료",
    date: "2026-02-13",
  },
  {
    no: 7,
    declarationNo: "D2026-GMP-00047",
    type: "수입",
    hsCode: "0901.11.0000",
    goodsDescription: "커피 원두 (로스팅 전)",
    customsOffice: "김포세관",
    declarer: "(주)커피빈로스터스",
    amount: "5,320,000",
    status: "심사대기",
    date: "2026-02-12",
  },
  {
    no: 8,
    declarationNo: "D2026-SEL-00208",
    type: "수출",
    hsCode: "3304.99.0000",
    goodsDescription: "화장품 (스킨케어 세트)",
    customsOffice: "서울세관",
    declarer: "(주)아모레퍼시픽",
    amount: "67,800,000",
    status: "통관완료",
    date: "2026-02-12",
  },
  {
    no: 9,
    declarationNo: "D2026-BSN-00076",
    type: "수입",
    hsCode: "7208.51.0000",
    goodsDescription: "열간압연 강판",
    customsOffice: "부산세관",
    declarer: "포스코인터내셔널(주)",
    amount: "340,500,000",
    status: "심사중",
    date: "2026-02-11",
  },
  {
    no: 10,
    declarationNo: "D2026-ICN-00125",
    type: "수입",
    hsCode: "8541.40.0000",
    goodsDescription: "반도체 소자 (LED)",
    customsOffice: "인천세관",
    declarer: "SK하이닉스(주)",
    amount: "2,150,000,000",
    status: "통관완료",
    date: "2026-02-11",
  },
];

// ---------------------------------------------------------------------------
// Status badge styling helper
// ---------------------------------------------------------------------------

function statusBadge(status: DeclarationRow["status"]) {
  switch (status) {
    case "통관완료":
      return (
        <Badge className="bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400">
          {status}
        </Badge>
      );
    case "심사대기":
      return (
        <Badge className="bg-amber-500/15 text-amber-700 border-amber-500/25 dark:text-amber-400">
          {status}
        </Badge>
      );
    case "심사중":
      return (
        <Badge className="bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400">
          {status}
        </Badge>
      );
    case "반려":
      return <Badge variant="destructive">{status}</Badge>;
  }
}

// ---------------------------------------------------------------------------
// Declaration type badge
// ---------------------------------------------------------------------------

function typeBadge(type: DeclarationRow["type"]) {
  switch (type) {
    case "수입":
      return <Badge variant="default">{type}</Badge>;
    case "수출":
      return <Badge variant="secondary">{type}</Badge>;
    case "환적":
      return <Badge variant="outline">{type}</Badge>;
  }
}

// ---------------------------------------------------------------------------
// Page component (Server Component)
// ---------------------------------------------------------------------------

export default function SearchTablePage(): React.JSX.Element {
  const t = useTranslations("patterns");

  return (
    <div className="space-y-6">
      {/* ----------------------------------------------------------------- */}
      {/* Page Header                                                        */}
      {/* ----------------------------------------------------------------- */}
      <div className="space-y-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">포털</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">수출입신고</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>신고서 조회</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold tracking-tight">신고서 조회</h1>
        <p className="text-sm text-muted-foreground">
          수출입 신고서를 조건별로 조회하고 처리 현황을 확인합니다.
        </p>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Search Panel                                                       */}
      {/* ----------------------------------------------------------------- */}
      <Card>
        <CardContent className="pt-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Declaration No. */}
            <div className="space-y-2">
              <Label htmlFor="search-decl-no">신고번호</Label>
              <Input id="search-decl-no" placeholder="예: D2026-ICN-00142" />
            </div>

            {/* Declaration Type */}
            <div className="space-y-2">
              <Label>신고유형</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="import">수입</SelectItem>
                  <SelectItem value="export">수출</SelectItem>
                  <SelectItem value="transit">환적</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Range */}
            <div className="space-y-2">
              <Label>신고일자</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="date"
                  defaultValue="2026-02-01"
                  className="flex-1"
                />
                <span className="text-muted-foreground text-sm shrink-0">
                  ~
                </span>
                <Input
                  type="date"
                  defaultValue="2026-02-16"
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Customs Office */}
            <div className="space-y-2">
              <Label>관할세관</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="incheon">인천세관</SelectItem>
                  <SelectItem value="busan">부산세관</SelectItem>
                  <SelectItem value="seoul">서울세관</SelectItem>
                  <SelectItem value="gimpo">김포세관</SelectItem>
                  <SelectItem value="pyeongtaek">평택세관</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label>처리상태</Label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="cleared">통관완료</SelectItem>
                  <SelectItem value="pending">심사대기</SelectItem>
                  <SelectItem value="review">심사중</SelectItem>
                  <SelectItem value="rejected">반려</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Declarer / Importer */}
            <div className="space-y-2">
              <Label htmlFor="search-declarer">신고인/수입자</Label>
              <Input
                id="search-declarer"
                placeholder="업체명 또는 사업자등록번호"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              초기화
            </Button>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              조회
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ----------------------------------------------------------------- */}
      {/* Results Toolbar                                                    */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          총 <span className="font-semibold text-foreground">1,247</span> 건
        </p>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          엑셀 다운로드
        </Button>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Data Table                                                         */}
      {/* ----------------------------------------------------------------- */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-center">No.</TableHead>
              <TableHead className="min-w-[170px]">신고번호</TableHead>
              <TableHead className="w-[80px] text-center">유형</TableHead>
              <TableHead className="min-w-[130px]">HS Code</TableHead>
              <TableHead className="min-w-[200px]">품명</TableHead>
              <TableHead className="min-w-[100px]">관할세관</TableHead>
              <TableHead className="min-w-[160px]">신고인</TableHead>
              <TableHead className="min-w-[140px] text-right">
                신고금액 (KRW)
              </TableHead>
              <TableHead className="w-[100px] text-center">상태</TableHead>
              <TableHead className="w-[110px] text-center">신고일자</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {declarations.map((row) => (
              <TableRow key={row.declarationNo}>
                <TableCell className="text-center text-muted-foreground">
                  {row.no}
                </TableCell>
                <TableCell className="font-medium">
                  <a href="#" className="text-primary hover:underline">
                    {row.declarationNo}
                  </a>
                </TableCell>
                <TableCell className="text-center">
                  {typeBadge(row.type)}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {row.hsCode}
                </TableCell>
                <TableCell>{row.goodsDescription}</TableCell>
                <TableCell>{row.customsOffice}</TableCell>
                <TableCell>{row.declarer}</TableCell>
                <TableCell className="text-right font-mono">
                  {row.amount}
                </TableCell>
                <TableCell className="text-center">
                  {statusBadge(row.status)}
                </TableCell>
                <TableCell className="text-center text-muted-foreground">
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* ----------------------------------------------------------------- */}
      {/* Pagination                                                         */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">1 - 10 / 1,247 건</p>
        <Pagination className="mx-0 w-auto">
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
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">125</PaginationLink>
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
