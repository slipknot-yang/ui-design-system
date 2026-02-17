"use client";

import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@workspace/ui/components/chart";
import type { ChartConfig } from "@workspace/ui/components/chart";

// ---------------------------------------------------------------------------
// Declaration Donut Chart
// ---------------------------------------------------------------------------

const declarationData = [
  {
    type: "import",
    label: "Import (수입)",
    value: 8234,
    fill: "var(--chart-1)",
  },
  {
    type: "export",
    label: "Export (수출)",
    value: 4613,
    fill: "var(--chart-2)",
  },
  {
    type: "transit",
    label: "Transit (환적)",
    value: 892,
    fill: "var(--chart-3)",
  },
];

const declarationTotal = declarationData.reduce((sum, d) => sum + d.value, 0);

const donutChartConfig = {
  value: { label: "Declarations" },
  import: { label: "Import (수입)", color: "var(--chart-1)" },
  export: { label: "Export (수출)", color: "var(--chart-2)" },
  transit: { label: "Transit (환적)", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function DeclarationDonutChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Declaration by Type</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={donutChartConfig}
          className="mx-auto aspect-square h-[300px] w-full"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="type" hideLabel />}
            />
            <Pie
              data={declarationData}
              dataKey="value"
              nameKey="type"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 10}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {declarationTotal.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 14}
                          className="fill-muted-foreground text-sm"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="type" />}
              verticalAlign="bottom"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Top HS Codes Bar Chart
// ---------------------------------------------------------------------------

const hsCodeData = [
  {
    code: "8471.30",
    description: "Portable digital computers",
    count: 1284,
    fill: "var(--chart-1)",
  },
  {
    code: "8517.12",
    description: "Telephones for cellular networks",
    count: 1156,
    fill: "var(--chart-2)",
  },
  {
    code: "6109.10",
    description: "T-shirts, cotton",
    count: 892,
    fill: "var(--chart-3)",
  },
  {
    code: "2204.21",
    description: "Wine in containers <= 2L",
    count: 743,
    fill: "var(--chart-4)",
  },
  {
    code: "3004.90",
    description: "Medicaments, packaged",
    count: 621,
    fill: "var(--chart-5)",
  },
];

const barChartConfig = {
  count: { label: "Volume" },
  "8471.30": { label: "Portable digital computers", color: "var(--chart-1)" },
  "8517.12": {
    label: "Telephones for cellular networks",
    color: "var(--chart-2)",
  },
  "6109.10": { label: "T-shirts, cotton", color: "var(--chart-3)" },
  "2204.21": { label: "Wine in containers <= 2L", color: "var(--chart-4)" },
  "3004.90": { label: "Medicaments, packaged", color: "var(--chart-5)" },
} satisfies ChartConfig;

export function TopHsBarChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Top HS Codes by Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={barChartConfig} className="h-[300px] w-full">
          <BarChart
            data={hsCodeData}
            layout="vertical"
            margin={{ left: 16, right: 48 }}
            barSize={24}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="code"
              type="category"
              tickLine={false}
              axisLine={false}
              width={72}
              tick={{ fontSize: 12 }}
            />
            <XAxis type="number" hide />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, _name, item) => (
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">
                        {item.payload.description}
                      </span>
                      <span className="text-muted-foreground">
                        {Number(value).toLocaleString()} declarations
                      </span>
                    </div>
                  )}
                  hideIndicator
                  hideLabel
                />
              }
            />
            <Bar
              dataKey="count"
              radius={[0, 6, 6, 0]}
              label={{
                position: "right",
                fontSize: 12,
                formatter: (value: number) => value.toLocaleString(),
                className: "fill-foreground",
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
