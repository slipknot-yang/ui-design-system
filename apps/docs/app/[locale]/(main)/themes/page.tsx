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
import { Bold, Moon, Sun } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Color token data                                                          */
/* -------------------------------------------------------------------------- */

const coreColors = [
  {
    name: "background",
    variable: "--background",
    desc: "Page and app-level background surface",
  },
  {
    name: "foreground",
    variable: "--foreground",
    desc: "Default body text and icon color",
  },
  {
    name: "card",
    variable: "--card",
    desc: "Card and elevated surface background",
  },
  {
    name: "card-foreground",
    variable: "--card-foreground",
    desc: "Text rendered on card surfaces",
  },
  {
    name: "popover",
    variable: "--popover",
    desc: "Popover, dropdown, and tooltip background",
  },
  {
    name: "popover-foreground",
    variable: "--popover-foreground",
    desc: "Text rendered inside popovers",
  },
];

const brandColors = [
  {
    name: "primary",
    variable: "--primary",
    desc: "Primary brand color for key actions and CTAs",
  },
  {
    name: "primary-foreground",
    variable: "--primary-foreground",
    desc: "Text and icons on primary-colored surfaces",
  },
  {
    name: "secondary",
    variable: "--secondary",
    desc: "Secondary actions and less prominent controls",
  },
  {
    name: "secondary-foreground",
    variable: "--secondary-foreground",
    desc: "Text on secondary-colored surfaces",
  },
  {
    name: "accent",
    variable: "--accent",
    desc: "Accent highlights, hover states, and active items",
  },
  {
    name: "accent-foreground",
    variable: "--accent-foreground",
    desc: "Text on accent-colored surfaces",
  },
  {
    name: "destructive",
    variable: "--destructive",
    desc: "Destructive and danger actions (delete, error)",
  },
];

const uiColors = [
  {
    name: "muted",
    variable: "--muted",
    desc: "Subdued backgrounds for disabled or secondary areas",
  },
  {
    name: "muted-foreground",
    variable: "--muted-foreground",
    desc: "Low-emphasis text such as placeholders and captions",
  },
  {
    name: "border",
    variable: "--border",
    desc: "Default border for cards, dividers, and separators",
  },
  {
    name: "input",
    variable: "--input",
    desc: "Form input borders and outlines",
  },
  {
    name: "ring",
    variable: "--ring",
    desc: "Focus ring for keyboard navigation indicators",
  },
];

const chartColors = [
  { name: "chart-1", variable: "--chart-1", desc: "First data series" },
  { name: "chart-2", variable: "--chart-2", desc: "Second data series" },
  { name: "chart-3", variable: "--chart-3", desc: "Third data series" },
  { name: "chart-4", variable: "--chart-4", desc: "Fourth data series" },
  { name: "chart-5", variable: "--chart-5", desc: "Fifth data series" },
];

const sidebarColors = [
  {
    name: "sidebar",
    variable: "--sidebar",
    desc: "Sidebar panel background",
  },
  {
    name: "sidebar-foreground",
    variable: "--sidebar-foreground",
    desc: "Default text inside sidebar",
  },
  {
    name: "sidebar-primary",
    variable: "--sidebar-primary",
    desc: "Active/selected item highlight in sidebar",
  },
  {
    name: "sidebar-primary-foreground",
    variable: "--sidebar-primary-foreground",
    desc: "Text on sidebar primary items",
  },
  {
    name: "sidebar-accent",
    variable: "--sidebar-accent",
    desc: "Hover and focus state background in sidebar",
  },
  {
    name: "sidebar-accent-foreground",
    variable: "--sidebar-accent-foreground",
    desc: "Text on sidebar accent items",
  },
  {
    name: "sidebar-border",
    variable: "--sidebar-border",
    desc: "Dividers and borders within sidebar",
  },
  {
    name: "sidebar-ring",
    variable: "--sidebar-ring",
    desc: "Focus ring for sidebar interactive elements",
  },
];

const radiusTokens = [
  {
    name: "radius-sm",
    value: "calc(var(--radius) - 4px)",
    desc: "Small elements (badges, chips)",
  },
  {
    name: "radius-md",
    value: "calc(var(--radius) - 2px)",
    desc: "Medium elements (inputs, buttons)",
  },
  {
    name: "radius-lg",
    value: "var(--radius)",
    desc: "Large elements (cards, dialogs)",
  },
  {
    name: "radius-xl",
    value: "calc(var(--radius) + 4px)",
    desc: "Extra-large elements (panels, sheets)",
  },
];

const typographyScale = [
  { name: "text-xs", class: "text-xs", sample: "Extra Small (12px)" },
  { name: "text-sm", class: "text-sm", sample: "Small (14px)" },
  { name: "text-base", class: "text-base", sample: "Base (16px)" },
  { name: "text-lg", class: "text-lg", sample: "Large (18px)" },
  { name: "text-xl", class: "text-xl", sample: "Extra Large (20px)" },
  { name: "text-2xl", class: "text-2xl", sample: "2X Large (24px)" },
  { name: "text-3xl", class: "text-3xl", sample: "3X Large (30px)" },
  { name: "text-4xl", class: "text-4xl", sample: "4X Large (36px)" },
];

const spacingScale = [
  { name: "1", rem: "0.25rem", px: "4px" },
  { name: "2", rem: "0.5rem", px: "8px" },
  { name: "3", rem: "0.75rem", px: "12px" },
  { name: "4", rem: "1rem", px: "16px" },
  { name: "6", rem: "1.5rem", px: "24px" },
  { name: "8", rem: "2rem", px: "32px" },
  { name: "12", rem: "3rem", px: "48px" },
  { name: "16", rem: "4rem", px: "64px" },
];

/* -------------------------------------------------------------------------- */
/*  Reusable sub-components                                                   */
/* -------------------------------------------------------------------------- */

function ColorSwatch({
  color,
}: {
  color: { name: string; variable: string; desc: string };
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border p-3">
      <div
        className="h-10 w-10 rounded-md border shadow-sm shrink-0"
        style={{ backgroundColor: `var(${color.variable})` }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium truncate">{color.name}</p>
        <p className="text-xs text-muted-foreground">{color.desc}</p>
        <code className="text-[11px] font-mono text-muted-foreground">
          var({color.variable})
        </code>
      </div>
    </div>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardHeader className="pb-3">
      <CardTitle className="text-base">{title}</CardTitle>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardHeader>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */

export default async function ThemesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("nav");

  return (
    <div className="space-y-8">
      {/* ------------------------------------------------------------------ */}
      {/*  1. Header                                                         */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{tNav("themes")}</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">
          A comprehensive reference for every design token in the CUPIA Design
          System. All color values use OKLCh CSS custom properties, enabling
          perceptually uniform theming across 10 country variants and light/dark
          modes.
        </p>
      </div>

      <Separator />

      {/* ------------------------------------------------------------------ */}
      {/*  2. Core Colors                                                    */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Core Colors"
          description="Foundation surface and text colors that define the overall page appearance."
        />
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreColors.map((color) => (
              <ColorSwatch key={color.name} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  3. Brand Colors                                                   */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Brand Colors"
          description="Primary, secondary, accent, and destructive colors that carry brand identity and semantic meaning."
        />
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brandColors.map((color) => (
              <ColorSwatch key={color.name} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  4. UI Colors                                                      */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="UI Colors"
          description="Functional colors for borders, inputs, muted areas, and focus indicators."
        />
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uiColors.map((color) => (
              <ColorSwatch key={color.name} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  5. Chart Colors                                                   */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Chart Colors"
          description="A five-color palette for data visualizations, designed for contrast and accessibility."
        />
        <CardContent className="space-y-4">
          {/* Horizontal color bar */}
          <div className="flex h-12 overflow-hidden rounded-lg border shadow-sm">
            {chartColors.map((color) => (
              <div
                key={color.name}
                className="flex-1"
                style={{ backgroundColor: `var(${color.variable})` }}
              />
            ))}
          </div>
          {/* Individual swatches */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {chartColors.map((color) => (
              <div key={color.name} className="flex items-center gap-2">
                <div
                  className="h-6 w-6 rounded-md border shadow-sm shrink-0"
                  style={{ backgroundColor: `var(${color.variable})` }}
                />
                <div className="min-w-0">
                  <p className="text-xs font-medium">{color.name}</p>
                  <code className="text-[10px] font-mono text-muted-foreground">
                    var({color.variable})
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  6. Sidebar Colors                                                 */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Sidebar Colors"
          description="Dedicated color tokens for the application sidebar, enabling independent theming of the navigation panel."
        />
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sidebarColors.map((color) => (
              <ColorSwatch key={color.name} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* ------------------------------------------------------------------ */}
      {/*  7. Badge Variants                                                 */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Badge Variants"
          description="Status indicators and labels in all supported visual variants."
        />
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-col items-center gap-1.5">
              <Badge variant="default">Default</Badge>
              <span className="text-[10px] text-muted-foreground font-mono">
                default
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Badge variant="secondary">Secondary</Badge>
              <span className="text-[10px] text-muted-foreground font-mono">
                secondary
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Badge variant="destructive">Destructive</Badge>
              <span className="text-[10px] text-muted-foreground font-mono">
                destructive
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Badge variant="outline">Outline</Badge>
              <span className="text-[10px] text-muted-foreground font-mono">
                outline
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  8. Button Variants                                                */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Button Variants"
          description="All button visual styles and size options available in the component library."
        />
        <CardContent className="space-y-6">
          {/* Row 1: Variants */}
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              Variants
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <Button variant="default">Default</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  default
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button variant="secondary">Secondary</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  secondary
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button variant="destructive">Destructive</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  destructive
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button variant="outline">Outline</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  outline
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button variant="ghost">Ghost</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  ghost
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button variant="link">Link</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  link
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Row 2: Sizes */}
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              Sizes
            </p>
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <Button size="sm">Small</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  sm
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button size="default">Default</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  default
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button size="lg">Large</Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  lg
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Button size="icon">
                  <Bold />
                </Button>
                <span className="text-[10px] text-muted-foreground font-mono">
                  icon
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* ------------------------------------------------------------------ */}
      {/*  9. Border Radius Tokens                                           */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Border Radius Tokens"
          description="Corner radius scale derived from the base --radius variable (0.625rem). All values are computed at runtime."
        />
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
            {radiusTokens.map((token) => (
              <div key={token.name} className="text-center space-y-2">
                <div
                  className="mx-auto h-16 w-16 border-2 border-primary bg-muted"
                  style={{ borderRadius: token.value }}
                />
                <p className="text-sm font-medium">{token.name}</p>
                <p className="text-xs text-muted-foreground">{token.desc}</p>
                <code className="text-[11px] text-muted-foreground font-mono block">
                  {token.value}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  10. Typography Scale                                              */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Typography Scale"
          description="Tailwind CSS font-size utilities from text-xs to text-4xl with their rendered preview."
        />
        <CardContent>
          <div className="space-y-4">
            {typographyScale.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline gap-4 border-b pb-3 last:border-b-0 last:pb-0"
              >
                <code className="text-xs font-mono text-muted-foreground w-16 sm:w-20 shrink-0">
                  {item.name}
                </code>
                <p className={`${item.class} font-medium truncate`}>
                  {item.sample}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------ */}
      {/*  11. Spacing Scale                                                 */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Spacing Scale"
          description="Standard spacing values used for margin, padding, and gap utilities throughout the system."
        />
        <CardContent>
          <div className="space-y-3">
            {spacingScale.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <code className="text-xs font-mono text-muted-foreground w-8 shrink-0 text-right">
                  {item.name}
                </code>
                <div
                  className="h-6 rounded-sm bg-primary"
                  style={{ width: item.rem }}
                />
                <span className="text-xs text-muted-foreground">
                  {item.rem} ({item.px})
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* ------------------------------------------------------------------ */}
      {/*  12. Dark Mode Preview                                             */}
      {/* ------------------------------------------------------------------ */}
      <Card>
        <SectionHeading
          title="Dark Mode Support"
          description="All tokens above automatically adapt to dark mode. Toggle the theme to preview."
        />
        <CardContent>
          <div className="flex items-start gap-4 rounded-lg border bg-muted/50 p-4">
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">/</span>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 space-y-2">
              <p className="text-sm leading-relaxed">
                This design system uses the{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                  .dark
                </code>{" "}
                class strategy with OKLCh color values that ensure perceptual
                consistency between light and dark themes. Each country theme
                also defines adjusted dark-mode primary colors for optimal
                contrast.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use the theme switcher in the application header to toggle
                between modes and observe how all tokens on this page respond in
                real time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
