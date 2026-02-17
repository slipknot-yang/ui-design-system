import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";

const coreColors = [
  { name: "background", variable: "--background", desc: "Page background" },
  { name: "foreground", variable: "--foreground", desc: "Default text color" },
  { name: "card", variable: "--card", desc: "Card background" },
  {
    name: "card-foreground",
    variable: "--card-foreground",
    desc: "Card text color",
  },
  { name: "popover", variable: "--popover", desc: "Popover background" },
  {
    name: "popover-foreground",
    variable: "--popover-foreground",
    desc: "Popover text color",
  },
];

const brandColors = [
  { name: "primary", variable: "--primary", desc: "Primary actions" },
  {
    name: "primary-foreground",
    variable: "--primary-foreground",
    desc: "Text on primary",
  },
  { name: "secondary", variable: "--secondary", desc: "Secondary actions" },
  {
    name: "secondary-foreground",
    variable: "--secondary-foreground",
    desc: "Text on secondary",
  },
  { name: "accent", variable: "--accent", desc: "Accent / hover states" },
  {
    name: "accent-foreground",
    variable: "--accent-foreground",
    desc: "Text on accent",
  },
  {
    name: "destructive",
    variable: "--destructive",
    desc: "Destructive actions",
  },
];

const uiColors = [
  { name: "muted", variable: "--muted", desc: "Muted backgrounds" },
  {
    name: "muted-foreground",
    variable: "--muted-foreground",
    desc: "Muted text",
  },
  { name: "border", variable: "--border", desc: "Border color" },
  { name: "input", variable: "--input", desc: "Input border" },
  { name: "ring", variable: "--ring", desc: "Focus ring" },
];

const radiusTokens = [
  { name: "radius-sm", value: "calc(var(--radius) - 4px)" },
  { name: "radius-md", value: "calc(var(--radius) - 2px)" },
  { name: "radius-lg", value: "var(--radius)" },
  { name: "radius-xl", value: "calc(var(--radius) + 4px)" },
];

export default async function ThemesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("nav");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{tNav("themes")}</h1>
        <p className="text-muted-foreground mt-1">
          Current theme color tokens and design tokens from the CUPIA Design
          System
        </p>
      </div>

      <Separator />

      {/* Core Colors */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Core Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreColors.map((color) => (
              <div
                key={color.name}
                className="flex items-center gap-3 rounded-md border p-3"
              >
                <div
                  className="h-10 w-10 rounded-md border shadow-sm shrink-0"
                  style={{ backgroundColor: `hsl(var(${color.variable}))` }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{color.name}</p>
                  <p className="text-xs text-muted-foreground">{color.desc}</p>
                  <code className="text-xs font-mono text-muted-foreground">
                    {color.variable}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brand Colors */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Brand Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brandColors.map((color) => (
              <div
                key={color.name}
                className="flex items-center gap-3 rounded-md border p-3"
              >
                <div
                  className="h-10 w-10 rounded-md border shadow-sm shrink-0"
                  style={{ backgroundColor: `hsl(var(${color.variable}))` }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{color.name}</p>
                  <p className="text-xs text-muted-foreground">{color.desc}</p>
                  <code className="text-xs font-mono text-muted-foreground">
                    {color.variable}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UI Colors */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">UI Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uiColors.map((color) => (
              <div
                key={color.name}
                className="flex items-center gap-3 rounded-md border p-3"
              >
                <div
                  className="h-10 w-10 rounded-md border shadow-sm shrink-0"
                  style={{ backgroundColor: `hsl(var(${color.variable}))` }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{color.name}</p>
                  <p className="text-xs text-muted-foreground">{color.desc}</p>
                  <code className="text-xs font-mono text-muted-foreground">
                    {color.variable}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Badge Variants Preview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Badge Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Button Variants Preview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Button Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      {/* Radius Tokens */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Border Radius Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {radiusTokens.map((token) => (
              <div key={token.name} className="text-center space-y-2">
                <div
                  className="mx-auto h-16 w-16 border-2 border-primary bg-muted"
                  style={{ borderRadius: token.value }}
                />
                <p className="text-sm font-medium">{token.name}</p>
                <code className="text-xs text-muted-foreground font-mono block">
                  {token.value}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
