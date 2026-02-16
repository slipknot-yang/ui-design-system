# Component-Pattern Mapping Matrix

> shadcn/ui 컴포넌트와 CUPIA 패턴 간 매핑 매트릭스
> - P1: 단순 검색+테이블, P2: 고급 검색, P3: 마스터-디테일
> - P4: 복합 폼+탭, P5: 일정, P6: 결재, P7: 대시보드
> - CA: 레이아웃, CB: 반복 컴포넌트

## 매핑 매트릭스

| shadcn/ui 컴포넌트 | P1 | P2 | P3 | P4 | P5 | P6 | P7 | CA | CB |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Layout & Navigation** | | | | | | | | | |
| Sidebar | | | | | | | | ● | |
| Navigation Menu | | | | | | | | ● | |
| Breadcrumb | | | | | | | | ● | ● |
| Menubar | | | | | | | | ● | |
| Pagination | ● | ● | ● | ● | ● | ● | | | ● |
| Tabs | | | | ● | | ● | ● | | |
| Scroll Area | | | | ● | | | | ● | |
| Separator | | | ● | ● | | | | | |
| Collapsible | | ● | ● | ● | | | | ● | ● |
| **Data Display** | | | | | | | | | |
| Table | ● | ● | ● | ● | ● | ● | ● | | ● |
| Card | | | | | | | ● | | |
| Badge | | | | | | ● | | ● | ● |
| Avatar | | | | | | | | ● | |
| Skeleton | ● | ● | ● | ● | ● | ● | ● | | |
| Progress | | | | | | | ● | | |
| **Form Controls** | | | | | | | | | |
| Input | ● | ● | ● | ● | ● | ● | | | ● |
| Textarea | | | | ● | ● | | | | |
| Select | ● | ● | ● | ● | ● | ● | | | ● |
| Checkbox | | ● | | ● | | | | | |
| Radio Group | | ● | | ● | | | | | |
| Switch | | | | | | | | ● | |
| Label | ● | ● | ● | ● | ● | ● | | | |
| Calendar | ● | ● | | ● | ● | ● | | | ● |
| Date Picker | ● | ● | | ● | ● | ● | | | ● |
| Combobox | | ● | ● | ● | | | | | |
| Input OTP | | | | | | | | | |
| **Feedback & Overlays** | | | | | | | | | |
| Dialog | | ● | | ● | | ● | | | ● |
| Alert Dialog | | | ● | ● | ● | ● | | | |
| Sheet | | | | | | | | ● | |
| Drawer | | | | | | | | ● | |
| Popover | | ● | | ● | | | | ● | ● |
| Tooltip | ● | ● | ● | ● | ● | ● | ● | ● | |
| Hover Card | | | | | | | | | |
| Toast / Sonner | ● | ● | ● | ● | ● | ● | | | |
| Alert | | | | ● | | ● | | | |
| **Interactive** | | | | | | | | | |
| Button | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Button Group | ● | ● | ● | ● | ● | ● | | | ● |
| Dropdown Menu | | | | | | | | ● | |
| Context Menu | | | ● | | | | | | |
| Command | | | | | | | | ● | ● |
| Toggle | | | | | | | | ● | |
| Toggle Group | | | | ● | | ● | ● | | |
| Accordion | | | | | | | | | |
| **New (2025.10)** | | | | | | | | | |
| Spinner | ● | ● | ● | ● | ● | ● | ● | ● | |
| Kbd | | | | | | | | ● | |
| Field | ● | ● | ● | ● | ● | ● | | | |
| Item | | | ● | | | | | ● | |
| Empty | ● | ● | ● | ● | ● | ● | ● | | |
| **Charts (Recharts)** | | | | | | | | | |
| Bar Chart | | | | | | | ● | | |
| Line Chart | | | | | | | ● | | |
| Pie Chart | | | | | | | ● | | |
| Area Chart | | | | | | | ● | | |

● = 해당 패턴에서 사용

---

## 패턴별 필수 컴포넌트 요약

### Pattern 1 (단순 검색+테이블) — 9개
`Button`, `Button Group`, `Input`, `Select`, `Label`, `Date Picker`, `Calendar`, `Table`, `Pagination`, `Field`, `Empty`, `Spinner`, `Sonner`

### Pattern 2 (고급 검색) — Pattern 1 + 7개
+ `Checkbox`, `Radio Group`, `Dialog`, `Popover`, `Collapsible`, `Combobox`

### Pattern 3 (마스터-디테일) — 12개
`Button`, `Input`, `Select`, `Label`, `Table`, `Pagination`, `Separator`, `Collapsible`, `Tabs`, `Alert Dialog`, `Sonner`, `Field`, `Item`, `Empty`

### Pattern 4 (복합 폼+탭) — 18개
`Tabs`, `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio Group`, `Label`, `Date Picker`, `Calendar`, `Table`, `Pagination`, `Dialog`, `Collapsible`, `Separator`, `Scroll Area`, `Field`, `Sonner`

### Pattern 5 (일정) — 8개
`Button`, `Input`, `Textarea`, `Label`, `Date Picker`, `Calendar`, `Table`, `Pagination`, `Alert Dialog`, `Field`

### Pattern 6 (결재/워크플로우) — 13개
`Tabs`, `Toggle Group`, `Button`, `Input`, `Select`, `Label`, `Date Picker`, `Calendar`, `Table`, `Pagination`, `Badge`, `Dialog`, `Alert`, `Field`, `Sonner`

### Pattern 7 (대시보드) — 10개
`Tabs`, `Card`, `Table`, `Badge`, `Progress`, `Button`, `Toggle Group`, `Empty`, Recharts (Bar/Line/Pie/Area)

### Common A (레이아웃) — 15개
`Sidebar`, `Navigation Menu`, `Menubar`, `Breadcrumb`, `Avatar`, `Badge`, `Button`, `Dropdown Menu`, `Command`, `Sheet`, `Drawer`, `Scroll Area`, `Collapsible`, `Switch`, `Tooltip`, `Kbd`, `Spinner`

---

## shadcn/ui Blocks 활용 계획

| Block | 용도 | 대상 패턴 |
|-------|------|----------|
| `sidebar-07` | 아이콘 접기 사이드바 | Common A |
| `sidebar-08` | Inset + 2차 네비게이션 | Common A |
| `sidebar-15` | 좌우 이중 사이드바 | Common A (옵션) |
| `dashboard-01` | 메인 대시보드 | Pattern 7 |
| `login-03` | 로그인 페이지 | 인증 |
| `login-04` | 2컬럼 로그인 | 인증 (옵션) |

---

## 설치 명령어 (56개 컴포넌트 — 배치별)

```bash
# Batch 1: Layout & Navigation (10개)
npx shadcn@latest add sidebar navigation-menu breadcrumb menubar pagination tabs scroll-area separator collapsible direction

# Batch 2: Data Display (7개)
npx shadcn@latest add table card badge avatar skeleton progress spinner

# Batch 3: Form Controls (13개)
npx shadcn@latest add input textarea select checkbox radio-group switch label calendar date-picker combobox input-otp field input-group

# Batch 4: Feedback & Overlays (10개)
npx shadcn@latest add dialog alert-dialog sheet drawer popover tooltip hover-card sonner alert empty

# Batch 5: Interactive (10개)
npx shadcn@latest add button button-group dropdown-menu context-menu command toggle toggle-group accordion carousel kbd

# Batch 6: Utilities (6개)
npx shadcn@latest add aspect-ratio resizable item typography native-select
```
