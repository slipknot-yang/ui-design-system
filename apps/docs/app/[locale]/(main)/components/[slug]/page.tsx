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
          <CodeBlock code={component.importExample} lang="typescript" />
        </CardContent>
      </Card>

      {/* Live Preview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border p-6 flex items-center justify-center min-h-[120px]">
            <ComponentPreview slug={slug} />
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={component.codeExample} />
        </CardContent>
      </Card>
    </div>
  );
}
