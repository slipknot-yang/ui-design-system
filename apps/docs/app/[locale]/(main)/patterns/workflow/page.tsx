import { useTranslations } from "next-intl";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { Progress } from "@workspace/ui/components/progress";

const workflowData = [
  {
    id: 1,
    declarationNo: "D2026-WF-00101",
    title: "Samsung Import Clearance",
    requester: "Kim Soo-hyun",
    currentStep: "Team Lead Review",
    stepsCompleted: 2,
    totalSteps: 4,
    status: "In Progress",
    date: "2026-02-14",
  },
  {
    id: 2,
    declarationNo: "D2026-WF-00102",
    title: "LG Electronics Parts Import",
    requester: "Lee Min-ho",
    currentStep: "Director Approval",
    stepsCompleted: 3,
    totalSteps: 4,
    status: "In Progress",
    date: "2026-02-13",
  },
  {
    id: 3,
    declarationNo: "D2026-WF-00098",
    title: "Hyundai Motor Export License",
    requester: "Park Seo-joon",
    currentStep: "Completed",
    stepsCompleted: 4,
    totalSteps: 4,
    status: "Approved",
    date: "2026-02-12",
  },
  {
    id: 4,
    declarationNo: "D2026-WF-00095",
    title: "Lotte Food Import Quota",
    requester: "Choi Yun-ah",
    currentStep: "Rejected at Step 2",
    stepsCompleted: 2,
    totalSteps: 4,
    status: "Rejected",
    date: "2026-02-11",
  },
];

function statusVariant(status: string) {
  switch (status) {
    case "Approved":
      return "default" as const;
    case "In Progress":
      return "secondary" as const;
    case "Rejected":
      return "destructive" as const;
    default:
      return "outline" as const;
  }
}

const selectedItem = workflowData[0]!;

const approvalHistory = [
  {
    step: 1,
    name: "Document Submission",
    approver: "System",
    date: "2026-02-14 09:00",
    result: "Auto-approved",
  },
  {
    step: 2,
    name: "Initial Review",
    approver: "Kim Young-hee (Reviewer)",
    date: "2026-02-14 11:30",
    result: "Approved",
  },
  {
    step: 3,
    name: "Team Lead Review",
    approver: "Pending...",
    date: "-",
    result: "Waiting",
  },
  {
    step: 4,
    name: "Director Approval",
    approver: "-",
    date: "-",
    result: "-",
  },
];

export default function WorkflowPage(): React.JSX.Element {
  const t = useTranslations("patterns");
  const tc = useTranslations("customs");
  const tCommon = useTranslations("common");

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

      {/* Status Tabs + Table */}
      <Tabs defaultValue="in-progress">
        <TabsList>
          <TabsTrigger value="all">
            All{" "}
            <Badge variant="secondary" className="ml-1.5">
              4
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="in-progress">
            In Progress{" "}
            <Badge variant="secondary" className="ml-1.5">
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved{" "}
            <Badge variant="secondary" className="ml-1.5">
              1
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected{" "}
            <Badge variant="secondary" className="ml-1.5">
              1
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <WorkflowTable items={workflowData} tc={tc} />
        </TabsContent>
        <TabsContent value="in-progress">
          <WorkflowTable
            items={workflowData.filter((d) => d.status === "In Progress")}
            tc={tc}
          />
        </TabsContent>
        <TabsContent value="approved">
          <WorkflowTable
            items={workflowData.filter((d) => d.status === "Approved")}
            tc={tc}
          />
        </TabsContent>
        <TabsContent value="rejected">
          <WorkflowTable
            items={workflowData.filter((d) => d.status === "Rejected")}
            tc={tc}
          />
        </TabsContent>
      </Tabs>

      <Separator />

      {/* Detail Tabs below */}
      <Tabs defaultValue="detail">
        <TabsList>
          <TabsTrigger value="detail">Request Detail</TabsTrigger>
          <TabsTrigger value="history">Approval History</TabsTrigger>
        </TabsList>

        <TabsContent value="detail">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  {selectedItem.declarationNo} - {selectedItem.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="default">
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    Reject
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label>{tc("declarationNo")}</Label>
                  <Input defaultValue={selectedItem.declarationNo} readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input defaultValue={selectedItem.title} readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Requester</Label>
                  <Input defaultValue={selectedItem.requester} readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Current Step</Label>
                  <Input defaultValue={selectedItem.currentStep} readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Submitted Date</Label>
                  <Input defaultValue={selectedItem.date} readOnly />
                </div>
                <div className="space-y-2">
                  <Label>{tc("status")}</Label>
                  <Input defaultValue={selectedItem.status} readOnly />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Approval Steps</CardTitle>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Step</TableHead>
                  <TableHead>Step Name</TableHead>
                  <TableHead>Approver</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {approvalHistory.map((step) => (
                  <TableRow key={step.step}>
                    <TableCell className="font-mono">{step.step}</TableCell>
                    <TableCell className="font-medium">{step.name}</TableCell>
                    <TableCell>{step.approver}</TableCell>
                    <TableCell className="text-sm">{step.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          step.result === "Approved" ||
                          step.result === "Auto-approved"
                            ? "default"
                            : step.result === "Waiting"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {step.result}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function WorkflowTable({
  items,
  tc,
}: {
  items: typeof workflowData;
  tc: ReturnType<typeof useTranslations>;
}): React.JSX.Element {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{tc("declarationNo")}</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Requester</TableHead>
            <TableHead>Current Step</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>{tc("status")}</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
              className={row.id === 1 ? "bg-muted/50" : "cursor-pointer"}
            >
              <TableCell className="font-medium">{row.declarationNo}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.requester}</TableCell>
              <TableCell className="text-sm">{row.currentStep}</TableCell>
              <TableCell className="w-32">
                <div className="flex items-center gap-2">
                  <Progress
                    value={(row.stepsCompleted / row.totalSteps) * 100}
                    className="h-2"
                  />
                  <span className="text-xs text-muted-foreground">
                    {row.stepsCompleted}/{row.totalSteps}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={statusVariant(row.status)}>{row.status}</Badge>
              </TableCell>
              <TableCell className="text-sm">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
