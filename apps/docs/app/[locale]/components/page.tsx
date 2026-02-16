import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";

const componentCategories = [
  {
    category: "Layout",
    items: [
      { name: "Accordion", path: "accordion" },
      { name: "Aspect Ratio", path: "aspect-ratio" },
      { name: "Card", path: "card" },
      { name: "Collapsible", path: "collapsible" },
      { name: "Resizable", path: "resizable" },
      { name: "Scroll Area", path: "scroll-area" },
      { name: "Separator", path: "separator" },
      { name: "Tabs", path: "tabs" },
    ],
  },
  {
    category: "Forms",
    items: [
      { name: "Button", path: "button" },
      { name: "Calendar", path: "calendar" },
      { name: "Checkbox", path: "checkbox" },
      { name: "Combobox", path: "combobox" },
      { name: "Field", path: "field" },
      { name: "Input", path: "input" },
      { name: "Input Group", path: "input-group" },
      { name: "Input OTP", path: "input-otp" },
      { name: "Label", path: "label" },
      { name: "Radio Group", path: "radio-group" },
      { name: "Select", path: "select" },
      { name: "Switch", path: "switch" },
      { name: "Textarea", path: "textarea" },
      { name: "Toggle", path: "toggle" },
      { name: "Toggle Group", path: "toggle-group" },
    ],
  },
  {
    category: "Data Display",
    items: [
      { name: "Avatar", path: "avatar" },
      { name: "Badge", path: "badge" },
      { name: "Chart", path: "chart" },
      { name: "Empty", path: "empty" },
      { name: "Item", path: "item" },
      { name: "Kbd", path: "kbd" },
      { name: "Progress", path: "progress" },
      { name: "Skeleton", path: "skeleton" },
      { name: "Spinner", path: "spinner" },
      { name: "Table", path: "table" },
    ],
  },
  {
    category: "Feedback",
    items: [
      { name: "Alert", path: "alert" },
      { name: "Alert Dialog", path: "alert-dialog" },
      { name: "Dialog", path: "dialog" },
      { name: "Drawer", path: "drawer" },
      { name: "Popover", path: "popover" },
      { name: "Sheet", path: "sheet" },
      { name: "Sonner (Toast)", path: "sonner" },
      { name: "Tooltip", path: "tooltip" },
    ],
  },
  {
    category: "Navigation",
    items: [
      { name: "Breadcrumb", path: "breadcrumb" },
      { name: "Carousel", path: "carousel" },
      { name: "Command", path: "command" },
      { name: "Context Menu", path: "context-menu" },
      { name: "Dropdown Menu", path: "dropdown-menu" },
      { name: "Hover Card", path: "hover-card" },
      { name: "Menubar", path: "menubar" },
      { name: "Navigation Menu", path: "navigation-menu" },
      { name: "Pagination", path: "pagination" },
      { name: "Sidebar", path: "sidebar" },
    ],
  },
];

const totalComponents = componentCategories.reduce(
  (sum, cat) => sum + cat.items.length,
  0,
);

export default function ComponentsPage(): React.JSX.Element {
  const tNav = useTranslations("nav");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {tNav("components")}
        </h1>
        <p className="text-muted-foreground mt-1">
          All <Badge variant="secondary">{totalComponents}</Badge> installed
          shadcn/ui components from{" "}
          <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded">
            @workspace/ui/components/
          </code>
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {componentCategories.map((cat) => (
          <Card key={cat.category}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{cat.category}</CardTitle>
                <Badge variant="outline">{cat.items.length}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item.path}
                    className="flex items-center gap-2 rounded-md border p-2 text-sm hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium">{item.name}</span>
                    <code className="ml-auto text-xs text-muted-foreground font-mono hidden sm:inline">
                      {item.path}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Import Example</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="rounded-lg bg-muted p-4 text-sm font-mono overflow-x-auto">
            {`import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table";`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
