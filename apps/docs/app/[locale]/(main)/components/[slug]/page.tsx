import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { getComponentBySlug, getAllSlugs } from "@/lib/component-registry";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "./preview";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{component.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight">
            {component.name}
          </h1>
          <Badge variant="outline">{component.category}</Badge>
        </div>
        <p className="text-muted-foreground mt-1">{component.description}</p>
      </div>

      <Separator />

      {/* Import */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Import</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={component.importExample} lang="tsx" />
        </CardContent>
      </Card>

      {/* Live Preview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-background p-6 flex items-center justify-center min-h-[120px]">
            <ComponentPreview slug={slug} />
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      {component.variants && component.variants.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Variants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {component.variants.map((variant) => (
                <Badge key={variant} variant="secondary">
                  {variant}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Props Table */}
      {component.props && component.props.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">API Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Prop</TableHead>
                    <TableHead className="w-[140px]">Type</TableHead>
                    <TableHead className="w-[80px]">Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {component.props.map((prop) => (
                    <TableRow key={prop.name}>
                      <TableCell>
                        <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                          {prop.name}
                        </code>
                        {prop.required && (
                          <span className="ml-1 text-destructive text-xs">
                            *
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        <code className="text-xs font-mono text-muted-foreground">
                          {prop.type}
                        </code>
                      </TableCell>
                      <TableCell>
                        {prop.default ? (
                          <code className="text-xs font-mono">
                            {prop.default}
                          </code>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            —
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {prop.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Code Example */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={component.codeExample} />
        </CardContent>
      </Card>

      {/* Accessibility */}
      {component.accessibility && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {component.accessibility}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Related Components */}
      {component.relatedComponents &&
        component.relatedComponents.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Related Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {component.relatedComponents.map((relatedSlug) => (
                  <Link
                    key={relatedSlug}
                    href={`/components/${relatedSlug}`}
                    className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {relatedSlug}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
    </div>
  );
}
