"use client";

import { useState, useCallback, useMemo } from "react";
import { Calendar } from "@workspace/ui/components/calendar";
import { Button } from "@workspace/ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import type { DateRange } from "@workspace/ui/components/date-picker";

function parseDate(str: string): Date | undefined {
  if (!str) return undefined;
  const parts = str.split("-").map(Number);
  return new Date(parts[0]!, parts[1]! - 1, parts[2]!);
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

type PresetKey = "today" | "1month" | "1year" | "all";

interface DateRangePickerProps {
  from?: string;
  to?: string;
  onChange?: (from: string, to: string) => void;
  className?: string;
  showPresets?: boolean;
}

export function DateRangePicker({
  from,
  to,
  onChange,
  className,
  showPresets = true,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<PresetKey | null>(null);

  const selected = useMemo<DateRange | undefined>(() => {
    const f = from ? parseDate(from) : undefined;
    const t = to ? parseDate(to) : undefined;
    return f || t ? { from: f, to: t } : undefined;
  }, [from, to]);

  const handleSelect = useCallback(
    (range: DateRange | undefined) => {
      setActivePreset(null);
      if (range?.from && range?.to) {
        onChange?.(formatDate(range.from), formatDate(range.to));
      } else if (range?.from) {
        onChange?.(formatDate(range.from), "");
      }
    },
    [onChange],
  );

  const handlePreset = useCallback(
    (preset: PresetKey) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let newFrom: Date;
      const newTo = today;

      switch (preset) {
        case "today":
          newFrom = new Date(today);
          break;
        case "1month":
          newFrom = new Date(today);
          newFrom.setMonth(newFrom.getMonth() - 1);
          break;
        case "1year":
          newFrom = new Date(today);
          newFrom.setFullYear(newFrom.getFullYear() - 1);
          break;
        case "all":
          newFrom = new Date(2020, 0, 1);
          break;
      }

      setActivePreset(preset);
      onChange?.(formatDate(newFrom!), formatDate(newTo));
      setOpen(false);
    },
    [onChange],
  );

  const presets: { key: PresetKey; label: string }[] = [
    { key: "today", label: "당일" },
    { key: "1month", label: "1개월" },
    { key: "1year", label: "1년" },
    { key: "all", label: "전체" },
  ];

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-2 h-8 text-sm",
              "hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "cursor-pointer transition-colors",
            )}
          >
            <span className="font-mono text-sm tabular-nums">
              {from || "----------"}
            </span>
            <span className="text-muted-foreground text-xs">~</span>
            <span className="font-mono text-sm tabular-nums">
              {to || "----------"}
            </span>
            <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3" align="start">
          <Calendar
            mode="range"
            selected={selected}
            onSelect={handleSelect}
            numberOfMonths={2}
            defaultMonth={selected?.from}
          />
        </PopoverContent>
      </Popover>
      {showPresets && (
        <div className="flex items-center gap-1">
          {presets.map((p) => (
            <Button
              key={p.key}
              variant={activePreset === p.key ? "default" : "outline"}
              size="sm"
              className="h-8 px-2.5 text-xs"
              onClick={() => handlePreset(p.key)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
