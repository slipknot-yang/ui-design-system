"use client";

import { useState, useMemo } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Badge } from "@workspace/ui/components/badge";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Card } from "@workspace/ui/components/card";
import { Label } from "@workspace/ui/components/label";
import {
  Search,
  X,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Filter,
  ChevronDown,
  Download,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";

type Status = "Cleared" | "Pending" | "Under Review" | "Rejected";
type DeclType = "Import" | "Export" | "Transit";

interface Declaration {
  id: string;
  declarationNo: string;
  type: DeclType;
  hsCode: string;
  importer: string;
  exporter: string;
  country: string;
  office: string;
  status: Status;
  amount: string;
  weight: string;
  date: string;
}

const statusStyles: Record<Status, string> = {
  Cleared:
    "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400",
  Pending:
    "bg-amber-500/15 text-amber-700 border-amber-500/25 dark:text-amber-400",
  "Under Review":
    "bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400",
  Rejected: "bg-red-500/15 text-red-700 border-red-500/25 dark:text-red-400",
};

const typeStyles: Record<DeclType, string> = {
  Import: "bg-sky-500/15 text-sky-700 border-sky-500/25 dark:text-sky-400",
  Export: "bg-teal-500/15 text-teal-700 border-teal-500/25 dark:text-teal-400",
  Transit:
    "bg-purple-500/15 text-purple-700 border-purple-500/25 dark:text-purple-400",
};

const allStatuses: Status[] = [
  "Cleared",
  "Pending",
  "Under Review",
  "Rejected",
];
const allTypes: DeclType[] = ["Import", "Export", "Transit"];
const allOffices = ["Incheon", "Busan", "Seoul", "Gimpo", "Pyeongtaek"];

const sampleData: Declaration[] = [
  {
    id: "1",
    declarationNo: "E2026-1001-00112",
    type: "Import",
    hsCode: "8471.30-0000",
    importer: "Samsung Electronics",
    exporter: "TSMC Ltd.",
    country: "Taiwan",
    office: "Incheon",
    status: "Cleared",
    amount: "$234,500",
    weight: "1,200 kg",
    date: "2026-02-16",
  },
  {
    id: "2",
    declarationNo: "E2026-1002-00223",
    type: "Export",
    hsCode: "6109.10-0000",
    importer: "Lotte Corporation",
    exporter: "Zara International",
    country: "Spain",
    office: "Busan",
    status: "Pending",
    amount: "$18,900",
    weight: "450 kg",
    date: "2026-02-16",
  },
  {
    id: "3",
    declarationNo: "E2026-1003-00334",
    type: "Import",
    hsCode: "2204.21-0000",
    importer: "Shilla Duty Free",
    exporter: "Chateau Margaux",
    country: "France",
    office: "Seoul",
    status: "Under Review",
    amount: "$56,780",
    weight: "2,800 kg",
    date: "2026-02-15",
  },
  {
    id: "4",
    declarationNo: "E2026-1004-00445",
    type: "Transit",
    hsCode: "8703.23-0000",
    importer: "Hyundai Motor",
    exporter: "BMW AG",
    country: "Germany",
    office: "Incheon",
    status: "Cleared",
    amount: "$892,000",
    weight: "14,500 kg",
    date: "2026-02-15",
  },
  {
    id: "5",
    declarationNo: "E2026-1005-00556",
    type: "Import",
    hsCode: "3004.90-9000",
    importer: "MediPharm Inc.",
    exporter: "Pfizer Inc.",
    country: "United States",
    office: "Gimpo",
    status: "Rejected",
    amount: "$123,400",
    weight: "320 kg",
    date: "2026-02-14",
  },
  {
    id: "6",
    declarationNo: "E2026-1006-00667",
    type: "Export",
    hsCode: "8517.12-0000",
    importer: "Apple Inc.",
    exporter: "Samsung Electronics",
    country: "United States",
    office: "Incheon",
    status: "Cleared",
    amount: "$1,280,000",
    weight: "5,600 kg",
    date: "2026-02-14",
  },
  {
    id: "7",
    declarationNo: "E2026-1007-00778",
    type: "Import",
    hsCode: "0901.11-0000",
    importer: "Starbucks Korea",
    exporter: "Ethiopian Coffee Co.",
    country: "Ethiopia",
    office: "Busan",
    status: "Pending",
    amount: "$45,200",
    weight: "8,000 kg",
    date: "2026-02-13",
  },
  {
    id: "8",
    declarationNo: "E2026-1008-00889",
    type: "Import",
    hsCode: "3304.99-0000",
    importer: "AmorePacific",
    exporter: "L'Oreal",
    country: "France",
    office: "Seoul",
    status: "Cleared",
    amount: "$67,800",
    weight: "1,100 kg",
    date: "2026-02-13",
  },
  {
    id: "9",
    declarationNo: "E2026-1009-00990",
    type: "Export",
    hsCode: "7208.51-0000",
    importer: "ThyssenKrupp",
    exporter: "POSCO",
    country: "Germany",
    office: "Busan",
    status: "Under Review",
    amount: "$340,500",
    weight: "52,000 kg",
    date: "2026-02-12",
  },
  {
    id: "10",
    declarationNo: "E2026-1010-01101",
    type: "Import",
    hsCode: "8541.40-0000",
    importer: "SK Hynix",
    exporter: "Intel Corp.",
    country: "United States",
    office: "Incheon",
    status: "Cleared",
    amount: "$2,150,000",
    weight: "780 kg",
    date: "2026-02-12",
  },
  {
    id: "11",
    declarationNo: "E2026-1011-01212",
    type: "Transit",
    hsCode: "2710.12-0000",
    importer: "GS Caltex",
    exporter: "Saudi Aramco",
    country: "Saudi Arabia",
    office: "Pyeongtaek",
    status: "Pending",
    amount: "$5,400,000",
    weight: "120,000 kg",
    date: "2026-02-11",
  },
  {
    id: "12",
    declarationNo: "E2026-1012-01323",
    type: "Import",
    hsCode: "6204.62-0000",
    importer: "Kolon FnC",
    exporter: "H&M Sweden",
    country: "Sweden",
    office: "Incheon",
    status: "Cleared",
    amount: "$32,100",
    weight: "600 kg",
    date: "2026-02-11",
  },
  {
    id: "13",
    declarationNo: "E2026-1013-01434",
    type: "Export",
    hsCode: "8542.31-0000",
    importer: "NVIDIA",
    exporter: "Samsung Semicon.",
    country: "United States",
    office: "Incheon",
    status: "Cleared",
    amount: "$4,500,000",
    weight: "120 kg",
    date: "2026-02-10",
  },
  {
    id: "14",
    declarationNo: "E2026-1014-01545",
    type: "Import",
    hsCode: "4011.10-0000",
    importer: "Hankook Tire",
    exporter: "Continental AG",
    country: "Germany",
    office: "Busan",
    status: "Under Review",
    amount: "$78,900",
    weight: "6,200 kg",
    date: "2026-02-10",
  },
  {
    id: "15",
    declarationNo: "E2026-1015-01656",
    type: "Import",
    hsCode: "8471.49-0000",
    importer: "LG Electronics",
    exporter: "Foxconn",
    country: "China",
    office: "Incheon",
    status: "Pending",
    amount: "$156,000",
    weight: "2,400 kg",
    date: "2026-02-09",
  },
];

type SortField = "declarationNo" | "date" | "amount" | "status";
type SortDir = "asc" | "desc";

export function AdvancedSearchTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilters, setStatusFilters] = useState<Set<Status>>(new Set());
  const [typeFilters, setTypeFilters] = useState<Set<DeclType>>(new Set());
  const [officeFilters, setOfficeFilters] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    let data = sampleData;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data = data.filter(
        (d) =>
          d.declarationNo.toLowerCase().includes(q) ||
          d.importer.toLowerCase().includes(q) ||
          d.exporter.toLowerCase().includes(q) ||
          d.hsCode.includes(q),
      );
    }
    if (statusFilters.size > 0)
      data = data.filter((d) => statusFilters.has(d.status));
    if (typeFilters.size > 0)
      data = data.filter((d) => typeFilters.has(d.type));
    if (officeFilters.size > 0)
      data = data.filter((d) => officeFilters.has(d.office));
    return data;
  }, [searchQuery, statusFilters, typeFilters, officeFilters]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      if (sortField === "date") return dir * a.date.localeCompare(b.date);
      if (sortField === "declarationNo")
        return dir * a.declarationNo.localeCompare(b.declarationNo);
      if (sortField === "amount") {
        const aNum = parseFloat(a.amount.replace(/[$,]/g, ""));
        const bNum = parseFloat(b.amount.replace(/[$,]/g, ""));
        return dir * (aNum - bNum);
      }
      if (sortField === "status") return dir * a.status.localeCompare(b.status);
      return 0;
    });
  }, [filtered, sortField, sortDir]);

  const totalPages = Math.ceil(sorted.length / rowsPerPage);
  const paginated = sorted.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const allPageSelected =
    paginated.length > 0 && paginated.every((d) => selected.has(d.id));

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
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

  function toggleFilter<T>(set: Set<T>, val: T, setter: (s: Set<T>) => void) {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setter(next);
    setPage(0);
  }

  const hasActiveFilters =
    statusFilters.size > 0 || typeFilters.size > 0 || officeFilters.size > 0;

  function clearAllFilters() {
    setStatusFilters(new Set());
    setTypeFilters(new Set());
    setOfficeFilters(new Set());
    setSearchQuery("");
    setPage(0);
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute start-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by declaration no, importer, HS code..."
            className="ps-8"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
          />
        </div>

        {/* Status Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Filter className="h-3.5 w-3.5" />
              Status
              {statusFilters.size > 0 && (
                <Badge
                  variant="secondary"
                  className="ms-1 px-1.5 py-0 text-[10px]"
                >
                  {statusFilters.size}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2" align="start">
            {allStatuses.map((s) => (
              <button
                key={s}
                onClick={() => toggleFilter(statusFilters, s, setStatusFilters)}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                <Checkbox checked={statusFilters.has(s)} />
                <Badge className={statusStyles[s]}>{s}</Badge>
              </button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Type Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Filter className="h-3.5 w-3.5" />
              Type
              {typeFilters.size > 0 && (
                <Badge
                  variant="secondary"
                  className="ms-1 px-1.5 py-0 text-[10px]"
                >
                  {typeFilters.size}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40 p-2" align="start">
            {allTypes.map((t) => (
              <button
                key={t}
                onClick={() => toggleFilter(typeFilters, t, setTypeFilters)}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                <Checkbox checked={typeFilters.has(t)} />
                <Badge className={typeStyles[t]}>{t}</Badge>
              </button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Office Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Filter className="h-3.5 w-3.5" />
              Office
              {officeFilters.size > 0 && (
                <Badge
                  variant="secondary"
                  className="ms-1 px-1.5 py-0 text-[10px]"
                >
                  {officeFilters.size}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-44 p-2" align="start">
            {allOffices.map((o) => (
              <button
                key={o}
                onClick={() => toggleFilter(officeFilters, o, setOfficeFilters)}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                <Checkbox checked={officeFilters.has(o)} />
                <span>{o}</span>
              </button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Advanced Search Toggle */}
        <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Advanced
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${advancedOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="gap-1"
          >
            <X className="h-3.5 w-3.5" />
            Clear
          </Button>
        )}
      </div>

      {/* Active filter badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-1.5">
          {[...statusFilters].map((s) => (
            <Badge key={s} variant="secondary" className="gap-1 pe-1">
              {s}
              <button
                onClick={() => toggleFilter(statusFilters, s, setStatusFilters)}
                className="ms-0.5 rounded-full hover:bg-muted-foreground/20 p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {[...typeFilters].map((t) => (
            <Badge key={t} variant="secondary" className="gap-1 pe-1">
              {t}
              <button
                onClick={() => toggleFilter(typeFilters, t, setTypeFilters)}
                className="ms-0.5 rounded-full hover:bg-muted-foreground/20 p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {[...officeFilters].map((o) => (
            <Badge key={o} variant="secondary" className="gap-1 pe-1">
              {o}
              <button
                onClick={() => toggleFilter(officeFilters, o, setOfficeFilters)}
                className="ms-0.5 rounded-full hover:bg-muted-foreground/20 p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Advanced Search Panel */}
      <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
        <CollapsibleContent>
          <Card className="p-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input type="date" defaultValue="2026-01-01" />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input type="date" defaultValue="2026-02-28" />
              </div>
              <div className="space-y-2">
                <Label>Country</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="cn">China</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="tw">Taiwan</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Amount Range</Label>
                <div className="flex items-center gap-2">
                  <Input placeholder="Min" className="flex-1" />
                  <span className="text-muted-foreground">~</span>
                  <Input placeholder="Max" className="flex-1" />
                </div>
              </div>
            </div>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Results bar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {selected.size > 0 ? (
            <span>
              {selected.size} of {sorted.length} row(s) selected
            </span>
          ) : (
            <span>{sorted.length} result(s)</span>
          )}
        </p>
        <div className="flex gap-2">
          {selected.size > 0 && (
            <Button variant="outline" size="sm">
              Bulk Export ({selected.size})
            </Button>
          )}
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-3.5 w-3.5" />
            Excel
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
                      else setSelected(new Set(paginated.map((d) => d.id)));
                    }}
                  />
                </TableHead>
                <TableHead>
                  <button
                    onClick={() => toggleSort("declarationNo")}
                    className="inline-flex items-center font-medium"
                  >
                    Declaration No.
                    <SortIcon field="declarationNo" />
                  </button>
                </TableHead>
                <TableHead>Type</TableHead>
                <TableHead>HS Code</TableHead>
                <TableHead>Importer</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Office</TableHead>
                <TableHead>
                  <button
                    onClick={() => toggleSort("status")}
                    className="inline-flex items-center font-medium"
                  >
                    Status
                    <SortIcon field="status" />
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button
                    onClick={() => toggleSort("amount")}
                    className="inline-flex items-center font-medium"
                  >
                    Amount
                    <SortIcon field="amount" />
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
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={11}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No results found.
                  </TableCell>
                </TableRow>
              ) : (
                paginated.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={selected.has(row.id) ? "selected" : undefined}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selected.has(row.id)}
                        onCheckedChange={() => {
                          const next = new Set(selected);
                          if (next.has(row.id)) next.delete(row.id);
                          else next.add(row.id);
                          setSelected(next);
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      {row.declarationNo}
                    </TableCell>
                    <TableCell>
                      <Badge className={typeStyles[row.type]}>{row.type}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      {row.hsCode}
                    </TableCell>
                    <TableCell className="text-sm">{row.importer}</TableCell>
                    <TableCell className="text-sm">{row.country}</TableCell>
                    <TableCell className="text-sm">{row.office}</TableCell>
                    <TableCell>
                      <Badge className={statusStyles[row.status]}>
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs tabular-nums">
                      {row.amount}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-xs tabular-nums">
                      {row.date}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                          >
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
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
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
