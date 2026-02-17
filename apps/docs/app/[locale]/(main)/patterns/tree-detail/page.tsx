import { getTranslations, setRequestLocale } from "next-intl/server";
import { TreeDetailView } from "@/components/patterns/tree-detail-view";

export default async function TreeDetailPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patterns");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("treeDetail.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("treeDetail.description")}
        </p>
      </div>
      <TreeDetailView />
    </div>
  );
}
