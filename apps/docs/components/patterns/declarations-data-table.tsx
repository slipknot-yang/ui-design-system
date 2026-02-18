"use client";

import { useState, useMemo } from "react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Card, CardContent } from "@workspace/ui/components/card";
import { DateRangePicker } from "@workspace/ui/components/date-range-picker";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Search,
  RotateCcw,
  Download,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

type DeclStatus = "통관완료" | "심사대기" | "심사중" | "반려";
type DeclType = "수입" | "수출" | "환적";

interface DeclarationRow {
  no: number;
  declarationNo: string;
  type: DeclType;
  hsCode: string;
  goodsDescription: string;
  customsOffice: string;
  declarer: string;
  amount: string;
  status: DeclStatus;
  date: string;
}

const statusStyles: Record<DeclStatus, string> = {
  통관완료:
    "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400",
  심사대기:
    "bg-amber-500/15 text-amber-700 border-amber-500/25 dark:text-amber-400",
  심사중: "bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400",
  반려: "bg-red-500/15 text-red-700 border-red-500/25 dark:text-red-400",
};

const typeStyles: Record<DeclType, string> = {
  수입: "bg-sky-500/15 text-sky-700 border-sky-500/25 dark:text-sky-400",
  수출: "bg-teal-500/15 text-teal-700 border-teal-500/25 dark:text-teal-400",
  환적: "bg-purple-500/15 text-purple-700 border-purple-500/25 dark:text-purple-400",
};

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

type SortField = "declarationNo" | "date" | "amount" | "status";
type SortDir = "asc" | "desc";

export function DeclarationsDataTable() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!searchQuery) return declarations;
    const q = searchQuery.toLowerCase();
    return declarations.filter(
      (d) =>
        d.declarationNo.toLowerCase().includes(q) ||
        d.goodsDescription.includes(searchQuery) ||
        d.declarer.includes(searchQuery) ||
        d.hsCode.includes(q),
    );
  }, [searchQuery]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      if (sortField === "date") return dir * a.date.localeCompare(b.date);
      if (sortField === "declarationNo")
        return dir * a.declarationNo.localeCompare(b.declarationNo);
      if (sortField === "amount") {
        const aNum = parseInt(a.amount.replace(/,/g, ""), 10);
        const bNum = parseInt(b.amount.replace(/,/g, ""), 10);
        return dir * (aNum - bNum);
      }
      if (sortField === "status") return dir * a.status.localeCompare(b.status);
      return 0;
    });
  }, [filtered, sortField, sortDir]);

  const totalPages = Math.ceil(sorted.length / rowsPerPage);
  const paginated = sorted.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const allPageSelected =
    paginated.length > 0 &&
    paginated.every((d) => selected.has(d.declarationNo));

  function toggleSort(field: SortField) {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortField(field);
      setSortDir("asc");
    }
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field)
      return (
        <ArrowUpDown className="ms-1 h-3.5 w-3.5 text-muted-foreground/50" />
      );
    return sortDir === "asc" ? (
      <ArrowUp className="ms-1 h-3.5 w-3.5" />
    ) : (
      <ArrowDown className="ms-1 h-3.5 w-3.5" />
    );
  }

  return (
    <div className="space-y-4">
      {/* Collapsible Search Panel */}
      <Collapsible open={searchOpen} onOpenChange={setSearchOpen}>
        <div className="flex items-center justify-between">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Open Filters
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${searchOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute start-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Quick search..."
                className="ps-8 w-[250px]"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(0);
                }}
              />
            </div>
          </div>
        </div>

        <CollapsibleContent className="pt-3">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>Declaration No.</Label>
                  <Input placeholder="D2026-XXX-XXXXX" />
                </div>
                <div className="space-y-2">
                  <Label>Declaration Type</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="import">Import (수입)</SelectItem>
                      <SelectItem value="export">Export (수출)</SelectItem>
                      <SelectItem value="transit">Transit (환적)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <DateRangePicker
                    value={{
                      from: new Date(2026, 1, 1),
                      to: new Date(2026, 1, 16),
                    }}
                    numberOfMonths={2}
                    className="w-full"
                    placeholder="Select date range"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Customs Office</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Offices</SelectItem>
                      <SelectItem value="incheon">인천세관</SelectItem>
                      <SelectItem value="busan">부산세관</SelectItem>
                      <SelectItem value="seoul">서울세관</SelectItem>
                      <SelectItem value="gimpo">김포세관</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="cleared">통관완료</SelectItem>
                      <SelectItem value="pending">심사대기</SelectItem>
                      <SelectItem value="review">심사중</SelectItem>
                      <SelectItem value="rejected">반려</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Declarer</Label>
                  <Input placeholder="Company name or registration no." />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <RotateCcw className="me-2 h-4 w-4" />
                  Reset
                </Button>
                <Button size="sm">
                  <Search className="me-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Results Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {selected.size > 0 ? (
            <span>
              {selected.size} of {sorted.length} row(s) selected
            </span>
          ) : (
            <>
              Total{" "}
              <span className="font-semibold text-foreground">
                {sorted.length}
              </span>{" "}
              results
            </>
          )}
        </p>
        <div className="flex gap-2">
          {selected.size > 0 && (
            <Button variant="outline" size="sm">
              Bulk Action ({selected.size})
            </Button>
          )}
          <Button variant="outline" size="sm">
            <Download className="me-2 h-4 w-4" />
            Excel Download
          </Button>
        </div>
      </div>

      {/* DataTable */}
      <div className="overflow-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox
                    checked={allPageSelected}
                    onCheckedChange={() => {
                      if (allPageSelected) setSelected(new Set());
                      else
                        setSelected(
                          new Set(paginated.map((d) => d.declarationNo)),
                        );
                    }}
                  />
                </TableHead>
                <TableHead className="w-[60px] text-center">No.</TableHead>
                <TableHead>
                  <button
                    onClick={() => toggleSort("declarationNo")}
                    className="inline-flex items-center font-medium"
                  >
                    Declaration No.
                    <SortIcon field="declarationNo" />
                  </button>
                </TableHead>
                <TableHead className="w-[80px] text-center">Type</TableHead>
                <TableHead>HS Code</TableHead>
                <TableHead>Goods Description</TableHead>
                <TableHead>Office</TableHead>
                <TableHead>Declarer</TableHead>
                <TableHead className="text-right">
                  <button
                    onClick={() => toggleSort("amount")}
                    className="inline-flex items-center font-medium"
                  >
                    CIF Value (KRW)
                    <SortIcon field="amount" />
                  </button>
                </TableHead>
                <TableHead className="text-center">
                  <button
                    onClick={() => toggleSort("status")}
                    className="inline-flex items-center font-medium"
                  >
                    Status
                    <SortIcon field="status" />
                  </button>
                </TableHead>
                <TableHead>
                  <button
                    onClick={() => toggleSort("date")}
                    className="inline-flex items-center font-medium"
                  >
                    Date
                    <SortIcon field="date" />
                  </button>
                </TableHead>
                <TableHead className="w-10">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.map((row) => (
                <TableRow
                  key={row.declarationNo}
                  data-state={
                    selected.has(row.declarationNo) ? "selected" : undefined
                  }
                >
                  <TableCell>
                    <Checkbox
                      checked={selected.has(row.declarationNo)}
                      onCheckedChange={() => {
                        const next = new Set(selected);
                        if (next.has(row.declarationNo))
                          next.delete(row.declarationNo);
                        else next.add(row.declarationNo);
                        setSelected(next);
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    {row.no}
                  </TableCell>
                  <TableCell className="font-mono text-xs font-medium text-primary">
                    {row.declarationNo}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={typeStyles[row.type]}>{row.type}</Badge>
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
                    <Badge className={statusStyles[row.status]}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.date}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="me-2 h-3.5 w-3.5" />
                          View Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="me-2 h-3.5 w-3.5" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="me-2 h-3.5 w-3.5" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs">Rows per page</span>
          <Select
            value={String(rowsPerPage)}
            onValueChange={(v) => {
              setRowsPerPage(Number(v));
              setPage(0);
            }}
          >
            <SelectTrigger className="h-7 w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
          <span className="text-muted-foreground px-2 text-xs">
            {page + 1} / {totalPages || 1}
          </span>
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
    </div>
  );
}
