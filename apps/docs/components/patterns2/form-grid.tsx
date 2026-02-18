"use client";

import { type ReactNode } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface FormGridProps {
  children: ReactNode;
  className?: string;
  columns?: 2 | 4 | 6;
}

/**
 * Column layout per `columns` value:
 *  columns=4 → [label 15%][field 35%][label 15%][field 35%]  (pair = 50%)
 *  columns=2 → [label 30%][field 70%]
 *  columns=6 → [label 10%][field ~23.3%] × 3
 */
const colWidths = {
  2: ["25%", "75%"],
  4: ["15%", "35%", "15%", "35%"],
  6: ["10%", "23.33%", "10%", "23.33%", "10%", "23.34%"],
} as const;

export function FormGrid({ children, className, columns = 4 }: FormGridProps) {
  const widths = colWidths[columns] as readonly string[];

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table
        className={cn(
          "w-full border-collapse border border-border dark:border-foreground/15 text-sm table-fixed",
        )}
      >
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

interface FormGridRowProps {
  children: ReactNode;
  className?: string;
}

export function FormGridRow({ children, className }: FormGridRowProps) {
  return <tr className={cn(className)}>{children}</tr>;
}

interface FormGridLabelProps {
  children?: ReactNode;
  className?: string;
  required?: boolean;
  htmlFor?: string;
  rowSpan?: number;
  colSpan?: number;
}

export function FormGridLabel({
  children,
  className,
  required,
  htmlFor,
  rowSpan,
  colSpan,
}: FormGridLabelProps) {
  return (
    <th
      scope="row"
      rowSpan={rowSpan}
      colSpan={colSpan}
      className={cn(
        "border border-border dark:border-foreground/15 bg-muted px-3 py-2 text-start font-medium text-muted-foreground",
        className,
      )}
    >
      <label htmlFor={htmlFor} className="flex items-center gap-1">
        {children}
        {required && (
          <span className="text-destructive text-xs" aria-hidden="true">
            *
          </span>
        )}
      </label>
    </th>
  );
}

interface FormGridCellProps {
  children?: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  readOnly?: boolean;
}

export function FormGridCell({
  children,
  className,
  colSpan,
  rowSpan,
  readOnly,
}: FormGridCellProps) {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn(
        "border border-border dark:border-foreground/15 px-3 py-2",
        readOnly && "bg-muted/50 text-foreground",
        className,
      )}
    >
      {children}
    </td>
  );
}
