(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74215,e=>{"use strict";var a=e.i(87433),t=e.i(44440);let o={themePreset:"default",font:"inter",pageLayout:"full-width",navbarBehavior:"sticky",sidebarStyle:"sidebar",sidebarCollapseMode:"offcanvas"},r="dashboard-preferences",n=(0,t.createContext)(null);function i({children:e}){let[i,s]=(0,t.useState)(()=>({...o,...function(){if("u"<typeof document)return{};let e=document.cookie.match(RegExp(`(?:^|; )${r}=([^;]*)`));if(!e?.[1])return{};try{return JSON.parse(decodeURIComponent(e[1]))}catch{return{}}}()}));(0,t.useEffect)(()=>{document.cookie=`${r}=${encodeURIComponent(JSON.stringify(i))};path=/;max-age=31536000;SameSite=Lax`},[i]),(0,t.useEffect)(()=>{let e=document.documentElement;e.classList.remove("font-inter","font-geist","font-mono"),e.classList.add(`font-${i.font}`)},[i.font]);let l=(0,t.useCallback)((e,a)=>{s(t=>({...t,[e]:a}))},[]),d=(0,t.useCallback)(()=>{s(o)},[]);return(0,a.jsx)(n.Provider,{value:{...i,setPreference:l,restoreDefaults:d},children:e})}function s(){let e=(0,t.useContext)(n);if(!e)throw Error("usePreferences must be used within PreferencesProvider");return e}e.s(["PREFERENCE_DEFAULTS",()=>o,"PreferencesProvider",()=>i,"usePreferences",()=>s])},18176,e=>{"use strict";var a=e.i(87433),t=e.i(74215),o=e.i(3645);let r=(0,o.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),n=(0,o.default)("component",[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]]),i=(0,o.default)("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),s=(0,o.default)("rectangle-ellipsis",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]),l=(0,o.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),d=(0,o.default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]),c=(0,o.default)("navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),m=(0,o.default)("blocks",[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]),p=(0,o.default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]),u=(0,o.default)("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]),h=(0,o.default)("log-in",[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]]);var g=e.i(76016),x=e.i(61861);let b=(0,o.default)("chevrons-up-down",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);var f=e.i(94365);let v=(0,o.default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),w=(0,o.default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]),C=(0,o.default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var j=e.i(89736),y=e.i(44440),T=e.i(94237),k=e.i(74302),N=e.i(32137),D=e.i(81831);e.i(83144);var S=e.i(65918),I=e.i(52794);e.i(70102);var A=e.i(81241);let E=(0,o.default)("panel-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]),M=y.createContext(null);function P(){let e=y.useContext(M);if(!e)throw Error("useSidebar must be used within a SidebarProvider.");return e}function B({defaultOpen:e=!0,open:t,onOpenChange:o,className:r,style:n,children:i,...s}){let l=function(){let[e,a]=y.useState(void 0);return y.useEffect(()=>{let e=window.matchMedia("(max-width: 767px)"),t=()=>{a(window.innerWidth<768)};return e.addEventListener("change",t),a(window.innerWidth<768),()=>e.removeEventListener("change",t)},[]),!!e}(),[d,c]=y.useState(!1),[m,p]=y.useState(e),u=t??m,h=y.useCallback(e=>{let a="function"==typeof e?e(u):e;o?o(a):p(a),document.cookie=`sidebar_state=${a}; path=/; max-age=604800`},[o,u]),g=y.useCallback(()=>l?c(e=>!e):h(e=>!e),[l,h,c]);y.useEffect(()=>{let e=e=>{"b"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),g())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[g]);let x=u?"expanded":"collapsed",b=y.useMemo(()=>({state:x,open:u,setOpen:h,isMobile:l,openMobile:d,setOpenMobile:c,toggleSidebar:g}),[x,u,h,l,d,c,g]);return(0,a.jsx)(M.Provider,{value:b,children:(0,a.jsx)("div",{"data-slot":"sidebar-wrapper",style:{"--sidebar-width":"16rem","--sidebar-width-icon":"3rem",...n},className:(0,N.cn)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",r),...s,children:i})})}function L({side:e="left",variant:t="sidebar",collapsible:o="offcanvas",className:r,children:n,dir:i,...s}){let{isMobile:l,state:d,openMobile:c,setOpenMobile:m}=P();return"none"===o?(0,a.jsx)("div",{"data-slot":"sidebar",className:(0,N.cn)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",r),...s,children:n}):l?(0,a.jsx)(I.Sheet,{open:c,onOpenChange:m,...s,children:(0,a.jsxs)(I.SheetContent,{dir:i,"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:{"--sidebar-width":"18rem"},side:e,children:[(0,a.jsxs)(I.SheetHeader,{className:"sr-only",children:[(0,a.jsx)(I.SheetTitle,{children:"Sidebar"}),(0,a.jsx)(I.SheetDescription,{children:"Displays the mobile sidebar."})]}),(0,a.jsx)("div",{className:"flex h-full w-full flex-col",children:n})]})}):(0,a.jsxs)("div",{className:"group peer text-sidebar-foreground hidden md:block","data-state":d,"data-collapsible":"collapsed"===d?o:"","data-variant":t,"data-side":e,"data-slot":"sidebar",children:[(0,a.jsx)("div",{"data-slot":"sidebar-gap",className:(0,N.cn)("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180","floating"===t||"inset"===t?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)")}),(0,a.jsx)("div",{"data-slot":"sidebar-container","data-side":e,className:(0,N.cn)("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex","floating"===t||"inset"===t?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",r),...s,children:(0,a.jsx)("div",{"data-sidebar":"sidebar","data-slot":"sidebar-inner",className:"bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col",children:n})})]})}function G({className:e,onClick:t,...o}){let{toggleSidebar:r}=P();return(0,a.jsxs)(D.Button,{"data-sidebar":"trigger","data-slot":"sidebar-trigger",variant:"ghost",size:"icon-sm",className:(0,N.cn)(e),onClick:e=>{t?.(e),r()},...o,children:[(0,a.jsx)(E,{}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle Sidebar"})]})}function H({className:e,...t}){return(0,a.jsx)("main",{"data-slot":"sidebar-inset",className:(0,N.cn)("bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col",e),...t})}function R({className:e,...t}){return(0,a.jsx)("div",{"data-slot":"sidebar-header","data-sidebar":"header",className:(0,N.cn)("gap-2 p-2 flex flex-col",e),...t})}function z({className:e,...t}){return(0,a.jsx)("div",{"data-slot":"sidebar-footer","data-sidebar":"footer",className:(0,N.cn)("gap-2 p-2 flex flex-col",e),...t})}function F({className:e,...t}){return(0,a.jsx)(S.Separator,{"data-slot":"sidebar-separator","data-sidebar":"separator",className:(0,N.cn)("bg-sidebar-border mx-2 w-auto",e),...t})}function O({className:e,...t}){return(0,a.jsx)("div",{"data-slot":"sidebar-content","data-sidebar":"content",className:(0,N.cn)("no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",e),...t})}function V({className:e,...t}){return(0,a.jsx)("div",{"data-slot":"sidebar-group","data-sidebar":"group",className:(0,N.cn)("p-2 relative flex w-full min-w-0 flex-col",e),...t})}function K({className:e,asChild:t=!1,...o}){let r=t?k.Slot.Root:"div";return(0,a.jsx)(r,{"data-slot":"sidebar-group-label","data-sidebar":"group-label",className:(0,N.cn)("text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0",e),...o})}function U({className:e,...t}){return(0,a.jsx)("div",{"data-slot":"sidebar-group-content","data-sidebar":"group-content",className:(0,N.cn)("text-sm w-full",e),...t})}function _({className:e,...t}){return(0,a.jsx)("ul",{"data-slot":"sidebar-menu","data-sidebar":"menu",className:(0,N.cn)("gap-0 flex w-full min-w-0 flex-col",e),...t})}function $({className:e,...t}){return(0,a.jsx)("li",{"data-slot":"sidebar-menu-item","data-sidebar":"menu-item",className:(0,N.cn)("group/menu-item relative",e),...t})}let W=(0,T.cva)("ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button flex w-full items-center overflow-hidden outline-hidden group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:p-0!"}},defaultVariants:{variant:"default",size:"default"}});function q({asChild:e=!1,isActive:t=!1,variant:o="default",size:r="default",tooltip:n,className:i,...s}){let l=e?k.Slot.Root:"button",{isMobile:d,state:c}=P(),m=(0,a.jsx)(l,{"data-slot":"sidebar-menu-button","data-sidebar":"menu-button","data-size":r,"data-active":t,className:(0,N.cn)(W({variant:o,size:r}),i),...s});return n?("string"==typeof n&&(n={children:n}),(0,a.jsxs)(A.Tooltip,{children:[(0,a.jsx)(A.TooltipTrigger,{asChild:!0,children:m}),(0,a.jsx)(A.TooltipContent,{side:"right",align:"center",hidden:"collapsed"!==c||d,...n})]})):m}function Y({className:e,...t}){return(0,a.jsx)("ul",{"data-slot":"sidebar-menu-sub","data-sidebar":"menu-sub",className:(0,N.cn)("border-sidebar-border mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex min-w-0 flex-col",e),...t})}function J({className:e,...t}){return(0,a.jsx)("li",{"data-slot":"sidebar-menu-sub-item","data-sidebar":"menu-sub-item",className:(0,N.cn)("group/menu-sub-item relative",e),...t})}function Q({asChild:e=!1,size:t="md",isActive:o=!1,className:r,...n}){let i=e?k.Slot.Root:"a";return(0,a.jsx)(i,{"data-slot":"sidebar-menu-sub-button","data-sidebar":"menu-sub-button","data-size":t,"data-active":o,className:(0,N.cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-md px-2 focus-visible:ring-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0",r),...n})}var X=e.i(32245),Z=e.i(22589),ee=e.i(19444);let ea=[{category:"Layout",items:[{name:"Accordion",slug:"accordion",description:"A vertically stacked set of interactive headings that reveal content.",importExample:'import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion";',codeExample:`<Accordion type="single" collapsible>
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
</Accordion>`},{name:"Aspect Ratio",slug:"aspect-ratio",description:"Displays content within a desired ratio, constraining the width/height.",importExample:'import { AspectRatio } from "@workspace/ui/components/aspect-ratio";',codeExample:`<AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
  <img src="/placeholder.jpg" alt="Photo" className="rounded-md object-cover h-full w-full" />
</AspectRatio>`},{name:"Card",slug:"card",description:"Displays a card with header, content, and footer sections.",importExample:'import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";',codeExample:`<Card>
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
</Card>`},{name:"Collapsible",slug:"collapsible",description:"An interactive component which expands/collapses a panel.",importExample:'import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@workspace/ui/components/collapsible";',codeExample:`<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    <p>Collapsible content here.</p>
  </CollapsibleContent>
</Collapsible>`},{name:"Resizable",slug:"resizable",description:"A group of resizable panels that can be adjusted by dragging.",importExample:'import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@workspace/ui/components/resizable";',codeExample:`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Panel One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Panel Two</ResizablePanel>
</ResizablePanelGroup>`},{name:"Scroll Area",slug:"scroll-area",description:"Augments native scroll functionality for custom, cross-browser styling.",importExample:'import { ScrollArea } from "@workspace/ui/components/scroll-area";',codeExample:`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm">Tag {i + 1}</div>
    ))}
  </div>
</ScrollArea>`},{name:"Separator",slug:"separator",description:"Visually or semantically separates content.",importExample:'import { Separator } from "@workspace/ui/components/separator";',codeExample:`<div>
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
</div>`},{name:"Tabs",slug:"tabs",description:"A set of layered sections of content, known as tab panels, that are displayed one at a time.",importExample:'import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";',codeExample:`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Password settings here.</TabsContent>
</Tabs>`}]},{category:"Forms",items:[{name:"Button",slug:"button",description:"Displays a button or a component that looks like a button.",importExample:'import { Button } from "@workspace/ui/components/button";',codeExample:`<div className="flex gap-2">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`},{name:"Calendar",slug:"calendar",description:"A date field component that allows users to enter and edit dates.",importExample:'import { Calendar } from "@workspace/ui/components/calendar";',codeExample:'<Calendar mode="single" className="rounded-md border" />'},{name:"Checkbox",slug:"checkbox",description:"A control that allows the user to toggle between checked and not checked.",importExample:'import { Checkbox } from "@workspace/ui/components/checkbox";',codeExample:`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
</div>`},{name:"Combobox",slug:"combobox",description:"Autocomplete input with a filterable dropdown list of options.",importExample:'import { Combobox } from "@workspace/ui/components/combobox";',codeExample:`<Combobox
  options={[
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]}
  placeholder="Select framework..."
/>`},{name:"Field",slug:"field",description:"A form field wrapper that provides label, description, and error message support.",importExample:'import { Field } from "@workspace/ui/components/field";',codeExample:`<Field label="Email" description="Enter your email address">
  <Input placeholder="email@example.com" />
</Field>`},{name:"Input",slug:"input",description:"Displays a form input field.",importExample:'import { Input } from "@workspace/ui/components/input";',codeExample:`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`},{name:"Input Group",slug:"input-group",description:"Groups an input with addons like icons or text on either side.",importExample:'import { InputGroup } from "@workspace/ui/components/input-group";',codeExample:`<InputGroup>
  <Input placeholder="Search..." />
</InputGroup>`},{name:"Input OTP",slug:"input-otp",description:"Accessible one-time password component with copy paste functionality.",importExample:'import { InputOTP, InputOTPGroup, InputOTPSlot } from "@workspace/ui/components/input-otp";',codeExample:`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`},{name:"Label",slug:"label",description:"Renders an accessible label associated with controls.",importExample:'import { Label } from "@workspace/ui/components/label";',codeExample:`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`},{name:"Radio Group",slug:"radio-group",description:"A set of checkable buttons, known as radio buttons, where only one can be checked at a time.",importExample:'import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group";',codeExample:`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`},{name:"Select",slug:"select",description:"Displays a list of options for the user to pick from, triggered by a button.",importExample:'import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";',codeExample:`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`},{name:"Switch",slug:"switch",description:"A control that allows the user to toggle between on and off.",importExample:'import { Switch } from "@workspace/ui/components/switch";',codeExample:`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`},{name:"Textarea",slug:"textarea",description:"Displays a form textarea.",importExample:'import { Textarea } from "@workspace/ui/components/textarea";',codeExample:'<Textarea placeholder="Type your message here." />'},{name:"Toggle",slug:"toggle",description:"A two-state button that can be either on or off.",importExample:'import { Toggle } from "@workspace/ui/components/toggle";',codeExample:`<Toggle aria-label="Toggle italic">
  <span className="font-bold">B</span>
</Toggle>`},{name:"Toggle Group",slug:"toggle-group",description:"A set of two-state buttons that can be toggled on or off.",importExample:'import { ToggleGroup, ToggleGroupItem } from "@workspace/ui/components/toggle-group";',codeExample:`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <span className="font-bold">B</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <span className="italic">I</span>
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <span className="underline">U</span>
  </ToggleGroupItem>
</ToggleGroup>`}]},{category:"Data Display",items:[{name:"Avatar",slug:"avatar",description:"An image element with a fallback for representing the user.",importExample:'import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";',codeExample:`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`},{name:"Badge",slug:"badge",description:"Displays a badge or a component that looks like a badge.",importExample:'import { Badge } from "@workspace/ui/components/badge";',codeExample:`<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`},{name:"Chart",slug:"chart",description:"Beautiful, responsive charts built with Recharts.",importExample:'import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@workspace/ui/components/chart";',codeExample:`<ChartContainer config={{ desktop: { label: "Desktop", color: "var(--chart-1)" } }}>
  {/* Recharts components here */}
</ChartContainer>`},{name:"Empty",slug:"empty",description:"Placeholder displayed when there is no data to show.",importExample:'import { Empty } from "@workspace/ui/components/empty";',codeExample:`<Empty>
  <p>No results found.</p>
</Empty>`},{name:"Item",slug:"item",description:"A generic list item component for displaying key-value or labeled content.",importExample:'import { Item } from "@workspace/ui/components/item";',codeExample:`<Item>
  <span>Label</span>
  <span>Value</span>
</Item>`},{name:"Kbd",slug:"kbd",description:"Displays a keyboard shortcut or key combination.",importExample:'import { Kbd } from "@workspace/ui/components/kbd";',codeExample:`<div className="flex items-center gap-1">
  <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>`},{name:"Progress",slug:"progress",description:"Displays an indicator showing the completion progress of a task.",importExample:'import { Progress } from "@workspace/ui/components/progress";',codeExample:'<Progress value={60} className="w-[60%]" />'},{name:"Skeleton",slug:"skeleton",description:"Used to show a placeholder while content is loading.",importExample:'import { Skeleton } from "@workspace/ui/components/skeleton";',codeExample:`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`},{name:"Spinner",slug:"spinner",description:"A loading spinner indicator.",importExample:'import { Spinner } from "@workspace/ui/components/spinner";',codeExample:"<Spinner />"},{name:"Table",slug:"table",description:"A responsive table component.",importExample:'import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table";',codeExample:`<Table>
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
</Table>`}]},{category:"Feedback",items:[{name:"Alert",slug:"alert",description:"Displays a callout for important information.",importExample:'import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert";',codeExample:`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`},{name:"Alert Dialog",slug:"alert-dialog",description:"A modal dialog that interrupts the user with important content and expects a response.",importExample:'import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@workspace/ui/components/alert-dialog";',codeExample:`<AlertDialog>
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
</AlertDialog>`},{name:"Dialog",slug:"dialog",description:"A window overlaid on the primary window, rendering content on top of it.",importExample:'import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@workspace/ui/components/dialog";',codeExample:`<Dialog>
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
</Dialog>`},{name:"Drawer",slug:"drawer",description:"A panel that slides out from the edge of the screen.",importExample:'import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@workspace/ui/components/drawer";',codeExample:`<Drawer>
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
</Drawer>`},{name:"Popover",slug:"popover",description:"Displays rich content in a portal, triggered by a button.",importExample:'import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover";',codeExample:`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
    </div>
  </PopoverContent>
</Popover>`},{name:"Sheet",slug:"sheet",description:"Extends the Dialog component to display content that complements the main content of the screen.",importExample:'import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@workspace/ui/components/sheet";',codeExample:`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`},{name:"Sonner (Toast)",slug:"sonner",description:"An opinionated toast component for React, by Emil Kowalski.",importExample:'import { toast } from "sonner";',codeExample:`<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`},{name:"Tooltip",slug:"tooltip",description:"A popup that displays information related to an element when focused or hovered.",importExample:'import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip";',codeExample:`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}]},{category:"Navigation",items:[{name:"Breadcrumb",slug:"breadcrumb",description:"Displays the path to the current resource using a hierarchy of links.",importExample:'import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@workspace/ui/components/breadcrumb";',codeExample:`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`},{name:"Carousel",slug:"carousel",description:"A carousel with motion and swipe built using Embla.",importExample:'import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@workspace/ui/components/carousel";',codeExample:`<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`},{name:"Command",slug:"command",description:"Fast, composable command menu for React.",importExample:'import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@workspace/ui/components/command";',codeExample:`<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`},{name:"Context Menu",slug:"context-menu",description:"Displays a menu to the user when triggered by a right-click.",importExample:'import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@workspace/ui/components/context-menu";',codeExample:`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`},{name:"Dropdown Menu",slug:"dropdown-menu",description:"Displays a menu triggered by a button, following the WAI-ARIA menu pattern.",importExample:'import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu";',codeExample:`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`},{name:"Hover Card",slug:"hover-card",description:"For sighted users, shows content when hovering over a trigger.",importExample:'import { HoverCard, HoverCardContent, HoverCardTrigger } from "@workspace/ui/components/hover-card";',codeExample:`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
  </HoverCardContent>
</HoverCard>`},{name:"Menubar",slug:"menubar",description:"A visually persistent menu common in desktop applications.",importExample:'import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@workspace/ui/components/menubar";',codeExample:`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`},{name:"Navigation Menu",slug:"navigation-menu",description:"A collection of links for navigating websites.",importExample:'import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@workspace/ui/components/navigation-menu";',codeExample:`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`},{name:"Pagination",slug:"pagination",description:"Pagination with page navigation, previous and next links.",importExample:'import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@workspace/ui/components/pagination";',codeExample:`<Pagination>
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
</Pagination>`},{name:"Sidebar",slug:"sidebar",description:"A composable sidebar component with support for collapsible sections.",importExample:'import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from "@workspace/ui/components/sidebar";',codeExample:`<Sidebar>
  <SidebarHeader>App Name</SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      {/* Menu items */}
    </SidebarGroup>
  </SidebarContent>
</Sidebar>`}]}];ea.flatMap(e=>e.items).length;let et={Layout:i,Forms:s,"Data Display":l,Feedback:d,Navigation:c},eo=[{title:"Search + Table",href:"/patterns/search-table"},{title:"Advanced Search",href:"/patterns/advanced-search"},{title:"Master-Detail",href:"/patterns/master-detail"},{title:"Complex Form",href:"/patterns/complex-form"},{title:"Calendar",href:"/patterns/calendar"},{title:"Workflow",href:"/patterns/workflow"},{title:"Dashboard",href:"/patterns/dashboard"}];function er({variant:e="sidebar",collapsible:t="offcanvas"}){let o=(0,j.usePathname)(),i=ea.map(e=>({label:`${e.category} (${e.items.length})`,icon:et[e.category]||n,items:e.items.map(e=>({title:e.name,href:`/components/${e.slug}`}))}));function s(e){return(0,a.jsx)(V,{children:(0,a.jsxs)(ee.Collapsible,{defaultOpen:e.items.some(e=>o===e.href),className:"group/collapsible",children:[(0,a.jsx)(K,{asChild:!0,children:(0,a.jsxs)(ee.CollapsibleTrigger,{className:"flex w-full items-center gap-2",children:[(0,a.jsx)(e.icon,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"flex-1 text-left",children:e.label}),(0,a.jsx)(g.ChevronRight,{className:"h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})}),(0,a.jsx)(ee.CollapsibleContent,{children:(0,a.jsx)(U,{children:(0,a.jsx)(_,{children:e.items.map(t=>(0,a.jsx)($,{children:(0,a.jsx)(Y,{children:(0,a.jsx)(J,{children:(0,a.jsx)(Q,{asChild:!0,isActive:o===t.href,children:(0,a.jsx)(j.Link,{href:t.href,children:(0,a.jsx)("span",{children:t.title})})})})})},`${e.label}-${t.title}`))})})})]})},e.label)}return(0,a.jsxs)(L,{variant:e,collapsible:t,children:[(0,a.jsx)(R,{className:"border-b px-4 py-3",children:(0,a.jsxs)(j.Link,{href:"/",className:"flex items-center gap-2",children:[(0,a.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground",children:(0,a.jsx)(x.Shield,{className:"h-4 w-4"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-sm font-semibold tracking-tight",children:"CUPIA Design System"}),(0,a.jsx)("span",{className:"text-[10px] text-muted-foreground",children:"UI Component Library"})]})]})}),(0,a.jsxs)(O,{children:[(0,a.jsx)(V,{children:(0,a.jsx)(U,{children:(0,a.jsxs)(_,{children:[(0,a.jsx)($,{children:(0,a.jsx)(q,{asChild:!0,isActive:"/"===o,children:(0,a.jsxs)(j.Link,{href:"/",children:[(0,a.jsx)(r,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Home"})]})})}),(0,a.jsx)($,{children:(0,a.jsx)(q,{asChild:!0,isActive:"/dashboard"===o,children:(0,a.jsxs)(j.Link,{href:"/dashboard",children:[(0,a.jsx)(C,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Dashboard"})]})})}),(0,a.jsx)($,{children:(0,a.jsx)(q,{asChild:!0,isActive:"/components"===o,children:(0,a.jsxs)(j.Link,{href:"/components",children:[(0,a.jsx)(n,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Components"})]})})})]})})}),(0,a.jsx)(F,{}),i.map(e=>s(e)),(0,a.jsx)(F,{}),s({label:"UI Patterns",icon:m,items:eo}),(0,a.jsx)(F,{}),(0,a.jsx)(V,{children:(0,a.jsx)(U,{children:(0,a.jsxs)(_,{children:[(0,a.jsx)($,{children:(0,a.jsx)(q,{asChild:!0,isActive:"/themes"===o,children:(0,a.jsxs)(j.Link,{href:"/themes",children:[(0,a.jsx)(p,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Themes"})]})})}),(0,a.jsx)($,{children:(0,a.jsx)(q,{asChild:!0,isActive:"/i18n"===o,children:(0,a.jsxs)(j.Link,{href:"/i18n",children:[(0,a.jsx)(u,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"i18n"})]})})}),(0,a.jsx)($,{children:(0,a.jsx)(q,{asChild:!0,isActive:"/login"===o,children:(0,a.jsxs)(j.Link,{href:"/login",children:[(0,a.jsx)(h,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Login (Demo)"})]})})})]})})})]}),(0,a.jsx)(z,{className:"border-t",children:(0,a.jsx)(_,{children:(0,a.jsx)($,{children:(0,a.jsxs)(Z.DropdownMenu,{children:[(0,a.jsx)(Z.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsxs)(q,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[(0,a.jsxs)(X.Avatar,{className:"h-8 w-8 rounded-lg",children:[(0,a.jsx)(X.AvatarImage,{src:"",alt:"Admin"}),(0,a.jsx)(X.AvatarFallback,{className:"rounded-lg text-xs",children:"AD"})]}),(0,a.jsxs)("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[(0,a.jsx)("span",{className:"truncate font-semibold",children:"Admin User"}),(0,a.jsx)("span",{className:"truncate text-xs text-muted-foreground",children:"admin@cupia.or.kr"})]}),(0,a.jsx)(b,{className:"ml-auto h-4 w-4"})]})}),(0,a.jsxs)(Z.DropdownMenuContent,{className:"w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",side:"top",align:"end",sideOffset:4,children:[(0,a.jsxs)(Z.DropdownMenuItem,{children:[(0,a.jsx)(f.User,{className:"mr-2 h-4 w-4"}),"Profile"]}),(0,a.jsxs)(Z.DropdownMenuItem,{children:[(0,a.jsx)(v,{className:"mr-2 h-4 w-4"}),"Settings"]}),(0,a.jsx)(Z.DropdownMenuSeparator,{}),(0,a.jsxs)(Z.DropdownMenuItem,{children:[(0,a.jsx)(w,{className:"mr-2 h-4 w-4"}),"Sign Out"]})]})]})})})})]})}var en=e.i(10675),ei=e.i(2322),es=e.i(45090),el=e.i(83979),ed=e.i(93970);function ec(){let e=(0,el.useLocale)(),t=(0,j.useRouter)(),o=(0,j.usePathname)();return(0,en.useTranslations)("common"),(0,a.jsxs)(Z.DropdownMenu,{children:[(0,a.jsx)(Z.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsxs)(D.Button,{variant:"ghost",size:"sm",className:"h-8 gap-1 text-xs",children:[(0,a.jsx)(u,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:ed.localeNames[e]})]})}),(0,a.jsx)(Z.DropdownMenuContent,{align:"end",children:ed.locales.map(r=>(0,a.jsx)(Z.DropdownMenuItem,{onClick:()=>{t.replace(o,{locale:r})},className:e===r?"bg-accent":"",children:ed.localeNames[r]},r))})]})}var em=e.i(35682),ep=e.i(2333),ep=ep,eu=e.i(27154),eh=e.i(69901);function eg(){let[e,t]=(0,y.useState)(!1),o=(0,en.useTranslations)("common"),n=(0,j.useRouter)();function i(e){t(!1),n.push(e)}(0,y.useEffect)(()=>{function e(e){(e.metaKey||e.ctrlKey)&&"k"===e.key&&(e.preventDefault(),t(e=>!e))}return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);let s=[{label:"Home",href:"/",icon:r},{label:"Dashboard",href:"/dashboard",icon:C},{label:"Components",href:"/components",icon:m},{label:"Themes",href:"/themes",icon:p},{label:"i18n",href:"/i18n",icon:u},{label:"Login",href:"/login",icon:h}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(D.Button,{variant:"outline",className:"relative h-8 w-full justify-start rounded-md text-sm text-muted-foreground sm:w-56 lg:w-64",onClick:()=>t(!0),children:[(0,a.jsx)(ep.default,{className:"mr-2 h-4 w-4"}),(0,a.jsx)("span",{className:"hidden lg:inline-flex",children:o("searchPlaceholder")}),(0,a.jsx)("span",{className:"inline-flex lg:hidden",children:o("search")}),(0,a.jsxs)("span",{className:"pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5",children:[(0,a.jsx)(eu.Kbd,{className:"text-[10px]",children:"⌘"}),(0,a.jsx)(eu.Kbd,{className:"text-[10px]",children:"K"})]})]}),(0,a.jsxs)(eh.CommandDialog,{open:e,onOpenChange:t,children:[(0,a.jsx)(eh.CommandInput,{placeholder:o("searchPlaceholder")}),(0,a.jsxs)(eh.CommandList,{children:[(0,a.jsx)(eh.CommandEmpty,{children:o("noResults")}),(0,a.jsx)(eh.CommandGroup,{heading:"Navigation",children:s.map(e=>(0,a.jsxs)(eh.CommandItem,{onSelect:()=>i(e.href),children:[(0,a.jsx)(e.icon,{className:"mr-2 h-4 w-4"}),e.label]},e.href))}),(0,a.jsx)(eh.CommandGroup,{heading:"UI Patterns",children:[{label:"Search + Table",href:"/patterns/search-table"},{label:"Advanced Search",href:"/patterns/advanced-search"},{label:"Master-Detail",href:"/patterns/master-detail"},{label:"Complex Form",href:"/patterns/complex-form"},{label:"Calendar",href:"/patterns/calendar"},{label:"Workflow",href:"/patterns/workflow"},{label:"Dashboard",href:"/patterns/dashboard"}].map(e=>(0,a.jsxs)(eh.CommandItem,{onSelect:()=>i(e.href),children:[(0,a.jsx)(m,{className:"mr-2 h-4 w-4"}),e.label]},e.href))}),ea.map(e=>(0,a.jsx)(eh.CommandGroup,{heading:e.category,children:e.items.map(e=>(0,a.jsx)(eh.CommandItem,{onSelect:()=>i(`/components/${e.slug}`),children:e.name},e.slug))},e.category))]})]})]})}let ex=(0,o.default)("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);function eb(){let e=(0,en.useTranslations)("common");return(0,a.jsx)(A.TooltipProvider,{children:(0,a.jsxs)(A.Tooltip,{children:[(0,a.jsx)(A.TooltipTrigger,{asChild:!0,children:(0,a.jsxs)(D.Button,{variant:"ghost",size:"icon",className:"relative h-8 w-8",children:[(0,a.jsx)(ex,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600"}),(0,a.jsx)("span",{className:"sr-only",children:e("notifications")})]})}),(0,a.jsx)(A.TooltipContent,{children:(0,a.jsx)("p",{children:e("notifications")})})]})})}function ef(){let e=(0,en.useTranslations)("common");return(0,a.jsxs)(Z.DropdownMenu,{children:[(0,a.jsx)(Z.DropdownMenuTrigger,{asChild:!0,children:(0,a.jsx)(D.Button,{variant:"ghost",className:"relative h-8 w-8 rounded-full",children:(0,a.jsxs)(X.Avatar,{className:"h-8 w-8",children:[(0,a.jsx)(X.AvatarImage,{src:"",alt:"Admin"}),(0,a.jsx)(X.AvatarFallback,{className:"text-xs",children:"AD"})]})})}),(0,a.jsxs)(Z.DropdownMenuContent,{className:"w-56",align:"end",forceMount:!0,children:[(0,a.jsx)(Z.DropdownMenuLabel,{className:"font-normal",children:(0,a.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,a.jsx)("p",{className:"text-sm font-medium leading-none",children:"Admin User"}),(0,a.jsx)("p",{className:"text-xs leading-none text-muted-foreground",children:"admin@cupia.or.kr"})]})}),(0,a.jsx)(Z.DropdownMenuSeparator,{}),(0,a.jsxs)(Z.DropdownMenuItem,{children:[(0,a.jsx)(f.User,{className:"mr-2 h-4 w-4"}),e("profile")]}),(0,a.jsxs)(Z.DropdownMenuItem,{children:[(0,a.jsx)(v,{className:"mr-2 h-4 w-4"}),e("settings")]}),(0,a.jsx)(Z.DropdownMenuSeparator,{}),(0,a.jsxs)(Z.DropdownMenuItem,{children:[(0,a.jsx)(w,{className:"mr-2 h-4 w-4"}),e("logout")]})]})]})}let ev=(0,o.default)("settings-2",[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);var ew=e.i(21957),eC=e.i(11541),ej=e.i(40904),ey=e.i(38937),eT=e.i(14359);function ek(){let e=(0,en.useTranslations)("common"),{theme:o,setTheme:r}=(0,ew.useTheme)(),{themePreset:n,font:i,pageLayout:s,navbarBehavior:l,sidebarStyle:d,sidebarCollapseMode:c,setPreference:m,restoreDefaults:p}=(0,t.usePreferences)();return(0,a.jsxs)(eC.Popover,{children:[(0,a.jsx)(eC.PopoverTrigger,{asChild:!0,children:(0,a.jsxs)(D.Button,{variant:"ghost",size:"icon",className:"h-8 w-8",children:[(0,a.jsx)(ev,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:e("preferences")})]})}),(0,a.jsx)(eC.PopoverContent,{className:"w-80",align:"end",children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-medium leading-none",children:e("preferences")}),(0,a.jsx)("p",{className:"text-muted-foreground mt-1 text-sm",children:e("preferencesDescription")})]}),(0,a.jsxs)("p",{className:"text-muted-foreground text-xs italic",children:["*",e("preferencesStorageNote")]}),(0,a.jsx)(S.Separator,{}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("themePreset")}),(0,a.jsxs)(ej.Select,{value:n,onValueChange:e=>m("themePreset",e),children:[(0,a.jsx)(ej.SelectTrigger,{className:"h-8",children:(0,a.jsx)(ej.SelectValue,{})}),(0,a.jsxs)(ej.SelectContent,{children:[(0,a.jsx)(ej.SelectItem,{value:"default",children:"Default"}),(0,a.jsx)(ej.SelectItem,{value:"blue",children:"Blue"}),(0,a.jsx)(ej.SelectItem,{value:"green",children:"Green"}),(0,a.jsx)(ej.SelectItem,{value:"orange",children:"Orange"})]})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("fonts")}),(0,a.jsxs)(ej.Select,{value:i,onValueChange:e=>m("font",e),children:[(0,a.jsx)(ej.SelectTrigger,{className:"h-8",children:(0,a.jsx)(ej.SelectValue,{})}),(0,a.jsxs)(ej.SelectContent,{children:[(0,a.jsx)(ej.SelectItem,{value:"inter",children:"Inter"}),(0,a.jsx)(ej.SelectItem,{value:"geist",children:"Geist"}),(0,a.jsx)(ej.SelectItem,{value:"mono",children:"Mono"})]})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("themeMode")}),(0,a.jsxs)(ey.ToggleGroup,{type:"single",value:o,onValueChange:e=>e&&r(e),className:"w-full",children:[(0,a.jsx)(ey.ToggleGroupItem,{value:"light",className:"flex-1 text-xs",children:e("lightMode")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"dark",className:"flex-1 text-xs",children:e("darkMode")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"system",className:"flex-1 text-xs",children:e("system")})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("pageLayout")}),(0,a.jsxs)(ey.ToggleGroup,{type:"single",value:s,onValueChange:e=>e&&m("pageLayout",e),className:"w-full",children:[(0,a.jsx)(ey.ToggleGroupItem,{value:"centered",className:"flex-1 text-xs",children:e("centered")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"full-width",className:"flex-1 text-xs",children:e("fullWidth")})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("navbarBehavior")}),(0,a.jsxs)(ey.ToggleGroup,{type:"single",value:l,onValueChange:e=>e&&m("navbarBehavior",e),className:"w-full",children:[(0,a.jsx)(ey.ToggleGroupItem,{value:"sticky",className:"flex-1 text-xs",children:e("sticky")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"scroll",className:"flex-1 text-xs",children:e("scrollNav")})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("sidebarStyle")}),(0,a.jsxs)(ey.ToggleGroup,{type:"single",value:d,onValueChange:e=>e&&m("sidebarStyle",e),className:"w-full",children:[(0,a.jsx)(ey.ToggleGroupItem,{value:"inset",className:"flex-1 text-xs",children:e("inset")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"sidebar",className:"flex-1 text-xs",children:e("sidebarLabel")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"floating",className:"flex-1 text-xs",children:e("floatingLabel")})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(eT.Label,{className:"text-xs font-medium",children:e("sidebarCollapseMode")}),(0,a.jsxs)(ey.ToggleGroup,{type:"single",value:c,onValueChange:e=>e&&m("sidebarCollapseMode",e),className:"w-full",children:[(0,a.jsx)(ey.ToggleGroupItem,{value:"icon",className:"flex-1 text-xs",children:e("iconMode")}),(0,a.jsx)(ey.ToggleGroupItem,{value:"offcanvas",className:"flex-1 text-xs",children:e("offcanvas")})]})]}),(0,a.jsx)(S.Separator,{}),(0,a.jsx)(D.Button,{variant:"outline",size:"sm",className:"w-full",onClick:()=>{p(),r("system")},children:e("restoreDefaults")})]})})]})}function eN({navbarBehavior:e="sticky"}){let t=(0,en.useTranslations)("common");return(0,a.jsxs)("header",{className:(0,N.cn)("flex h-14 shrink-0 items-center gap-2 border-b px-4","sticky"===e&&"sticky top-0 z-10 bg-background"),children:[(0,a.jsx)(G,{className:"-ml-1"}),(0,a.jsx)(S.Separator,{orientation:"vertical",className:"mr-2 h-4"}),(0,a.jsx)(ei.Breadcrumb,{children:(0,a.jsxs)(ei.BreadcrumbList,{children:[(0,a.jsx)(ei.BreadcrumbItem,{children:(0,a.jsx)(ei.BreadcrumbLink,{href:"/",children:t("appName")})}),(0,a.jsx)(ei.BreadcrumbSeparator,{}),(0,a.jsx)(ei.BreadcrumbItem,{children:(0,a.jsx)(ei.BreadcrumbPage,{children:t("appName")})})]})}),(0,a.jsxs)("div",{className:"ml-auto flex items-center gap-2",children:[(0,a.jsx)(eg,{}),(0,a.jsx)(em.CountrySwitcher,{}),(0,a.jsx)(ec,{}),(0,a.jsx)(es.ThemeSwitcher,{}),(0,a.jsx)(ek,{}),(0,a.jsx)(eb,{}),(0,a.jsx)(ef,{})]})]})}function eD({children:e}){let{sidebarStyle:o,sidebarCollapseMode:r,pageLayout:n,navbarBehavior:i}=(0,t.usePreferences)();return(0,a.jsxs)(B,{children:[(0,a.jsx)(er,{variant:o,collapsible:r}),(0,a.jsxs)(H,{children:[(0,a.jsx)(eN,{navbarBehavior:i}),(0,a.jsx)("main",{className:(0,N.cn)("flex-1 p-4 lg:p-6","centered"===n&&"mx-auto max-w-5xl"),children:e})]})]})}e.s(["DashboardShell",()=>eD],18176)}]);