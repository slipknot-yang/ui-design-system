"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { Progress } from "@workspace/ui/components/progress";
import {
  MoreHorizontal,
  Eye,
  Check,
  X,
  TableIcon,
  LayoutGrid,
  Clock,
  CheckCircle2,
  XCircle,
  Circle,
  ArrowRight,
  User,
  Calendar,
} from "lucide-react";

type WorkflowStatus = "Pending" | "Under Review" | "Approved" | "Rejected";

interface WorkflowItem {
  id: string;
  declarationNo: string;
  title: string;
  requester: string;
  currentStep: number;
  totalSteps: number;
  status: WorkflowStatus;
  date: string;
  steps: StepInfo[];
}

interface StepInfo {
  name: string;
  approver: string;
  date: string;
  result: "Approved" | "Rejected" | "Waiting" | "Skipped";
}

const statusStyles: Record<WorkflowStatus, string> = {
  Pending:
    "bg-amber-500/15 text-amber-700 border-amber-500/25 dark:text-amber-400",
  "Under Review":
    "bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400",
  Approved:
    "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400",
  Rejected: "bg-red-500/15 text-red-700 border-red-500/25 dark:text-red-400",
};

const kanbanColumns: {
  key: WorkflowStatus;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "Pending",
    label: "Pending",
    icon: <Clock className="h-4 w-4 text-amber-500" />,
  },
  {
    key: "Under Review",
    label: "Under Review",
    icon: <Circle className="h-4 w-4 text-blue-500" />,
  },
  {
    key: "Approved",
    label: "Approved",
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
  },
  {
    key: "Rejected",
    label: "Rejected",
    icon: <XCircle className="h-4 w-4 text-red-500" />,
  },
];

const workflowData: WorkflowItem[] = [
  {
    id: "WF-001",
    declarationNo: "D2026-WF-00101",
    title: "Samsung Import Clearance",
    requester: "Kim Soo-hyun",
    currentStep: 2,
    totalSteps: 4,
    status: "Under Review",
    date: "2026-02-14",
    steps: [
      {
        name: "Document Submission",
        approver: "System",
        date: "2026-02-14 09:00",
        result: "Approved",
      },
      {
        name: "Initial Review",
        approver: "Kim Young-hee",
        date: "2026-02-14 11:30",
        result: "Approved",
      },
      {
        name: "Team Lead Review",
        approver: "Pending...",
        date: "-",
        result: "Waiting",
      },
      {
        name: "Director Approval",
        approver: "-",
        date: "-",
        result: "Waiting",
      },
    ],
  },
  {
    id: "WF-002",
    declarationNo: "D2026-WF-00102",
    title: "LG Electronics Parts Import",
    requester: "Lee Min-ho",
    currentStep: 3,
    totalSteps: 4,
    status: "Under Review",
    date: "2026-02-13",
    steps: [
      {
        name: "Document Submission",
        approver: "System",
        date: "2026-02-13 08:45",
        result: "Approved",
      },
      {
        name: "Initial Review",
        approver: "Park Soo-jin",
        date: "2026-02-13 10:00",
        result: "Approved",
      },
      {
        name: "Team Lead Review",
        approver: "Choi Dong-wook",
        date: "2026-02-13 14:20",
        result: "Approved",
      },
      {
        name: "Director Approval",
        approver: "Pending...",
        date: "-",
        result: "Waiting",
      },
    ],
  },
  {
    id: "WF-003",
    declarationNo: "D2026-WF-00098",
    title: "Hyundai Motor Export License",
    requester: "Park Seo-joon",
    currentStep: 4,
    totalSteps: 4,
    status: "Approved",
    date: "2026-02-12",
    steps: [
      {
        name: "Document Submission",
        approver: "System",
        date: "2026-02-12 09:15",
        result: "Approved",
      },
      {
        name: "Initial Review",
        approver: "Lee Soo-jin",
        date: "2026-02-12 10:30",
        result: "Approved",
      },
      {
        name: "Team Lead Review",
        approver: "Kim Dong-hyun",
        date: "2026-02-12 13:45",
        result: "Approved",
      },
      {
        name: "Director Approval",
        approver: "Park Young-soo",
        date: "2026-02-12 16:00",
        result: "Approved",
      },
    ],
  },
  {
    id: "WF-004",
    declarationNo: "D2026-WF-00095",
    title: "Lotte Food Import Quota",
    requester: "Choi Yun-ah",
    currentStep: 2,
    totalSteps: 4,
    status: "Rejected",
    date: "2026-02-11",
    steps: [
      {
        name: "Document Submission",
        approver: "System",
        date: "2026-02-11 09:00",
        result: "Approved",
      },
      {
        name: "Initial Review",
        approver: "Jung Hae-in",
        date: "2026-02-11 11:00",
        result: "Rejected",
      },
      { name: "Team Lead Review", approver: "-", date: "-", result: "Skipped" },
      {
        name: "Director Approval",
        approver: "-",
        date: "-",
        result: "Skipped",
      },
    ],
  },
  {
    id: "WF-005",
    declarationNo: "D2026-WF-00103",
    title: "SK Chemical Raw Materials",
    requester: "Gong Yoo",
    currentStep: 0,
    totalSteps: 4,
    status: "Pending",
    date: "2026-02-15",
    steps: [
      {
        name: "Document Submission",
        approver: "Pending...",
        date: "-",
        result: "Waiting",
      },
      { name: "Initial Review", approver: "-", date: "-", result: "Waiting" },
      { name: "Team Lead Review", approver: "-", date: "-", result: "Waiting" },
      {
        name: "Director Approval",
        approver: "-",
        date: "-",
        result: "Waiting",
      },
    ],
  },
  {
    id: "WF-006",
    declarationNo: "D2026-WF-00104",
    title: "CJ Logistics Transit Permit",
    requester: "Song Joong-ki",
    currentStep: 0,
    totalSteps: 4,
    status: "Pending",
    date: "2026-02-15",
    steps: [
      {
        name: "Document Submission",
        approver: "Pending...",
        date: "-",
        result: "Waiting",
      },
      { name: "Initial Review", approver: "-", date: "-", result: "Waiting" },
      { name: "Team Lead Review", approver: "-", date: "-", result: "Waiting" },
      {
        name: "Director Approval",
        approver: "-",
        date: "-",
        result: "Waiting",
      },
    ],
  },
  {
    id: "WF-007",
    declarationNo: "D2026-WF-00099",
    title: "POSCO Steel Export",
    requester: "Hyun Bin",
    currentStep: 4,
    totalSteps: 4,
    status: "Approved",
    date: "2026-02-12",
    steps: [
      {
        name: "Document Submission",
        approver: "System",
        date: "2026-02-12 08:30",
        result: "Approved",
      },
      {
        name: "Initial Review",
        approver: "Kang Ha-neul",
        date: "2026-02-12 09:45",
        result: "Approved",
      },
      {
        name: "Team Lead Review",
        approver: "Yoo Ah-in",
        date: "2026-02-12 11:20",
        result: "Approved",
      },
      {
        name: "Director Approval",
        approver: "Song Kang-ho",
        date: "2026-02-12 15:30",
        result: "Approved",
      },
    ],
  },
];

export function WorkflowBoard() {
  const [view, setView] = useState<"table" | "board">("table");
  const [selectedId, setSelectedId] = useState<string>("WF-001");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const selectedItem =
    workflowData.find((w) => w.id === selectedId) ?? workflowData[0]!;

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex items-center justify-between">
        <Tabs
          value={view}
          onValueChange={(v) => setView(v as "table" | "board")}
        >
          <TabsList>
            <TabsTrigger value="table" className="gap-1.5">
              <TableIcon className="h-4 w-4" />
              Table View
            </TabsTrigger>
            <TabsTrigger value="board" className="gap-1.5">
              <LayoutGrid className="h-4 w-4" />
              Board View
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="text-sm text-muted-foreground">
          {workflowData.length} items
        </div>
      </div>

      {/* Table View */}
      {view === "table" && (
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">
                    <Checkbox
                      checked={
                        workflowData.length > 0 &&
                        workflowData.every((w) => selected.has(w.id))
                      }
                      onCheckedChange={() => {
                        if (workflowData.every((w) => selected.has(w.id)))
                          setSelected(new Set());
                        else
                          setSelected(new Set(workflowData.map((w) => w.id)));
                      }}
                    />
                  </TableHead>
                  <TableHead>Declaration No.</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Requester</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-10">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workflowData.map((row) => (
                  <TableRow
                    key={row.id}
                    className={`cursor-pointer ${row.id === selectedId ? "bg-muted/50" : ""}`}
                    onClick={() => setSelectedId(row.id)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selected.has(row.id)}
                        onCheckedChange={() => {
                          const next = new Set(selected);
                          if (next.has(row.id)) next.delete(row.id);
                          else next.add(row.id);
                          setSelected(next);
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      {row.declarationNo}
                    </TableCell>
                    <TableCell className="font-medium">{row.title}</TableCell>
                    <TableCell className="text-sm">{row.requester}</TableCell>
                    <TableCell className="w-32">
                      <div className="flex items-center gap-2">
                        <Progress
                          value={(row.currentStep / row.totalSteps) * 100}
                          className="h-2"
                        />
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {row.currentStep}/{row.totalSteps}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusStyles[row.status]}>
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground tabular-nums">
                      {row.date}
                    </TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => setSelectedId(row.id)}
                          >
                            <Eye className="me-2 h-3.5 w-3.5" />
                            View Detail
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Check className="me-2 h-3.5 w-3.5" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <X className="me-2 h-3.5 w-3.5" />
                            Reject
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Board View (Kanban) */}
      {view === "board" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kanbanColumns.map((col) => {
            const items = workflowData.filter((w) => w.status === col.key);
            return (
              <div key={col.key} className="space-y-3">
                <div className="flex items-center gap-2 px-1">
                  {col.icon}
                  <span className="text-sm font-medium">{col.label}</span>
                  <Badge
                    variant="secondary"
                    className="ms-auto text-[10px] px-1.5 py-0"
                  >
                    {items.length}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {items.map((item) => (
                    <Card
                      key={item.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        item.id === selectedId ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedId(item.id)}
                    >
                      <CardContent className="p-3 space-y-2">
                        <div className="flex items-start justify-between">
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {item.declarationNo}
                          </span>
                        </div>
                        <p className="text-sm font-medium leading-tight">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(item.currentStep / item.totalSteps) * 100}
                            className="h-1.5 flex-1"
                          />
                          <span className="text-[10px] text-muted-foreground">
                            {item.currentStep}/{item.totalSteps}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {item.requester}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {items.length === 0 && (
                    <div className="rounded-lg border-2 border-dashed p-4 text-center text-xs text-muted-foreground">
                      No items
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Panel with Visual Stepper */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">
                {selectedItem.declarationNo} — {selectedItem.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-0.5">
                Requested by {selectedItem.requester} on {selectedItem.date}
              </p>
            </div>
            <div className="flex gap-2">
              {selectedItem.status === "Under Review" && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm">
                        <Check className="me-1.5 h-4 w-4" />
                        Approve
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Approve Workflow</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to approve{" "}
                          <strong>{selectedItem.declarationNo}</strong>? This
                          action will advance the workflow to the next step.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Confirm Approval</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">
                        <X className="me-1.5 h-4 w-4" />
                        Reject
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Reject Workflow</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to reject{" "}
                          <strong>{selectedItem.declarationNo}</strong>? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                          Confirm Rejection
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Visual Stepper */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              {selectedItem.steps.map((step, i) => {
                const isCompleted = step.result === "Approved";
                const isRejected = step.result === "Rejected";
                const isCurrent =
                  step.result === "Waiting" &&
                  (i === 0 || selectedItem.steps[i - 1]?.result === "Approved");
                const isSkipped = step.result === "Skipped";

                return (
                  <div key={i} className="flex items-center flex-1">
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                          isCompleted
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : isRejected
                              ? "border-red-500 bg-red-500 text-white"
                              : isCurrent
                                ? "border-primary bg-primary/10 text-primary"
                                : isSkipped
                                  ? "border-muted-foreground/30 bg-muted text-muted-foreground"
                                  : "border-muted-foreground/30 text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="h-5 w-5" />
                        ) : isRejected ? (
                          <X className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-semibold">{i + 1}</span>
                        )}
                      </div>
                      <span
                        className={`text-xs font-medium text-center max-w-[80px] ${
                          isCurrent ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {step.approver === "-" || step.approver === "Pending..."
                          ? step.approver
                          : step.approver}
                      </span>
                    </div>
                    {i < selectedItem.steps.length - 1 && (
                      <div className="flex-1 mx-2 mb-8">
                        <div
                          className={`h-0.5 w-full ${
                            selectedItem.steps[i]?.result === "Approved"
                              ? "bg-emerald-500"
                              : selectedItem.steps[i]?.result === "Rejected"
                                ? "bg-red-500"
                                : "bg-muted-foreground/20"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step History Table */}
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
              {selectedItem.steps.map((step, i) => (
                <TableRow key={i}>
                  <TableCell className="font-mono">{i + 1}</TableCell>
                  <TableCell className="font-medium">{step.name}</TableCell>
                  <TableCell className="text-sm">{step.approver}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {step.date}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        step.result === "Approved"
                          ? statusStyles.Approved
                          : step.result === "Rejected"
                            ? statusStyles.Rejected
                            : step.result === "Waiting"
                              ? statusStyles.Pending
                              : "bg-muted text-muted-foreground"
                      }
                    >
                      {step.result}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
