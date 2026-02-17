"use client";

import {
  Search as SearchIcon,
  Mail as MailIcon,
  Download as DownloadIcon,
  Check as CheckIcon,
  Clock as ClockIcon,
  X as XIcon,
  Info as InfoIcon,
  AlertCircle as AlertCircleIcon,
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";

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

  calendar: (
    <div className="text-sm text-muted-foreground border rounded-md p-4">
      Calendar component (requires date-fns setup)
    </div>
  ),

  checkbox: (
    <div className="flex items-center space-x-2">
      <Checkbox id="preview-terms" />
      <label htmlFor="preview-terms" className="text-sm">
        Accept terms and conditions
      </label>
    </div>
  ),

  combobox: (
    <div className="text-sm text-muted-foreground border rounded-md p-4 w-full max-w-sm">
      Combobox — autocomplete dropdown (interactive demo)
    </div>
  ),

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
    <div className="flex gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-10 h-12 rounded-md border flex items-center justify-center text-lg font-mono"
        >
          {i < 3 ? String(i + 1) : ""}
        </div>
      ))}
    </div>
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
    <div className="text-sm text-muted-foreground border rounded-md p-4 w-full max-w-sm">
      Chart — Recharts integration (see Dashboard pattern)
    </div>
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
          <SheetDescription>Make changes to your profile.</SheetDescription>
        </SheetHeader>
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
    <div className="flex gap-4 overflow-hidden w-full max-w-sm">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="min-w-[200px] h-32 rounded-md border flex items-center justify-center text-muted-foreground"
        >
          Slide {i}
        </div>
      ))}
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
    <div className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
      Right click here
    </div>
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
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Active Users</CardDescription>
          <CardTitle className="text-2xl">+2,350</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+12.4% from last month</p>
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
          <DialogDescription>Add a new event to your calendar.</DialogDescription>
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
