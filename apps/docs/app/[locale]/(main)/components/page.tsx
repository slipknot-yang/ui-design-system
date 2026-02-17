import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { componentCategories, totalComponents } from "@/lib/component-registry";
import { CodeBlock } from "@/components/code-block";

export default async function ComponentsPage({
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
        <h1 className="text-2xl font-bold tracking-tight">
          {tNav("components")}
        </h1>
        <p className="text-muted-foreground mt-1">
          All <Badge variant="secondary">{totalComponents}</Badge> installed
          shadcn/ui components from{" "}
          <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded">
            @workspace/ui/components/
          </code>
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {componentCategories.map((cat) => (
          <Card key={cat.category}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{cat.category}</CardTitle>
                <Badge variant="outline">{cat.items.length}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {cat.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/components/${item.slug}`}
                    className="flex items-center gap-2 rounded-md border p-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium">{item.name}</span>
                    <code className="ml-auto text-xs text-muted-foreground font-mono hidden sm:inline">
                      {item.slug}
                    </code>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Import Example</CardTitle>
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
