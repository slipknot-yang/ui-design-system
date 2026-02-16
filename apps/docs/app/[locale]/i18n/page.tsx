import { useTranslations, useLocale } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Separator } from "@workspace/ui/components/separator";

const supportedLocales = [
  { code: "ko", name: "Korean", nativeName: "한국어", rtl: false },
  { code: "en", name: "English", nativeName: "English", rtl: false },
  { code: "es", name: "Spanish", nativeName: "Español", rtl: false },
  { code: "fr", name: "French", nativeName: "Français", rtl: false },
  { code: "ar", name: "Arabic", nativeName: "العربية", rtl: true },
  { code: "ja", name: "Japanese", nativeName: "日本語", rtl: false },
  { code: "zh", name: "Chinese", nativeName: "中文", rtl: false },
];

const translationNamespaces = [
  {
    namespace: "common",
    keyCount: 23,
    description: "Shared UI labels: buttons, actions, status messages",
  },
  {
    namespace: "nav",
    keyCount: 12,
    description: "Navigation and sidebar menu items",
  },
  {
    namespace: "dashboard",
    keyCount: 8,
    description: "Dashboard-specific labels and metrics",
  },
  {
    namespace: "patterns",
    keyCount: 17,
    description: "Pattern catalog titles and descriptions",
  },
  {
    namespace: "customs",
    keyCount: 13,
    description: "Customs domain terminology",
  },
];

export default function I18nPage(): React.JSX.Element {
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tc = useTranslations("customs");
  const locale = useLocale();

  const currentLocaleInfo = supportedLocales.find((l) => l.code === locale);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{tNav("i18n")}</h1>
        <p className="text-muted-foreground mt-1">
          Internationalization configuration and translation status for the
          CUPIA Design System
        </p>
      </div>

      <Separator />

      {/* Current Locale Info */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Current Locale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-md border p-3 space-y-1">
              <p className="text-xs text-muted-foreground">Locale Code</p>
              <p className="text-lg font-mono font-bold">{locale}</p>
            </div>
            <div className="rounded-md border p-3 space-y-1">
              <p className="text-xs text-muted-foreground">Language Name</p>
              <p className="text-lg font-medium">
                {currentLocaleInfo?.name ?? locale}
              </p>
            </div>
            <div className="rounded-md border p-3 space-y-1">
              <p className="text-xs text-muted-foreground">Native Name</p>
              <p className="text-lg font-medium">
                {currentLocaleInfo?.nativeName ?? locale}
              </p>
            </div>
            <div className="rounded-md border p-3 space-y-1">
              <p className="text-xs text-muted-foreground">
                Text Direction (RTL)
              </p>
              <div className="flex items-center gap-2">
                <Badge
                  variant={currentLocaleInfo?.rtl ? "destructive" : "secondary"}
                >
                  {currentLocaleInfo?.rtl ? "RTL" : "LTR"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {currentLocaleInfo?.rtl ? "Right-to-Left" : "Left-to-Right"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supported Locales */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Supported Locales</CardTitle>
            <Badge variant="outline">{supportedLocales.length} languages</Badge>
          </div>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Code</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Native Name</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead>{tCommon("language")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supportedLocales.map((loc) => (
              <TableRow
                key={loc.code}
                className={loc.code === locale ? "bg-muted/50" : ""}
              >
                <TableCell className="font-mono font-medium">
                  {loc.code}
                  {loc.code === locale && (
                    <Badge variant="default" className="ml-2">
                      Active
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{loc.name}</TableCell>
                <TableCell>{loc.nativeName}</TableCell>
                <TableCell>
                  <Badge variant={loc.rtl ? "destructive" : "secondary"}>
                    {loc.rtl ? "RTL" : "LTR"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    /i18n/messages/{loc.code}.json
                  </code>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Translation Namespaces */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Translation Namespaces</CardTitle>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Namespace</TableHead>
              <TableHead className="w-24">Keys</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Usage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {translationNamespaces.map((ns) => (
              <TableRow key={ns.namespace}>
                <TableCell className="font-mono font-medium">
                  {ns.namespace}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{ns.keyCount}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {ns.description}
                </TableCell>
                <TableCell>
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    useTranslations(&quot;{ns.namespace}&quot;)
                  </code>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Separator />

      {/* Live Translation Examples */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Live Translation Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">common namespace</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  "search",
                  "reset",
                  "save",
                  "delete",
                  "cancel",
                  "confirm",
                  "close",
                  "new",
                  "edit",
                  "export",
                  "import",
                  "loading",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-md border px-3 py-2"
                  >
                    <code className="text-xs text-muted-foreground font-mono">
                      {key}
                    </code>
                    <span className="text-sm font-medium">
                      {tCommon(key as any)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-2">customs namespace</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  "hsCode",
                  "declarationNo",
                  "declarationType",
                  "customsOffice",
                  "status",
                  "declarer",
                  "importer",
                  "exporter",
                  "country",
                  "currency",
                  "amount",
                  "weight",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-md border px-3 py-2"
                  >
                    <code className="text-xs text-muted-foreground font-mono">
                      {key}
                    </code>
                    <span className="text-sm font-medium">
                      {tc(key as any)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
