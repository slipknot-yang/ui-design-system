import { getTranslations, setRequestLocale } from "next-intl/server";
import { WorkflowBoard } from "@/components/patterns/workflow-board";

export default async function WorkflowPage({
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
          {t("workflow.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("workflow.description")}
        </p>
      </div>
      <WorkflowBoard />
    </div>
  );
}
