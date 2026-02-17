"use client";

import React from "react";
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
import { ScrollArea } from "@workspace/ui/components/scroll-area";
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
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
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
    <div className="flex w-full max-w-md h-24 rounded-md border">
      <div className="flex-1 flex items-center justify-center border-r text-sm text-muted-foreground">
        Panel A
      </div>
      <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
        Panel B
      </div>
    </div>
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
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Card Footer</p>
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
        <CommandGroup heading="Frameworks">
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
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
      </InputOTPGroup>
      <InputOTPSeparator />
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
