import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { componentCategories, totalComponents } from "@/lib/component-registry";
import { CodeBlock } from "@/components/code-block";
import {
  LayoutGrid,
  FormInput,
  Table2,
  MessageSquare,
  Compass,
  type LucideIcon,
} from "lucide-react";

export default async function ComponentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("nav");
  const tComp = await getTranslations("components");

  const categoryMeta: Record<
    string,
    { icon: LucideIcon; description: string; color: string }
  > = {
    Layout: {
      icon: LayoutGrid,
      description: tComp("layoutDesc"),
      color: "bg-blue-500",
    },
    Forms: {
      icon: FormInput,
      description: tComp("formsDesc"),
      color: "bg-emerald-500",
    },
    "Data Display": {
      icon: Table2,
      description: tComp("dataDisplayDesc"),
      color: "bg-amber-500",
    },
    Feedback: {
      icon: MessageSquare,
      description: tComp("feedbackDesc"),
      color: "bg-rose-500",
    },
    Navigation: {
      icon: Compass,
      description: tComp("navigationDesc"),
      color: "bg-violet-500",
    },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {tNav("components")}
        </h1>
        <p className="text-muted-foreground mt-1">
          <Badge variant="secondary">{totalComponents}</Badge>{" "}
          {tComp("installed")}{" "}
          <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded">
            @workspace/ui/components/
          </code>
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {componentCategories.map((cat) => {
          const meta = categoryMeta[cat.category];
          const Icon = meta?.icon;

          return (
            <Card key={cat.category}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
                    <CardTitle className="text-base">{cat.category}</CardTitle>
                  </div>
                  <Badge variant="outline">{cat.items.length}</Badge>
                </div>
                {meta && (
                  <CardDescription className="text-sm text-muted-foreground">
                    {meta.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/components/${item.slug}`}
                      className="flex items-center gap-2 rounded-md border p-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <div
                        className={`h-2 w-2 shrink-0 rounded-full ${meta?.color ?? "bg-primary"}`}
                      />
                      <span className="font-medium">{item.name}</span>
                      <code className="ml-auto text-xs text-muted-foreground font-mono hidden sm:inline">
                        {item.slug}
                      </code>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Separator />

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{tComp("importExample")}</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={`import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table";`}
            lang="tsx"
          />
        </CardContent>
      </Card>
    </div>
  );
}
