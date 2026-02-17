"use client";

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

export function ComponentPreview({ slug }: { slug: string }) {
  const preview = previews[slug];

  if (!preview) {
    return (
      <p className="text-sm text-muted-foreground">
        Preview not available for this component.
      </p>
    );
  }

  return <div className="w-full flex justify-center">{preview}</div>;
}
