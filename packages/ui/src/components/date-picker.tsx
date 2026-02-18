"use client";

import * as React from "react";
import { format, parse, isValid } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange, Locale } from "react-day-picker";

import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { Calendar } from "@workspace/ui/components/calendar";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";

/* ── Preset types ──────────────────────────────────────────────────── */

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

/* ── DateInput (internal) ──────────────────────────────────────────── */

function DateInput({
  value,
  onChange,
  dateFormat,
  placeholder,
  disabled,
}: {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  dateFormat: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  const formatted = React.useMemo(
    () => (value ? format(value, dateFormat) : ""),
    [value, dateFormat],
  );
  const [text, setText] = React.useState(formatted);
  const [focused, setFocused] = React.useState(false);

  const displayText = focused ? text : formatted;

  const handleFocus = React.useCallback(() => {
    setText(formatted);
    setFocused(true);
  }, [formatted]);

  const commit = React.useCallback(() => {
    setFocused(false);
    const trimmed = text.trim();
    if (!trimmed) {
      onChange(undefined);
      return;
    }
    const parsed = parse(trimmed, dateFormat, new Date());
    if (isValid(parsed) && format(parsed, dateFormat) === trimmed) {
      onChange(parsed);
    }
    // invalid → displayText reverts to formatted automatically
  }, [text, dateFormat, onChange]);

  return (
    <input
      type="text"
      value={displayText}
      onChange={(e) => setText(e.target.value)}
      onFocus={handleFocus}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          (e.target as HTMLInputElement).blur();
        }
      }}
      placeholder={placeholder || dateFormat.toLowerCase()}
      disabled={disabled}
      className="font-mono text-sm tabular-nums bg-transparent outline-none w-[11ch] placeholder:text-muted-foreground/60"
    />
  );
}

/* ── Props ─────────────────────────────────────────────────────────── */

interface DatePickerBaseProps {
  className?: string;
  disabled?: boolean;
  locale?: Partial<Locale>;
  numberOfMonths?: number;
  /** Date format string (date-fns). Also used for input validation. */
  dateFormat?: string;
  /** Popover alignment */
  align?: "start" | "center" | "end";
  /** Preset buttons: true for defaults, or pass custom presets */
  presets?: DateRangePreset[] | boolean;
  placeholder?: string;
}

interface DatePickerSingleProps extends DatePickerBaseProps {
  mode?: "single";
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

interface DatePickerRangeProps extends DatePickerBaseProps {
  mode: "range";
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
}

type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

/* ── Component ─────────────────────────────────────────────────────── */

function DatePicker(props: DatePickerProps) {
  const {
    className,
    disabled,
    locale,
    dateFormat = "yyyy-MM-dd",
    align = "start",
    presets,
    placeholder,
  } = props;

  const mode = props.mode ?? "single";
  const numberOfMonths = props.numberOfMonths ?? (mode === "single" ? 1 : 2);

  const [open, setOpen] = React.useState(false);
  const [activePresetKey, setActivePresetKey] = React.useState<string | null>(
    null,
  );

  const resolvedPresets = React.useMemo<DateRangePreset[] | null>(() => {
    if (presets === true) return defaultPresets;
    if (Array.isArray(presets)) return presets;
    return null;
  }, [presets]);

  const hasPresets = resolvedPresets && resolvedPresets.length > 0;

  /* ── value / onChange helpers (narrowed by mode) ─── */
  const singleValue =
    mode === "single" ? (props.value as Date | undefined) : undefined;
  const singleOnChange =
    mode === "single"
      ? (props.onChange as ((d: Date | undefined) => void) | undefined)
      : undefined;

  const rangeValue =
    mode === "range" ? (props.value as DateRange | undefined) : undefined;
  const rangeOnChange =
    mode === "range"
      ? (props.onChange as ((r: DateRange | undefined) => void) | undefined)
      : undefined;

  /* ── Calendar handlers ─── */
  const handleSingleSelect = React.useCallback(
    (date: Date | undefined) => {
      setActivePresetKey(null);
      singleOnChange?.(date);
      if (date) setOpen(false);
    },
    [singleOnChange],
  );

  const handleRangeSelect = React.useCallback(
    (range: DateRange | undefined) => {
      setActivePresetKey(null);
      rangeOnChange?.(range);
      if (range?.from && range?.to) setOpen(false);
    },
    [rangeOnChange],
  );

  /* ── Input handlers ─── */
  const handleSingleInput = React.useCallback(
    (date: Date | undefined) => {
      setActivePresetKey(null);
      singleOnChange?.(date);
    },
    [singleOnChange],
  );

  const handleFromInput = React.useCallback(
    (date: Date | undefined) => {
      setActivePresetKey(null);
      rangeOnChange?.({ from: date, to: rangeValue?.to });
    },
    [rangeOnChange, rangeValue?.to],
  );

  const handleToInput = React.useCallback(
    (date: Date | undefined) => {
      setActivePresetKey(null);
      rangeOnChange?.({ from: rangeValue?.from, to: date });
    },
    [rangeOnChange, rangeValue?.from],
  );

  /* ── Preset handler ─── */
  const handlePreset = React.useCallback(
    (preset: DateRangePreset) => {
      const range = preset.getRange();
      setActivePresetKey(preset.key);
      if (mode === "single") {
        singleOnChange?.(range.from);
      } else {
        rangeOnChange?.(range);
      }
      setOpen(false);
    },
    [mode, singleOnChange, rangeOnChange],
  );

  return (
    <div
      className={cn(
        "inline-flex items-center",
        hasPresets && "gap-1.5",
        className,
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverAnchor asChild>
          <div
            className={cn(
              "inline-flex items-center rounded-md border border-input bg-background px-2 h-9 text-sm",
              "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
              "transition-colors",
              disabled && "cursor-not-allowed opacity-50",
            )}
          >
            {mode === "single" ? (
              <DateInput
                value={singleValue}
                onChange={handleSingleInput}
                dateFormat={dateFormat}
                placeholder={placeholder}
                disabled={disabled}
              />
            ) : (
              <>
                <DateInput
                  value={rangeValue?.from}
                  onChange={handleFromInput}
                  dateFormat={dateFormat}
                  disabled={disabled}
                />
                <span className="text-muted-foreground text-xs mx-1 select-none">
                  ~
                </span>
                <DateInput
                  value={rangeValue?.to}
                  onChange={handleToInput}
                  dateFormat={dateFormat}
                  disabled={disabled}
                />
              </>
            )}
            <PopoverTrigger asChild>
              <button
                type="button"
                disabled={disabled}
                className="ml-1 shrink-0 cursor-pointer text-muted-foreground hover:text-foreground disabled:cursor-not-allowed"
              >
                <CalendarIcon className="h-3.5 w-3.5" />
              </button>
            </PopoverTrigger>
          </div>
        </PopoverAnchor>
        <PopoverContent className="w-auto p-0" align={align}>
          {mode === "single" ? (
            <Calendar
              mode="single"
              selected={singleValue}
              onSelect={handleSingleSelect}
              defaultMonth={singleValue}
              locale={locale}
            />
          ) : (
            <Calendar
              mode="range"
              selected={rangeValue}
              onSelect={handleRangeSelect}
              numberOfMonths={numberOfMonths}
              defaultMonth={rangeValue?.from}
              locale={locale}
            />
          )}
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

export { DatePicker, defaultPresets };
export type {
  DatePickerProps,
  DatePickerSingleProps,
  DatePickerRangeProps,
  DateRangePreset,
  DateRange,
};
