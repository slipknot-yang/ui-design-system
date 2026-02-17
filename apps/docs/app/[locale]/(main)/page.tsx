import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { CodeBlock } from "@/components/code-block";
import {
  Component,
  Globe,
  Languages,
  Blocks,
  Palette,
  ArrowRight,
  Package,
  Terminal,
  FolderTree,
  Code2,
  Paintbrush,
  Shield,
} from "lucide-react";
import { CupiaLogo } from "@/components/cupia-logo";

const techStackItems = [
  "Next.js 16",
  "shadcn/ui",
  "Tailwind CSS v4",
  "Radix UI",
  "TypeScript",
  "Turborepo",
];

const featureCards = [
  {
    key: "components" as const,
    value: "51",
    icon: Component,
    href: "/components",
  },
  { key: "countryThemes" as const, value: "10", icon: Globe, href: "/themes" },
  { key: "languages" as const, value: "7", icon: Languages, href: "/i18n" },
  {
    key: "uiPatterns" as const,
    value: "7",
    icon: Blocks,
    href: "/patterns/search-table",
  },
];

const patternLinks = [
  { key: "searchTable", href: "/patterns/search-table" },
  { key: "advancedSearch", href: "/patterns/advanced-search" },
  { key: "masterDetail", href: "/patterns/master-detail" },
  { key: "complexForm", href: "/patterns/complex-form" },
  { key: "calendar", href: "/patterns/calendar" },
  { key: "workflow", href: "/patterns/workflow" },
  { key: "dashboard", href: "/patterns/dashboard" },
] as const;

const installCode = `# Clone repository
git clone https://github.com/slipknot-yang/ui-design-system.git
cd ui-design-system

# Install dependencies
pnpm install

# Run dev server
pnpm dev --filter docs

# Build
pnpm turbo build`;

const structureCode = `ui-design-system/
\u251C\u2500\u2500 apps/docs/              # Next.js docs site
\u2502   \u251C\u2500\u2500 app/[locale]/       # Locale-based routing
\u2502   \u251C\u2500\u2500 components/         # App components
\u2502   \u2514\u2500\u2500 i18n/messages/      # Translation files (7 languages)
\u251C\u2500\u2500 packages/ui/            # @workspace/ui component library
\u2502   \u251C\u2500\u2500 src/components/     # 51 shadcn components
\u2502   \u2514\u2500\u2500 src/styles/         # globals.css (OKLCh themes)
\u2514\u2500\u2500 package.json            # pnpm workspace root`;

const importCode = `import { Button } from "@workspace/ui/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Badge } from "@workspace/ui/components/badge";`;

const usageCode = `import { Button } from "@workspace/ui/components/button";
import {
  Card, CardHeader, CardTitle, CardContent,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

export function DeclarationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Import Declaration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">HS 8471.30</Badge>
          <Badge>Cleared</Badge>
        </div>
        <Button className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
}`;

const themeCode = `:root {
  --background: 0 0% 100%;        /* oklch(1 0 0) */
  --foreground: 240 10% 3.9%;     /* oklch(0.145 0.017 285.823) */
  --primary: 240 5.9% 10%;        /* oklch(0.205 0.015 285.823) */
  --secondary: 240 4.8% 95.9%;    /* oklch(0.97 0.001 285.823) */
  --accent: 240 4.8% 95.9%;       /* oklch(0.97 0.001 285.823) */
  --radius: 0.625rem;
}

/* Country theme example */
[data-country-theme="ec"] {
  --primary: 221 83% 53%;         /* Ecuador blue */
}`;

const i18nCode = `import { useTranslations } from "next-intl";

export function SearchForm() {
  const t = useTranslations("common");
  const tc = useTranslations("customs");

  return (
    <form className="space-y-4">
      <Input placeholder={t("searchPlaceholder")} />
      <Button>{t("search")}</Button>
      <p>{tc("declarationNo")}</p>
    </form>
  );
}`;

const i18nJsonCode = `// apps/docs/i18n/messages/ko.json
{
  "common": {
    "search": "\uAC80\uC0C9",
    "save": "\uC800\uC7A5",
    "delete": "\uC0AD\uC81C"
  },
  "customs": {
    "declarationNo": "\uC2E0\uACE0\uBC88\uD638",
    "hsCode": "HS \uCF54\uB4DC"
  }
}`;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("guide");
  const tNav = await getTranslations("nav");
  const tPatterns = await getTranslations("patterns");

  return (
    <div className="space-y-8">
      {/* ================================================================== */}
      {/*  Hero Section                                                       */}
      {/* ================================================================== */}
      <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 via-background to-accent/5 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl space-y-4">
          <CupiaLogo
            size="lg"
            className="mx-auto h-16 w-16 rounded-2xl shadow-lg"
          />
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heroTitle")}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t("heroDescription")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {techStackItems.map((item) => (
              <Badge key={item} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button asChild>
              <Link href="/components">
                <Component className="me-2 h-4 w-4" />
                {t("exploreComponents")}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard">
                {tNav("dashboard")}
                <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/*  Key Features                                                       */}
      {/* ================================================================== */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map(({ key, value, icon: Icon, href }) => (
          <Link key={key} href={href}>
            <Card className="transition-colors hover:bg-accent/50 cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs text-muted-foreground">{t(key)}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Separator />

      {/* ================================================================== */}
      {/*  1. Introduction                                                    */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="h-4 w-4 text-muted-foreground" />
            {t("introTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("introDescription")}
          </p>
        </CardContent>
      </Card>

      {/* ================================================================== */}
      {/*  2. Installation                                                    */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Terminal className="h-4 w-4 text-muted-foreground" />
            {t("installationTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">
              {t("prerequisitesTitle")}: Node.js 18+, pnpm 9+
            </p>
          </div>
          <CodeBlock code={installCode} lang="bash" />
        </CardContent>
      </Card>

      {/* ================================================================== */}
      {/*  3. Project Structure                                               */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <FolderTree className="h-4 w-4 text-muted-foreground" />
            {t("projectStructureTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={structureCode} lang="plaintext" />
        </CardContent>
      </Card>

      {/* ================================================================== */}
      {/*  4. Component Usage                                                 */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Code2 className="h-4 w-4 text-muted-foreground" />
            {t("componentUsageTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              {t("importPatternTitle")}
            </p>
            <CodeBlock code={importCode} lang="tsx" />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              {t("componentExample")}
            </p>
            <CodeBlock code={usageCode} lang="tsx" />
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* ================================================================== */}
      {/*  5. Theming                                                         */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Paintbrush className="h-4 w-4 text-muted-foreground" />
            {t("themingTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("themingDescription")}
          </p>
          <CodeBlock code={themeCode} lang="css" />
        </CardContent>
      </Card>

      {/* ================================================================== */}
      {/*  6. i18n                                                            */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Languages className="h-4 w-4 text-muted-foreground" />
            {t("i18nTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("i18nDescription")}
          </p>
          <CodeBlock code={i18nCode} lang="tsx" />
          <CodeBlock code={i18nJsonCode} lang="json" />
        </CardContent>
      </Card>

      <Separator />

      {/* ================================================================== */}
      {/*  7. UI Patterns                                                     */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Blocks className="h-4 w-4 text-muted-foreground" />
            {t("patternsTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            {t("patternsDescription")}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {patternLinks.map(({ key, href }) => (
              <Link key={key} href={href}>
                <div className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">
                      {tPatterns(`${key}.title`)}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {tPatterns(`${key}.description`)}
                    </p>
                  </div>
                  <ArrowRight className="ms-2 h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ================================================================== */}
      {/*  8. Next Steps                                                      */}
      {/* ================================================================== */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{t("nextStepsTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto py-3" asChild>
              <Link href="/components">
                <Package className="me-2 h-4 w-4" />
                {t("exploreComponents")}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-3" asChild>
              <Link href="/themes">
                <Palette className="me-2 h-4 w-4" />
                {t("exploreThemes")}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-3" asChild>
              <Link href="/i18n">
                <Languages className="me-2 h-4 w-4" />
                {t("exploreI18n")}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-3" asChild>
              <Link href="/patterns/search-table">
                <Blocks className="me-2 h-4 w-4" />
                {t("explorePatterns")}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
