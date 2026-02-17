"use client";

import React from "react";
import Image from "next/image";
import {
  Search as SearchIcon,
  Mail as MailIcon,
  Download as DownloadIcon,
  Check as CheckIcon,
  Clock as ClockIcon,
  X as XIcon,
  Info as InfoIcon,
  AlertCircle as AlertCircleIcon,
  ChevronsUpDown,
  ArrowUpDown,
  MoreHorizontal,
  Pencil,
  Trash2,
  ChevronRight,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Eye,
  Star,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Grid3X3,
  List,
  CreditCard,
  Building2,
  Landmark,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Switch } from "@workspace/ui/components/switch";
import { Textarea } from "@workspace/ui/components/textarea";
import { Progress } from "@workspace/ui/components/progress";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Spinner } from "@workspace/ui/components/spinner";
import { Separator } from "@workspace/ui/components/separator";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Kbd } from "@workspace/ui/components/kbd";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card";
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
import { Toggle } from "@workspace/ui/components/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import { AspectRatio } from "@workspace/ui/components/aspect-ratio";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@workspace/ui/components/resizable";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp";
import { Calendar } from "@workspace/ui/components/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from "recharts";

/* ── Calendar helper components (stateful) ─────────────────────────── */

function CalendarPreview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

function CalendarRangePreview() {
  const [range, setRange] = React.useState<{
    from: Date | undefined;
    to?: Date | undefined;
  }>({
    from: new Date(),
    to: new Date(Date.now() + 5 * 86400000),
  });
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={(r) => r && setRange(r)}
      numberOfMonths={2}
      className="rounded-md border"
    />
  );
}

function CalendarMultiplePreview() {
  const [dates, setDates] = React.useState<Date[]>([
    new Date(),
    new Date(Date.now() + 2 * 86400000),
    new Date(Date.now() + 4 * 86400000),
  ]);
  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={(d) => d && setDates(d)}
      className="rounded-md border"
    />
  );
}

function CalendarDisabledPreview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const today = new Date();
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(d) =>
        d < new Date(today.getFullYear(), today.getMonth(), today.getDate())
      }
      className="rounded-md border"
    />
  );
}

function CalendarDatePickerPreview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-[260px] justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

function ComboboxWithCheckPreview() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "nuxt", label: "Nuxt" },
  ];
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          {value
            ? frameworks.find((f) => f.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((fw) => (
                <CommandItem
                  key={fw.value}
                  onSelect={() => {
                    setValue(fw.value);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={`mr-2 h-4 w-4 ${value === fw.value ? "opacity-100" : "opacity-0"}`}
                  />
                  {fw.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* ── Table helper components (stateful) ────────────────────────────── */

const tableInvoiceData = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  {
    id: "INV-003",
    status: "Overdue",
    method: "Bank Transfer",
    amount: "$350.00",
  },
  { id: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV-005", status: "Pending", method: "PayPal", amount: "$550.00" },
  { id: "INV-006", status: "Paid", method: "Bank Transfer", amount: "$200.00" },
  {
    id: "INV-007",
    status: "Overdue",
    method: "Credit Card",
    amount: "$175.00",
  },
  { id: "INV-008", status: "Pending", method: "PayPal", amount: "$625.00" },
  { id: "INV-009", status: "Paid", method: "Bank Transfer", amount: "$300.00" },
  {
    id: "INV-010",
    status: "Overdue",
    method: "Credit Card",
    amount: "$125.00",
  },
  { id: "INV-011", status: "Paid", method: "PayPal", amount: "$475.00" },
  {
    id: "INV-012",
    status: "Pending",
    method: "Bank Transfer",
    amount: "$380.00",
  },
];

function TableRadioPreview() {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);
  const data = tableInvoiceData.slice(0, 5);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px]" />
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow
            key={invoice.id}
            className={`cursor-pointer ${selectedRow === invoice.id ? "bg-muted" : ""}`}
            onClick={() => setSelectedRow(invoice.id)}
          >
            <TableCell>
              <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full border ${
                  selectedRow === invoice.id
                    ? "border-primary"
                    : "border-muted-foreground/30"
                }`}
              >
                {selectedRow === invoice.id && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </span>
            </TableCell>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.status === "Paid"
                    ? "outline"
                    : invoice.status === "Pending"
                      ? "secondary"
                      : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TablePaginationPreview() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(tableInvoiceData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = tableInvoiceData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === "Paid"
                      ? "outline"
                      : invoice.status === "Pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

function TableExpandablePreview() {
  const [expandedRows, setExpandedRows] = React.useState<Set<string>>(
    new Set(),
  );
  const data = tableInvoiceData.slice(0, 5);

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px]" />
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <React.Fragment key={invoice.id}>
            <TableRow>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => toggleRow(invoice.id)}
                >
                  {expandedRows.has(invoice.id) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </TableCell>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === "Paid"
                      ? "outline"
                      : invoice.status === "Pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
            {expandedRows.has(invoice.id) && (
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableCell colSpan={5} className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">
                        Invoice ID
                      </p>
                      <p>{invoice.id}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">
                        Payment Method
                      </p>
                      <p>{invoice.method}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">
                        Status
                      </p>
                      <p>{invoice.status}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">
                        Amount
                      </p>
                      <p className="font-semibold">{invoice.amount}</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}

function TableFilterPreview() {
  const [filters, setFilters] = React.useState({
    id: "",
    status: "",
    method: "",
  });
  const data = tableInvoiceData.slice(0, 5);
  const filteredData = data.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(filters.id.toLowerCase()) &&
      invoice.status.toLowerCase().includes(filters.status.toLowerCase()) &&
      invoice.method.toLowerCase().includes(filters.method.toLowerCase()),
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
        <TableRow className="hover:bg-transparent">
          <TableHead className="py-1">
            <Input
              placeholder="Filter..."
              className="h-7 text-xs"
              value={filters.id}
              onChange={(e) =>
                setFilters((f) => ({ ...f, id: e.target.value }))
              }
            />
          </TableHead>
          <TableHead className="py-1">
            <Input
              placeholder="Filter..."
              className="h-7 text-xs"
              value={filters.status}
              onChange={(e) =>
                setFilters((f) => ({ ...f, status: e.target.value }))
              }
            />
          </TableHead>
          <TableHead className="py-1">
            <Input
              placeholder="Filter..."
              className="h-7 text-xs"
              value={filters.method}
              onChange={(e) =>
                setFilters((f) => ({ ...f, method: e.target.value }))
              }
            />
          </TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.length > 0 ? (
          filteredData.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === "Paid"
                      ? "outline"
                      : invoice.status === "Pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-center text-muted-foreground"
            >
              No results found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const previews: Record<string, React.ReactNode> = {
  // Layout
  accordion: (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your theme.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  "aspect-ratio": (
    <div
      className="w-[300px] bg-muted rounded-md flex items-center justify-center"
      style={{ aspectRatio: "16/9" }}
    >
      <span className="text-muted-foreground text-sm">16:9</span>
    </div>
  ),

  card: (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
    </Card>
  ),

  collapsible: (
    <Collapsible className="w-full max-w-sm space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm">
          Toggle Content
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border px-4 py-3 text-sm">
          This content can be toggled.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),

  resizable: (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[100px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm font-semibold">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm font-semibold">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),

  "scroll-area": (
    <ScrollArea className="h-48 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm py-1">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),

  separator: (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),

  tabs: (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Account settings here.
      </TabsContent>
      <TabsContent value="password" className="text-sm text-muted-foreground">
        Password settings here.
      </TabsContent>
    </Tabs>
  ),

  // Forms
  button: (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),

  calendar: <CalendarPreview />,

  checkbox: (
    <div className="flex items-center space-x-2">
      <Checkbox id="preview-terms" />
      <label htmlFor="preview-terms" className="text-sm">
        Accept terms and conditions
      </label>
    </div>
  ),

  combobox: <ComboboxWithCheckPreview />,

  field: (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="preview-field">Email</Label>
      <Input id="preview-field" placeholder="email@example.com" />
      <p className="text-xs text-muted-foreground">Enter your email address</p>
    </div>
  ),

  input: (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="preview-email">Email</Label>
      <Input type="email" id="preview-email" placeholder="Email" />
    </div>
  ),

  "input-group": (
    <div className="w-full max-w-sm">
      <Input placeholder="Search..." />
    </div>
  ),

  "input-otp": (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),

  label: (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="preview-message">Your message</Label>
      <Textarea placeholder="Type your message here." id="preview-message" />
    </div>
  ),

  "radio-group": (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="preview-option-one" />
        <Label htmlFor="preview-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="preview-option-two" />
        <Label htmlFor="preview-option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),

  select: (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),

  switch: (
    <div className="flex items-center space-x-2">
      <Switch id="preview-airplane" />
      <Label htmlFor="preview-airplane">Airplane Mode</Label>
    </div>
  ),

  textarea: (
    <Textarea placeholder="Type your message here." className="max-w-sm" />
  ),

  toggle: (
    <Toggle aria-label="Toggle bold">
      <span className="font-bold">B</span>
    </Toggle>
  ),

  "toggle-group": (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <span className="font-bold">B</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <span className="italic">I</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <span className="underline">U</span>
      </ToggleGroupItem>
    </ToggleGroup>
  ),

  // Data Display
  avatar: (
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),

  badge: (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),

  chart: (
    <ChartContainer
      config={{ revenue: { label: "Revenue", color: "var(--chart-1)" } }}
      className="h-[250px] w-full max-w-md"
    >
      <BarChart
        data={[
          { month: "Jan", revenue: 186 },
          { month: "Feb", revenue: 305 },
          { month: "Mar", revenue: 237 },
          { month: "Apr", revenue: 273 },
          { month: "May", revenue: 209 },
          { month: "Jun", revenue: 314 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--chart-1)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),

  empty: (
    <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
      <p className="text-sm">No results found.</p>
    </div>
  ),

  item: (
    <div className="w-full max-w-sm space-y-2 border rounded-md p-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Label</span>
        <span className="font-medium">Value</span>
      </div>
      <Separator />
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Status</span>
        <Badge variant="outline">Active</Badge>
      </div>
    </div>
  ),

  kbd: (
    <div className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>C</Kbd>
    </div>
  ),

  progress: (
    <div className="w-full max-w-sm space-y-4">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),

  skeleton: (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),

  spinner: (
    <div className="flex gap-4 items-center">
      <Spinner />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  ),

  table: (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>
            <Badge variant="outline">Paid</Badge>
          </TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>
            <Badge variant="secondary">Pending</Badge>
          </TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),

  // Feedback
  alert: (
    <Alert className="max-w-md">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),

  "alert-dialog": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),

  dialog: (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Name" />
      </DialogContent>
    </Dialog>
  ),

  drawer: (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>Make changes to your profile.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),

  popover: (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),

  sheet: (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-email">Email</Label>
            <Input id="sheet-email" placeholder="you@example.com" />
          </div>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),

  sonner: (
    <Button variant="outline" onClick={() => alert("Toast: Event created!")}>
      Show Toast
    </Button>
  ),

  tooltip: (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),

  // Navigation
  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  carousel: (
    <div className="w-full max-w-sm px-10">
      <Carousel>
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{i}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),

  command: (
    <Command className="rounded-lg border w-full max-w-sm">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),

  "context-menu": (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[120px] w-[250px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>View Source</ContextMenuItem>
        <ContextMenuItem>Inspect</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),

  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  "hover-card": (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <p className="text-sm">
          The React Framework — created and maintained by @vercel.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),

  menubar: (
    <div className="flex gap-4 rounded-md border px-3 py-1.5 text-sm">
      <span className="cursor-pointer hover:text-foreground text-muted-foreground">
        File
      </span>
      <span className="cursor-pointer hover:text-foreground text-muted-foreground">
        Edit
      </span>
      <span className="cursor-pointer hover:text-foreground text-muted-foreground">
        View
      </span>
    </div>
  ),

  "navigation-menu": (
    <div className="flex gap-4 text-sm">
      <span className="text-foreground font-medium border-b-2 border-primary pb-1">
        Getting Started
      </span>
      <span className="text-muted-foreground pb-1">Components</span>
      <span className="text-muted-foreground pb-1">Themes</span>
    </div>
  ),

  pagination: (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),

  sidebar: (
    <div className="w-48 rounded-md border p-3 space-y-2 text-sm">
      <div className="font-medium">App Name</div>
      <Separator />
      <div className="text-muted-foreground hover:text-foreground cursor-pointer">
        Dashboard
      </div>
      <div className="text-muted-foreground hover:text-foreground cursor-pointer">
        Settings
      </div>
      <div className="text-muted-foreground hover:text-foreground cursor-pointer">
        Users
      </div>
    </div>
  ),
};

/* ────────────────────────────────────────────────────────────────────────────
 *  Example previews — keyed by "slug:exampleId"
 * ──────────────────────────────────────────────────────────────────────────── */
const examplePreviews: Record<string, React.ReactNode> = {
  // Button
  "button:variants": (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  "button:sizes": (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  ),
  "button:with-icon": (
    <div className="flex gap-2">
      <Button>
        <MailIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="outline">
        Download <DownloadIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
  "button:loading": (
    <Button disabled>
      <Spinner className="mr-2 h-4 w-4" />
      Please wait
    </Button>
  ),
  "button:as-link": (
    <Button asChild>
      <a href="#">Go to Dashboard</a>
    </Button>
  ),

  // Badge
  "badge:variants": (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  "badge:status-indicator": (
    <div className="flex gap-2">
      <Badge className="bg-green-500/10 text-green-600 border-green-200">
        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
        Active
      </Badge>
      <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-200">
        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-yellow-500 inline-block" />
        Pending
      </Badge>
      <Badge className="bg-red-500/10 text-red-600 border-red-200">
        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-red-500 inline-block" />
        Error
      </Badge>
    </div>
  ),
  "badge:with-icon": (
    <div className="flex gap-2">
      <Badge>
        <CheckIcon className="mr-1 h-3 w-3" /> Verified
      </Badge>
      <Badge variant="secondary">
        <ClockIcon className="mr-1 h-3 w-3" /> In Progress
      </Badge>
      <Badge variant="destructive">
        <XIcon className="mr-1 h-3 w-3" /> Rejected
      </Badge>
    </div>
  ),

  // Card
  "card:basic": (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team Meeting</CardTitle>
        <CardDescription>Weekly sync with the engineering team</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex items-center gap-3">
          <ClockIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Monday, 10:00 AM - 11:00 AM</span>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">5 participants confirmed</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Sprint review, blockers discussion, and next week planning.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Decline
        </Button>
        <Button size="sm">Join Meeting</Button>
      </CardFooter>
    </Card>
  ),
  "card:with-image": (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src="/cupia-logo-vertical.png"
          alt="CUPIA Customs System"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>UNI-PASS System</CardTitle>
        <CardDescription>Electronic Customs Clearance Platform</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A comprehensive customs clearance system deployed across 10+
          countries, processing millions of declarations annually.
        </p>
        <div className="mt-3 flex gap-2">
          <Badge variant="secondary">Customs</Badge>
          <Badge variant="secondary">E-Gov</Badge>
          <Badge variant="outline">Active</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  ),
  "card:with-form": (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="card-name">Name</Label>
            <Input id="card-name" placeholder="My Project" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-fw">Framework</Label>
            <Select>
              <SelectTrigger id="card-fw">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
  "card:stats": (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl">$45,231.89</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Active Users</CardDescription>
          <CardTitle className="text-2xl">+2,350</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            +12.4% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Pending Orders</CardDescription>
          <CardTitle className="text-2xl">12</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">-3 since yesterday</p>
        </CardContent>
      </Card>
    </div>
  ),

  // Alert
  "alert:default": (
    <Alert className="max-w-md">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
  "alert:destructive": (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  "alert:with-action": (
    <Alert className="max-w-md">
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>A new version (v2.1.0) is available.</span>
        <Button size="sm" variant="outline" className="ml-4 shrink-0">
          Update
        </Button>
      </AlertDescription>
    </Alert>
  ),

  // Input
  "input:default": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ex-email">Email</Label>
      <Input type="email" id="ex-email" placeholder="Email" />
    </div>
  ),
  "input:disabled": (
    <Input disabled placeholder="Disabled input" className="max-w-sm" />
  ),
  "input:with-helper": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ex-username">Username</Label>
      <Input id="ex-username" placeholder="johndoe" />
      <p className="text-xs text-muted-foreground">
        This is your public display name.
      </p>
    </div>
  ),
  "input:file": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ex-doc">Document</Label>
      <Input id="ex-doc" type="file" />
    </div>
  ),

  // Tabs
  "tabs:default": (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Account settings here.
      </TabsContent>
      <TabsContent value="password" className="text-sm text-muted-foreground">
        Password settings here.
      </TabsContent>
    </Tabs>
  ),
  "tabs:with-cards": (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="tab-name">Name</Label>
              <Input id="tab-name" defaultValue="Pedro Duarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="tab-cur">Current password</Label>
              <Input id="tab-cur" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tab-new">New password</Label>
              <Input id="tab-new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),

  // Dialog
  "dialog:basic": (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Name" />
      </DialogContent>
    </Dialog>
  ),
  "dialog:with-form": (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create event</DialogTitle>
          <DialogDescription>
            Add a new event to your calendar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="dlg-name">Event name</Label>
            <Input id="dlg-name" placeholder="Team standup" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-date">Date</Label>
            <Input id="dlg-date" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dlg-desc">Description</Label>
            <Textarea id="dlg-desc" placeholder="Optional description..." />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  "dialog:confirmation": (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Yes, delete my account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),

  // Select
  "select:default": (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
  "select:with-label": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ex-country">Country</Label>
      <Select>
        <SelectTrigger id="ex-country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">South Korea</SelectItem>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="jp">Japan</SelectItem>
          <SelectItem value="cn">China</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  "select:disabled": (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  ),

  // Calendar
  "calendar:single": <CalendarPreview />,
  "calendar:range": <CalendarRangePreview />,
  "calendar:multiple": <CalendarMultiplePreview />,
  "calendar:disabled-dates": <CalendarDisabledPreview />,
  "calendar:date-picker": <CalendarDatePickerPreview />,

  // Checkbox
  "checkbox:default": (
    <div className="flex items-center space-x-2">
      <Checkbox id="ex-terms" />
      <Label htmlFor="ex-terms">Accept terms and conditions</Label>
    </div>
  ),
  "checkbox:with-description": (
    <div className="items-top flex space-x-2">
      <Checkbox id="ex-terms2" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="ex-terms2">Accept terms and conditions</Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
  "checkbox:disabled": (
    <div className="flex items-center space-x-2">
      <Checkbox id="ex-disabled-cb" disabled />
      <Label htmlFor="ex-disabled-cb" className="text-muted-foreground">
        Disabled option
      </Label>
    </div>
  ),

  // Switch
  "switch:default": (
    <div className="flex items-center space-x-2">
      <Switch id="ex-airplane" />
      <Label htmlFor="ex-airplane">Airplane Mode</Label>
    </div>
  ),
  "switch:with-description": (
    <div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-sm">
      <div className="space-y-0.5">
        <Label htmlFor="ex-marketing">Marketing emails</Label>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products, features, and more.
        </p>
      </div>
      <Switch id="ex-marketing" />
    </div>
  ),
  "switch:disabled": (
    <div className="flex items-center space-x-2">
      <Switch id="ex-disabled-sw" disabled />
      <Label htmlFor="ex-disabled-sw" className="text-muted-foreground">
        Disabled
      </Label>
    </div>
  ),

  // Radio Group
  "radio-group:default": (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="ex-r1" />
        <Label htmlFor="ex-r1">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="ex-r2" />
        <Label htmlFor="ex-r2">Option Two</Label>
      </div>
    </RadioGroup>
  ),
  "radio-group:with-description": (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="default" id="ex-rd1" className="mt-1" />
        <div>
          <Label htmlFor="ex-rd1">Default</Label>
          <p className="text-sm text-muted-foreground">
            Standard spacing and size.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="comfortable" id="ex-rd2" className="mt-1" />
        <div>
          <Label htmlFor="ex-rd2">Comfortable</Label>
          <p className="text-sm text-muted-foreground">
            More padding for a relaxed layout.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="compact" id="ex-rd3" className="mt-1" />
        <div>
          <Label htmlFor="ex-rd3">Compact</Label>
          <p className="text-sm text-muted-foreground">
            Tight spacing to display more items.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),

  // Textarea
  "textarea:default": (
    <Textarea placeholder="Type your message here." className="max-w-sm" />
  ),
  "textarea:with-label": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ex-msg">Your message</Label>
      <Textarea placeholder="Type your message here." id="ex-msg" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
  "textarea:disabled": (
    <Textarea placeholder="Disabled textarea" disabled className="max-w-sm" />
  ),

  // Toggle
  "toggle:default": (
    <Toggle aria-label="Toggle bold">
      <span className="font-bold">B</span>
    </Toggle>
  ),
  "toggle:outline": (
    <Toggle variant="outline" aria-label="Toggle italic">
      <span className="italic">I</span>
    </Toggle>
  ),
  "toggle:with-text": (
    <Toggle aria-label="Toggle bold">
      <span className="font-bold mr-2">B</span>
      Bold
    </Toggle>
  ),

  // Toggle Group
  "toggle-group:multiple": (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <span className="font-bold">B</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <span className="italic">I</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <span className="underline">U</span>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:single": (
    <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="grid" aria-label="Grid view">
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="kanban" aria-label="Kanban view">
        Kanban
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:outline": (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),

  // Combobox
  "combobox:basic": (
    <Command className="rounded-lg border shadow-md w-full max-w-sm">
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup heading="Frameworks" className="[&_[cmdk-item]]:py-2.5">
          <CommandItem>Next.js</CommandItem>
          <CommandItem>Remix</CommandItem>
          <CommandItem>Astro</CommandItem>
          <CommandItem>Nuxt</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  "combobox:with-check": <ComboboxWithCheckPreview />,
  "combobox:disabled": (
    <Button variant="outline" className="w-[200px] justify-between" disabled>
      Select framework...
    </Button>
  ),

  // Field
  "field:basic": (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="field-email">Email</Label>
      <Input id="field-email" placeholder="email@example.com" />
      <p className="text-xs text-muted-foreground">Enter your email address</p>
    </div>
  ),
  "field:required": (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="field-name">
        Full Name <span className="text-destructive">*</span>
      </Label>
      <Input id="field-name" placeholder="John Doe" required />
      <p className="text-xs text-muted-foreground">Your legal full name.</p>
    </div>
  ),
  "field:error": (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="field-pw" className="text-destructive">
        Password
      </Label>
      <Input id="field-pw" type="password" className="border-destructive" />
      <p className="text-xs text-destructive">
        Password must be at least 8 characters.
      </p>
    </div>
  ),
  "field:with-select": (
    <div className="w-full max-w-sm space-y-2">
      <Label>Country</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">South Korea</SelectItem>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="jp">Japan</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        Select your country of residence.
      </p>
    </div>
  ),

  // Input Group
  "input-group:with-icon": (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input className="pl-8" placeholder="Search..." />
    </div>
  ),
  "input-group:with-button": (
    <div className="flex w-full max-w-sm gap-2">
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </div>
  ),
  "input-group:with-addon": (
    <div className="flex w-full max-w-sm">
      <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
        https://
      </span>
      <Input className="rounded-l-none" placeholder="example.com" />
    </div>
  ),

  // Input OTP
  "input-otp:six-digits": (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  "input-otp:with-separator": (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <span className="mx-2 text-muted-foreground">&mdash;</span>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  "input-otp:four-digits": (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  "input-otp:separated": (
    <InputOTP maxLength={6} containerClassName="gap-2">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={4} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),

  // Label
  "label:with-input": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="label-email">Email</Label>
      <Input type="email" id="label-email" placeholder="Email" />
    </div>
  ),
  "label:with-checkbox": (
    <div className="flex items-center space-x-2">
      <Checkbox id="label-terms" />
      <Label htmlFor="label-terms">Accept terms and conditions</Label>
    </div>
  ),
  "label:required": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="label-name">
        Name <span className="text-destructive">*</span>
      </Label>
      <Input id="label-name" placeholder="Your name" required />
    </div>
  ),
  "label:disabled": (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="label-disabled" className="text-muted-foreground">
        Disabled
      </Label>
      <Input id="label-disabled" disabled placeholder="Cannot edit" />
    </div>
  ),

  // Accordion
  "accordion:single": (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your theme.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default with CSS transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:multiple": (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2"]}
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Section One</AccordionTrigger>
        <AccordionContent>Content for section one.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section Two</AccordionTrigger>
        <AccordionContent>Content for section two.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section Three</AccordionTrigger>
        <AccordionContent>Content for section three.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:faq": (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="q1">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards (Visa, Mastercard, American Express),
          PayPal, and bank transfers. For enterprise customers, we also offer
          invoice-based billing with NET 30 terms.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
        <AccordionContent>
          You can cancel your subscription at any time from your account
          settings. Navigate to Settings &rarr; Billing &rarr; Cancel
          Subscription. Your access will continue until the end of the current
          billing period.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
        <AccordionContent>
          Yes! We offer a 14-day free trial with full access to all features. No
          credit card required. After the trial ends, you can choose a plan that
          fits your needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  // Aspect Ratio
  "aspect-ratio:landscape": (
    <div className="w-[450px]">
      <AspectRatio
        ratio={16 / 9}
        className="rounded-lg overflow-hidden bg-black"
      >
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </AspectRatio>
      <p className="mt-2 text-xs text-muted-foreground text-center">
        16:9 — Embedded Video
      </p>
    </div>
  ),
  "aspect-ratio:square": (
    <div className="w-[200px]">
      <AspectRatio ratio={1} className="rounded-lg overflow-hidden">
        <Image
          src="/cupia-emblem.png"
          alt="Square demo"
          fill
          className="object-contain bg-muted"
        />
      </AspectRatio>
      <p className="mt-2 text-xs text-muted-foreground text-center">
        1:1 — Avatar / Thumbnail
      </p>
    </div>
  ),
  "aspect-ratio:photo": (
    <div className="w-[320px]">
      <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden">
        <Image
          src="/cupia-logo.png"
          alt="Photo demo"
          fill
          className="object-contain bg-muted"
        />
      </AspectRatio>
      <p className="mt-2 text-xs text-muted-foreground text-center">
        4:3 — Classic Photo
      </p>
    </div>
  ),

  // Card Notification
  "card:notification": (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-start gap-4 rounded-md border p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
            JD
          </span>
          <div className="grid gap-1">
            <p className="text-sm font-medium">
              John Doe commented on your report
            </p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-md border p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
            AS
          </span>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Alice Smith shared a document</p>
            <p className="text-xs text-muted-foreground">5 hours ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-md border p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-medium">
            SY
          </span>
          <div className="grid gap-1">
            <p className="text-sm font-medium">System update completed</p>
            <p className="text-xs text-muted-foreground">1 day ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),

  // Collapsible
  "collapsible:basic": (
    <Collapsible className="w-[340px]">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Starred repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm mt-2">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2 mt-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
  "collapsible:with-state": (
    <Collapsible defaultOpen className="w-[340px]">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>3 items selected</span>
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
          <Badge variant="secondary">Document</Badge>
          <span>Annual Report 2024.pdf</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
          <Badge variant="secondary">Spreadsheet</Badge>
          <span>Q4 Financials.xlsx</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
          <Badge variant="secondary">Presentation</Badge>
          <span>Strategy Deck.pptx</span>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),

  // Resizable
  "resizable:horizontal": (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  "resizable:vertical": (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-[300px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  "resizable:with-handle": (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Main Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Inspector</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),

  // Scroll Area
  "scroll-area:vertical": (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="text-sm">
              {
                [
                  "React",
                  "Vue",
                  "Angular",
                  "Svelte",
                  "Next.js",
                  "Remix",
                  "Astro",
                  "Nuxt",
                  "SvelteKit",
                  "Gatsby",
                ][i % 10]
              }
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
  "scroll-area:horizontal": (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="h-24 w-36 bg-muted flex items-center justify-center text-sm text-muted-foreground">
                Image {i + 1}
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by Artist {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),

  // Tabs underline
  "tabs:underline": (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4">
        <p className="text-sm text-muted-foreground">
          Overview of your project performance and key metrics.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="pt-4">
        <p className="text-sm text-muted-foreground">
          Detailed analytics and user behavior insights.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="pt-4">
        <p className="text-sm text-muted-foreground">
          Generated reports and exportable data.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="pt-4">
        <p className="text-sm text-muted-foreground">
          Configure your project settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),

  // Separator
  "separator:horizontal": (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <p className="text-sm text-muted-foreground">
        Additional content below the separator.
      </p>
    </div>
  ),
  "separator:vertical": (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),

  // Avatar
  "avatar:default": (
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),
  "avatar:sizes": (
    <div className="flex items-center gap-4">
      <Avatar className="h-6 w-6 text-xs">
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14 text-lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
  "avatar:group": (
    <div className="flex -space-x-3">
      <Avatar className="border-2 border-background">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),

  // Skeleton
  "skeleton:profile": (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
  "skeleton:card": (
    <div className="space-y-3 w-full max-w-sm">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
  "skeleton:table": (
    <div className="space-y-3 w-full max-w-md">
      <div className="flex gap-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
    </div>
  ),

  // Progress
  "progress:default": (
    <div className="w-full max-w-sm space-y-4">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),
  "progress:with-label": (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex justify-between text-sm">
        <span>Upload progress</span>
        <span className="text-muted-foreground">60%</span>
      </div>
      <Progress value={60} />
    </div>
  ),

  // Table
  "table:default": (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  "table:with-badges": (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>
            <Badge variant="outline">Paid</Badge>
          </TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>
            <Badge variant="secondary">Pending</Badge>
          </TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>
            <Badge variant="destructive">Overdue</Badge>
          </TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  "table:with-checkbox": (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px]">
            <Checkbox />
          </TableHead>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>
            <Badge variant="outline">Paid</Badge>
          </TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>
            <Badge variant="secondary">Pending</Badge>
          </TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>
            <Badge variant="destructive">Overdue</Badge>
          </TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  "table:with-sorting": (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <button className="flex items-center gap-1 hover:text-foreground">
              Invoice <ArrowUpDown className="h-3 w-3" />
            </button>
          </TableHead>
          <TableHead>
            <button className="flex items-center gap-1 hover:text-foreground">
              Status <ArrowUpDown className="h-3 w-3" />
            </button>
          </TableHead>
          <TableHead>
            <button className="flex items-center gap-1 hover:text-foreground">
              Date <ArrowUpDown className="h-3 w-3" />
            </button>
          </TableHead>
          <TableHead className="text-right">
            <button className="flex items-center gap-1 ml-auto hover:text-foreground">
              Amount <ArrowUpDown className="h-3 w-3" />
            </button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>
            <Badge variant="outline">Paid</Badge>
          </TableCell>
          <TableCell>2024-01-15</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>
            <Badge variant="secondary">Pending</Badge>
          </TableCell>
          <TableCell>2024-01-20</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>
            <Badge variant="destructive">Overdue</Badge>
          </TableCell>
          <TableCell>2024-01-10</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  "table:with-actions": (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="w-[80px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>
            <Badge>Admin</Badge>
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Pencil className="mr-2 h-3 w-3" /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-3 w-3" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>
            <Badge variant="secondary">Editor</Badge>
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Pencil className="mr-2 h-3 w-3" /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-3 w-3" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  "table:striped": (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Code</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Rate (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            code: "0101.21",
            desc: "Live horses",
            cat: "Animals",
            rate: "5.0",
          },
          {
            code: "0201.10",
            desc: "Bovine meat, fresh",
            cat: "Meat",
            rate: "12.5",
          },
          {
            code: "0301.11",
            desc: "Live ornamental fish",
            cat: "Fish",
            rate: "0.0",
          },
          {
            code: "0401.10",
            desc: "Milk, cream",
            cat: "Dairy",
            rate: "8.0",
          },
          {
            code: "0501.00",
            desc: "Human hair",
            cat: "Other",
            rate: "3.0",
          },
        ].map((item, i) => (
          <TableRow
            key={item.code}
            className={i % 2 === 0 ? "bg-muted/50" : ""}
          >
            <TableCell className="font-mono text-xs">{item.code}</TableCell>
            <TableCell>{item.desc}</TableCell>
            <TableCell>
              <Badge variant="outline">{item.cat}</Badge>
            </TableCell>
            <TableCell className="text-right">{item.rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  "table:with-radio": <TableRadioPreview />,
  "table:with-pagination": <TablePaginationPreview />,
  "table:expandable": <TableExpandablePreview />,
  "table:with-filters": <TableFilterPreview />,

  // Chart
  "chart:bar": (
    <ChartContainer
      config={{ revenue: { label: "Revenue", color: "var(--chart-1)" } }}
      className="h-[250px] w-full max-w-md"
    >
      <BarChart
        data={[
          { month: "Jan", revenue: 186 },
          { month: "Feb", revenue: 305 },
          { month: "Mar", revenue: 237 },
          { month: "Apr", revenue: 273 },
          { month: "May", revenue: 209 },
          { month: "Jun", revenue: 314 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--chart-1)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
  "chart:line": (
    <ChartContainer
      config={{
        value: { label: "Declarations", color: "var(--chart-2)" },
      }}
      className="h-[250px] w-full max-w-md"
    >
      <LineChart
        data={[
          { month: "Jan", value: 120 },
          { month: "Feb", value: 180 },
          { month: "Mar", value: 150 },
          { month: "Apr", value: 220 },
          { month: "May", value: 190 },
          { month: "Jun", value: 280 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="var(--chart-2)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  ),
  "chart:pie": (
    <ChartContainer
      config={{
        cleared: { label: "Cleared", color: "var(--chart-1)" },
        pending: { label: "Pending", color: "var(--chart-3)" },
        rejected: { label: "Rejected", color: "var(--chart-5)" },
      }}
      className="h-[250px] w-full max-w-sm"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie
          data={[
            { name: "cleared", value: 65, fill: "var(--chart-1)" },
            { name: "pending", value: 25, fill: "var(--chart-3)" },
            { name: "rejected", value: 10, fill: "var(--chart-5)" },
          ]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={50}
        />
      </PieChart>
    </ChartContainer>
  ),
  "chart:area": (
    <ChartContainer
      config={{
        revenue: { label: "Revenue ($)", color: "var(--chart-1)" },
      }}
      className="h-[250px] w-full max-w-md"
    >
      <AreaChart
        data={[
          { month: "Jan", revenue: 4000 },
          { month: "Feb", revenue: 4500 },
          { month: "Mar", revenue: 5200 },
          { month: "Apr", revenue: 4800 },
          { month: "May", revenue: 6100 },
          { month: "Jun", revenue: 7200 },
        ]}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="var(--chart-1)"
          strokeWidth={2}
          fill="url(#colorRevenue)"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ChartContainer>
  ),
  "chart:stacked-bar": (
    <ChartContainer
      config={{
        imports: { label: "Imports", color: "var(--chart-1)" },
        exports: { label: "Exports", color: "var(--chart-2)" },
        transit: { label: "Transit", color: "var(--chart-3)" },
      }}
      className="h-[250px] w-full max-w-md"
    >
      <BarChart
        data={[
          { month: "Jan", imports: 120, exports: 80, transit: 30 },
          { month: "Feb", imports: 140, exports: 95, transit: 25 },
          { month: "Mar", imports: 160, exports: 110, transit: 35 },
          { month: "Apr", imports: 130, exports: 100, transit: 28 },
          { month: "May", imports: 175, exports: 120, transit: 40 },
          { month: "Jun", imports: 190, exports: 135, transit: 45 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="imports"
          stackId="a"
          fill="var(--chart-1)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="exports"
          stackId="a"
          fill="var(--chart-2)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="transit"
          stackId="a"
          fill="var(--chart-3)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  ),
  "chart:multi-line": (
    <ChartContainer
      config={{
        declarations: { label: "Declarations", color: "var(--chart-1)" },
        clearances: { label: "Clearances", color: "var(--chart-4)" },
      }}
      className="h-[250px] w-full max-w-md"
    >
      <LineChart
        data={[
          { month: "Jan", declarations: 420, clearances: 380 },
          { month: "Feb", declarations: 480, clearances: 430 },
          { month: "Mar", declarations: 510, clearances: 470 },
          { month: "Apr", declarations: 470, clearances: 450 },
          { month: "May", declarations: 560, clearances: 510 },
          { month: "Jun", declarations: 620, clearances: 580 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="declarations"
          stroke="var(--chart-1)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="clearances"
          stroke="var(--chart-4)"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  ),
  "chart:radar": (
    <ChartContainer
      config={{
        A: { label: "System A", color: "var(--chart-1)" },
        B: { label: "System B", color: "var(--chart-4)" },
      }}
      className="h-[250px] w-full max-w-md"
    >
      <RadarChart
        data={[
          { metric: "Speed", A: 85, B: 65 },
          { metric: "Accuracy", A: 90, B: 80 },
          { metric: "Cost", A: 70, B: 90 },
          { metric: "Coverage", A: 80, B: 75 },
          { metric: "Support", A: 95, B: 60 },
        ]}
        cx="50%"
        cy="50%"
        outerRadius={80}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Radar
          name="System A"
          dataKey="A"
          stroke="var(--chart-1)"
          fill="var(--chart-1)"
          fillOpacity={0.3}
        />
        <Radar
          name="System B"
          dataKey="B"
          stroke="var(--chart-4)"
          fill="var(--chart-4)"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ChartContainer>
  ),

  // Alert Dialog
  "alert-dialog:default": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  "alert-dialog:destructive": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete account?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your account and all associated data.
            This action is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),

  // Tooltip
  "tooltip:default": (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  "tooltip:positions": (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Top
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Top tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Right tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Bottom
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),

  // Dropdown Menu
  "dropdown-menu:default": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  "dropdown-menu:with-label": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">My Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  "dropdown-menu:with-shortcuts": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem>
          New File
          <span className="ml-auto text-xs text-muted-foreground">Ctrl+N</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Save
          <span className="ml-auto text-xs text-muted-foreground">Ctrl+S</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <span className="ml-auto text-xs text-muted-foreground">Del</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  // Popover
  "popover:default": (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  "popover:with-form": (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-sm text-muted-foreground">
              Configure display settings.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="pop-width">Width</Label>
              <Input
                id="pop-width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="pop-height">Height</Label>
              <Input
                id="pop-height"
                defaultValue="auto"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),

  // Sheet
  "sheet:default": (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sheet-email">Email</Label>
            <Input id="sheet-email" placeholder="you@example.com" />
          </div>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  "sheet:left": (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse sections of the app.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-2 py-4 text-sm">
          <span className="block px-2 py-1.5 rounded hover:bg-muted cursor-pointer">
            Dashboard
          </span>
          <span className="block px-2 py-1.5 rounded hover:bg-muted cursor-pointer">
            Settings
          </span>
          <span className="block px-2 py-1.5 rounded hover:bg-muted cursor-pointer">
            Users
          </span>
          <span className="block px-2 py-1.5 rounded hover:bg-muted cursor-pointer">
            Reports
          </span>
        </div>
      </SheetContent>
    </Sheet>
  ),

  // Drawer
  "drawer:default": (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile settings.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="drawer-name">Name</Label>
              <Input id="drawer-name" placeholder="Your name" />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  "drawer:with-actions": (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>New Item</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add new item</DrawerTitle>
          <DrawerDescription>
            Fill in the details to create a new item.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="drawer-title">Title</Label>
            <Input id="drawer-title" placeholder="Item title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="drawer-desc">Description</Label>
            <Textarea id="drawer-desc" placeholder="Describe the item..." />
          </div>
        </div>
        <DrawerFooter className="flex-row justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Create</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),

  // Breadcrumb
  "breadcrumb:default": (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  "breadcrumb:with-ellipsis": (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span className="text-muted-foreground">...</span>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  // Pagination
  "pagination:default": (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  "pagination:with-ellipsis": (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),

  // Button enterprise examples
  "button:button-group": (
    <div className="flex">
      <Button variant="outline" className="rounded-r-none border-r-0" size="sm">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="rounded-none border-r-0" size="sm">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="rounded-l-none" size="sm">
        <Underline className="h-4 w-4" />
      </Button>
    </div>
  ),
  "button:async-action": (
    <div className="flex gap-3 items-center">
      <Button disabled>
        <Spinner className="h-4 w-4 mr-2" />
        Submitting...
      </Button>
      <Button>Submit Declaration</Button>
    </div>
  ),

  // Checkbox enterprise examples
  "checkbox:terms-agreement": (
    <div className="space-y-4 max-w-md">
      <div className="flex items-start space-x-3">
        <Checkbox id="terms-agree" />
        <Label htmlFor="terms-agree" className="text-sm leading-relaxed">
          I agree to the Terms of Service, Privacy Policy, and consent to the
          processing of customs declaration data in accordance with WCO
          guidelines.
        </Label>
      </div>
      <Button className="w-full" size="sm">
        Submit Application
      </Button>
    </div>
  ),
  "checkbox:filter-checkboxes": (
    <Card className="w-[280px]">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">Filter by Status</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="filter-pending" defaultChecked />
            <Label htmlFor="filter-pending" className="text-sm">
              Pending
            </Label>
          </div>
          <span className="text-xs text-muted-foreground">(24)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="filter-approved" defaultChecked />
            <Label htmlFor="filter-approved" className="text-sm">
              Approved
            </Label>
          </div>
          <span className="text-xs text-muted-foreground">(156)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="filter-rejected" />
            <Label htmlFor="filter-rejected" className="text-sm">
              Rejected
            </Label>
          </div>
          <span className="text-xs text-muted-foreground">(8)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="filter-review" defaultChecked />
            <Label htmlFor="filter-review" className="text-sm">
              Under Review
            </Label>
          </div>
          <span className="text-xs text-muted-foreground">(12)</span>
        </div>
      </CardContent>
    </Card>
  ),

  // Combobox enterprise examples
  "combobox:country-select": (
    <div className="w-[300px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Select country...
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup heading="Asia">
                <CommandItem>🇰🇷 Korea (KR)</CommandItem>
                <CommandItem>🇺🇿 Uzbekistan (UZ)</CommandItem>
                <CommandItem>🇳🇵 Nepal (NP)</CommandItem>
              </CommandGroup>
              <CommandGroup heading="Africa">
                <CommandItem>🇪🇹 Ethiopia (ET)</CommandItem>
                <CommandItem>🇩🇿 Algeria (DZ)</CommandItem>
                <CommandItem>🇬🇭 Ghana (GH)</CommandItem>
                <CommandItem>🇨🇲 Cameroon (CM)</CommandItem>
                <CommandItem>🇹🇿 Tanzania (TZ)</CommandItem>
              </CommandGroup>
              <CommandGroup heading="Americas">
                <CommandItem>🇪🇨 Ecuador (EC)</CommandItem>
                <CommandItem>🇬🇹 Guatemala (GT)</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  ),
  "combobox:multi-select": (
    <div className="w-[300px] space-y-2">
      <div className="flex flex-wrap gap-1">
        <Badge variant="secondary" className="text-xs">
          Korea <XIcon className="ml-1 h-3 w-3 cursor-pointer" />
        </Badge>
        <Badge variant="secondary" className="text-xs">
          Ghana <XIcon className="ml-1 h-3 w-3 cursor-pointer" />
        </Badge>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Add countries...
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup>
                <CommandItem>
                  <CheckIcon className="mr-2 h-4 w-4" /> Korea
                </CommandItem>
                <CommandItem>
                  <CheckIcon className="mr-2 h-4 w-4" /> Ghana
                </CommandItem>
                <CommandItem>
                  <span className="mr-2 w-4" /> Ecuador
                </CommandItem>
                <CommandItem>
                  <span className="mr-2 w-4" /> Ethiopia
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  ),

  // Field enterprise examples
  "field:inline-layout": (
    <div className="w-full max-w-lg space-y-3">
      <div className="flex items-center gap-4">
        <Label className="w-32 text-right text-sm shrink-0">
          Declaration No.
        </Label>
        <Input placeholder="KR-2024-001234" className="flex-1" />
      </div>
      <div className="flex items-center gap-4">
        <Label className="w-32 text-right text-sm shrink-0">HS Code</Label>
        <Input placeholder="8471.30.0000" className="flex-1" />
      </div>
      <div className="flex items-center gap-4">
        <Label className="w-32 text-right text-sm shrink-0">
          Origin Country
        </Label>
        <Input placeholder="Korea (KR)" className="flex-1" />
      </div>
    </div>
  ),

  // Input enterprise examples
  "input:search": (
    <div className="relative w-[320px]">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search declarations..." className="pl-9 pr-9" />
      <button className="absolute right-3 top-1/2 -translate-y-1/2">
        <XIcon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
      </button>
    </div>
  ),
  "input:password": (
    <div className="w-[320px] space-y-2">
      <Label htmlFor="pw-demo">Password</Label>
      <div className="relative">
        <Input
          id="pw-demo"
          type="password"
          placeholder="Enter password"
          className="pr-10"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <Eye className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  ),

  // Input Group enterprise examples
  "input-group:currency": (
    <div className="flex w-[320px]">
      <Select defaultValue="usd">
        <SelectTrigger className="w-[100px] rounded-r-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="krw">KRW</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="0.00" className="rounded-l-none border-l-0" />
    </div>
  ),
  "input-group:url-input": (
    <div className="flex w-[400px]">
      <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
        https://
      </span>
      <Input placeholder="example.com" className="rounded-l-none" />
    </div>
  ),

  // Input OTP enterprise examples
  "input-otp:verification": (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Enter the 6-digit code sent to your email
      </p>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex items-center gap-2 text-sm">
        <ClockIcon className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Time remaining: 2:30</span>
      </div>
      <Button variant="link" size="sm" className="text-xs">
        Resend code
      </Button>
    </div>
  ),

  // Label enterprise examples
  "label:form-layout": (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center gap-4">
        <Label className="w-28 text-right text-sm shrink-0">Full Name</Label>
        <Input placeholder="John Doe" className="flex-1" />
      </div>
      <div className="flex items-center gap-4">
        <Label className="w-28 text-right text-sm shrink-0">Email</Label>
        <Input type="email" placeholder="john@example.com" className="flex-1" />
      </div>
      <div className="flex items-center gap-4">
        <Label className="w-28 text-right text-sm shrink-0">Department</Label>
        <Input placeholder="Customs Division" className="flex-1" />
      </div>
    </div>
  ),

  // Radio Group enterprise examples
  "radio-group:horizontal": (
    <div className="space-y-2">
      <Label>Report Frequency</Label>
      <RadioGroup defaultValue="weekly" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="daily" id="freq-daily" />
          <Label htmlFor="freq-daily" className="font-normal">
            Daily
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="weekly" id="freq-weekly" />
          <Label htmlFor="freq-weekly" className="font-normal">
            Weekly
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="monthly" id="freq-monthly" />
          <Label htmlFor="freq-monthly" className="font-normal">
            Monthly
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
  "radio-group:shipping-options": (
    <RadioGroup defaultValue="standard" className="space-y-3 w-full max-w-md">
      <div className="flex items-start space-x-3 rounded-md border p-3">
        <RadioGroupItem value="express" id="ship-express" className="mt-0.5" />
        <div>
          <Label htmlFor="ship-express" className="font-medium">
            Express Shipping
          </Label>
          <p className="text-xs text-muted-foreground">
            Delivered in 1-2 business days
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 rounded-md border p-3 border-primary">
        <RadioGroupItem
          value="standard"
          id="ship-standard"
          className="mt-0.5"
        />
        <div>
          <Label htmlFor="ship-standard" className="font-medium">
            Standard Shipping
          </Label>
          <p className="text-xs text-muted-foreground">
            Delivered in 5-7 business days
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 rounded-md border p-3">
        <RadioGroupItem value="economy" id="ship-economy" className="mt-0.5" />
        <div>
          <Label htmlFor="ship-economy" className="font-medium">
            Economy Shipping
          </Label>
          <p className="text-xs text-muted-foreground">
            Delivered in 10-14 business days
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
  "radio-group:payment-method": (
    <RadioGroup defaultValue="credit" className="grid gap-3 w-full max-w-sm">
      <Label className="flex items-center gap-3 rounded-md border p-3 cursor-pointer [&:has([data-state=checked])]:border-primary">
        <RadioGroupItem value="credit" />
        <CreditCard className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Credit Card</p>
          <p className="text-xs text-muted-foreground">
            Visa, Mastercard, AMEX
          </p>
        </div>
      </Label>
      <Label className="flex items-center gap-3 rounded-md border p-3 cursor-pointer [&:has([data-state=checked])]:border-primary">
        <RadioGroupItem value="bank" />
        <Building2 className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Bank Transfer</p>
          <p className="text-xs text-muted-foreground">Direct bank payment</p>
        </div>
      </Label>
      <Label className="flex items-center gap-3 rounded-md border p-3 cursor-pointer [&:has([data-state=checked])]:border-primary">
        <RadioGroupItem value="debit" />
        <Landmark className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Direct Debit</p>
          <p className="text-xs text-muted-foreground">
            Auto-debit from account
          </p>
        </div>
      </Label>
    </RadioGroup>
  ),

  // Select enterprise examples
  "select:with-icons": (
    <div className="w-[280px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">🇰🇷 Korea</SelectItem>
          <SelectItem value="ec">🇪🇨 Ecuador</SelectItem>
          <SelectItem value="et">🇪🇹 Ethiopia</SelectItem>
          <SelectItem value="dz">🇩🇿 Algeria</SelectItem>
          <SelectItem value="gh">🇬🇭 Ghana</SelectItem>
          <SelectItem value="cm">🇨🇲 Cameroon</SelectItem>
          <SelectItem value="uz">🇺🇿 Uzbekistan</SelectItem>
          <SelectItem value="tz">🇹🇿 Tanzania</SelectItem>
          <SelectItem value="np">🇳🇵 Nepal</SelectItem>
          <SelectItem value="gt">🇬🇹 Guatemala</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  "select:form-select": (
    <div className="w-[280px] space-y-2">
      <Label htmlFor="decl-type">Declaration Type</Label>
      <Select defaultValue="import">
        <SelectTrigger id="decl-type">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="import">Import</SelectItem>
          <SelectItem value="export">Export</SelectItem>
          <SelectItem value="transit">Transit</SelectItem>
          <SelectItem value="re-export">Re-export</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        Choose the type of customs declaration to file.
      </p>
    </div>
  ),

  // Switch enterprise examples
  "switch:settings-group": (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-base">Notifications</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="sw-email" className="font-normal">
            Email Notifications
          </Label>
          <Switch id="sw-email" defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label htmlFor="sw-sms" className="font-normal">
            SMS Alerts
          </Label>
          <Switch id="sw-sms" />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label htmlFor="sw-push" className="font-normal">
            Push Notifications
          </Label>
          <Switch id="sw-push" defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Label htmlFor="sw-auto" className="font-normal">
            Auto-save Drafts
          </Label>
          <Switch id="sw-auto" defaultChecked />
        </div>
      </CardContent>
    </Card>
  ),
  "switch:with-detail": (
    <div className="max-w-md space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Label htmlFor="sw-2fa" className="font-medium">
            Two-Factor Authentication
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Add an extra layer of security to your account by requiring a
            verification code.
          </p>
        </div>
        <Switch id="sw-2fa" />
      </div>
      <Separator />
      <div className="flex items-start justify-between gap-4">
        <div>
          <Label htmlFor="sw-audit" className="font-medium">
            Audit Logging
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Record all user actions for compliance and security review purposes.
          </p>
        </div>
        <Switch id="sw-audit" defaultChecked />
      </div>
    </div>
  ),

  // Textarea enterprise examples
  "textarea:with-counter": (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="ta-remarks">Remarks</Label>
      <Textarea
        id="ta-remarks"
        placeholder="Enter additional remarks for this declaration..."
        className="min-h-[100px]"
      />
      <div className="flex justify-between">
        <p className="text-xs text-muted-foreground">
          Provide any additional notes for the customs officer.
        </p>
        <p className="text-xs text-muted-foreground">0 / 500</p>
      </div>
    </div>
  ),
  "textarea:auto-resize": (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="ta-desc">Description of Goods</Label>
      <Textarea
        id="ta-desc"
        placeholder="Describe the goods in detail..."
        className="min-h-[80px] max-h-[200px] resize-y"
        defaultValue="Electronic components including semiconductor chips, integrated circuits, and printed circuit boards for consumer electronics manufacturing."
      />
      <p className="text-xs text-muted-foreground">
        Textarea with min/max height constraints and vertical resize.
      </p>
    </div>
  ),

  // Toggle enterprise examples
  "toggle:with-state": (
    <div className="flex items-center gap-4">
      <Toggle aria-label="Toggle favorite" variant="outline">
        <Star className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold" variant="outline" defaultPressed>
        <Bold className="h-4 w-4" />
      </Toggle>
      <p className="text-sm text-muted-foreground">
        Click to toggle pressed state
      </p>
    </div>
  ),

  // Toggle Group enterprise examples
  "toggle-group:text-align": (
    <ToggleGroup type="single" defaultValue="left" variant="outline">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:view-switcher": (
    <div className="space-y-2">
      <Label className="text-sm">View Mode</Label>
      <ToggleGroup type="single" defaultValue="grid" variant="outline">
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <Grid3X3 className="h-4 w-4 mr-1" /> Grid
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List view">
          <List className="h-4 w-4 mr-1" /> List
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export function ComponentPreview({
  slug,
  exampleId,
}: {
  slug: string;
  exampleId?: string;
}) {
  const key = exampleId ? `${slug}:${exampleId}` : null;
  const preview = key ? examplePreviews[key] : previews[slug];

  if (!preview) {
    return (
      <p className="text-sm text-muted-foreground">
        Preview not available for this component.
      </p>
    );
  }

  return <div className="w-full flex justify-center">{preview}</div>;
}
