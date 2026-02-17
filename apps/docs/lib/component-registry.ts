export interface ComponentMeta {
  name: string;
  slug: string;
  description: string;
  importExample: string;
  codeExample: string;
}

export interface ComponentCategory {
  category: string;
  items: ComponentMeta[];
}

export const componentCategories: ComponentCategory[] = [
  {
    category: "Layout",
    items: [
      {
        name: "Accordion",
        slug: "accordion",
        description:
          "A vertically stacked set of interactive headings that reveal content.",
        importExample: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion";`,
        codeExample: `<Accordion type="single" collapsible>
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
</Accordion>`,
      },
      {
        name: "Aspect Ratio",
        slug: "aspect-ratio",
        description:
          "Displays content within a desired ratio, constraining the width/height.",
        importExample: `import { AspectRatio } from "@workspace/ui/components/aspect-ratio";`,
        codeExample: `<AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
  <img src="/placeholder.jpg" alt="Photo" className="rounded-md object-cover h-full w-full" />
</AspectRatio>`,
      },
      {
        name: "Card",
        slug: "card",
        description:
          "Displays a card with header, content, and footer sections.",
        importExample: `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";`,
        codeExample: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`,
      },
      {
        name: "Collapsible",
        slug: "collapsible",
        description:
          "An interactive component which expands/collapses a panel.",
        importExample: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@workspace/ui/components/collapsible";`,
        codeExample: `<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    <p>Collapsible content here.</p>
  </CollapsibleContent>
</Collapsible>`,
      },
      {
        name: "Resizable",
        slug: "resizable",
        description:
          "A group of resizable panels that can be adjusted by dragging.",
        importExample: `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@workspace/ui/components/resizable";`,
        codeExample: `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Panel One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Panel Two</ResizablePanel>
</ResizablePanelGroup>`,
      },
      {
        name: "Scroll Area",
        slug: "scroll-area",
        description:
          "Augments native scroll functionality for custom, cross-browser styling.",
        importExample: `import { ScrollArea } from "@workspace/ui/components/scroll-area";`,
        codeExample: `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm">Tag {i + 1}</div>
    ))}
  </div>
</ScrollArea>`,
      },
      {
        name: "Separator",
        slug: "separator",
        description: "Visually or semantically separates content.",
        importExample: `import { Separator } from "@workspace/ui/components/separator";`,
        codeExample: `<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`,
      },
      {
        name: "Tabs",
        slug: "tabs",
        description:
          "A set of layered sections of content, known as tab panels, that are displayed one at a time.",
        importExample: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";`,
        codeExample: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Password settings here.</TabsContent>
</Tabs>`,
      },
    ],
  },
  {
    category: "Forms",
    items: [
      {
        name: "Button",
        slug: "button",
        description:
          "Displays a button or a component that looks like a button.",
        importExample: `import { Button } from "@workspace/ui/components/button";`,
        codeExample: `<div className="flex gap-2">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`,
      },
      {
        name: "Calendar",
        slug: "calendar",
        description:
          "A date field component that allows users to enter and edit dates.",
        importExample: `import { Calendar } from "@workspace/ui/components/calendar";`,
        codeExample: `<Calendar mode="single" className="rounded-md border" />`,
      },
      {
        name: "Checkbox",
        slug: "checkbox",
        description:
          "A control that allows the user to toggle between checked and not checked.",
        importExample: `import { Checkbox } from "@workspace/ui/components/checkbox";`,
        codeExample: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
</div>`,
      },
      {
        name: "Combobox",
        slug: "combobox",
        description:
          "Autocomplete input with a filterable dropdown list of options.",
        importExample: `import { Combobox } from "@workspace/ui/components/combobox";`,
        codeExample: `<Combobox
  options={[
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]}
  placeholder="Select framework..."
/>`,
      },
      {
        name: "Field",
        slug: "field",
        description:
          "A form field wrapper that provides label, description, and error message support.",
        importExample: `import { Field } from "@workspace/ui/components/field";`,
        codeExample: `<Field label="Email" description="Enter your email address">
  <Input placeholder="email@example.com" />
</Field>`,
      },
      {
        name: "Input",
        slug: "input",
        description: "Displays a form input field.",
        importExample: `import { Input } from "@workspace/ui/components/input";`,
        codeExample: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`,
      },
      {
        name: "Input Group",
        slug: "input-group",
        description:
          "Groups an input with addons like icons or text on either side.",
        importExample: `import { InputGroup } from "@workspace/ui/components/input-group";`,
        codeExample: `<InputGroup>
  <Input placeholder="Search..." />
</InputGroup>`,
      },
      {
        name: "Input OTP",
        slug: "input-otp",
        description:
          "Accessible one-time password component with copy paste functionality.",
        importExample: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@workspace/ui/components/input-otp";`,
        codeExample: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
      },
      {
        name: "Label",
        slug: "label",
        description: "Renders an accessible label associated with controls.",
        importExample: `import { Label } from "@workspace/ui/components/label";`,
        codeExample: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`,
      },
      {
        name: "Radio Group",
        slug: "radio-group",
        description:
          "A set of checkable buttons, known as radio buttons, where only one can be checked at a time.",
        importExample: `import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group";`,
        codeExample: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`,
      },
      {
        name: "Select",
        slug: "select",
        description:
          "Displays a list of options for the user to pick from, triggered by a button.",
        importExample: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";`,
        codeExample: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`,
      },
      {
        name: "Switch",
        slug: "switch",
        description:
          "A control that allows the user to toggle between on and off.",
        importExample: `import { Switch } from "@workspace/ui/components/switch";`,
        codeExample: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
      },
      {
        name: "Textarea",
        slug: "textarea",
        description: "Displays a form textarea.",
        importExample: `import { Textarea } from "@workspace/ui/components/textarea";`,
        codeExample: `<Textarea placeholder="Type your message here." />`,
      },
      {
        name: "Toggle",
        slug: "toggle",
        description: "A two-state button that can be either on or off.",
        importExample: `import { Toggle } from "@workspace/ui/components/toggle";`,
        codeExample: `<Toggle aria-label="Toggle italic">
  <span className="font-bold">B</span>
</Toggle>`,
      },
      {
        name: "Toggle Group",
        slug: "toggle-group",
        description:
          "A set of two-state buttons that can be toggled on or off.",
        importExample: `import { ToggleGroup, ToggleGroupItem } from "@workspace/ui/components/toggle-group";`,
        codeExample: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <span className="font-bold">B</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <span className="italic">I</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <span className="underline">U</span>
  </ToggleGroupItem>
</ToggleGroup>`,
      },
    ],
  },
  {
    category: "Data Display",
    items: [
      {
        name: "Avatar",
        slug: "avatar",
        description:
          "An image element with a fallback for representing the user.",
        importExample: `import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";`,
        codeExample: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
      },
      {
        name: "Badge",
        slug: "badge",
        description: "Displays a badge or a component that looks like a badge.",
        importExample: `import { Badge } from "@workspace/ui/components/badge";`,
        codeExample: `<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`,
      },
      {
        name: "Chart",
        slug: "chart",
        description: "Beautiful, responsive charts built with Recharts.",
        importExample: `import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@workspace/ui/components/chart";`,
        codeExample: `<ChartContainer config={{ desktop: { label: "Desktop", color: "var(--chart-1)" } }}>
  {/* Recharts components here */}
</ChartContainer>`,
      },
      {
        name: "Empty",
        slug: "empty",
        description: "Placeholder displayed when there is no data to show.",
        importExample: `import { Empty } from "@workspace/ui/components/empty";`,
        codeExample: `<Empty>
  <p>No results found.</p>
</Empty>`,
      },
      {
        name: "Item",
        slug: "item",
        description:
          "A generic list item component for displaying key-value or labeled content.",
        importExample: `import { Item } from "@workspace/ui/components/item";`,
        codeExample: `<Item>
  <span>Label</span>
  <span>Value</span>
</Item>`,
      },
      {
        name: "Kbd",
        slug: "kbd",
        description: "Displays a keyboard shortcut or key combination.",
        importExample: `import { Kbd } from "@workspace/ui/components/kbd";`,
        codeExample: `<div className="flex items-center gap-1">
  <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>`,
      },
      {
        name: "Progress",
        slug: "progress",
        description:
          "Displays an indicator showing the completion progress of a task.",
        importExample: `import { Progress } from "@workspace/ui/components/progress";`,
        codeExample: `<Progress value={60} className="w-[60%]" />`,
      },
      {
        name: "Skeleton",
        slug: "skeleton",
        description: "Used to show a placeholder while content is loading.",
        importExample: `import { Skeleton } from "@workspace/ui/components/skeleton";`,
        codeExample: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
      },
      {
        name: "Spinner",
        slug: "spinner",
        description: "A loading spinner indicator.",
        importExample: `import { Spinner } from "@workspace/ui/components/spinner";`,
        codeExample: `<Spinner />`,
      },
      {
        name: "Table",
        slug: "table",
        description: "A responsive table component.",
        importExample: `import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table";`,
        codeExample: `<Table>
  <TableCaption>A list of recent invoices.</TableCaption>
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
  </TableBody>
</Table>`,
      },
    ],
  },
  {
    category: "Feedback",
    items: [
      {
        name: "Alert",
        slug: "alert",
        description: "Displays a callout for important information.",
        importExample: `import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert";`,
        codeExample: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`,
      },
      {
        name: "Alert Dialog",
        slug: "alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
        importExample: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@workspace/ui/components/alert-dialog";`,
        codeExample: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      },
      {
        name: "Dialog",
        slug: "dialog",
        description:
          "A window overlaid on the primary window, rendering content on top of it.",
        importExample: `import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@workspace/ui/components/dialog";`,
        codeExample: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <Input placeholder="Name" />
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      },
      {
        name: "Drawer",
        slug: "drawer",
        description: "A panel that slides out from the edge of the screen.",
        importExample: `import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@workspace/ui/components/drawer";`,
        codeExample: `<Drawer>
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
</Drawer>`,
      },
      {
        name: "Popover",
        slug: "popover",
        description:
          "Displays rich content in a portal, triggered by a button.",
        importExample: `import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover";`,
        codeExample: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
    </div>
  </PopoverContent>
</Popover>`,
      },
      {
        name: "Sheet",
        slug: "sheet",
        description:
          "Extends the Dialog component to display content that complements the main content of the screen.",
        importExample: `import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@workspace/ui/components/sheet";`,
        codeExample: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
      },
      {
        name: "Sonner (Toast)",
        slug: "sonner",
        description:
          "An opinionated toast component for React, by Emil Kowalski.",
        importExample: `import { toast } from "sonner";`,
        codeExample: `<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`,
      },
      {
        name: "Tooltip",
        slug: "tooltip",
        description:
          "A popup that displays information related to an element when focused or hovered.",
        importExample: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip";`,
        codeExample: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    ],
  },
  {
    category: "Navigation",
    items: [
      {
        name: "Breadcrumb",
        slug: "breadcrumb",
        description:
          "Displays the path to the current resource using a hierarchy of links.",
        importExample: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@workspace/ui/components/breadcrumb";`,
        codeExample: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
      },
      {
        name: "Carousel",
        slug: "carousel",
        description: "A carousel with motion and swipe built using Embla.",
        importExample: `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@workspace/ui/components/carousel";`,
        codeExample: `<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
      },
      {
        name: "Command",
        slug: "command",
        description: "Fast, composable command menu for React.",
        importExample: `import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@workspace/ui/components/command";`,
        codeExample: `<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
      {
        name: "Context Menu",
        slug: "context-menu",
        description:
          "Displays a menu to the user when triggered by a right-click.",
        importExample: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@workspace/ui/components/context-menu";`,
        codeExample: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
      },
      {
        name: "Dropdown Menu",
        slug: "dropdown-menu",
        description:
          "Displays a menu triggered by a button, following the WAI-ARIA menu pattern.",
        importExample: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu";`,
        codeExample: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
      {
        name: "Hover Card",
        slug: "hover-card",
        description:
          "For sighted users, shows content when hovering over a trigger.",
        importExample: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@workspace/ui/components/hover-card";`,
        codeExample: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
  </HoverCardContent>
</HoverCard>`,
      },
      {
        name: "Menubar",
        slug: "menubar",
        description:
          "A visually persistent menu common in desktop applications.",
        importExample: `import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@workspace/ui/components/menubar";`,
        codeExample: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
      },
      {
        name: "Navigation Menu",
        slug: "navigation-menu",
        description: "A collection of links for navigating websites.",
        importExample: `import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@workspace/ui/components/navigation-menu";`,
        codeExample: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
      },
      {
        name: "Pagination",
        slug: "pagination",
        description:
          "Pagination with page navigation, previous and next links.",
        importExample: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@workspace/ui/components/pagination";`,
        codeExample: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
      },
      {
        name: "Sidebar",
        slug: "sidebar",
        description:
          "A composable sidebar component with support for collapsible sections.",
        importExample: `import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from "@workspace/ui/components/sidebar";`,
        codeExample: `<Sidebar>
  <SidebarHeader>App Name</SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      {/* Menu items */}
    </SidebarGroup>
  </SidebarContent>
</Sidebar>`,
      },
    ],
  },
];

export const allComponents: ComponentMeta[] = componentCategories.flatMap(
  (cat) => cat.items,
);

export const totalComponents = allComponents.length;

export function getComponentBySlug(
  slug: string,
): (ComponentMeta & { category: string }) | undefined {
  for (const cat of componentCategories) {
    const item = cat.items.find((i) => i.slug === slug);
    if (item) {
      return { ...item, category: cat.category };
    }
  }
  return undefined;
}

export function getAllSlugs(): string[] {
  return allComponents.map((c) => c.slug);
}
