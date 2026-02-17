"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
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
import { MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";

interface Activity {
  id: number;
  time: string;
  event: string;
  office: string;
  status: string;
}

const recentActivity: Activity[] = [
  {
    id: 1,
    time: "14:32",
    event: "Import declaration D2026-0523 cleared",
    office: "Incheon",
    status: "Cleared",
  },
  {
    id: 2,
    time: "14:15",
    event: "Export declaration E2026-0891 submitted",
    office: "Busan",
    status: "Submitted",
  },
  {
    id: 3,
    time: "13:58",
    event: "Inspection scheduled for D2026-0518",
    office: "Seoul",
    status: "Inspection",
  },
  {
    id: 4,
    time: "13:40",
    event: "Tariff review completed for D2026-0510",
    office: "Incheon",
    status: "Completed",
  },
  {
    id: 5,
    time: "13:22",
    event: "Declaration D2026-0507 rejected - missing docs",
    office: "Gimpo",
    status: "Rejected",
  },
  {
    id: 6,
    time: "12:55",
    event: "Bulk import batch B2026-0045 processed",
    office: "Busan",
    status: "Processed",
  },
];

function activityVariant(status: string) {
  switch (status) {
    case "Cleared":
    case "Completed":
    case "Processed":
      return "default" as const;
    case "Rejected":
      return "destructive" as const;
    case "Inspection":
      return "outline" as const;
    default:
      return "secondary" as const;
  }
}

export function ActivityTable() {
  const tc = useTranslations("customs");
  const t = useTranslations("common");

  const [selected, setSelected] = useState<Set<number>>(new Set());

  const allSelected =
    recentActivity.length > 0 &&
    recentActivity.every((a) => selected.has(a.id));

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(recentActivity.map((a) => a.id)));
    }
  }

  function toggleRow(id: number) {
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
            <TableHead className="w-20">Time</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>{tc("customsOffice")}</TableHead>
            <TableHead>{tc("status")}</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">{t("actions")}</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentActivity.map((row) => (
            <TableRow
              key={row.id}
              data-state={selected.has(row.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  checked={selected.has(row.id)}
                  onCheckedChange={() => toggleRow(row.id)}
                  aria-label={`Select row ${row.id}`}
                />
              </TableCell>
              <TableCell className="font-mono text-sm">{row.time}</TableCell>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.office}</TableCell>
              <TableCell>
                <Badge variant={activityVariant(row.status)}>
                  {row.status}
                </Badge>
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
                      <Eye className="me-2 h-3.5 w-3.5" />
                      {t("view")}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pencil className="me-2 h-3.5 w-3.5" />
                      {t("edit")}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="me-2 h-3.5 w-3.5" />
                      {t("delete")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
