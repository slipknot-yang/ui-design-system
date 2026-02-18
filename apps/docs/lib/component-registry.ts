export interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export interface ExampleDef {
  id: string;
  title: string;
  description: string;
  code: string;
}

export interface ComponentMeta {
  name: string;
  slug: string;
  description: string;
  importExample: string;
  codeExample: string;
  examples?: ExampleDef[];
  props?: PropDef[];
  variants?: string[];
  accessibility?: string;
  relatedComponents?: string[];
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
        props: [
          {
            name: "type",
            type: '"single" | "multiple"',
            required: true,
            description:
              "Determines whether one or multiple accordion items can be opened at the same time.",
          },
          {
            name: "collapsible",
            type: "boolean",
            default: "false",
            description:
              'When type is "single", allows closing the open item by clicking its trigger again.',
          },
          {
            name: "value",
            type: "string | string[]",
            description:
              "The controlled value of the currently expanded item(s). Use with onValueChange.",
          },
          {
            name: "defaultValue",
            type: "string | string[]",
            description:
              "The default value of the expanded item(s) when initially rendered uncontrolled.",
          },
          {
            name: "onValueChange",
            type: "(value: string | string[]) => void",
            description:
              "Callback invoked when the expanded accordion item(s) change.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "When true, prevents the user from interacting with the accordion and all its items.",
          },
        ],
        examples: [
          {
            id: "single",
            title: "Single (Collapsible)",
            description:
              "Only one item can be open at a time. Click the open item again to close it.",
            code: `<Accordion type="single" collapsible className="w-full max-w-md">
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
      Yes. It's animated by default with CSS transitions.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
          },
          {
            id: "multiple",
            title: "Multiple",
            description: "Multiple items can be open simultaneously.",
            code: `<Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full max-w-md">
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
</Accordion>`,
          },
          {
            id: "faq",
            title: "FAQ",
            description:
              "Frequently asked questions layout with detailed answers.",
            code: `<Accordion type="single" collapsible className="w-full max-w-md">
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
      You can cancel your subscription at any time from your account settings.
      Navigate to Settings → Billing → Cancel Subscription. Your access will
      continue until the end of the current billing period.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="q3">
    <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
    <AccordionContent>
      Yes! We offer a 14-day free trial with full access to all features.
      No credit card required. After the trial ends, you can choose a plan
      that fits your needs.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Accordion pattern with full keyboard navigation via Arrow, Home, and End keys.",
        relatedComponents: ["collapsible", "tabs"],
      },
      {
        name: "Aspect Ratio",
        slug: "aspect-ratio",
        description:
          "Displays content within a desired ratio, constraining the width/height.",
        importExample: `import { AspectRatio } from "@workspace/ui/components/aspect-ratio";`,
        codeExample: `<div
  className="w-[300px] bg-muted rounded-md flex items-center justify-center"
  style={{ aspectRatio: "16/9" }}
>
  <span className="text-muted-foreground text-sm">16:9</span>
</div>`,
        props: [
          {
            name: "ratio",
            type: "number",
            default: "1",
            description:
              "The desired width-to-height ratio. For example, 16/9 for widescreen.",
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes to apply to the container.",
          },
        ],
        examples: [
          {
            id: "landscape",
            title: "16:9 Video Embed",
            description:
              "Standard widescreen ratio for embedding videos. AspectRatio ensures the iframe maintains 16:9 regardless of container width.",
            code: `<div className="w-[450px]">
  <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden bg-black">
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Video demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full"
    />
  </AspectRatio>
</div>`,
          },
          {
            id: "square",
            title: "1:1 Square",
            description:
              "Square ratio ideal for profile pictures, thumbnails, and grid layouts.",
            code: `<div className="w-[200px]">
  <AspectRatio ratio={1} className="rounded-lg overflow-hidden">
    <Image src="/cupia-emblem.png" alt="Square demo" fill className="object-contain bg-muted" />
  </AspectRatio>
</div>`,
          },
          {
            id: "photo",
            title: "4:3 Photo",
            description:
              "Classic photo ratio used in traditional photography and document scans.",
            code: `<div className="w-[320px]">
  <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden">
    <Image src="/cupia-logo.png" alt="Photo demo" fill className="object-contain bg-muted" />
  </AspectRatio>
</div>`,
          },
        ],
        accessibility:
          "Maintains accessible aspect ratios by preserving intrinsic dimensions, preventing layout shift.",
        relatedComponents: ["card", "carousel"],
      },
      {
        name: "Card",
        slug: "card",
        description:
          "Displays a card with header, content, and footer sections.",
        importExample: `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";`,
        codeExample: `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Card content goes here.</p>
  </CardContent>
</Card>`,
        props: [
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to apply custom styling or override the default card appearance.",
          },
          {
            name: "asChild",
            type: "boolean",
            default: "false",
            description:
              "Merges props onto the child element instead of rendering a default <div> wrapper.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description:
              "Card content, typically composed of CardHeader, CardContent, and CardFooter sub-components.",
          },
        ],
        examples: [
          {
            id: "basic",
            title: "Basic",
            description:
              "A practical card showing a meeting invite with schedule, participants, and action buttons.",
            code: `<Card className="w-full max-w-sm">
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
    <Button variant="outline" size="sm">Decline</Button>
    <Button size="sm">Join Meeting</Button>
  </CardFooter>
</Card>`,
          },
          {
            id: "with-image",
            title: "With Image",
            description:
              "Card with a hero image, badges, and call-to-action — commonly used for product or project showcases.",
            code: `<Card className="w-full max-w-sm overflow-hidden">
  <div className="flex h-48 w-full items-center justify-center bg-muted/50 p-6">
    <Image src={cupiaLogoVertical} alt="CUPIA Customs System" width={280} height={140} className="h-full w-auto object-contain" />
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
</Card>`,
          },
          {
            id: "with-form",
            title: "With Form",
            description:
              "Card containing a form layout for settings or data entry.",
            code: `<Card className="w-full max-w-sm">
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
</Card>`,
          },
          {
            id: "stats",
            title: "Stats Card",
            description: "Compact stat cards for dashboard KPIs.",
            code: `<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
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
</div>`,
          },
          {
            id: "notification",
            title: "Notification Card",
            description:
              "Card displaying notifications with avatar, message, and timestamp.",
            code: `<Card className="w-[380px]">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <div className="flex items-start gap-4 rounded-md border p-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">JD</span>
      <div className="grid gap-1">
        <p className="text-sm font-medium">John Doe commented on your report</p>
        <p className="text-xs text-muted-foreground">2 hours ago</p>
      </div>
    </div>
    <div className="flex items-start gap-4 rounded-md border p-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-medium">AS</span>
      <div className="grid gap-1">
        <p className="text-sm font-medium">Alice Smith shared a document</p>
        <p className="text-xs text-muted-foreground">5 hours ago</p>
      </div>
    </div>
    <div className="flex items-start gap-4 rounded-md border p-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-medium">SY</span>
      <div className="grid gap-1">
        <p className="text-sm font-medium">System update completed</p>
        <p className="text-xs text-muted-foreground">1 day ago</p>
      </div>
    </div>
  </CardContent>
</Card>`,
          },
        ],
        accessibility:
          "Renders as a semantic grouping element; pair with appropriate headings inside CardTitle for screen reader clarity.",
        relatedComponents: ["separator", "badge", "button"],
      },
      {
        name: "Collapsible",
        slug: "collapsible",
        description:
          "An interactive component which expands/collapses a panel.",
        importExample: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@workspace/ui/components/collapsible";`,
        codeExample: `<Collapsible className="w-full max-w-sm space-y-2">
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
</Collapsible>`,
        props: [
          {
            name: "open",
            type: "boolean",
            description: "The controlled open state of the collapsible.",
          },
          {
            name: "defaultOpen",
            type: "boolean",
            default: "false",
            description:
              "The default open state when initially rendered uncontrolled.",
          },
          {
            name: "onOpenChange",
            type: "(open: boolean) => void",
            description: "Callback invoked when the open state changes.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "When true, prevents the user from toggling the collapsible.",
          },
        ],
        examples: [
          {
            id: "basic",
            title: "Basic",
            description: "Simple collapsible section with a button trigger.",
            code: `<Collapsible>
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
</Collapsible>`,
          },
          {
            id: "with-state",
            title: "With Open State",
            description: "Collapsible with visible open/close state indicator.",
            code: `<Collapsible defaultOpen>
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
</Collapsible>`,
          },
        ],
        accessibility:
          "Implements a disclosure widget pattern. Trigger element receives appropriate aria-expanded state.",
        relatedComponents: ["accordion", "card"],
      },
      {
        name: "Resizable",
        slug: "resizable",
        description:
          "A group of resizable panels that can be adjusted by dragging.",
        importExample: `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@workspace/ui/components/resizable";`,
        codeExample: `<ResizablePanelGroup orientation="horizontal" className="min-h-[100px] max-w-md rounded-lg border">
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
</ResizablePanelGroup>`,
        props: [
          {
            name: "orientation",
            type: '"horizontal" | "vertical"',
            default: '"horizontal"',
            description:
              "The orientation the panels are laid out. Horizontal creates side-by-side panels, vertical creates stacked panels.",
          },
          {
            name: "withHandle",
            type: "boolean",
            default: "false",
            description:
              "When true, displays a visible drag handle on the ResizableHandle separator.",
          },
          {
            name: "defaultSize",
            type: "number",
            description:
              "The default size of a ResizablePanel as a percentage (0-100).",
          },
          {
            name: "minSize",
            type: "number",
            description:
              "The minimum allowed size of a ResizablePanel as a percentage.",
          },
          {
            name: "maxSize",
            type: "number",
            description:
              "The maximum allowed size of a ResizablePanel as a percentage.",
          },
        ],
        examples: [
          {
            id: "horizontal",
            title: "Horizontal",
            description:
              "Two side-by-side resizable panels. Drag the handle to adjust widths.",
            code: `<ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
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
</ResizablePanelGroup>`,
          },
          {
            id: "vertical",
            title: "Vertical",
            description:
              "Vertically stacked resizable panels for top-bottom layouts.",
            code: `<ResizablePanelGroup orientation="vertical" className="min-h-[300px] max-w-md rounded-lg border">
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
</ResizablePanelGroup>`,
          },
          {
            id: "with-handle",
            title: "With Handle",
            description:
              "Resizable panels with a visible drag handle indicator between them.",
            code: `<ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
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
</ResizablePanelGroup>`,
          },
        ],
        accessibility:
          "Panels are resizable via keyboard (Arrow keys) and mouse drag. Handle elements are focusable.",
        relatedComponents: ["separator", "scroll-area"],
      },
      {
        name: "Scroll Area",
        slug: "scroll-area",
        description:
          "Augments native scroll functionality for custom, cross-browser styling.",
        importExample: `import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";`,
        codeExample: `<ScrollArea className="h-48 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="text-sm py-1">Tag {i + 1}</div>
    ))}
  </div>
</ScrollArea>`,
        props: [
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes. Set a fixed height/width to enable scrolling.",
          },
          {
            name: "type",
            type: '"auto" | "always" | "scroll" | "hover"',
            default: '"hover"',
            description:
              "Controls when the scrollbar is visible: auto, always, on scroll, or on hover.",
          },
          {
            name: "scrollHideDelay",
            type: "number",
            default: "600",
            description:
              "Delay in ms before the scrollbar hides after the user stops scrolling.",
          },
        ],
        examples: [
          {
            id: "vertical",
            title: "Vertical",
            description:
              "Vertically scrollable list of items with custom scrollbar styling.",
            code: `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {Array.from({ length: 50 }).map((_, i) => (
      <React.Fragment key={i}>
        <div className="text-sm">{["React", "Vue", "Angular", "Svelte", "Next.js", "Remix", "Astro", "Nuxt", "SvelteKit", "Gatsby"][i % 10]}</div>
        <Separator className="my-2" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`,
          },
          {
            id: "horizontal",
            title: "Horizontal",
            description:
              "Horizontally scrollable content area for image galleries or wide tables.",
            code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
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
</ScrollArea>`,
          },
        ],
        accessibility:
          "Provides custom scrollbar styling while maintaining native scroll behavior and keyboard accessibility.",
        relatedComponents: ["separator", "card"],
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
        props: [
          {
            name: "orientation",
            type: '"horizontal" | "vertical"',
            default: '"horizontal"',
            description:
              "Sets the axis along which the separator is rendered, either horizontal or vertical.",
          },
          {
            name: "decorative",
            type: "boolean",
            default: "false",
            description:
              'When true, the separator is purely visual and is hidden from assistive technology via role="none".',
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes for custom spacing, color, or thickness of the separator line.",
          },
        ],
        examples: [
          {
            id: "horizontal",
            title: "Horizontal",
            description:
              "Default horizontal separator between content sections.",
            code: `<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  </div>
  <Separator className="my-4" />
  <p className="text-sm text-muted-foreground">Additional content below the separator.</p>
</div>`,
          },
          {
            id: "vertical",
            title: "Vertical",
            description: "Vertical separator between inline elements.",
            code: `<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`,
          },
        ],
        accessibility:
          'Renders with role="separator" by default; set decorative to true when the separator is purely visual.',
        relatedComponents: ["card", "tabs"],
      },
      {
        name: "Tabs",
        slug: "tabs",
        description:
          "A set of layered sections of content, known as tab panels, that are displayed one at a time.",
        importExample: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";`,
        codeExample: `<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="text-sm text-muted-foreground">Account settings here.</TabsContent>
  <TabsContent value="password" className="text-sm text-muted-foreground">Password settings here.</TabsContent>
</Tabs>`,
        props: [
          {
            name: "defaultValue",
            type: "string",
            description:
              "The value of the tab that should be active by default in uncontrolled mode.",
          },
          {
            name: "value",
            type: "string",
            description:
              "The controlled value of the currently active tab. Use together with onValueChange.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description:
              "Callback invoked when the active tab changes, receiving the new tab value.",
          },
          {
            name: "orientation",
            type: '"horizontal" | "vertical"',
            default: '"horizontal"',
            description:
              "The orientation of the tab list, affecting keyboard navigation direction.",
          },
          {
            name: "activationMode",
            type: '"automatic" | "manual"',
            default: '"automatic"',
            description:
              'When "manual", tabs are activated only on Enter/Space rather than on focus.',
          },
        ],
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic horizontal tabs with text content.",
            code: `<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="text-sm text-muted-foreground">Account settings here.</TabsContent>
  <TabsContent value="password" className="text-sm text-muted-foreground">Password settings here.</TabsContent>
</Tabs>`,
          },
          {
            id: "with-cards",
            title: "With Cards",
            description:
              "Tabs with card-based content for richer layouts like a settings page.",
            code: `<Tabs defaultValue="account" className="w-full max-w-md">
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
</Tabs>`,
          },
          {
            id: "underline",
            title: "Line (Underline)",
            description:
              "Clean underline-style tabs using the built-in line variant. Active tab shows a bottom indicator.",
            code: `<Tabs defaultValue="overview" className="w-[400px]">
  <TabsList variant="line">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="pt-4">
    <p className="text-sm text-muted-foreground">Overview of your project performance and key metrics.</p>
  </TabsContent>
  <TabsContent value="analytics" className="pt-4">
    <p className="text-sm text-muted-foreground">Detailed analytics and user behavior insights.</p>
  </TabsContent>
  <TabsContent value="reports" className="pt-4">
    <p className="text-sm text-muted-foreground">Generated reports and exportable data.</p>
  </TabsContent>
  <TabsContent value="settings" className="pt-4">
    <p className="text-sm text-muted-foreground">Configure your project settings and preferences.</p>
  </TabsContent>
</Tabs>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Tabs pattern with Arrow key navigation between triggers and automatic focus management.",
        relatedComponents: ["accordion", "card", "separator"],
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
        codeExample: `<div className="flex flex-wrap gap-2">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`,
        props: [
          {
            name: "variant",
            type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
            default: '"default"',
            description:
              "Controls the visual style of the button to convey intent such as primary actions or danger.",
          },
          {
            name: "size",
            type: '"default" | "sm" | "lg" | "icon"',
            default: '"default"',
            description:
              'Sets the button dimensions; use "icon" for square icon-only buttons.',
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "Prevents user interaction and applies a visually muted disabled style.",
          },
          {
            name: "asChild",
            type: "boolean",
            default: "false",
            description:
              "Merges button styles onto the child element (e.g., rendering an <a> tag styled as a button).",
          },
          {
            name: "onClick",
            type: "(event: React.MouseEvent) => void",
            description:
              "Callback invoked when the button is clicked by the user.",
          },
          {
            name: "type",
            type: '"button" | "submit" | "reset"',
            default: '"button"',
            description:
              'HTML button type attribute; set to "submit" for form submission behavior.',
          },
        ],
        variants: [
          "default",
          "secondary",
          "destructive",
          "outline",
          "ghost",
          "link",
        ],
        examples: [
          {
            id: "variants",
            title: "Variants",
            description:
              "All six built-in visual variants for different intent levels.",
            code: `<div className="flex flex-wrap gap-2">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`,
          },
          {
            id: "sizes",
            title: "Sizes",
            description:
              "Available size options: sm, default, lg, and icon for icon-only buttons.",
            code: `<div className="flex items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon"><SearchIcon className="h-4 w-4" /></Button>
</div>`,
          },
          {
            id: "with-icon",
            title: "With Icon",
            description:
              "Buttons with leading or trailing icons for added context.",
            code: `<div className="flex gap-2">
  <Button>
    <MailIcon className="mr-2 h-4 w-4" /> Login with Email
  </Button>
  <Button variant="outline">
    Download <DownloadIcon className="ml-2 h-4 w-4" />
  </Button>
</div>`,
          },
          {
            id: "loading",
            title: "Loading",
            description:
              "Disabled button with a spinner to indicate an in-progress action.",
            code: `<Button disabled>
  <Spinner className="mr-2 h-4 w-4" />
  Please wait
</Button>`,
          },
          {
            id: "as-link",
            title: "As Link",
            description:
              "Use asChild to render an anchor tag styled as a button for navigation.",
            code: `<Button asChild>
  <a href="#">Go to Dashboard</a>
</Button>`,
          },
          {
            id: "button-group",
            title: "Button Group",
            description:
              "Toolbar-style grouped buttons for related actions like text formatting or view switching.",
            code: `<div className="flex">
  <Button variant="outline" className="rounded-r-none border-r-0" size="sm">
    <Bold className="h-4 w-4" />
  </Button>
  <Button variant="outline" className="rounded-none border-r-0" size="sm">
    <Italic className="h-4 w-4" />
  </Button>
  <Button variant="outline" className="rounded-l-none" size="sm">
    <Underline className="h-4 w-4" />
  </Button>
</div>`,
          },
          {
            id: "async-action",
            title: "Async Action",
            description:
              "Button with loading state that disables during async operations — common pattern for form submissions.",
            code: `<div className="flex gap-3 items-center">
  <Button disabled>
    <Spinner className="h-4 w-4 mr-2" />
    Submitting...
  </Button>
  <Button>Submit Declaration</Button>
</div>`,
          },
        ],
        accessibility:
          "Renders a native <button> element with full keyboard support; use asChild with an <a> for navigation links.",
        relatedComponents: ["input", "label", "dialog", "alert-dialog"],
      },
      {
        name: "Calendar",
        slug: "calendar",
        description:
          "A date field component that allows users to enter and edit dates. Built on react-day-picker with support for single, range, and multiple date selection.",
        importExample: `import { Calendar } from "@workspace/ui/components/calendar";`,
        codeExample: `<Calendar mode="single" className="rounded-md border" />`,
        examples: [
          {
            id: "single",
            title: "Single Date Selection",
            description:
              "Basic calendar with single date selection. Click a date to select it.",
            code: `const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
          },
          {
            id: "range",
            title: "Date Range Selection",
            description:
              "Select a range of dates by clicking a start and end date. Use numberOfMonths to display multiple months side by side.",
            code: `import { DateRange } from "react-day-picker";

const [range, setRange] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: new Date(Date.now() + 5 * 86400000),
});

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  className="rounded-md border"
/>`,
          },
          {
            id: "multiple",
            title: "Multiple Date Selection",
            description:
              "Allow users to select multiple individual dates. Useful for scheduling or marking multiple events.",
            code: `const [dates, setDates] = React.useState<Date[]>([
  new Date(),
  new Date(Date.now() + 2 * 86400000),
  new Date(Date.now() + 4 * 86400000),
]);

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-md border"
/>`,
          },
          {
            id: "disabled-dates",
            title: "Disabled Dates",
            description:
              "Disable past dates or specific dates using the disabled prop with a matcher function.",
            code: `const today = new Date();

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={(date) =>
    date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }
  className="rounded-md border"
/>`,
          },
          {
            id: "date-picker",
            title: "Date Picker (with Popover)",
            description:
              "Combine Calendar with Popover and Button to create a dropdown date picker — the most common pattern in real applications.",
            code: `import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@workspace/ui/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover";
import { Button } from "@workspace/ui/components/button";

const [date, setDate] = React.useState<Date | undefined>(new Date());

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={\`w-[260px] justify-start text-left font-normal \${
        !date ? "text-muted-foreground" : ""
      }\`}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`,
          },
        ],
        props: [
          {
            name: "mode",
            type: '"single" | "range" | "multiple"',
            description:
              "The selection mode. Determines whether one date, a range, or multiple dates can be selected.",
          },
          {
            name: "selected",
            type: "Date | DateRange | Date[]",
            description:
              "The currently selected date(s). Type depends on the mode prop.",
          },
          {
            name: "onSelect",
            type: "(date: ...) => void",
            description:
              "Callback fired when a date is selected. The argument type matches the mode.",
          },
          {
            name: "numberOfMonths",
            type: "number",
            default: "1",
            description: "The number of months to display side by side.",
          },
          {
            name: "showOutsideDays",
            type: "boolean",
            default: "true",
            description:
              "Whether to show days from the previous/next month to fill the grid.",
          },
          {
            name: "disabled",
            type: "Matcher | Matcher[]",
            description:
              "A matcher or array of matchers to disable specific dates. Can be a function, date, date range, or day of week.",
          },
          {
            name: "locale",
            type: "Locale",
            description:
              "A date-fns locale object to localize month/day names and formatting.",
          },
          {
            name: "captionLayout",
            type: '"label" | "dropdown"',
            default: '"label"',
            description:
              'Layout of the month/year caption. Use "dropdown" to allow quick month/year navigation.',
          },
          {
            name: "buttonVariant",
            type: '"ghost" | "outline" | ...',
            default: '"ghost"',
            description:
              "The variant of the navigation buttons (previous/next month).",
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to apply to the calendar root.",
          },
          {
            name: "classNames",
            type: "Partial<ClassNames>",
            description:
              "Override default class names for individual calendar parts (day, month, weekday, etc.).",
          },
        ],
        variants: ["single", "range", "multiple"],
        accessibility:
          "Calendar is fully keyboard navigable: Arrow keys move between dates, Enter/Space selects a date, Home/End jump to start/end of the week, PageUp/PageDown navigate between months. The component uses proper ARIA roles (grid, gridcell) and labels for screen readers. Use the locale prop to ensure correct date localization for your users.",
        relatedComponents: ["button", "popover", "input", "dialog"],
      },
      {
        name: "Date Picker",
        slug: "date-picker",
        description:
          "A composite date picker that lets users select a start and end date from a calendar popover. Supports configurable preset buttons (e.g. Today, 1 Month, 1 Year) for quick date range selection. Click the input to open. Built on Calendar + Popover.",
        importExample: `import { DateRangePicker } from "@workspace/ui/components/date-range-picker";
import type { DateRange } from "@workspace/ui/components/date-range-picker";`,
        codeExample: `const [range, setRange] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: new Date(Date.now() + 7 * 86400000),
});

<DateRangePicker value={range} onChange={setRange} presets />`,
        examples: [
          {
            id: "basic",
            title: "Basic Date Range",
            description:
              "Click the input to open the calendar and select a date range.",
            code: `const [range, setRange] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: new Date(Date.now() + 7 * 86400000),
});

<DateRangePicker value={range} onChange={setRange} />`,
          },
          {
            id: "with-presets",
            title: "With Preset Buttons",
            description:
              "Pass presets={true} to show default preset buttons (당일, 1개월, 3개월, 1년, 전체) to the right of the date input.",
            code: `const [range, setRange] = React.useState<DateRange | undefined>();

<DateRangePicker value={range} onChange={setRange} presets />`,
          },
          {
            id: "custom-presets",
            title: "Custom Presets",
            description:
              "Define your own preset buttons with custom labels and date ranges.",
            code: `const [range, setRange] = React.useState<DateRange | undefined>();

const myPresets = [
  { key: "week", label: "This Week", getRange: () => {
    const to = new Date(); to.setHours(0,0,0,0);
    const from = new Date(to);
    from.setDate(from.getDate() - from.getDay());
    return { from, to };
  }},
  { key: "month", label: "This Month", getRange: () => {
    const to = new Date(); to.setHours(0,0,0,0);
    return { from: new Date(to.getFullYear(), to.getMonth(), 1), to };
  }},
  { key: "quarter", label: "This Quarter", getRange: () => {
    const to = new Date(); to.setHours(0,0,0,0);
    const q = Math.floor(to.getMonth() / 3) * 3;
    return { from: new Date(to.getFullYear(), q, 1), to };
  }},
];

<DateRangePicker value={range} onChange={setRange} presets={myPresets} />`,
          },
          {
            id: "single-month",
            title: "Single Month View",
            description:
              "Compact version showing only one month. Good for narrow layouts.",
            code: `const [range, setRange] = React.useState<DateRange | undefined>();

<DateRangePicker
  value={range}
  onChange={setRange}
  numberOfMonths={1}
  placeholder="Select period"
/>`,
          },
          {
            id: "custom-format",
            title: "Custom Date Format",
            description:
              "Display dates in a different format using date-fns format strings.",
            code: `const [range, setRange] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: new Date(Date.now() + 14 * 86400000),
});

<DateRangePicker
  value={range}
  onChange={setRange}
  dateFormat="MM/dd/yyyy"
/>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description:
              "A disabled date picker that cannot be interacted with.",
            code: `<DateRangePicker
  value={{ from: new Date(), to: new Date(Date.now() + 7 * 86400000) }}
  disabled
  presets
/>`,
          },
        ],
        props: [
          {
            name: "value",
            type: "DateRange | undefined",
            description:
              "The selected date range. DateRange is { from?: Date; to?: Date } from react-day-picker.",
          },
          {
            name: "onChange",
            type: "(range: DateRange | undefined) => void",
            description: "Callback when the date range changes.",
          },
          {
            name: "presets",
            type: "DateRangePreset[] | boolean",
            default: "undefined",
            description:
              "Preset buttons for quick date selection. Pass true for defaults (당일, 1개월, 3개월, 1년, 전체) or an array of custom presets with { key, label, getRange }.",
          },
          {
            name: "placeholder",
            type: "string",
            default: '"Select date range"',
            description: "Placeholder text shown when no range is selected.",
          },
          {
            name: "numberOfMonths",
            type: "number",
            default: "2",
            description:
              "Number of months to display side-by-side in the calendar popover.",
          },
          {
            name: "dateFormat",
            type: "string",
            default: '"yyyy-MM-dd"',
            description: "Date format string (date-fns compatible).",
          },
          {
            name: "align",
            type: '"start" | "center" | "end"',
            default: '"start"',
            description: "Alignment of the popover relative to the trigger.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Whether the picker and preset buttons are disabled.",
          },
          {
            name: "locale",
            type: "Partial<Locale>",
            description:
              "Locale object from date-fns for internationalization.",
          },
        ],
        variants: [
          "default",
          "with-presets",
          "custom-presets",
          "single-month",
          "custom-format",
          "disabled",
        ],
        accessibility:
          "The trigger button is focusable and opens the calendar popover on Enter/Space. Preset buttons are individually focusable and selectable via keyboard. Calendar navigation follows the same keyboard patterns as the Calendar component. The popover closes on Escape.",
        relatedComponents: ["calendar", "popover", "button", "input"],
      },
      {
        name: "Checkbox",
        slug: "checkbox",
        description:
          "A control that allows the user to toggle between checked and not checked.",
        importExample: `import { Checkbox } from "@workspace/ui/components/checkbox";`,
        codeExample: `<div className="flex items-center space-x-2">
  <Checkbox id="ex-terms" />
  <label htmlFor="ex-terms" className="text-sm">Accept terms and conditions</label>
</div>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic checkbox paired with a label.",
            code: `<div className="flex items-center space-x-2">
  <Checkbox id="ex-terms" />
  <Label htmlFor="ex-terms">Accept terms and conditions</Label>
</div>`,
          },
          {
            id: "with-description",
            title: "With Description",
            description: "Checkbox with supplementary description text.",
            code: `<div className="items-top flex space-x-2">
  <Checkbox id="ex-terms2" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="ex-terms2">Accept terms and conditions</Label>
    <p className="text-sm text-muted-foreground">
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description: "Checkbox in a disabled state that cannot be toggled.",
            code: `<div className="flex items-center space-x-2">
  <Checkbox id="ex-disabled-cb" disabled />
  <Label htmlFor="ex-disabled-cb" className="text-muted-foreground">Disabled option</Label>
</div>`,
          },
          {
            id: "terms-agreement",
            title: "Terms Agreement",
            description:
              "Required checkbox for accepting terms and conditions before form submission.",
            code: `<div className="space-y-4 w-full max-w-sm">
  <div className="items-top flex space-x-2">
    <Checkbox id="agree-terms" required />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="agree-terms">
        I agree to the Terms of Service and Privacy Policy
      </Label>
      <p className="text-xs text-muted-foreground">
        By checking this box, you confirm that you have read and accept our
        terms of service, privacy policy, and customs declaration regulations.
      </p>
    </div>
  </div>
  <Button disabled className="w-full">Submit Application</Button>
</div>`,
          },
          {
            id: "filter-checkboxes",
            title: "Filter Checkboxes",
            description:
              "Multiple checkboxes used as filters — common in search and data table UIs.",
            code: `<div className="rounded-lg border p-4 w-full max-w-xs space-y-3">
  <h4 className="text-sm font-medium">Filter by Status</h4>
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox id="filter-pending" defaultChecked />
      <Label htmlFor="filter-pending" className="text-sm font-normal">Pending (24)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="filter-approved" defaultChecked />
      <Label htmlFor="filter-approved" className="text-sm font-normal">Approved (156)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="filter-rejected" />
      <Label htmlFor="filter-rejected" className="text-sm font-normal">Rejected (8)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="filter-review" />
      <Label htmlFor="filter-review" className="text-sm font-normal">Under Review (42)</Label>
    </div>
  </div>
</div>`,
          },
        ],
        props: [
          {
            name: "checked",
            type: 'boolean | "indeterminate"',
            description:
              "The controlled checked state; supports boolean or indeterminate for partial selection patterns.",
          },
          {
            name: "onCheckedChange",
            type: '(checked: boolean | "indeterminate") => void',
            description:
              "Callback invoked when the checked state changes, receiving the new value.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "Prevents the user from interacting with the checkbox and applies a muted visual style.",
          },
          {
            name: "required",
            type: "boolean",
            default: "false",
            description:
              "Marks the checkbox as required for form validation and indicates it to assistive technology.",
          },
          {
            name: "name",
            type: "string",
            description:
              "The name attribute submitted with the form data when the checkbox is inside a form.",
          },
        ],
        accessibility:
          "Implements WAI-ARIA Checkbox pattern with Space key toggle; always pair with a visible Label for clarity.",
        relatedComponents: ["label", "switch", "radio-group"],
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
        examples: [
          {
            id: "basic",
            title: "Basic Combobox",
            description:
              "Autocomplete dropdown with a filterable list of framework options.",
            code: `<Command className="rounded-lg border shadow-md w-full max-w-sm">
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
</Command>`,
          },
          {
            id: "with-check",
            title: "With Selection Indicator",
            description:
              "Combobox that shows a check icon next to the selected option.",
            code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-[200px] justify-between">
      Select framework...
      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <Check className="mr-2 h-4 w-4" /> Next.js
          </CommandItem>
          <CommandItem>Remix</CommandItem>
          <CommandItem>Astro</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`,
          },
          {
            id: "disabled",
            title: "Disabled State",
            description:
              "Combobox in a disabled state that prevents user interaction.",
            code: `<Button variant="outline" className="w-[200px] justify-between" disabled>
  Select framework...
</Button>`,
          },
          {
            id: "country-select",
            title: "Country Select",
            description:
              "Searchable country selector — common in customs and international trade applications.",
            code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-[280px] justify-between">
      <GlobeIcon className="mr-2 h-4 w-4" />
      Select country...
      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[280px] p-0">
    <Command>
      <CommandInput placeholder="Search country..." />
      <CommandList>
        <CommandEmpty>No country found.</CommandEmpty>
        <CommandGroup heading="Countries">
          <CommandItem>South Korea</CommandItem>
          <CommandItem>Ecuador</CommandItem>
          <CommandItem>Ethiopia</CommandItem>
          <CommandItem>Algeria</CommandItem>
          <CommandItem>Ghana</CommandItem>
          <CommandItem>Cameroon</CommandItem>
          <CommandItem>Uzbekistan</CommandItem>
          <CommandItem>Tanzania</CommandItem>
          <CommandItem>Nepal</CommandItem>
          <CommandItem>Guatemala</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`,
          },
          {
            id: "multi-select",
            title: "Multi Select",
            description:
              "Combobox pattern supporting multiple selections with badge display.",
            code: `<div className="space-y-2 w-full max-w-sm">
  <div className="flex flex-wrap gap-1">
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
      South Korea <XIcon className="ml-1 h-3 w-3 cursor-pointer" />
    </span>
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
      Ecuador <XIcon className="ml-1 h-3 w-3 cursor-pointer" />
    </span>
  </div>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
        Add countries...
        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="p-0">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup>
            <CommandItem><Check className="mr-2 h-4 w-4" /> South Korea</CommandItem>
            <CommandItem><Check className="mr-2 h-4 w-4" /> Ecuador</CommandItem>
            <CommandItem><Check className="mr-2 h-4 w-4 opacity-0" /> Ethiopia</CommandItem>
            <CommandItem><Check className="mr-2 h-4 w-4 opacity-0" /> Ghana</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</div>`,
          },
        ],
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
        examples: [
          {
            id: "basic",
            title: "Basic Field",
            description:
              "A simple form field with label, input, and description text.",
            code: `<div className="w-full max-w-sm space-y-2">
  <Label htmlFor="field-email">Email</Label>
  <Input id="field-email" placeholder="email@example.com" />
  <p className="text-xs text-muted-foreground">Enter your email address</p>
</div>`,
          },
          {
            id: "required",
            title: "Required Field",
            description:
              "A required field with visual indicator and validation message.",
            code: `<div className="w-full max-w-sm space-y-2">
  <Label htmlFor="field-name">
    Full Name <span className="text-destructive">*</span>
  </Label>
  <Input id="field-name" placeholder="John Doe" required />
  <p className="text-xs text-muted-foreground">Your legal full name.</p>
</div>`,
          },
          {
            id: "error",
            title: "Error State",
            description:
              "A field showing an error message with destructive styling.",
            code: `<div className="w-full max-w-sm space-y-2">
  <Label htmlFor="field-pw" className="text-destructive">Password</Label>
  <Input id="field-pw" type="password" className="border-destructive" />
  <p className="text-xs text-destructive">Password must be at least 8 characters.</p>
</div>`,
          },
          {
            id: "with-select",
            title: "Field with Select",
            description:
              "A form field using a Select dropdown instead of a text input.",
            code: `<div className="w-full max-w-sm space-y-2">
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
  <p className="text-xs text-muted-foreground">Select your country of residence.</p>
</div>`,
          },
          {
            id: "inline-layout",
            title: "Inline Layout",
            description:
              "Horizontal label-input layout for compact forms — common in data-heavy enterprise interfaces.",
            code: `<div className="w-full max-w-lg space-y-4">
  <div className="grid grid-cols-[8rem_1fr] items-center gap-4">
    <Label className="text-right text-sm">Declaration No.</Label>
    <Input placeholder="e.g. IMP-2026-001234" />
  </div>
  <div className="grid grid-cols-[8rem_1fr] items-center gap-4">
    <Label className="text-right text-sm">HS Code</Label>
    <Input placeholder="e.g. 8471.30.0000" />
  </div>
  <div className="grid grid-cols-[8rem_1fr] items-center gap-4">
    <Label className="text-right text-sm">Country of Origin</Label>
    <Input placeholder="e.g. South Korea" />
  </div>
</div>`,
          },
        ],
      },
      {
        name: "Input",
        slug: "input",
        description: "Displays a form input field.",
        importExample: `import { Input } from "@workspace/ui/components/input";`,
        codeExample: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="ex-email">Email</Label>
  <Input type="email" id="ex-email" placeholder="Email" />
</div>`,
        props: [
          {
            name: "type",
            type: "string",
            default: '"text"',
            description:
              'HTML input type such as "text", "email", "password", or "number" for browser-native behavior.',
          },
          {
            name: "placeholder",
            type: "string",
            description:
              "Hint text displayed inside the input when no value has been entered by the user.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "Prevents user interaction and renders the input in a visually muted disabled state.",
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to customize the input appearance or override default styling.",
          },
          {
            name: "value",
            type: "string",
            description:
              "The controlled value of the input. Use together with onChange for controlled components.",
          },
          {
            name: "onChange",
            type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
            description:
              "Callback invoked on every keystroke, receiving the native change event.",
          },
        ],
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic text input with a label.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="ex-email">Email</Label>
  <Input type="email" id="ex-email" placeholder="Email" />
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description: "Input in a disabled state with a muted visual style.",
            code: `<Input disabled placeholder="Disabled input" className="max-w-sm" />`,
          },
          {
            id: "with-helper",
            title: "With Helper Text",
            description:
              "Input paired with a description text below for guidance.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="ex-username">Username</Label>
  <Input id="ex-username" placeholder="johndoe" />
  <p className="text-xs text-muted-foreground">
    This is your public display name.
  </p>
</div>`,
          },
          {
            id: "file",
            title: "File",
            description: "File input for uploading documents or images.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="ex-doc">Document</Label>
  <Input id="ex-doc" type="file" />
</div>`,
          },
          {
            id: "search",
            title: "Search Input",
            description:
              "Input with search icon and clear button — standard pattern for filtering and search UIs.",
            code: `<div className="relative w-full max-w-sm">
  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input className="pl-9 pr-9" placeholder="Search declarations..." />
  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
    <XIcon className="h-4 w-4" />
  </button>
</div>`,
          },
          {
            id: "password",
            title: "Password Input",
            description:
              "Password field with show/hide toggle for authentication forms.",
            code: `<div className="relative w-full max-w-sm">
  <Input type="password" placeholder="Enter your password" className="pr-10" />
  <button
    type="button"
    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
  >
    <EyeIcon className="h-4 w-4" />
  </button>
</div>`,
          },
        ],
        accessibility:
          "Renders a native <input> element; always associate with a Label component using matching htmlFor and id attributes.",
        relatedComponents: ["label", "field", "textarea", "input-otp"],
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
        examples: [
          {
            id: "with-icon",
            title: "With Search Icon",
            description: "Input group with a leading search icon.",
            code: `<div className="relative w-full max-w-sm">
  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input className="pl-8" placeholder="Search..." />
</div>`,
          },
          {
            id: "with-button",
            title: "With Button",
            description: "Input combined with a submit button in a single row.",
            code: `<div className="flex w-full max-w-sm gap-2">
  <Input placeholder="Enter your email" />
  <Button>Subscribe</Button>
</div>`,
          },
          {
            id: "with-addon",
            title: "With Text Addon",
            description:
              "Input with a prepended text addon for URL or currency input.",
            code: `<div className="flex w-full max-w-sm">
  <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">https://</span>
  <Input className="rounded-l-none" placeholder="example.com" />
</div>`,
          },
          {
            id: "currency",
            title: "Currency Input",
            description:
              "Input with currency prefix and dropdown — common in financial and customs valuation forms.",
            code: `<div className="flex w-full max-w-sm">
  <Select defaultValue="usd">
    <SelectTrigger className="w-[100px] rounded-r-none border-r-0">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="usd">USD</SelectItem>
      <SelectItem value="krw">KRW</SelectItem>
      <SelectItem value="eur">EUR</SelectItem>
    </SelectContent>
  </Select>
  <Input
    type="number"
    className="rounded-l-none"
    placeholder="0.00"
  />
</div>`,
          },
          {
            id: "url-input",
            title: "URL Input",
            description:
              "Input with protocol prefix for entering web addresses.",
            code: `<div className="flex w-full max-w-sm">
  <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
    https://
  </span>
  <Input className="rounded-l-none" placeholder="www.example.com" />
</div>`,
          },
        ],
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
        examples: [
          {
            id: "six-digits",
            title: "Six Digit OTP",
            description: "Standard 6-digit verification code input.",
            code: `<InputOTP maxLength={6}>
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
            id: "with-separator",
            title: "With Separator",
            description: "OTP input split into groups with a dash separator.",
            code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <span className="mx-2 text-muted-foreground">—</span>
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
          },
          {
            id: "four-digits",
            title: "Four Digit PIN",
            description: "Short 4-digit PIN code input.",
            code: `<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`,
          },
          {
            id: "separated",
            title: "Separated Boxes",
            description:
              "Individual separated input boxes with spacing between each slot.",
            code: `<InputOTP maxLength={6} containerClassName="gap-2">
  <InputOTPGroup><InputOTPSlot index={0} /></InputOTPGroup>
  <InputOTPGroup><InputOTPSlot index={1} /></InputOTPGroup>
  <InputOTPGroup><InputOTPSlot index={2} /></InputOTPGroup>
  <InputOTPGroup><InputOTPSlot index={3} /></InputOTPGroup>
  <InputOTPGroup><InputOTPSlot index={4} /></InputOTPGroup>
  <InputOTPGroup><InputOTPSlot index={5} /></InputOTPGroup>
</InputOTP>`,
          },
          {
            id: "verification",
            title: "Verification Flow",
            description:
              "Complete verification UI with OTP input, timer, and resend link — typical email/SMS verification pattern.",
            code: `<div className="flex flex-col items-center space-y-4">
  <div className="text-center space-y-1">
    <h3 className="text-lg font-semibold">Verify your email</h3>
    <p className="text-sm text-muted-foreground">
      Enter the 6-digit code sent to your email
    </p>
  </div>
  <InputOTP maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <span className="mx-2 text-muted-foreground">—</span>
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
  <div className="text-center space-y-1">
    <p className="text-sm text-muted-foreground">Time remaining: 2:30</p>
    <button className="text-sm text-primary underline-offset-4 hover:underline">
      Resend code
    </button>
  </div>
</div>`,
          },
        ],
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
        examples: [
          {
            id: "with-input",
            title: "With Input",
            description: "Label associated with a text input via htmlFor.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="label-email">Email</Label>
  <Input type="email" id="label-email" placeholder="Email" />
</div>`,
          },
          {
            id: "with-checkbox",
            title: "With Checkbox",
            description: "Label paired with a checkbox for terms acceptance.",
            code: `<div className="flex items-center space-x-2">
  <Checkbox id="label-terms" />
  <Label htmlFor="label-terms">Accept terms and conditions</Label>
</div>`,
          },
          {
            id: "required",
            title: "Required Label",
            description: "Label with a required field indicator asterisk.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="label-name">
    Name <span className="text-destructive">*</span>
  </Label>
  <Input id="label-name" placeholder="Your name" required />
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled Label",
            description: "Label with a disabled input shows muted styling.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="label-disabled" className="text-muted-foreground">Disabled</Label>
  <Input id="label-disabled" disabled placeholder="Cannot edit" />
</div>`,
          },
          {
            id: "form-layout",
            title: "Form Layout",
            description:
              "Labels in a structured form layout with aligned columns — enterprise form standard.",
            code: `<div className="w-full max-w-lg space-y-4">
  <div className="flex items-center gap-4">
    <Label htmlFor="fl-declaration" className="w-32 text-right text-sm shrink-0">
      Declaration No.
    </Label>
    <Input id="fl-declaration" placeholder="IMP-2026-001234" />
  </div>
  <div className="flex items-center gap-4">
    <Label htmlFor="fl-company" className="w-32 text-right text-sm shrink-0">
      Company Name
    </Label>
    <Input id="fl-company" placeholder="Acme Trading Co." />
  </div>
  <div className="flex items-center gap-4">
    <Label htmlFor="fl-date" className="w-32 text-right text-sm shrink-0">
      Filing Date
    </Label>
    <Input id="fl-date" type="date" />
  </div>
</div>`,
          },
        ],
        props: [
          {
            name: "htmlFor",
            type: "string",
            description:
              "The id of the form control this label is associated with, enabling click-to-focus behavior.",
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to customize label typography, spacing, or color.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description:
              "The text or elements rendered inside the label, describing the associated form control.",
          },
        ],
        accessibility:
          "Renders a native <label> element that programmatically links to its form control via htmlFor for screen readers.",
        relatedComponents: ["input", "checkbox", "switch", "textarea"],
      },
      {
        name: "Radio Group",
        slug: "radio-group",
        description:
          "A set of checkable buttons, known as radio buttons, where only one can be checked at a time.",
        importExample: `import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group";`,
        codeExample: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="ex-r1" />
    <Label htmlFor="ex-r1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="ex-r2" />
    <Label htmlFor="ex-r2">Option Two</Label>
  </div>
</RadioGroup>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic radio group with two options.",
            code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="ex-r1" />
    <Label htmlFor="ex-r1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="ex-r2" />
    <Label htmlFor="ex-r2">Option Two</Label>
  </div>
</RadioGroup>`,
          },
          {
            id: "with-description",
            title: "With Description",
            description:
              "Each radio option includes a description for extra context.",
            code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="default" id="ex-rd1" className="mt-1" />
    <div>
      <Label htmlFor="ex-rd1">Default</Label>
      <p className="text-sm text-muted-foreground">Standard spacing and size.</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="comfortable" id="ex-rd2" className="mt-1" />
    <div>
      <Label htmlFor="ex-rd2">Comfortable</Label>
      <p className="text-sm text-muted-foreground">More padding for a relaxed layout.</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="compact" id="ex-rd3" className="mt-1" />
    <div>
      <Label htmlFor="ex-rd3">Compact</Label>
      <p className="text-sm text-muted-foreground">Tight spacing to display more items.</p>
    </div>
  </div>
</RadioGroup>`,
          },
          {
            id: "horizontal",
            title: "Horizontal Layout",
            description:
              "Radio buttons laid out horizontally for compact single-row selection.",
            code: `<RadioGroup defaultValue="weekly" className="flex flex-row gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="daily" id="rh-daily" />
    <Label htmlFor="rh-daily">Daily</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="weekly" id="rh-weekly" />
    <Label htmlFor="rh-weekly">Weekly</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="monthly" id="rh-monthly" />
    <Label htmlFor="rh-monthly">Monthly</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="yearly" id="rh-yearly" />
    <Label htmlFor="rh-yearly">Yearly</Label>
  </div>
</RadioGroup>`,
          },
          {
            id: "payment-method",
            title: "Payment Method",
            description:
              "Card-style radio selection for payment methods — common in e-commerce and duty payment.",
            code: `<RadioGroup defaultValue="credit-card" className="grid gap-3 w-full max-w-sm">
  <Label
    htmlFor="pm-credit"
    className="flex items-center gap-3 rounded-lg border p-4 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 [&:has(:checked)]:border-primary"
  >
    <RadioGroupItem value="credit-card" id="pm-credit" />
    <CreditCardIcon className="h-5 w-5" />
    <div>
      <p className="text-sm font-medium">Credit Card</p>
      <p className="text-xs text-muted-foreground">Visa, Mastercard, AMEX</p>
    </div>
  </Label>
  <Label
    htmlFor="pm-bank"
    className="flex items-center gap-3 rounded-lg border p-4 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 [&:has(:checked)]:border-primary"
  >
    <RadioGroupItem value="bank-transfer" id="pm-bank" />
    <BuildingIcon className="h-5 w-5" />
    <div>
      <p className="text-sm font-medium">Bank Transfer</p>
      <p className="text-xs text-muted-foreground">Direct bank-to-bank payment</p>
    </div>
  </Label>
  <Label
    htmlFor="pm-debit"
    className="flex items-center gap-3 rounded-lg border p-4 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 [&:has(:checked)]:border-primary"
  >
    <RadioGroupItem value="direct-debit" id="pm-debit" />
    <WalletIcon className="h-5 w-5" />
    <div>
      <p className="text-sm font-medium">Direct Debit</p>
      <p className="text-xs text-muted-foreground">Automatic recurring payment</p>
    </div>
  </Label>
</RadioGroup>`,
          },
          {
            id: "shipping-options",
            title: "Shipping Options",
            description:
              "Radio options with descriptions inside bordered cards — common for shipping or service tier selection.",
            code: `<RadioGroup defaultValue="standard" className="space-y-3 w-full max-w-md">
  <div className="flex items-start space-x-3 rounded-md border p-3">
    <RadioGroupItem value="express" id="ship-express" className="mt-0.5" />
    <div>
      <Label htmlFor="ship-express" className="font-medium">Express Shipping</Label>
      <p className="text-xs text-muted-foreground">Delivered in 1-2 business days</p>
    </div>
  </div>
  <div className="flex items-start space-x-3 rounded-md border p-3 border-primary">
    <RadioGroupItem value="standard" id="ship-standard" className="mt-0.5" />
    <div>
      <Label htmlFor="ship-standard" className="font-medium">Standard Shipping</Label>
      <p className="text-xs text-muted-foreground">Delivered in 5-7 business days</p>
    </div>
  </div>
  <div className="flex items-start space-x-3 rounded-md border p-3">
    <RadioGroupItem value="economy" id="ship-economy" className="mt-0.5" />
    <div>
      <Label htmlFor="ship-economy" className="font-medium">Economy Shipping</Label>
      <p className="text-xs text-muted-foreground">Delivered in 10-14 business days</p>
    </div>
  </div>
</RadioGroup>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Radio Group pattern with Arrow key navigation between options; always pair each item with a Label.",
        relatedComponents: ["checkbox", "select", "label"],
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
        props: [
          {
            name: "value",
            type: "string",
            description:
              "The controlled value of the selected item. Use together with onValueChange.",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description:
              "Callback invoked when the user selects an option, receiving the new value string.",
          },
          {
            name: "defaultValue",
            type: "string",
            description:
              "The value of the item that should be selected by default in uncontrolled mode.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "Prevents the user from opening the select dropdown and applies a muted visual state.",
          },
          {
            name: "name",
            type: "string",
            description:
              "The name attribute submitted with the form data when used inside a <form> element.",
          },
          {
            name: "required",
            type: "boolean",
            default: "false",
            description:
              "Marks the select as required for native form validation before submission.",
          },
        ],
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic select dropdown with a few options.",
            code: `<Select>
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
            id: "with-label",
            title: "With Label",
            description: "Select paired with a label for form layouts.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="kr">South Korea</SelectItem>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="jp">Japan</SelectItem>
      <SelectItem value="cn">China</SelectItem>
    </SelectContent>
  </Select>
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description: "Select in a disabled state.",
            code: `<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
  </SelectContent>
</Select>`,
          },
          {
            id: "with-icons",
            title: "With Icons",
            description:
              "Select options with leading icons for visual identification.",
            code: `<Select>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Select country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="kr">South Korea</SelectItem>
    <SelectItem value="ec">Ecuador</SelectItem>
    <SelectItem value="et">Ethiopia</SelectItem>
    <SelectItem value="dz">Algeria</SelectItem>
    <SelectItem value="gh">Ghana</SelectItem>
    <SelectItem value="cm">Cameroon</SelectItem>
  </SelectContent>
</Select>`,
          },
          {
            id: "form-select",
            title: "Form Select",
            description:
              "Select integrated in a form layout with label and validation.",
            code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="decl-type">
    Declaration Type <span className="text-destructive">*</span>
  </Label>
  <Select>
    <SelectTrigger id="decl-type">
      <SelectValue placeholder="Select type" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="import">Import</SelectItem>
      <SelectItem value="export">Export</SelectItem>
      <SelectItem value="transit">Transit</SelectItem>
      <SelectItem value="re-export">Re-export</SelectItem>
    </SelectContent>
  </Select>
  <p className="text-xs text-muted-foreground">
    Choose the customs declaration type for this shipment.
  </p>
</div>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Listbox pattern with full keyboard navigation; Arrow keys browse items, Enter selects.",
        relatedComponents: ["combobox", "radio-group", "label"],
      },
      {
        name: "Switch",
        slug: "switch",
        description:
          "A control that allows the user to toggle between on and off.",
        importExample: `import { Switch } from "@workspace/ui/components/switch";`,
        codeExample: `<div className="flex items-center space-x-2">
  <Switch id="ex-airplane" />
  <Label htmlFor="ex-airplane">Airplane Mode</Label>
</div>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic switch with a label.",
            code: `<div className="flex items-center space-x-2">
  <Switch id="ex-airplane" />
  <Label htmlFor="ex-airplane">Airplane Mode</Label>
</div>`,
          },
          {
            id: "with-description",
            title: "With Description",
            description:
              "Switch with a label and supplementary description text, common in settings pages.",
            code: `<div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-sm">
  <div className="space-y-0.5">
    <Label htmlFor="ex-marketing">Marketing emails</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products, features, and more.
    </p>
  </div>
  <Switch id="ex-marketing" />
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description: "Switch in a disabled state.",
            code: `<div className="flex items-center space-x-2">
  <Switch id="ex-disabled-sw" disabled />
  <Label htmlFor="ex-disabled-sw" className="text-muted-foreground">Disabled</Label>
</div>`,
          },
          {
            id: "settings-group",
            title: "Settings Group",
            description:
              "Multiple switches in a settings panel layout — standard pattern for preference pages.",
            code: `<div className="rounded-lg border p-4 w-full max-w-sm space-y-4">
  <h4 className="text-sm font-medium">Notification Preferences</h4>
  <div className="flex items-center justify-between">
    <Label htmlFor="sw-email" className="text-sm font-normal">Email Notifications</Label>
    <Switch id="sw-email" defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="sw-sms" className="text-sm font-normal">SMS Alerts</Label>
    <Switch id="sw-sms" defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="sw-dark" className="text-sm font-normal">Dark Mode</Label>
    <Switch id="sw-dark" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="sw-auto" className="text-sm font-normal">Auto-save Drafts</Label>
    <Switch id="sw-auto" defaultChecked />
  </div>
</div>`,
          },
          {
            id: "with-detail",
            title: "With Description",
            description:
              "Switch with label and detailed description for complex toggle options.",
            code: `<div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-sm">
  <div className="space-y-0.5">
    <Label htmlFor="sw-2fa">Two-Factor Authentication</Label>
    <p className="text-sm text-muted-foreground">
      Add an extra layer of security to your account by requiring a
      verification code on each login.
    </p>
  </div>
  <Switch id="sw-2fa" />
</div>`,
          },
        ],
        props: [
          {
            name: "checked",
            type: "boolean",
            description:
              "The controlled on/off state of the switch. Use together with onCheckedChange.",
          },
          {
            name: "onCheckedChange",
            type: "(checked: boolean) => void",
            description:
              "Callback invoked when the switch is toggled, receiving the new boolean state.",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description:
              "Prevents user interaction and renders the switch in a visually muted disabled state.",
          },
          {
            name: "defaultChecked",
            type: "boolean",
            default: "false",
            description:
              "The default on/off state when initially rendered in uncontrolled mode.",
          },
          {
            name: "name",
            type: "string",
            description:
              "The name attribute submitted with the form data when the switch is inside a form.",
          },
        ],
        accessibility:
          "Implements WAI-ARIA Switch role with Space key toggle; always pair with a Label for accessible naming.",
        relatedComponents: ["checkbox", "label", "toggle"],
      },
      {
        name: "Textarea",
        slug: "textarea",
        description: "Displays a form textarea.",
        importExample: `import { Textarea } from "@workspace/ui/components/textarea";`,
        codeExample: `<Textarea placeholder="Type your message here." />`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic textarea input.",
            code: `<Textarea placeholder="Type your message here." />`,
          },
          {
            id: "with-label",
            title: "With Label",
            description: "Textarea with a label and helper text.",
            code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
  <p className="text-sm text-muted-foreground">
    Your message will be copied to the support team.
  </p>
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description: "Textarea in a disabled state.",
            code: `<Textarea placeholder="Disabled textarea" disabled />`,
          },
          {
            id: "with-counter",
            title: "With Character Counter",
            description:
              "Textarea with character count display — required for fields with length limits.",
            code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="remarks">Remarks</Label>
  <Textarea
    id="remarks"
    placeholder="Enter additional remarks for the declaration..."
    maxLength={500}
  />
  <div className="flex justify-end">
    <span className="text-xs text-muted-foreground">0 / 500</span>
  </div>
</div>`,
          },
          {
            id: "auto-resize",
            title: "Auto Resize",
            description:
              "Textarea that grows with content using min and max height constraints.",
            code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="description">Description</Label>
  <Textarea
    id="description"
    placeholder="Start typing and the textarea will grow..."
    className="min-h-[80px] max-h-[200px] resize-none overflow-y-auto"
  />
  <p className="text-xs text-muted-foreground">
    The field expands as you type, up to a maximum height.
  </p>
</div>`,
          },
        ],
        accessibility:
          "Renders a native <textarea> element; always associate with a Label using matching htmlFor and id.",
        relatedComponents: ["input", "label", "field"],
      },
      {
        name: "Toggle",
        slug: "toggle",
        description: "A two-state button that can be either on or off.",
        importExample: `import { Toggle } from "@workspace/ui/components/toggle";`,
        codeExample: `<Toggle aria-label="Toggle italic">
  <span className="font-bold">B</span>
</Toggle>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic toggle button.",
            code: `<Toggle aria-label="Toggle bold">
  <span className="font-bold">B</span>
</Toggle>`,
          },
          {
            id: "outline",
            title: "Outline",
            description:
              "Toggle with outline variant for a more subtle appearance.",
            code: `<Toggle variant="outline" aria-label="Toggle italic">
  <span className="italic">I</span>
</Toggle>`,
          },
          {
            id: "with-text",
            title: "With Text",
            description: "Toggle with both icon and text label.",
            code: `<Toggle aria-label="Toggle bold">
  <span className="font-bold mr-2">B</span>
  Bold
</Toggle>`,
          },
          {
            id: "with-state",
            title: "Stateful Toggle",
            description:
              "Toggle with visual feedback showing pressed/unpressed state with different icons.",
            code: `<div className="flex gap-2 items-center">
  <Toggle aria-label="Toggle favorite" variant="outline">
    <StarIcon className="h-4 w-4" />
  </Toggle>
  <Toggle aria-label="Toggle favorite" variant="outline" data-state="on" className="data-[state=on]:bg-yellow-100 data-[state=on]:text-yellow-600">
    <StarIcon className="h-4 w-4 fill-current" />
  </Toggle>
  <span className="text-sm text-muted-foreground ml-2">Click to toggle favorite</span>
</div>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA toggle button pattern with aria-pressed; always provide an aria-label for icon-only toggles.",
        relatedComponents: ["toggle-group", "button", "switch"],
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
        examples: [
          {
            id: "multiple",
            title: "Multiple Selection",
            description:
              "Allow selecting multiple toggles at once, like a text formatting toolbar.",
            code: `<ToggleGroup type="multiple">
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
          {
            id: "single",
            title: "Single Selection",
            description:
              "Only one toggle can be active at a time, like view mode switching.",
            code: `<ToggleGroup type="single" defaultValue="list">
  <ToggleGroupItem value="grid" aria-label="Grid view">Grid</ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="List view">List</ToggleGroupItem>
  <ToggleGroupItem value="kanban" aria-label="Kanban view">Kanban</ToggleGroupItem>
</ToggleGroup>`,
          },
          {
            id: "outline",
            title: "Outline Variant",
            description:
              "Toggle group with outline variant for a more subtle, bordered appearance.",
            code: `<ToggleGroup type="single" variant="outline" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">Right</ToggleGroupItem>
</ToggleGroup>`,
          },
          {
            id: "text-align",
            title: "Text Alignment",
            description:
              "Toggle group for text alignment — classic toolbar control pattern.",
            code: `<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeftIcon className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenterIcon className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRightIcon className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify" aria-label="Justify">
    <AlignJustifyIcon className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
          },
          {
            id: "view-switcher",
            title: "View Switcher",
            description:
              "Toggle between different view modes like grid, list, and kanban.",
            code: `<ToggleGroup type="single" defaultValue="list" variant="outline">
  <ToggleGroupItem value="grid" aria-label="Grid view">
    <LayoutGridIcon className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="List view">
    <ListIcon className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="kanban" aria-label="Kanban view">
    <LayoutDashboardIcon className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA toolbar pattern; Arrow keys navigate between items, Space/Enter toggles the focused item.",
        relatedComponents: ["toggle", "button", "tabs"],
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Avatars with image and text fallback.",
            code: `<div className="flex gap-4">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
</div>`,
          },
          {
            id: "sizes",
            title: "Sizes",
            description: "Control avatar sizes with className.",
            code: `<div className="flex items-center gap-4">
  <Avatar className="h-6 w-6 text-xs">
    <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
    <AvatarFallback>S</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="Medium" />
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-14 w-14 text-lg">
    <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
</div>`,
          },
          {
            id: "group",
            title: "Avatar Group",
            description:
              "Stacked overlapping avatars for team or group display.",
            code: `<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" alt="A" />
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/leerob.png" alt="B" />
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/rauchg.png" alt="C" />
    <AvatarFallback>C</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`,
          },
          {
            id: "with-status",
            title: "With Status Indicator",
            description:
              "Avatars showing online/offline/busy status with colored dots positioned absolute bottom-right.",
            code: `<div className="flex gap-6">
  <div className="relative">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
  </div>
  <div className="relative">
    <Avatar>
      <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
      <AvatarFallback>KS</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 border-2 border-background" />
  </div>
  <div className="relative">
    <Avatar>
      <AvatarFallback>ML</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-background" />
  </div>
</div>`,
          },
          {
            id: "initials",
            title: "Colored Initials",
            description:
              "Multiple avatars with different colored backgrounds using AvatarFallback, showing team member initials.",
            code: `<div className="flex gap-4">
  <Avatar>
    <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-green-500 text-white">KS</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-purple-500 text-white">ML</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-orange-500 text-white">RW</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-pink-500 text-white">TS</AvatarFallback>
  </Avatar>
</div>`,
          },
        ],
        accessibility:
          "Uses AvatarImage with alt text for accessibility; AvatarFallback is displayed while image loads or as a replacement.",
        relatedComponents: ["badge", "card", "hover-card"],
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
        props: [
          {
            name: "variant",
            type: '"default" | "secondary" | "destructive" | "outline"',
            default: '"default"',
            description:
              "Controls the visual style of the badge to indicate status, category, or severity.",
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to customize the badge color, size, or other visual properties.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description:
              "The label text or icon rendered inside the badge element.",
          },
        ],
        variants: ["default", "secondary", "destructive", "outline"],
        examples: [
          {
            id: "variants",
            title: "Variants",
            description:
              "Four built-in styles to convey different meanings: default, secondary, outline, and destructive.",
            code: `<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`,
          },
          {
            id: "status-indicator",
            title: "Status Indicator",
            description:
              "Use badges as colored status indicators in tables or lists.",
            code: `<div className="flex gap-2">
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
</div>`,
          },
          {
            id: "with-icon",
            title: "With Icon",
            description:
              "Combine badges with Lucide icons for richer labeling.",
            code: `<div className="flex gap-2">
  <Badge><CheckIcon className="mr-1 h-3 w-3" /> Verified</Badge>
  <Badge variant="secondary"><ClockIcon className="mr-1 h-3 w-3" /> In Progress</Badge>
  <Badge variant="destructive"><XIcon className="mr-1 h-3 w-3" /> Rejected</Badge>
</div>`,
          },
          {
            id: "notification",
            title: "Notification Count",
            description:
              "Badges showing counts like 3 new, 99+, 12 using destructive variant for urgent counts.",
            code: `<div className="flex items-center gap-3">
  <Badge variant="destructive">3 new</Badge>
  <Badge variant="destructive">99+</Badge>
  <Badge variant="secondary">12</Badge>
  <Badge variant="outline">0</Badge>
</div>`,
          },
          {
            id: "removable",
            title: "Removable Tags",
            description:
              "Badges with XIcon close buttons for tag-style removable filters.",
            code: `<div className="flex flex-wrap gap-2">
  <Badge variant="secondary" className="gap-1 pr-1">
    South Korea
    <button className="ml-1 rounded-full hover:bg-muted p-0.5">
      <XIcon className="h-3 w-3" />
    </button>
  </Badge>
  <Badge variant="secondary" className="gap-1 pr-1">
    Pending
    <button className="ml-1 rounded-full hover:bg-muted p-0.5">
      <XIcon className="h-3 w-3" />
    </button>
  </Badge>
  <Badge variant="secondary" className="gap-1 pr-1">
    2024
    <button className="ml-1 rounded-full hover:bg-muted p-0.5">
      <XIcon className="h-3 w-3" />
    </button>
  </Badge>
</div>`,
          },
        ],
        accessibility:
          "Renders as an inline <div>; for status indicators, add an aria-label or sr-only text describing the meaning.",
        relatedComponents: ["button", "card", "table"],
      },
      {
        name: "Chart",
        slug: "chart",
        description: "Beautiful, responsive charts built with Recharts.",
        importExample: `import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@workspace/ui/components/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, XAxis, YAxis } from "recharts";`,
        codeExample: `<ChartContainer config={{ revenue: { label: "Revenue", color: "var(--chart-1)" } }} className="h-[250px] w-full">
  <BarChart data={[{ month: "Jan", revenue: 186 }, { month: "Feb", revenue: 305 }]}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="revenue" fill="var(--chart-1)" radius={4} />
  </BarChart>
</ChartContainer>`,
        examples: [
          {
            id: "bar",
            title: "Bar Chart",
            description: "Vertical bar chart with monthly revenue data.",
            code: `<ChartContainer config={{ revenue: { label: "Revenue", color: "var(--chart-1)" } }} className="h-[250px] w-full">
  <BarChart data={[
    { month: "Jan", revenue: 186 },
    { month: "Feb", revenue: 305 },
    { month: "Mar", revenue: 237 },
    { month: "Apr", revenue: 273 },
    { month: "May", revenue: 209 },
    { month: "Jun", revenue: 314 },
  ]}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="revenue" fill="var(--chart-1)" radius={4} />
  </BarChart>
</ChartContainer>`,
          },
          {
            id: "line",
            title: "Line Chart",
            description: "Line chart with data points.",
            code: `<ChartContainer config={{ value: { label: "Declarations", color: "var(--chart-2)" } }} className="h-[250px] w-full">
  <LineChart data={[
    { month: "Jan", value: 120 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 150 },
    { month: "Apr", value: 220 },
    { month: "May", value: 190 },
    { month: "Jun", value: 280 },
  ]}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line type="monotone" dataKey="value" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 4 }} />
  </LineChart>
</ChartContainer>`,
          },
          {
            id: "pie",
            title: "Pie Chart",
            description: "Pie/donut chart showing status distribution.",
            code: `<ChartContainer config={{ cleared: { label: "Cleared", color: "var(--chart-1)" }, pending: { label: "Pending", color: "var(--chart-3)" }, rejected: { label: "Rejected", color: "var(--chart-5)" } }} className="h-[250px] w-full">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie data={[
      { name: "cleared", value: 65, fill: "var(--chart-1)" },
      { name: "pending", value: 25, fill: "var(--chart-3)" },
      { name: "rejected", value: 10, fill: "var(--chart-5)" },
    ]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={50} />
  </PieChart>
</ChartContainer>`,
          },
          {
            id: "area",
            title: "Area Chart",
            description:
              "Area chart with gradient fill showing cumulative revenue data.",
            code: `<ChartContainer config={{ revenue: { label: "Revenue ($)", color: "var(--chart-1)" } }} className="h-[250px] w-full">
  <AreaChart data={[
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 4500 },
    { month: "Mar", revenue: 5200 },
    { month: "Apr", revenue: 4800 },
    { month: "May", revenue: 6100 },
    { month: "Jun", revenue: 7200 },
  ]}>
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
    <Area type="monotone" dataKey="revenue" stroke="var(--chart-1)" strokeWidth={2} fill="url(#colorRevenue)" fillOpacity={0.3} />
  </AreaChart>
</ChartContainer>`,
          },
          {
            id: "stacked-bar",
            title: "Stacked Bar Chart",
            description:
              "Stacked bar chart showing multiple categories per period.",
            code: `<ChartContainer config={{ imports: { label: "Imports", color: "var(--chart-1)" }, exports: { label: "Exports", color: "var(--chart-2)" }, transit: { label: "Transit", color: "var(--chart-3)" } }} className="h-[250px] w-full">
  <BarChart data={[
    { month: "Jan", imports: 120, exports: 80, transit: 30 },
    { month: "Feb", imports: 140, exports: 95, transit: 25 },
    { month: "Mar", imports: 160, exports: 110, transit: 35 },
    { month: "Apr", imports: 130, exports: 100, transit: 28 },
    { month: "May", imports: 175, exports: 120, transit: 40 },
    { month: "Jun", imports: 190, exports: 135, transit: 45 },
  ]}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="imports" stackId="a" fill="var(--chart-1)" />
    <Bar dataKey="exports" stackId="a" fill="var(--chart-2)" />
    <Bar dataKey="transit" stackId="a" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
  </BarChart>
</ChartContainer>`,
          },
          {
            id: "multi-line",
            title: "Multi-Line Chart",
            description: "Multi-line chart comparing two metrics over time.",
            code: `<ChartContainer config={{ declarations: { label: "Declarations", color: "var(--chart-1)" }, clearances: { label: "Clearances", color: "var(--chart-4)" } }} className="h-[250px] w-full">
  <LineChart data={[
    { month: "Jan", declarations: 420, clearances: 380 },
    { month: "Feb", declarations: 480, clearances: 430 },
    { month: "Mar", declarations: 510, clearances: 470 },
    { month: "Apr", declarations: 470, clearances: 450 },
    { month: "May", declarations: 560, clearances: 510 },
    { month: "Jun", declarations: 620, clearances: 580 },
  ]}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line type="monotone" dataKey="declarations" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4 }} />
    <Line type="monotone" dataKey="clearances" stroke="var(--chart-4)" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
  </LineChart>
</ChartContainer>`,
          },
          {
            id: "radar",
            title: "Radar Chart",
            description:
              "Radar chart for multi-dimensional performance comparison.",
            code: `<ChartContainer config={{ A: { label: "System A", color: "var(--chart-1)" }, B: { label: "System B", color: "var(--chart-4)" } }} className="h-[250px] w-full">
  <RadarChart data={[
    { metric: "Speed", A: 85, B: 65 },
    { metric: "Accuracy", A: 90, B: 80 },
    { metric: "Cost", A: 70, B: 90 },
    { metric: "Coverage", A: 80, B: 75 },
    { metric: "Support", A: 95, B: 60 },
  ]} cx="50%" cy="50%" outerRadius={80}>
    <PolarGrid />
    <PolarAngleAxis dataKey="metric" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Radar name="System A" dataKey="A" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.3} />
    <Radar name="System B" dataKey="B" stroke="var(--chart-4)" fill="var(--chart-4)" fillOpacity={0.3} />
  </RadarChart>
</ChartContainer>`,
          },
        ],
      },
      {
        name: "Empty",
        slug: "empty",
        description: "Placeholder displayed when there is no data to show.",
        importExample: `import { Empty } from "@workspace/ui/components/empty";`,
        codeExample: `<Empty>
  <p>No results found.</p>
</Empty>`,
        examples: [
          {
            id: "no-results",
            title: "No Search Results",
            description:
              "Empty state with SearchIcon, heading, description text, and a clear filters button.",
            code: `<div className="flex flex-col items-center justify-center py-12 text-center">
  <SearchIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
  <h3 className="text-lg font-semibold">No results found</h3>
  <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-sm">
    We couldn't find anything matching your search. Try adjusting your filters.
  </p>
  <Button variant="outline" size="sm">Clear filters</Button>
</div>`,
          },
          {
            id: "no-data",
            title: "Empty Data",
            description:
              "Empty table state with InboxIcon, heading, description, and a primary create button.",
            code: `<div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg">
  <div className="rounded-full bg-muted p-3 mb-4">
    <MailIcon className="h-8 w-8 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold">No declarations yet</h3>
  <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-sm">
    Get started by creating your first customs declaration.
  </p>
  <Button>Create Declaration</Button>
</div>`,
          },
        ],
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
        examples: [
          {
            id: "with-meta",
            title: "With Metadata",
            description:
              "List items showing declaration records with title, status badge, date, and action button.",
            code: `<div className="space-y-2">
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div className="space-y-1">
      <p className="font-medium">DEC-2024-001</p>
      <p className="text-sm text-muted-foreground">Import Declaration - South Korea</p>
    </div>
    <div className="flex items-center gap-3">
      <Badge className="bg-green-500/10 text-green-600 border-green-200">Cleared</Badge>
      <span className="text-sm text-muted-foreground">Jan 15, 2024</span>
      <Button variant="ghost" size="sm">View</Button>
    </div>
  </div>
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div className="space-y-1">
      <p className="font-medium">DEC-2024-002</p>
      <p className="text-sm text-muted-foreground">Export Declaration - Ecuador</p>
    </div>
    <div className="flex items-center gap-3">
      <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-200">Pending</Badge>
      <span className="text-sm text-muted-foreground">Jan 18, 2024</span>
      <Button variant="ghost" size="sm">View</Button>
    </div>
  </div>
  <div className="flex items-center justify-between rounded-lg border p-4">
    <div className="space-y-1">
      <p className="font-medium">DEC-2024-003</p>
      <p className="text-sm text-muted-foreground">Transit Declaration - Ethiopia</p>
    </div>
    <div className="flex items-center gap-3">
      <Badge className="bg-red-500/10 text-red-600 border-red-200">Rejected</Badge>
      <span className="text-sm text-muted-foreground">Jan 20, 2024</span>
      <Button variant="ghost" size="sm">View</Button>
    </div>
  </div>
</div>`,
          },
          {
            id: "selectable",
            title: "Selectable List",
            description:
              "Items with checkbox selection, showing country names with flags and selection count.",
            code: `<div className="space-y-1">
  <div className="text-sm text-muted-foreground mb-2">2 of 5 selected</div>
  <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50">
    <Checkbox defaultChecked />
    <span className="text-lg">🇰🇷</span>
    <span className="font-medium">South Korea</span>
  </label>
  <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50">
    <Checkbox defaultChecked />
    <span className="text-lg">🇪🇨</span>
    <span className="font-medium">Ecuador</span>
  </label>
  <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50">
    <Checkbox />
    <span className="text-lg">🇪🇹</span>
    <span className="font-medium">Ethiopia</span>
  </label>
  <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50">
    <Checkbox />
    <span className="text-lg">🇬🇭</span>
    <span className="font-medium">Ghana</span>
  </label>
  <label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-muted/50">
    <Checkbox />
    <span className="text-lg">🇨🇲</span>
    <span className="font-medium">Cameroon</span>
  </label>
</div>`,
          },
        ],
      },
      {
        name: "Kbd",
        slug: "kbd",
        description: "Displays a keyboard shortcut or key combination.",
        importExample: `import { Kbd } from "@workspace/ui/components/kbd";`,
        codeExample: `<div className="flex items-center gap-1">
  <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>`,
        examples: [
          {
            id: "shortcuts",
            title: "Keyboard Shortcuts",
            description:
              "Display common shortcuts in a 2-column grid: Ctrl+S (Save), Ctrl+N (New), Ctrl+F (Search), Ctrl+P (Print).",
            code: `<div className="grid grid-cols-2 gap-4 w-full max-w-md">
  <div className="flex items-center justify-between rounded-lg border p-3">
    <span className="text-sm">Save</span>
    <div className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
    </div>
  </div>
  <div className="flex items-center justify-between rounded-lg border p-3">
    <span className="text-sm">New</span>
    <div className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd> + <Kbd>N</Kbd>
    </div>
  </div>
  <div className="flex items-center justify-between rounded-lg border p-3">
    <span className="text-sm">Search</span>
    <div className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd>
    </div>
  </div>
  <div className="flex items-center justify-between rounded-lg border p-3">
    <span className="text-sm">Print</span>
    <div className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>
    </div>
  </div>
</div>`,
          },
          {
            id: "combinations",
            title: "Key Combinations",
            description:
              "Complex modifier combinations showing multi-key shortcuts with multiple Kbd elements joined by plus signs.",
            code: `<div className="space-y-3">
  <div className="flex items-center gap-2">
    <span className="text-sm w-32">Toggle Terminal</span>
    <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>K</Kbd>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm w-32">Format Code</span>
    <Kbd>Cmd</Kbd> + <Kbd>Alt</Kbd> + <Kbd>L</Kbd>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm w-32">Quick Open</span>
    <Kbd>Cmd</Kbd> + <Kbd>P</Kbd>
  </div>
</div>`,
          },
        ],
      },
      {
        name: "Progress",
        slug: "progress",
        description:
          "Displays an indicator showing the completion progress of a task.",
        importExample: `import { Progress } from "@workspace/ui/components/progress";`,
        codeExample: `<Progress value={60} className="w-[60%]" />`,
        props: [
          {
            name: "value",
            type: "number",
            default: "0",
            description:
              "The current progress value, representing percentage completion from 0 to max.",
          },
          {
            name: "max",
            type: "number",
            default: "100",
            description:
              "The maximum value that represents 100% completion of the progress indicator.",
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to customize the progress bar width, height, or color.",
          },
          {
            name: "getValueLabel",
            type: "(value: number, max: number) => string",
            description:
              "Custom function to generate an accessible label string from the current value and max.",
          },
        ],
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Progress bars at different completion levels.",
            code: `<div className="w-full max-w-sm space-y-4">
  <Progress value={33} />
  <Progress value={66} />
  <Progress value={100} />
</div>`,
          },
          {
            id: "with-label",
            title: "With Label",
            description:
              "Progress bar with a percentage label showing the current value.",
            code: `<div className="w-full max-w-sm space-y-2">
  <div className="flex justify-between text-sm">
    <span>Upload progress</span>
    <span className="text-muted-foreground">60%</span>
  </div>
  <Progress value={60} />
</div>`,
          },
          {
            id: "steps",
            title: "Multi-Step Progress",
            description:
              "Step indicators showing 4 steps with current step highlighted and progress bar.",
            code: `<div className="w-full max-w-lg space-y-4">
  <div className="flex justify-between text-sm">
    <span className="font-medium text-primary">1. Upload</span>
    <span className="font-medium text-primary">2. Review</span>
    <span className="font-medium">3. Approval</span>
    <span className="text-muted-foreground">4. Complete</span>
  </div>
  <Progress value={50} />
  <p className="text-sm text-muted-foreground text-center">Step 2 of 4 — Review in progress</p>
</div>`,
          },
          {
            id: "circular",
            title: "Animated Progress",
            description:
              "Multiple progress bars at different values stacked vertically with labels.",
            code: `<div className="w-full max-w-sm space-y-4">
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Documents</span>
      <span className="text-muted-foreground">25%</span>
    </div>
    <Progress value={25} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Verification</span>
      <span className="text-muted-foreground">50%</span>
    </div>
    <Progress value={50} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Processing</span>
      <span className="text-muted-foreground">75%</span>
    </div>
    <Progress value={75} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Clearance</span>
      <span className="text-muted-foreground">100%</span>
    </div>
    <Progress value={100} />
  </div>
</div>`,
          },
        ],
        accessibility:
          'Renders with role="progressbar" and aria-valuenow/aria-valuemax for screen reader progress announcements.',
        relatedComponents: ["skeleton", "spinner"],
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
        examples: [
          {
            id: "profile",
            title: "Profile",
            description:
              "Skeleton layout mimicking a user profile card with avatar and text.",
            code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
          },
          {
            id: "card",
            title: "Card",
            description:
              "Skeleton layout for a content card with image, title, and description.",
            code: `<div className="space-y-3 w-full max-w-sm">
  <Skeleton className="h-[125px] w-full rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`,
          },
          {
            id: "table",
            title: "Table Rows",
            description: "Skeleton rows for a loading table.",
            code: `<div className="space-y-3 w-full max-w-md">
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
</div>`,
          },
          {
            id: "form",
            title: "Form Skeleton",
            description:
              "Loading skeleton for a form with label+input pairs and a button skeleton at bottom.",
            code: `<div className="w-full max-w-sm space-y-6">
  <div className="space-y-2">
    <Skeleton className="h-4 w-[60px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <Skeleton className="h-10 w-[120px]" />
</div>`,
          },
        ],
        accessibility:
          "Skeleton is purely visual; use aria-busy on the parent container and aria-hidden on skeletons for screen readers.",
        relatedComponents: ["spinner", "progress"],
      },
      {
        name: "Spinner",
        slug: "spinner",
        description: "A loading spinner indicator.",
        importExample: `import { Spinner } from "@workspace/ui/components/spinner";`,
        codeExample: `<Spinner />`,
        examples: [
          {
            id: "sizes",
            title: "Size Variants",
            description:
              "Show spinners in sm/md/lg sizes in a horizontal flex row with size labels.",
            code: `<div className="flex items-end gap-8">
  <div className="flex flex-col items-center gap-2">
    <Spinner className="h-4 w-4" />
    <span className="text-xs text-muted-foreground">Small</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner className="h-6 w-6" />
    <span className="text-xs text-muted-foreground">Medium</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Spinner className="h-10 w-10" />
    <span className="text-xs text-muted-foreground">Large</span>
  </div>
</div>`,
          },
          {
            id: "with-text",
            title: "With Loading Text",
            description:
              "Centered spinner with loading text below in a card-like container.",
            code: `<div className="flex flex-col items-center justify-center rounded-lg border p-8 gap-3">
  <Spinner className="h-8 w-8" />
  <p className="text-sm text-muted-foreground">Loading data...</p>
</div>`,
          },
        ],
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
        props: [
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes applied to the root <table> element for custom width or styling.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description:
              "Table structure composed of TableHeader, TableBody, TableFooter, and TableCaption sub-components.",
          },
        ],
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic table with header and data rows.",
            code: `<Table>
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
</Table>`,
          },
          {
            id: "with-badges",
            title: "With Badges",
            description: "Table with Badge components for status display.",
            code: `<Table>
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
      <TableCell><Badge variant="outline">Paid</Badge></TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$350.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
          },
          {
            id: "with-checkbox",
            title: "Table with Checkboxes",
            description: "Table with row selection checkboxes.",
            code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[40px]"><Checkbox /></TableHead>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell><Checkbox /></TableCell>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell><Badge variant="outline">Paid</Badge></TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell><Checkbox /></TableCell>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell><Checkbox /></TableCell>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
      <TableCell className="text-right">$350.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
          },
          {
            id: "with-sorting",
            title: "Sortable Table",
            description: "Table with column sorting indicators.",
            code: `<Table>
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
      <TableCell><Badge variant="outline">Paid</Badge></TableCell>
      <TableCell>2024-01-15</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
      <TableCell>2024-01-20</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
      <TableCell>2024-01-10</TableCell>
      <TableCell className="text-right">$350.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
          },
          {
            id: "with-actions",
            title: "Table with Actions",
            description: "Table with row action buttons.",
            code: `<Table>
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
      <TableCell><Badge>Admin</Badge></TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem><Pencil className="mr-2 h-3 w-3" /> Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-3 w-3" /> Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell><Badge variant="secondary">Editor</Badge></TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem><Pencil className="mr-2 h-3 w-3" /> Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-3 w-3" /> Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
          },
          {
            id: "striped",
            title: "Striped Table",
            description: "Table with alternating row colors.",
            code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Code</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Category</TableHead>
      <TableHead className="text-right">Rate (%)</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="bg-muted/50">
      <TableCell className="font-mono text-xs">0101.21</TableCell>
      <TableCell>Live horses</TableCell>
      <TableCell><Badge variant="outline">Animals</Badge></TableCell>
      <TableCell className="text-right">5.0</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-mono text-xs">0201.10</TableCell>
      <TableCell>Bovine meat, fresh</TableCell>
      <TableCell><Badge variant="outline">Meat</Badge></TableCell>
      <TableCell className="text-right">12.5</TableCell>
    </TableRow>
    <TableRow className="bg-muted/50">
      <TableCell className="font-mono text-xs">0301.11</TableCell>
      <TableCell>Live ornamental fish</TableCell>
      <TableCell><Badge variant="outline">Fish</Badge></TableCell>
      <TableCell className="text-right">0.0</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-mono text-xs">0401.10</TableCell>
      <TableCell>Milk, cream</TableCell>
      <TableCell><Badge variant="outline">Dairy</Badge></TableCell>
      <TableCell className="text-right">8.0</TableCell>
    </TableRow>
    <TableRow className="bg-muted/50">
      <TableCell className="font-mono text-xs">0501.00</TableCell>
      <TableCell>Human hair</TableCell>
      <TableCell><Badge variant="outline">Other</Badge></TableCell>
      <TableCell className="text-right">3.0</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
          },
          {
            id: "with-radio",
            title: "Radio Selection",
            description:
              "Table with single-row radio button selection for choosing one item.",
            code: `const [selectedRow, setSelectedRow] = useState(null);
const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Overdue", method: "Bank Transfer", amount: "$350.00" },
];

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
    {invoices.map((inv) => (
      <TableRow
        key={inv.id}
        className={\`cursor-pointer \${selectedRow === inv.id ? "bg-muted" : ""}\`}
        onClick={() => setSelectedRow(inv.id)}
      >
        <TableCell>
          <span className={\`inline-flex h-4 w-4 items-center justify-center rounded-full border \${
            selectedRow === inv.id ? "border-primary" : "border-muted-foreground/30"
          }\`}>
            {selectedRow === inv.id && <span className="h-2 w-2 rounded-full bg-primary" />}
          </span>
        </TableCell>
        <TableCell className="font-medium">{inv.id}</TableCell>
        <TableCell><Badge variant="outline">{inv.status}</Badge></TableCell>
        <TableCell>{inv.method}</TableCell>
        <TableCell className="text-right">{inv.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
          },
          {
            id: "with-pagination",
            title: "With Pagination",
            description:
              "Table with pagination controls for navigating large datasets.",
            code: `const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;
const allInvoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  // ... more items
];
const totalPages = Math.ceil(allInvoices.length / itemsPerPage);
const currentData = allInvoices.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

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
      {currentData.map((inv) => (
        <TableRow key={inv.id}>
          <TableCell className="font-medium">{inv.id}</TableCell>
          <TableCell><Badge variant="outline">{inv.status}</Badge></TableCell>
          <TableCell>{inv.method}</TableCell>
          <TableCell className="text-right">{inv.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  <div className="flex items-center justify-between px-2">
    <p className="text-sm text-muted-foreground">
      Page {currentPage} of {totalPages}
    </p>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm"
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}>Previous</Button>
      <Button variant="outline" size="sm"
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}>Next</Button>
    </div>
  </div>
</div>`,
          },
          {
            id: "expandable",
            title: "Expandable Rows",
            description:
              "Table with expandable rows showing detailed information.",
            code: `const [expandedRows, setExpandedRows] = useState(new Set());
const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
];

const toggleRow = (id) => {
  setExpandedRows(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
};

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
    {invoices.map((inv) => (
      <React.Fragment key={inv.id}>
        <TableRow>
          <TableCell>
            <Button variant="ghost" size="icon" className="h-6 w-6"
              onClick={() => toggleRow(inv.id)}>
              {expandedRows.has(inv.id)
                ? <ChevronDown className="h-4 w-4" />
                : <ChevronRight className="h-4 w-4" />}
            </Button>
          </TableCell>
          <TableCell className="font-medium">{inv.id}</TableCell>
          <TableCell><Badge variant="outline">{inv.status}</Badge></TableCell>
          <TableCell>{inv.method}</TableCell>
          <TableCell className="text-right">{inv.amount}</TableCell>
        </TableRow>
        {expandedRows.has(inv.id) && (
          <TableRow className="bg-muted/50">
            <TableCell colSpan={5} className="p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-muted-foreground">Invoice ID</p>
                  <p>{inv.id}</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Amount</p>
                  <p className="font-semibold">{inv.amount}</p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    ))}
  </TableBody>
</Table>`,
          },
          {
            id: "with-filters",
            title: "Column Filters",
            description:
              "Table with column-level text filters for data filtering.",
            code: `const [filters, setFilters] = useState({ id: "", status: "", method: "" });
const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Overdue", method: "Bank Transfer", amount: "$350.00" },
];
const filtered = invoices.filter(inv =>
  inv.id.toLowerCase().includes(filters.id.toLowerCase()) &&
  inv.status.toLowerCase().includes(filters.status.toLowerCase()) &&
  inv.method.toLowerCase().includes(filters.method.toLowerCase())
);

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
        <Input placeholder="Filter..." className="h-7 text-xs"
          value={filters.id}
          onChange={e => setFilters(f => ({ ...f, id: e.target.value }))} />
      </TableHead>
      <TableHead className="py-1">
        <Input placeholder="Filter..." className="h-7 text-xs"
          value={filters.status}
          onChange={e => setFilters(f => ({ ...f, status: e.target.value }))} />
      </TableHead>
      <TableHead className="py-1">
        <Input placeholder="Filter..." className="h-7 text-xs"
          value={filters.method}
          onChange={e => setFilters(f => ({ ...f, method: e.target.value }))} />
      </TableHead>
      <TableHead />
    </TableRow>
  </TableHeader>
  <TableBody>
    {filtered.map(inv => (
      <TableRow key={inv.id}>
        <TableCell className="font-medium">{inv.id}</TableCell>
        <TableCell><Badge variant="outline">{inv.status}</Badge></TableCell>
        <TableCell>{inv.method}</TableCell>
        <TableCell className="text-right">{inv.amount}</TableCell>
      </TableRow>
    ))}
    {filtered.length === 0 && (
      <TableRow>
        <TableCell colSpan={4} className="text-center text-muted-foreground">
          No results found.
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>`,
          },
        ],
        accessibility:
          "Renders semantic <table> HTML; use TableCaption to provide a visible accessible summary of the table data.",
        relatedComponents: ["card", "badge", "pagination", "separator"],
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
        props: [
          {
            name: "variant",
            type: '"default" | "destructive"',
            default: '"default"',
            description:
              "Controls the visual severity of the alert; use destructive for error or warning messages.",
          },
          {
            name: "className",
            type: "string",
            description:
              "Additional CSS classes to customize alert border, background, or text color.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description:
              "Alert content, typically composed of AlertTitle and AlertDescription sub-components.",
          },
        ],
        variants: ["default", "destructive"],
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Informational alert for general notices.",
            code: `<Alert>
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`,
          },
          {
            id: "destructive",
            title: "Destructive",
            description:
              "Error or warning alert to draw attention to critical issues.",
            code: `<Alert variant="destructive">
  <AlertCircleIcon className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
          },
          {
            id: "with-action",
            title: "With Action",
            description: "Alert with an action button for user response.",
            code: `<Alert>
  <AlertTitle>Update available</AlertTitle>
  <AlertDescription className="flex items-center justify-between">
    <span>A new version (v2.1.0) is available.</span>
    <Button size="sm" variant="outline" className="ml-4">Update</Button>
  </AlertDescription>
</Alert>`,
          },
          {
            id: "info",
            title: "Info Alert",
            description:
              "Blue-tinted informational alert with InfoIcon about system maintenance schedule.",
            code: `<Alert className="max-w-md">
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>System Maintenance</AlertTitle>
  <AlertDescription>
    Scheduled downtime on Saturday, March 15 from 02:00 to 06:00 UTC. Please
    save your work before this time.
  </AlertDescription>
</Alert>`,
          },
          {
            id: "closable",
            title: "Closable Alert",
            description:
              "Alert with an XIcon close button positioned top-right for dismissible notifications.",
            code: `<Alert className="max-w-md relative pr-10">
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>New version available</AlertTitle>
  <AlertDescription>
    Version 3.2.0 includes performance improvements and bug fixes.
  </AlertDescription>
  <button className="absolute top-2 right-2 rounded-sm p-1 opacity-70 hover:opacity-100">
    <XIcon className="h-4 w-4" />
  </button>
</Alert>`,
          },
        ],
        accessibility:
          'Renders with role="alert" so screen readers announce the content immediately when it appears in the DOM.',
        relatedComponents: ["alert-dialog", "badge", "sonner"],
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic alert dialog asking for user confirmation.",
            code: `<AlertDialog>
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
</AlertDialog>`,
          },
          {
            id: "destructive",
            title: "Destructive Action",
            description:
              "Alert dialog for dangerous operations like data deletion.",
            code: `<AlertDialog>
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
</AlertDialog>`,
          },
          {
            id: "with-input",
            title: "With Confirmation Input",
            description:
              "Delete confirmation dialog requiring user to type DELETE in an Input to enable the confirm button.",
            code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Project</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this project?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. Please type <span className="font-mono font-bold">DELETE</span> to confirm.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <div className="py-4">
      <Input placeholder='Type "DELETE" to confirm' />
    </div>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction disabled className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
        Delete Project
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
          },
          {
            id: "async-action",
            title: "Async Action",
            description:
              "Dialog with loading state on confirm button for async operations.",
            code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Submit for Review</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Submit declaration?</AlertDialogTitle>
      <AlertDialogDescription>
        This will submit the declaration for review. You won't be able to edit it after submission.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction disabled>
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent inline-block" />
        Submitting...
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA AlertDialog pattern with focus trap, required Title, and Cancel/Action buttons for keyboard users.",
        relatedComponents: ["dialog", "alert", "button"],
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
        props: [
          {
            name: "open",
            type: "boolean",
            description:
              "The controlled open state of the dialog. Use together with onOpenChange.",
          },
          {
            name: "onOpenChange",
            type: "(open: boolean) => void",
            description:
              "Callback invoked when the dialog open state changes, e.g., on close button or overlay click.",
          },
          {
            name: "modal",
            type: "boolean",
            default: "true",
            description:
              "When true, the dialog renders as a modal with backdrop overlay and traps focus within.",
          },
          {
            name: "defaultOpen",
            type: "boolean",
            default: "false",
            description:
              "The default open state when initially rendered in uncontrolled mode.",
          },
        ],
        examples: [
          {
            id: "basic",
            title: "Basic",
            description:
              "Simple dialog with a title, description, and an input field.",
            code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <Input placeholder="Name" />
  </DialogContent>
</Dialog>`,
          },
          {
            id: "with-form",
            title: "With Form",
            description:
              "Dialog containing a complete form with footer actions.",
            code: `<Dialog>
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
        <Label htmlFor="event-name">Event name</Label>
        <Input id="event-name" placeholder="Team standup" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="event-date">Date</Label>
        <Input id="event-date" type="date" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="event-desc">Description</Label>
        <Textarea id="event-desc" placeholder="Optional description..." />
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button type="submit">Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
          },
          {
            id: "confirmation",
            title: "Confirmation",
            description:
              "Confirmation dialog before performing a destructive action.",
            code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Yes, delete my account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
          },
          {
            id: "scrollable",
            title: "Scrollable Content",
            description:
              "Dialog with long terms-of-service text that scrolls within a max-h container.",
            code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">View Terms</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Terms of Service</DialogTitle>
      <DialogDescription>
        Please read the following terms carefully.
      </DialogDescription>
    </DialogHeader>
    <div className="max-h-[300px] overflow-y-auto space-y-4 text-sm text-muted-foreground pr-2">
      <p>
        <strong>1. Acceptance of Terms</strong> — By accessing and using the
        UNI-PASS Customs Clearance System, you accept and agree to be bound
        by the terms and provision of this agreement.
      </p>
      <p>
        <strong>2. Use License</strong> — Permission is granted to
        temporarily access the system for personal, non-commercial
        transitory use. This is the grant of a license, not a transfer of
        title.
      </p>
      <p>
        <strong>3. Disclaimer</strong> — The materials on this system are
        provided on an 'as is' basis. The system makes no
        warranties, expressed or implied, and hereby disclaims all other
        warranties.
      </p>
      <p>
        <strong>4. Limitations</strong> — In no event shall the system or
        its suppliers be liable for any damages arising out of the use or
        inability to use the materials on the system.
      </p>
      <p>
        <strong>5. Accuracy of Materials</strong> — The materials appearing
        on the system could include technical, typographical, or
        photographic errors. The system does not warrant that any of the
        materials are accurate, complete, or current.
      </p>
      <p>
        <strong>6. Modifications</strong> — The system may revise these
        terms of service at any time without notice. By using this system,
        you are agreeing to be bound by the then-current version of these
        terms.
      </p>
    </div>
    <DialogFooter>
      <Button variant="outline">Decline</Button>
      <Button>Accept</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
          },
          {
            id: "full-width",
            title: "Full Width",
            description:
              "Wide dialog (max-w-2xl) with a 2-column grid form layout for detailed data entry.",
            code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Add User</Button>
  </DialogTrigger>
  <DialogContent className="max-w-2xl">
    <DialogHeader>
      <DialogTitle>Add New User</DialogTitle>
      <DialogDescription>
        Fill in the details to create a new user account.
      </DialogDescription>
    </DialogHeader>
    <div className="grid grid-cols-2 gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="dlg-fw-name">Full Name</Label>
        <Input id="dlg-fw-name" placeholder="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dlg-fw-email">Email</Label>
        <Input id="dlg-fw-email" type="email" placeholder="john@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dlg-fw-dept">Department</Label>
        <Input id="dlg-fw-dept" placeholder="Customs Division" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dlg-fw-role">Role</Label>
        <Select>
          <SelectTrigger id="dlg-fw-role">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="officer">Customs Officer</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Create User</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Dialog pattern with focus trap, Escape key dismissal, and required Title for screen readers.",
        relatedComponents: [
          "alert-dialog",
          "sheet",
          "drawer",
          "button",
          "popover",
        ],
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic drawer sliding up from the bottom.",
            code: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit profile</DrawerTitle>
      <DrawerDescription>Make changes to your profile settings.</DrawerDescription>
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
</Drawer>`,
          },
          {
            id: "with-actions",
            title: "With Actions",
            description: "Drawer with cancel and submit buttons in the footer.",
            code: `<Drawer>
  <DrawerTrigger asChild>
    <Button>New Item</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Add new item</DrawerTitle>
      <DrawerDescription>Fill in the details to create a new item.</DrawerDescription>
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
</Drawer>`,
          },
          {
            id: "with-form",
            title: "With Form",
            description:
              "Drawer containing a complete form with Name, Email, Role select, and message textarea.",
            code: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>
        Update your personal information below.
      </DrawerDescription>
    </DrawerHeader>
    <div className="px-4 grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="dwf-name">Name</Label>
        <Input id="dwf-name" placeholder="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dwf-email">Email</Label>
        <Input id="dwf-email" type="email" placeholder="john@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dwf-role">Role</Label>
        <Select>
          <SelectTrigger id="dwf-role">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dwf-notes">Notes</Label>
        <Textarea id="dwf-notes" placeholder="Additional notes..." />
      </div>
    </div>
    <DrawerFooter className="flex-row justify-end gap-2">
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
      <Button>Save</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
          },
          {
            id: "right",
            title: "Right Side",
            description:
              "Right-side drawer with a notification list showing recent activities.",
            code: `<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">Activity Log</Button>
  </DrawerTrigger>
  <DrawerContent className="h-full w-[380px] ml-auto rounded-l-lg rounded-r-none">
    <DrawerHeader>
      <DrawerTitle>Recent Activity</DrawerTitle>
      <DrawerDescription>Your latest notifications</DrawerDescription>
    </DrawerHeader>
    <div className="px-4 space-y-3">
      {[
        { icon: "check", text: "Declaration KR-001 approved", time: "2 min ago" },
        { icon: "clock", text: "Report generation started", time: "15 min ago" },
        { icon: "mail", text: "New message from Admin", time: "1 hour ago" },
        { icon: "alert", text: "Declaration KR-003 flagged", time: "3 hours ago" },
      ].map((item) => (
        <div key={item.text} className="flex items-start gap-3 rounded-md border p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs">
            {item.icon === "check" ? (
              <CheckIcon className="h-4 w-4" />
            ) : item.icon === "clock" ? (
              <ClockIcon className="h-4 w-4" />
            ) : item.icon === "mail" ? (
              <MailIcon className="h-4 w-4" />
            ) : (
              <AlertCircleIcon className="h-4 w-4" />
            )}
          </span>
          <div>
            <p className="text-sm">{item.text}</p>
            <p className="text-xs text-muted-foreground">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </DrawerContent>
</Drawer>`,
          },
        ],
        accessibility:
          "Implements focus trap and Escape key dismissal; touch-friendly with swipe-to-dismiss gesture on mobile.",
        relatedComponents: ["dialog", "sheet", "alert-dialog"],
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic popover with text content.",
            code: `<Popover>
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
</Popover>`,
          },
          {
            id: "with-form",
            title: "With Form",
            description:
              "Popover containing a compact form for quick inline editing.",
            code: `<Popover>
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
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="auto" className="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
          },
          {
            id: "settings",
            title: "Settings Panel",
            description:
              "Popover with switches for notification preferences and a select for timezone.",
            code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Settings className="mr-2 h-4 w-4" /> Notification Settings
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Notifications</h4>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="pop-email-notif" className="font-normal">
            Email notifications
          </Label>
          <Switch id="pop-email-notif" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="pop-push-notif" className="font-normal">
            Push notifications
          </Label>
          <Switch id="pop-push-notif" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="pop-marketing" className="font-normal">
            Marketing
          </Label>
          <Switch id="pop-marketing" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
          },
          {
            id: "date-filter",
            title: "Date Filter",
            description:
              "Popover with date range inputs (From/To) and preset buttons.",
            code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon className="mr-2 h-4 w-4" /> Date Range
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Filter by Date</h4>
      <div className="grid gap-2">
        <Label htmlFor="pop-from">From</Label>
        <Input id="pop-from" type="date" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="pop-to">To</Label>
        <Input id="pop-to" type="date" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">Today</Button>
        <Button variant="outline" size="sm">This Week</Button>
        <Button variant="outline" size="sm">This Month</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Popover pattern with focus management; Escape key closes the popover and returns focus to the trigger.",
        relatedComponents: ["tooltip", "hover-card", "dialog", "calendar"],
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
        examples: [
          {
            id: "default",
            title: "Default (Right)",
            description: "Sheet sliding in from the right side.",
            code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
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
</Sheet>`,
          },
          {
            id: "left",
            title: "Left Side",
            description:
              "Sheet sliding in from the left, useful for navigation panels.",
            code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left Sheet</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>Browse sections of the app.</SheetDescription>
    </SheetHeader>
    <div className="grid gap-2 py-4 text-sm">
      <a href="#" className="block px-2 py-1.5 rounded hover:bg-muted">Dashboard</a>
      <a href="#" className="block px-2 py-1.5 rounded hover:bg-muted">Settings</a>
      <a href="#" className="block px-2 py-1.5 rounded hover:bg-muted">Users</a>
      <a href="#" className="block px-2 py-1.5 rounded hover:bg-muted">Reports</a>
    </div>
  </SheetContent>
</Sheet>`,
          },
          {
            id: "right",
            title: "Right Side",
            description:
              "Right-side sheet with details panel showing declaration info as key-value pairs.",
            code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">View Details</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Declaration Details</SheetTitle>
      <SheetDescription>
        Full details for the selected declaration.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      {[
        { label: "Declaration No.", value: "KR-2024-001234" },
        { label: "Status", value: "Approved" },
        { label: "Date", value: "2024-01-15" },
        { label: "Country", value: "South Korea" },
        { label: "Amount", value: "$12,500.00" },
      ].map((pair) => (
        <div key={pair.label} className="grid grid-cols-3 items-center gap-2">
          <span className="text-sm text-muted-foreground">{pair.label}</span>
          <span className="col-span-2 text-sm font-medium">{pair.value}</span>
        </div>
      ))}
    </div>
  </SheetContent>
</Sheet>`,
          },
          {
            id: "with-form",
            title: "Filter Form",
            description:
              "Sheet with a filter form including Select dropdowns, date inputs, checkboxes, and Apply/Reset buttons.",
            code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Filters</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filter Declarations</SheetTitle>
      <SheetDescription>
        Narrow your results using the filters below.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label>Status</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sf-date">Date</Label>
        <Input id="sf-date" type="date" />
      </div>
      <div className="space-y-2">
        <Label>Type</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="sf-import" defaultChecked />
            <Label htmlFor="sf-import" className="font-normal">Import</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sf-export" defaultChecked />
            <Label htmlFor="sf-export" className="font-normal">Export</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sf-transit" />
            <Label htmlFor="sf-transit" className="font-normal">Transit</Label>
          </div>
        </div>
      </div>
    </div>
    <SheetFooter className="flex-row gap-2">
      <Button variant="outline" className="flex-1">Reset</Button>
      <SheetClose asChild>
        <Button className="flex-1">Apply</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Dialog pattern with focus trap and Escape key dismissal; requires SheetTitle for screen readers.",
        relatedComponents: ["dialog", "drawer", "sidebar"],
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
        examples: [
          {
            id: "variants",
            title: "Toast Variants",
            description:
              "Four buttons triggering success, error, info, and warning toasts.",
            code: `<div className="flex flex-wrap gap-2">
  <Button variant="outline" onClick={() => toast.success("Declaration submitted successfully")}>
    Success
  </Button>
  <Button variant="outline" onClick={() => toast.error("Failed to submit declaration")}>
    Error
  </Button>
  <Button variant="outline" onClick={() => toast.info("New update available")}>
    Info
  </Button>
  <Button variant="outline" onClick={() => toast.warning("Your session will expire in 5 minutes")}>
    Warning
  </Button>
</div>`,
          },
          {
            id: "with-action",
            title: "With Action",
            description: "Toast with an Undo action button.",
            code: `<Button
  variant="outline"
  onClick={() =>
    toast("Declaration deleted", {
      action: {
        label: "Undo",
        onClick: () => toast.success("Declaration restored"),
      },
    })
  }
>
  Delete with Undo
</Button>`,
          },
          {
            id: "promise",
            title: "Promise Toast",
            description:
              "Button that triggers toast.promise() with loading, success, and error states.",
            code: `<Button
  variant="outline"
  onClick={() =>
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: "Submitting declaration...",
        success: "Declaration submitted!",
        error: "Submission failed",
      }
    )
  }
>
  Submit Declaration
</Button>`,
          },
        ],
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic tooltip that appears on hover.",
            code: `<TooltipProvider>
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
          {
            id: "positions",
            title: "Positions",
            description:
              "Tooltips can be placed on different sides of the trigger.",
            code: `<TooltipProvider>
  <div className="flex gap-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`,
          },
          {
            id: "with-shortcut",
            title: "With Keyboard Shortcut",
            description:
              "Tooltip content includes action name and Kbd shortcut.",
            code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Save</Button>
    </TooltipTrigger>
    <TooltipContent className="flex items-center gap-2">
      <span>Save document</span>
      <Kbd className="text-xs">{"⌘"}S</Kbd>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
          },
          {
            id: "rich-content",
            title: "Rich Content",
            description:
              "Tooltip with avatar, name, email, and role in a mini profile card.",
            code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="link" className="p-0 h-auto">Admin User</Button>
    </TooltipTrigger>
    <TooltipContent className="w-64 p-3">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Admin User</p>
          <p className="text-xs text-muted-foreground">admin@customs.gov</p>
          <p className="text-xs text-muted-foreground">System Administrator</p>
        </div>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Tooltip pattern; content is announced by screen readers on focus. Triggered by both hover and keyboard focus.",
        relatedComponents: ["popover", "hover-card", "button"],
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic breadcrumb navigation trail.",
            code: `<Breadcrumb>
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
</Breadcrumb>`,
          },
          {
            id: "with-ellipsis",
            title: "With Ellipsis",
            description:
              "Truncated breadcrumb for deep navigation paths using an ellipsis.",
            code: `<Breadcrumb>
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
</Breadcrumb>`,
          },
          {
            id: "with-dropdown",
            title: "With Dropdown",
            description:
              "Breadcrumb where middle items collapse into a DropdownMenu with an ellipsis trigger.",
            code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
          <span>...</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Declarations</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Reports</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Import</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>DEC-2024-001</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
          },
          {
            id: "with-icon",
            title: "With Icons",
            description:
              "Breadcrumb with a home icon for the first item and ChevronRight separators.",
            code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#" className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Declarations</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>DEC-2024-001</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
          },
        ],
        accessibility:
          "Renders inside a <nav> with aria-label for screen readers; the current page uses aria-current for proper announcement.",
        relatedComponents: ["navigation-menu", "pagination"],
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
        examples: [
          {
            id: "default",
            title: "Basic Carousel",
            description:
              "Simple carousel with 5 numbered cards showing CarouselPrevious/CarouselNext buttons.",
            code: `<Carousel className="w-full max-w-sm">
  <CarouselContent>
    {[1, 2, 3, 4, 5].map((n) => (
      <CarouselItem key={n}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">Slide {n}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
          },
          {
            id: "with-indicators",
            title: "With Indicators",
            description:
              "Carousel with dot indicators below showing current slide position.",
            code: `<div className="w-full max-w-sm mx-auto space-y-4">
  <Carousel>
    <CarouselContent>
      <CarouselItem>
        <div className="flex items-center justify-center h-40 rounded-lg border bg-muted">Slide A</div>
      </CarouselItem>
      <CarouselItem>
        <div className="flex items-center justify-center h-40 rounded-lg border bg-muted">Slide B</div>
      </CarouselItem>
      <CarouselItem>
        <div className="flex items-center justify-center h-40 rounded-lg border bg-muted">Slide C</div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  <div className="flex justify-center gap-2">
    <span className="h-2 w-2 rounded-full bg-primary" />
    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
  </div>
</div>`,
          },
          {
            id: "auto-size",
            title: "Auto Size",
            description: "Carousel with items of different sizes and content.",
            code: `<Carousel className="w-full max-w-sm">
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent className="flex h-[120px] items-center justify-center p-6">
          <span className="text-lg font-semibold">Short card</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex h-[200px] items-center justify-center p-6">
          <span className="text-lg font-semibold">Tall card with more content</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex h-[160px] items-center justify-center p-6">
          <span className="text-lg font-semibold">Medium card</span>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
          },
        ],
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
        examples: [
          {
            id: "with-groups",
            title: "Grouped Commands",
            description:
              "Command palette with groups: Suggestions, Settings, Help, each with icons and descriptions.",
            code: `<Command className="rounded-lg border shadow-md w-full max-w-sm">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <SearchIcon className="mr-2 h-4 w-4" />
        <span>Search</span>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <Users className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>{"\u2318"}P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Bell className="mr-2 h-4 w-4" />
        <span>Notifications</span>
        <CommandShortcut>{"\u2318"}N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
          },
          {
            id: "dialog",
            title: "Command Dialog",
            description:
              "Button that opens a CommandDialog overlay with search and grouped results.",
            code: `<div>
  <p className="text-sm text-muted-foreground mb-2">
    Press <Kbd>Ctrl+K</Kbd> to open the command palette
  </p>
  <Command className="rounded-lg border shadow-md">
    <CommandInput placeholder="Search declarations..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Recent">
        <CommandItem>DEC-2024-001 - Import (Cleared)</CommandItem>
        <CommandItem>DEC-2024-002 - Export (Pending)</CommandItem>
        <CommandItem>DEC-2024-003 - Transit (Rejected)</CommandItem>
      </CommandGroup>
      <CommandGroup heading="Actions">
        <CommandItem>Create New Declaration</CommandItem>
        <CommandItem>View All Reports</CommandItem>
        <CommandItem>Open Settings</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</div>`,
          },
        ],
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
        examples: [
          {
            id: "with-submenu",
            title: "With Submenu",
            description:
              "Context menu with nested Share submenu containing Email, Slack, Copy Link.",
            code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-48">
    <ContextMenuItem>
      <Copy className="mr-2 h-4 w-4" /> Copy
    </ContextMenuItem>
    <ContextMenuItem>
      <Pencil className="mr-2 h-4 w-4" /> Edit
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <Share2 className="mr-2 h-4 w-4" /> Share
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-40">
        <ContextMenuItem>
          <MailIcon className="mr-2 h-4 w-4" /> Email
        </ContextMenuItem>
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" /> Slack
        </ContextMenuItem>
        <ContextMenuItem>
          <Link2 className="mr-2 h-4 w-4" /> Copy Link
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">
      <Trash2 className="mr-2 h-4 w-4" /> Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
          },
          {
            id: "file-operations",
            title: "File Operations",
            description:
              "Right-click menu with Cut, Copy, Paste, Delete, Rename with keyboard shortcuts and separators.",
            code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-52">
    <ContextMenuItem>
      Cut <ContextMenuShortcut>{"\u2318"}X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Copy <ContextMenuShortcut>{"\u2318"}C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Paste <ContextMenuShortcut>{"\u2318"}V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">
      Delete <ContextMenuShortcut>Del</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Rename <ContextMenuShortcut>F2</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
          },
        ],
      },
      {
        name: "Dropdown Menu",
        slug: "dropdown-menu",
        description:
          "Displays a menu triggered by a button, following the WAI-ARIA menu pattern.",
        importExample: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu";`,
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic dropdown menu with simple items.",
            code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
          },
          {
            id: "with-label",
            title: "With Label & Separator",
            description:
              "Dropdown menu with label header, separators, and grouped items.",
            code: `<DropdownMenu>
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
    <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
          },
          {
            id: "with-shortcuts",
            title: "With Shortcuts",
            description:
              "Menu items with keyboard shortcut hints using the Kbd component.",
            code: `<DropdownMenu>
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
</DropdownMenu>`,
          },
          {
            id: "with-checkbox",
            title: "With Checkboxes",
            description:
              "Dropdown menu with checkbox items for column visibility toggles.",
            code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Columns</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked>
      Status
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked>
      Email
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>
      Amount
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`,
          },
          {
            id: "with-radio",
            title: "With Radio Selection",
            description:
              "Dropdown menu with radio group for sort options (Name, Date, Status, Amount).",
            code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Sort by <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value="date">
      <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="amount">Amount</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
          },
        ],
        accessibility:
          "Implements WAI-ARIA Menu pattern with Arrow key navigation, Enter/Space to select, and Escape to close.",
        relatedComponents: ["context-menu", "menubar", "button"],
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
        examples: [
          {
            id: "user-profile",
            title: "User Profile",
            description:
              "HoverCard showing avatar, full name, email, role, and a View Profile link on user name hover.",
            code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link" className="p-0 h-auto">@admin</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-72">
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>AU</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Admin User</h4>
        <p className="text-xs text-muted-foreground">admin@customs.gov</p>
        <p className="text-xs text-muted-foreground">System Administrator</p>
        <Button variant="link" className="p-0 h-auto text-xs">View Profile</Button>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
          },
          {
            id: "link-preview",
            title: "Link Preview",
            description:
              "HoverCard on a URL showing page title, description, and domain.",
            code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link" className="p-0 h-auto">customs.go.kr</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">UNI-PASS Portal</h4>
      <p className="text-xs text-muted-foreground">
        The official electronic customs clearance system providing
        integrated customs services for import, export, and transit
        operations.
      </p>
      <p className="text-xs text-muted-foreground">customs.go.kr</p>
    </div>
  </HoverCardContent>
</HoverCard>`,
          },
        ],
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
        examples: [
          {
            id: "file-menu",
            title: "Application Menu",
            description:
              "Full Menubar with File, Edit, and View menus containing common actions.",
            code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New <MenubarShortcut>{"\u2318"}N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open <MenubarShortcut>{"\u2318"}O</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Save <MenubarShortcut>{"\u2318"}S</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Print <MenubarShortcut>{"\u2318"}P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>{"\u2318"}Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Redo</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Zoom In</MenubarItem>
      <MenubarItem>Zoom Out</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Toggle Sidebar</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
          },
          {
            id: "with-shortcuts",
            title: "With Keyboard Shortcuts",
            description:
              "Menubar items showing keyboard shortcuts next to each action.",
            code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Declaration <MenubarShortcut>{"\u2318"}N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open <MenubarShortcut>{"\u2318"}O</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Save <MenubarShortcut>{"\u2318"}S</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Export PDF <MenubarShortcut>{"\u2318"}E</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Print <MenubarShortcut>{"\u2318"}P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>{"\u2318"}Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>{"\u21E7"}{"\u2318"}Z</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Cut <MenubarShortcut>{"\u2318"}X</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Copy <MenubarShortcut>{"\u2318"}C</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Paste <MenubarShortcut>{"\u2318"}V</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
          },
        ],
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
        examples: [
          {
            id: "with-content",
            title: "Mega Menu",
            description:
              "NavigationMenu with dropdown content panels showing grouped links with descriptions.",
            code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
          <div className="space-y-1 rounded-md p-3 hover:bg-muted">
            <h4 className="text-sm font-medium">Introduction</h4>
            <p className="text-xs text-muted-foreground">
              Overview of the customs clearance system and its features.
            </p>
          </div>
          <div className="space-y-1 rounded-md p-3 hover:bg-muted">
            <h4 className="text-sm font-medium">Installation</h4>
            <p className="text-xs text-muted-foreground">
              Step-by-step guide to setting up your environment.
            </p>
          </div>
          <div className="space-y-1 rounded-md p-3 hover:bg-muted">
            <h4 className="text-sm font-medium">Configuration</h4>
            <p className="text-xs text-muted-foreground">
              Configure themes, locales, and country settings.
            </p>
          </div>
          <div className="space-y-1 rounded-md p-3 hover:bg-muted">
            <h4 className="text-sm font-medium">Components</h4>
            <p className="text-xs text-muted-foreground">
              Browse all available UI components.
            </p>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 w-[300px]">
          <div className="space-y-1 rounded-md p-3 hover:bg-muted">
            <h4 className="text-sm font-medium">Documentation</h4>
            <p className="text-xs text-muted-foreground">
              Full API reference and usage guides.
            </p>
          </div>
          <div className="space-y-1 rounded-md p-3 hover:bg-muted">
            <h4 className="text-sm font-medium">Examples</h4>
            <p className="text-xs text-muted-foreground">
              Real-world examples and templates.
            </p>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
          },
          {
            id: "simple",
            title: "Simple Navigation",
            description:
              "Horizontal NavigationMenu with just link items for basic navigation.",
            code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        Dashboard
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        Reports
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        Settings
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
          },
        ],
      },
      {
        name: "Pagination",
        slug: "pagination",
        description:
          "Pagination with page navigation, previous and next links.",
        importExample: `import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@workspace/ui/components/pagination";`,
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
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic pagination with numbered pages.",
            code: `<Pagination>
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
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
          },
          {
            id: "with-ellipsis",
            title: "With Ellipsis",
            description: "Pagination with ellipsis for large page sets.",
            code: `<Pagination>
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
      <PaginationLink href="#" isActive>5</PaginationLink>
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
</Pagination>`,
          },
          {
            id: "with-page-size",
            title: "With Page Size",
            description:
              "Pagination with a Select dropdown for rows per page alongside page navigation.",
            code: `<div className="flex items-center justify-between w-full max-w-lg">
  <div className="flex items-center gap-2">
    <span className="text-sm text-muted-foreground">Rows per page</span>
    <Select defaultValue="10">
      <SelectTrigger className="w-[70px] h-8">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <Pagination className="w-auto mx-0">
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
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`,
          },
          {
            id: "compact",
            title: "Compact",
            description:
              "Minimal pagination with just Previous/Next buttons and page text, suitable for mobile.",
            code: `<div className="flex items-center gap-4">
  <Button variant="outline" size="sm">Previous</Button>
  <span className="text-sm text-muted-foreground">Page 1 of 10</span>
  <Button variant="outline" size="sm">Next</Button>
</div>`,
          },
        ],
        accessibility:
          "Renders inside a <nav> with aria-label; isActive applies aria-current for the current page link.",
        relatedComponents: ["table", "breadcrumb", "button"],
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
        examples: [
          {
            id: "collapsible",
            title: "Collapsible Groups",
            description:
              "Mini sidebar mockup with collapsible sections containing menu items.",
            code: `<div className="w-[240px] rounded-lg border">
  <div className="p-3 space-y-1">
    <div className="flex items-center justify-between rounded-md p-2 hover:bg-muted cursor-pointer">
      <span className="text-sm font-medium">Declarations</span>
      <ChevronDown className="h-4 w-4" />
    </div>
    <div className="ml-4 space-y-1">
      <div className="text-sm text-muted-foreground rounded-md p-2 hover:bg-muted cursor-pointer">
        Import
      </div>
      <div className="text-sm text-muted-foreground rounded-md p-2 hover:bg-muted cursor-pointer">
        Export
      </div>
    </div>
    <div className="flex items-center justify-between rounded-md p-2 hover:bg-muted cursor-pointer">
      <span className="text-sm font-medium">Reports</span>
      <ChevronRight className="h-4 w-4" />
    </div>
    <div className="flex items-center justify-between rounded-md p-2 hover:bg-muted cursor-pointer">
      <span className="text-sm font-medium">Settings</span>
      <ChevronRight className="h-4 w-4" />
    </div>
  </div>
</div>`,
          },
          {
            id: "with-icons",
            title: "Icon Only",
            description:
              "Compact sidebar showing just icons in a narrow column.",
            code: `<div className="w-[52px] rounded-lg border py-3 flex flex-col items-center gap-3">
  <div className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted cursor-pointer">
    <Home className="h-5 w-5 text-muted-foreground" />
  </div>
  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted cursor-pointer">
    <FileText className="h-5 w-5" />
  </div>
  <div className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted cursor-pointer">
    <Users className="h-5 w-5 text-muted-foreground" />
  </div>
  <div className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted cursor-pointer">
    <Settings className="h-5 w-5 text-muted-foreground" />
  </div>
  <div className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted cursor-pointer">
    <Bell className="h-5 w-5 text-muted-foreground" />
  </div>
</div>`,
          },
        ],
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
