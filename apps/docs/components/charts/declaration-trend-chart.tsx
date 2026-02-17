"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@workspace/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart";

const fullData = [
  { month: "Mar", imports: 4200, exports: 3100 },
  { month: "Apr", imports: 3800, exports: 2900 },
  { month: "May", imports: 5100, exports: 3400 },
  { month: "Jun", imports: 4600, exports: 3800 },
  { month: "Jul", imports: 4900, exports: 3200 },
  { month: "Aug", imports: 5300, exports: 4100 },
  { month: "Sep", imports: 4700, exports: 3600 },
  { month: "Oct", imports: 5800, exports: 4200 },
  { month: "Nov", imports: 6100, exports: 4500 },
  { month: "Dec", imports: 5600, exports: 3900 },
  { month: "Jan", imports: 5200, exports: 4300 },
  { month: "Feb", imports: 5900, exports: 4700 },
];

const chartConfig = {
  imports: {
    label: "Imports",
    color: "var(--chart-1)",
  },
  exports: {
    label: "Exports",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function DeclarationTrendChart() {
  const [period, setPeriod] = useState("12");

  const data = fullData.slice(fullData.length - Number(period));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Monthly Declaration Trend</CardTitle>
        <CardAction>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="h-8 w-[130px] text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 months</SelectItem>
              <SelectItem value="6">6 months</SelectItem>
              <SelectItem value="3">3 months</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillImports" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.05}
                />
              </linearGradient>
              <linearGradient id="fillExports" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
              tickFormatter={(v: number) =>
                v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v)
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="imports"
              stroke="var(--chart-1)"
              strokeWidth={2}
              fill="url(#fillImports)"
            />
            <Area
              type="monotone"
              dataKey="exports"
              stroke="var(--chart-2)"
              strokeWidth={2}
              fill="url(#fillExports)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
