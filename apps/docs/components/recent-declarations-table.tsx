"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
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
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type DeclarationStatus = "cleared" | "pending" | "underReview" | "rejected";
type DeclarationType = "importDecl" | "exportDecl" | "transitDecl";

interface Declaration {
  id: string;
  type: DeclarationType;
  hsCode: string;
  office: string;
  status: DeclarationStatus;
  amount: string;
  date: string;
}

const statusStyles: Record<DeclarationStatus, string> = {
  cleared:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  underReview:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  rejected: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

const typeStyles: Record<DeclarationType, string> = {
  importDecl: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
  exportDecl:
    "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400",
  transitDecl:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
};

const declarations: Declaration[] = [
  {
    id: "D2026-ICN-00147",
    type: "importDecl",
    hsCode: "8471.30.0000",
    office: "\uC778\uCC9C\uC138\uAD00",
    status: "cleared",
    amount: "45,230,000",
    date: "2026-02-16",
  },
  {
    id: "D2026-PUS-00089",
    type: "exportDecl",
    hsCode: "6109.10.0000",
    office: "\uBD80\uC0B0\uC138\uAD00",
    status: "pending",
    amount: "12,780,000",
    date: "2026-02-16",
  },
  {
    id: "D2026-ICN-00146",
    type: "importDecl",
    hsCode: "8517.12.0000",
    office: "\uC778\uCC9C\uC138\uAD00",
    status: "underReview",
    amount: "128,500,000",
    date: "2026-02-15",
  },
  {
    id: "D2026-SEL-00034",
    type: "transitDecl",
    hsCode: "2204.21.0000",
    office: "\uC11C\uC6B8\uC138\uAD00",
    status: "cleared",
    amount: "8,920,000",
    date: "2026-02-15",
  },
  {
    id: "D2026-PUS-00088",
    type: "importDecl",
    hsCode: "3926.90.0000",
    office: "\uBD80\uC0B0\uC138\uAD00",
    status: "rejected",
    amount: "67,150,000",
    date: "2026-02-14",
  },
];

export function RecentDeclarationsTable() {
  const tc = useTranslations("customs");
  const td = useTranslations("dashboard");
  const t = useTranslations("common");

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const totalRows = declarations.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const paginatedData = declarations.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage,
  );

  const allSelected =
    paginatedData.length > 0 && paginatedData.every((d) => selected.has(d.id));

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paginatedData.map((d) => d.id)));
    }
  }

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-1">
        <span className="text-muted-foreground text-sm">
          {t("rowsSelected", { count: selected.size })}
        </span>
        <Button variant="outline" size="sm" className="text-xs">
          {t("export")}
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                checked={allSelected}
                onCheckedChange={toggleAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>{tc("declarationNo")}</TableHead>
            <TableHead>{tc("declarationType")}</TableHead>
            <TableHead>{tc("hsCode")}</TableHead>
            <TableHead>{tc("customsOffice")}</TableHead>
            <TableHead>{tc("status")}</TableHead>
            <TableHead className="text-right">{tc("amount")} (KRW)</TableHead>
            <TableHead>{td("date")}</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">{t("actions")}</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((decl) => (
            <TableRow
              key={decl.id}
              data-state={selected.has(decl.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  checked={selected.has(decl.id)}
                  onCheckedChange={() => toggleRow(decl.id)}
                  aria-label={`Select ${decl.id}`}
                />
              </TableCell>
              <TableCell>
                <Link
                  href={`/declaration/${decl.id}`}
                  className="text-primary hover:underline font-mono text-xs font-medium"
                >
                  {decl.id}
                </Link>
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${typeStyles[decl.type]}`}
                >
                  {tc(decl.type)}
                </span>
              </TableCell>
              <TableCell>
                <span className="font-mono text-xs">{decl.hsCode}</span>
              </TableCell>
              <TableCell>
                <span className="text-xs">{decl.office}</span>
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${statusStyles[decl.status]}`}
                >
                  {tc(decl.status)}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span className="font-mono text-xs tabular-nums">
                  {decl.amount}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-muted-foreground text-xs tabular-nums">
                  {decl.date}
                </span>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">{t("actions")}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-3.5 w-3.5" />
                      {t("view")}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-3.5 w-3.5" />
                      {t("edit")}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-3.5 w-3.5" />
                      {t("delete")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs">
            {t("rowsPerPage")}
          </span>
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
