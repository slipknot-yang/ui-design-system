"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange, Locale } from "react-day-picker";

import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { Calendar } from "@workspace/ui/components/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";

interface DateRangePreset {
  key: string;
  label: string;
  getRange: () => DateRange;
}

const defaultPresets: DateRangePreset[] = [
  {
    key: "today",
    label: "당일",
    getRange: () => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return { from: d, to: new Date(d) };
    },
  },
  {
    key: "1month",
    label: "1개월",
    getRange: () => {
      const to = new Date();
      to.setHours(0, 0, 0, 0);
      const from = new Date(to);
      from.setMonth(from.getMonth() - 1);
      return { from, to };
    },
  },
  {
    key: "3months",
    label: "3개월",
    getRange: () => {
      const to = new Date();
      to.setHours(0, 0, 0, 0);
      const from = new Date(to);
      from.setMonth(from.getMonth() - 3);
      return { from, to };
    },
  },
  {
    key: "1year",
    label: "1년",
    getRange: () => {
      const to = new Date();
      to.setHours(0, 0, 0, 0);
      const from = new Date(to);
      from.setFullYear(from.getFullYear() - 1);
      return { from, to };
    },
  },
  {
    key: "all",
    label: "전체",
    getRange: () => {
      const to = new Date();
      to.setHours(0, 0, 0, 0);
      return { from: new Date(2020, 0, 1), to };
    },
  },
];

interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  locale?: Partial<Locale>;
  /** Number of months to display side-by-side */
  numberOfMonths?: number;
  /** Date format string (date-fns) */
  dateFormat?: string;
  /** Align popover */
  align?: "start" | "center" | "end";
  /** Preset buttons: true for defaults, or pass custom presets */
  presets?: DateRangePreset[] | boolean;
}

function DateRangePicker({
  value,
  onChange,
  placeholder = "Select date range",
  className,
  disabled,
  locale,
  numberOfMonths = 2,
  dateFormat = "yyyy-MM-dd",
  align = "start",
  presets,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [activePresetKey, setActivePresetKey] = React.useState<string | null>(
    null,
  );

  const resolvedPresets = React.useMemo<DateRangePreset[] | null>(() => {
    if (presets === true) return defaultPresets;
    if (Array.isArray(presets)) return presets;
    return null;
  }, [presets]);

  const displayValue = React.useMemo(() => {
    if (!value?.from) return null;
    const fromStr = format(value.from, dateFormat);
    if (!value.to) return fromStr;
    const toStr = format(value.to, dateFormat);
    return `${fromStr} ~ ${toStr}`;
  }, [value, dateFormat]);

  const handleCalendarSelect = React.useCallback(
    (range: DateRange | undefined) => {
      setActivePresetKey(null);
      onChange?.(range);
    },
    [onChange],
  );

  const handlePreset = React.useCallback(
    (preset: DateRangePreset) => {
      const range = preset.getRange();
      setActivePresetKey(preset.key);
      onChange?.(range);
      setOpen(false);
    },
    [onChange],
  );

  const hasPresets = resolvedPresets && resolvedPresets.length > 0;

  return (
    <div
      className={cn(
        "inline-flex items-center",
        hasPresets && "gap-1.5",
        className,
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "justify-start text-left font-normal",
              !displayValue && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
            {displayValue ?? <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <Calendar
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={handleCalendarSelect}
            numberOfMonths={numberOfMonths}
            locale={locale}
          />
        </PopoverContent>
      </Popover>
      {hasPresets && (
        <div className="flex items-center gap-1">
          {resolvedPresets.map((p) => (
            <Button
              key={p.key}
              variant={activePresetKey === p.key ? "default" : "outline"}
              size="sm"
              className="h-9 px-2.5 text-xs"
              disabled={disabled}
              onClick={() => handlePreset(p)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export { DateRangePicker, defaultPresets };
export type { DateRangePickerProps, DateRangePreset, DateRange };
