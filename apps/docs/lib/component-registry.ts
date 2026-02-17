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
            code: `<Accordion type="single" collapsible>
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
            code: `<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
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
              "A simple card with header, description, and content area.",
            code: `<Card>
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
            id: "with-form",
            title: "With Form",
            description:
              "Card containing a form layout for settings or data entry.",
            code: `<Card className="w-[380px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="My Project" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="framework">Framework</Label>
        <Select>
          <SelectTrigger id="framework">
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
            code: `<div className="grid grid-cols-3 gap-4">
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
        codeExample: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Password settings here.</TabsContent>
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
            code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Password settings here.</TabsContent>
</Tabs>`,
          },
          {
            id: "with-cards",
            title: "With Cards",
            description:
              "Tabs with card-based content for richer layouts like a settings page.",
            code: `<Tabs defaultValue="account" className="w-[400px]">
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
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
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
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
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
        codeExample: `<div className="flex gap-2">
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
  <a href="/dashboard">Go to Dashboard</a>
</Button>`,
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
        name: "Checkbox",
        slug: "checkbox",
        description:
          "A control that allows the user to toggle between checked and not checked.",
        importExample: `import { Checkbox } from "@workspace/ui/components/checkbox";`,
        codeExample: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
</div>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic checkbox paired with a label.",
            code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
          },
          {
            id: "with-description",
            title: "With Description",
            description: "Checkbox with supplementary description text.",
            code: `<div className="items-top flex space-x-2">
  <Checkbox id="terms2" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms2">Accept terms and conditions</Label>
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
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">Disabled option</Label>
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
    <CommandGroup heading="Frameworks">
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
        ],
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
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
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
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="johndoe" />
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
  <Label htmlFor="document">Document</Label>
  <Input id="document" type="file" />
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
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic radio group with two options.",
            code: `<RadioGroup defaultValue="option-one">
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
            id: "with-description",
            title: "With Description",
            description:
              "Each radio option includes a description for extra context.",
            code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="default" id="r-default" className="mt-1" />
    <div>
      <Label htmlFor="r-default">Default</Label>
      <p className="text-sm text-muted-foreground">Standard spacing and size.</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="comfortable" id="r-comfortable" className="mt-1" />
    <div>
      <Label htmlFor="r-comfortable">Comfortable</Label>
      <p className="text-sm text-muted-foreground">More padding for a relaxed layout.</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="compact" id="r-compact" className="mt-1" />
    <div>
      <Label htmlFor="r-compact">Compact</Label>
      <p className="text-sm text-muted-foreground">Tight spacing to display more items.</p>
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
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
        examples: [
          {
            id: "default",
            title: "Default",
            description: "Basic switch with a label.",
            code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
          },
          {
            id: "with-description",
            title: "With Description",
            description:
              "Switch with a label and supplementary description text, common in settings pages.",
            code: `<div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-sm">
  <div className="space-y-0.5">
    <Label htmlFor="marketing">Marketing emails</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products, features, and more.
    </p>
  </div>
  <Switch id="marketing" />
</div>`,
          },
          {
            id: "disabled",
            title: "Disabled",
            description: "Switch in a disabled state.",
            code: `<div className="flex items-center space-x-2">
  <Switch id="disabled-switch" disabled />
  <Label htmlFor="disabled-switch" className="text-muted-foreground">Disabled</Label>
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
            description: "Avatars with text fallback initials.",
            code: `<div className="flex gap-4">
  <Avatar>
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
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
    <AvatarFallback>S</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-14 w-14 text-lg">
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
        ],
        accessibility:
          "Renders as an inline <div>; for status indicators, add an aria-label or sr-only text describing the meaning.",
        relatedComponents: ["button", "card", "table"],
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
            code: `<div className="space-y-3 w-full">
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
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="sheet-name">Name</Label>
        <Input id="sheet-name" placeholder="Your name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sheet-email">Email</Label>
        <Input id="sheet-email" placeholder="you@example.com" />
      </div>
    </div>
    <Button>Save changes</Button>
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
