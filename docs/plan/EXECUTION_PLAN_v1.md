# CUPIA UI Design System Showcase - 실행 계획 v1

> **프로젝트**: CUPIA 관세 시스템 화이트라벨링 디자인 시스템 쇼케이스
> **작성일**: 2026-02-16
> **상태**: Conductor 작성 완료 / Arranger, Inspector 검토 대기

---

## 목표 명세

CUPIA ALCES 관세 시스템에서 식별된 7개 핵심 UI 패턴을 shadcn/ui 컴포넌트로 구현하여,
10개국 테마와 7개 언어를 지원하는 쇼케이스 사이트를 구축한다.

### 사전 조건 (확인 완료)

| 항목 | 요구 | 현재 |
|------|------|------|
| Node.js | >= 22 | v22.19.0 |
| pnpm | >= 9 | v9.11.0 |
| Next.js | 16.x | 16.1.6 (npm) |
| shadcn CLI | 3.x | 3.8.5 (npm) |
| Tailwind CSS | 4.x | 4.1.18 (npm) |
| 프로젝트 디렉토리 | 빈 디렉토리 | 확인 |

### 영향 범위 추정

| Phase | 신규 파일 수 (추정) | 복잡도 |
|-------|---------------------|--------|
| Phase 1: 패턴 카탈로그 문서 | 2~3 | 낮음 |
| Phase 2: 모노레포 초기 설정 | 5~8 | 중간 |
| Phase 3: shadcn/ui 프로젝트 생성 | 20~30 (자동 생성 포함) | 중간 |
| Phase 4: 기본 레이아웃 구축 | 8~12 | 중간 |
| Phase 5: 테마 시스템 기반 설정 | 12~18 | 높음 |
| Phase 6: i18n 시스템 기반 설정 | 15~22 | 높음 |

---

## Phase 1: 패턴 카탈로그 문서 저장

### 목적
CUPIA ALCES 시스템에서 분석한 7개 핵심 UI 패턴과 공통 패턴을 마크다운 문서로 아카이빙한다.
이 문서는 이후 모든 Phase에서 "어떤 컴포넌트를 어디에 매핑할 것인가"의 기준 문서가 된다.

### 단계

#### 1-1. 패턴 카탈로그 문서 작성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/docs/patterns/PATTERN_CATALOG.md`

**내용 구조**:
```
# CUPIA ALCES UI 패턴 카탈로그

## 개요
- 분석 대상 시스템: CUPIA ALCES (관세 통합 관리)
- 식별된 패턴 수: 7개 핵심 + 1개 공통

## 패턴 목록

### Pattern 1: 단순 검색 + 결과 테이블 (~60%)
- 설명: ...
- 출현 빈도: 전체 화면의 약 60%
- 사용되는 shadcn/ui 컴포넌트: input, button, table, pagination, select, badge
- 대표 업무 화면 예시: HS 코드 조회, 수출입 신고 목록

### Pattern 2: 고급 검색 + 결과 테이블
- 설명: ...
- 사용되는 shadcn/ui 컴포넌트: input, select, calendar, combobox, collapsible, table, pagination, button-group
- 대표 업무 화면 예시: 통관 이력 복합 검색

### Pattern 3: 마스터-디테일 (CRUD)
- 설명: ...
- 사용되는 shadcn/ui 컴포넌트: table, dialog/sheet, form, input, select, textarea, button, alert-dialog, sonner
- 대표 업무 화면 예시: 관세율 관리, 사용자 관리

### Pattern 4: 복합 폼 + 탭 (200+ 필드)
- 설명: ...
- 사용되는 shadcn/ui 컴포넌트: tabs, form, input, input-group, select, native-select, checkbox, radio-group, textarea, field, separator, card, accordion, scroll-area
- 대표 업무 화면 예시: 수입 신고서 작성

### Pattern 5: 일정/캘린더
- 설명: ...
- 사용되는 shadcn/ui 컴포넌트: calendar, card, badge, dialog, popover
- 대표 업무 화면 예시: 통관 일정, 심사 스케줄

### Pattern 6: 결재/워크플로우
- 설명: ...
- 사용되는 shadcn/ui 컴포넌트: card, badge, button, separator, avatar, progress, alert, dialog
- 대표 업무 화면 예시: 신고서 결재, 심사 승인 흐름

### Pattern 7: 대시보드 (차트 + 요약)
- 설명: ...
- 사용되는 shadcn/ui 컴포넌트: chart, card, table, badge, tabs, select
- 대표 업무 화면 예시: 통관 현황 대시보드, 관세 수입 통계

### 공통 패턴: 레이아웃, 네비게이션, 반복 컴포넌트
- 사용되는 shadcn/ui 컴포넌트: sidebar, navigation-menu, breadcrumb, dropdown-menu, avatar, sonner, tooltip, kbd, sheet, command, separator, skeleton, spinner
```

#### 1-2. 패턴-컴포넌트 매핑 매트릭스 작성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/docs/patterns/COMPONENT_MAPPING.md`

**내용**: 57개+ 컴포넌트 x 7개 패턴 매트릭스 테이블.
어떤 컴포넌트가 어떤 패턴에서 사용되는지 한눈에 파악 가능하게 한다.
설치 우선순위 결정의 근거가 된다.

#### 1-3. (선택) 패턴별 와이어프레임 참조 문서

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/docs/patterns/WIREFRAMES.md`

**내용**: 각 패턴의 레이아웃 구조를 ASCII 아트 또는 텍스트로 기술.
쇼케이스 페이지 구현 시 참조.

### 성공 기준
- [ ] `docs/patterns/PATTERN_CATALOG.md`가 7개 패턴 + 공통 패턴을 모두 포함
- [ ] `docs/patterns/COMPONENT_MAPPING.md`에서 shadcn/ui 56개 UI 컴포넌트의 패턴별 사용 여부 확인 가능
- [ ] 모든 문서가 프로젝트 루트의 `docs/` 디렉토리에 위치

### 예상 산출물
```
docs/
  patterns/
    PATTERN_CATALOG.md        # 패턴 상세 설명
    COMPONENT_MAPPING.md      # 컴포넌트-패턴 매트릭스
    WIREFRAMES.md             # (선택) 레이아웃 스케치
  plan/
    EXECUTION_PLAN_v1.md      # 본 문서
```

---

## Phase 2: 모노레포 초기 설정 (pnpm workspace)

### 목적
pnpm workspaces 기반 모노레포 구조를 생성하여 `packages/ui`와 `apps/docs` 두 워크스페이스를 준비한다.

### 단계

#### 2-1. Git 저장소 초기화

**명령어**:
```bash
cd /Users/slipknot-yang/Development/Frontend/Design/ui-design-system
git init
```

#### 2-2. 루트 package.json 생성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/package.json`

```json
{
  "name": "cupia-ui-design-system",
  "private": true,
  "packageManager": "pnpm@9.11.0",
  "scripts": {
    "dev": "pnpm --filter @cupia/docs dev",
    "build": "pnpm --filter @cupia/ui build && pnpm --filter @cupia/docs build",
    "lint": "pnpm -r lint",
    "clean": "pnpm -r clean"
  }
}
```

#### 2-3. pnpm-workspace.yaml 생성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/pnpm-workspace.yaml`

```yaml
packages:
  - "packages/*"
  - "apps/*"
```

#### 2-4. .npmrc 생성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/.npmrc`

```ini
auto-install-peers=true
strict-peer-dependencies=false
```

#### 2-5. .gitignore 생성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/.gitignore`

- `node_modules/`, `.next/`, `dist/`, `.turbo/`, `.env*.local` 등 표준 항목

#### 2-6. 디렉토리 구조 생성

**명령어**:
```bash
mkdir -p packages/ui
mkdir -p apps/docs
```

#### 2-7. packages/ui 초기 package.json 생성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/packages/ui/package.json`

```json
{
  "name": "@cupia/ui",
  "version": "0.1.0",
  "private": true,
  "sideEffects": false,
  "exports": {
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts"
  },
  "scripts": {
    "lint": "eslint .",
    "clean": "rm -rf dist node_modules"
  }
}
```

> **주의**: `@cupia/ui`의 exports 구조는 Phase 3에서 shadcn/ui 설치 후 조정이 필요할 수 있다. 여기서는 placeholder로 둔다.

### 성공 기준
- [ ] `pnpm install`이 루트에서 에러 없이 완료
- [ ] `pnpm ls -r`로 `@cupia/ui`와 `@cupia/docs`(Phase 3 후) 워크스페이스가 목록에 표시
- [ ] Git 저장소가 초기화되어 있음

### 예상 산출물
```
ui-design-system/
  package.json                 # 루트 (private, workspaces)
  pnpm-workspace.yaml          # 워크스페이스 정의
  .npmrc                       # pnpm 설정
  .gitignore                   # 무시 규칙
  packages/
    ui/
      package.json             # @cupia/ui
  apps/
    docs/                      # (아직 비어 있음, Phase 3에서 생성)
  docs/
    patterns/                  # Phase 1 산출물
    plan/                      # 본 실행 계획
```

---

## Phase 3: shadcn/ui 프로젝트 생성 및 컴포넌트 설치

### 목적
`apps/docs`에 Next.js 16 + shadcn/ui 프로젝트를 생성하고, `packages/ui`에 공유 컴포넌트를 설치한다.

### 단계

#### 3-1. apps/docs에 shadcn create로 Next.js 프로젝트 생성

**명령어**:
```bash
cd /Users/slipknot-yang/Development/Frontend/Design/ui-design-system
npx shadcn@3.8.5 create docs -t next --src-dir --rtl -c ./apps
```

> **의사결정 포인트**: `shadcn create`는 프로젝트 이름으로 디렉토리를 생성한다.
> `--rtl` 플래그로 RTL 지원을 활성화한다.
> 프리셋(Vega, Nova 등)은 인터랙티브 프롬프트에서 선택하거나 `--preset` 옵션으로 지정한다.
>
> **위험 요소**: `shadcn create`가 `apps/docs` 안에 독립적인 `package.json`과 `node_modules`를 생성한다.
> 모노레포 구조와의 충돌을 확인해야 한다. 특히:
> - `apps/docs/package.json`의 `name`을 `@cupia/docs`로 변경
> - `apps/docs/node_modules`가 루트의 hoisted node_modules와 충돌하지 않는지 확인

#### 3-2. apps/docs의 package.json 조정

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/package.json`

변경 사항:
- `name`을 `@cupia/docs`로 변경
- `@cupia/ui` 의존성 추가: `"@cupia/ui": "workspace:*"`

#### 3-3. packages/ui에 shadcn init 실행

**명령어**:
```bash
npx shadcn@3.8.5 init -c ./packages/ui --src-dir --css-variables
```

> **의사결정 포인트**: `packages/ui`는 Next.js 앱이 아니므로 `shadcn init`만 수행한다.
> 컴포넌트만 보관하는 패키지이므로 Tailwind, CSS 변수 설정만 필요하다.
>
> **위험 요소**: `shadcn init`이 Next.js 프로젝트를 기대할 수 있다.
> 대안: `packages/ui`에는 `shadcn init`을 하지 않고, `apps/docs`에만 shadcn을 설정한 후
> 컴포넌트 파일을 `packages/ui`로 수동 이동하는 전략도 고려해야 한다.
>
> **추천 전략**: `apps/docs`에 shadcn을 설정하되, `components.json`의 `aliases.components` 경로를
> `@cupia/ui`를 가리키도록 수정하는 방식. 이렇게 하면 `npx shadcn add`로 설치한 컴포넌트가
> 자동으로 `packages/ui`에 배치된다.

#### 3-4. components.json 경로 재설정

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@cupia/ui/components",
    "utils": "@cupia/ui/lib/utils",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "ui": "@cupia/ui/components/ui"
  }
}
```

> **위험 요소**: shadcn CLI 3.x의 alias 해석이 pnpm workspace 경로와 호환되는지
> 반드시 테스트해야 한다. 실패 시 tsconfig paths로 대체한다.

#### 3-5. 핵심 컴포넌트 일괄 설치

**1차 설치** (공통 패턴 + Pattern 1 최소 셋):
```bash
npx shadcn@3.8.5 add button input table pagination select badge separator \
  sidebar navigation-menu breadcrumb dropdown-menu avatar sonner tooltip \
  card label form -c ./apps/docs -y
```

**2차 설치** (나머지 패턴용 — 이후 Phase에서 필요 시):
```bash
npx shadcn@3.8.5 add dialog sheet tabs accordion calendar checkbox \
  radio-group textarea combobox collapsible alert alert-dialog progress \
  popover scroll-area chart command hover-card menubar carousel drawer \
  resizable toggle toggle-group input-otp skeleton slider switch \
  input-group button-group field empty spinner kbd native-select context-menu \
  aspect-ratio direction -c ./apps/docs -y
```

> 총 56개 UI 컴포넌트 전수 설치.

#### 3-6. 루트에서 pnpm install 재실행

```bash
cd /Users/slipknot-yang/Development/Frontend/Design/ui-design-system
pnpm install
```

#### 3-7. 빌드 테스트

```bash
pnpm --filter @cupia/docs dev
```

브라우저에서 `http://localhost:3000` 접속하여 기본 페이지 렌더링 확인.

### 성공 기준
- [ ] `apps/docs`에서 `pnpm dev` 실행 시 Next.js 16 개발 서버가 정상 구동
- [ ] `packages/ui/src/components/ui/` 디렉토리에 설치된 컴포넌트 파일이 존재
  (또는 `apps/docs` 내부에 있되, import path가 `@cupia/ui`를 통해 접근 가능)
- [ ] `apps/docs` 페이지에서 `<Button>` 같은 기본 컴포넌트를 import하여 렌더링 가능
- [ ] Tailwind CSS v4 + CSS 변수 기반 스타일링이 정상 동작

### 예상 산출물
```
apps/
  docs/
    package.json               # @cupia/docs (Next.js 16)
    components.json            # shadcn 설정 (경로 재설정됨)
    next.config.ts
    tsconfig.json
    src/
      app/
        layout.tsx
        page.tsx
        globals.css            # Tailwind + CSS 변수
      components/              # 앱 전용 컴포넌트
      hooks/
      lib/
packages/
  ui/
    package.json               # @cupia/ui
    src/
      components/
        ui/
          button.tsx           # shadcn 컴포넌트들 (56개)
          input.tsx
          table.tsx
          ...
      lib/
        utils.ts               # cn() 등 유틸리티
```

### 위험 요소
1. **shadcn CLI와 모노레포 호환성**: `components.json`의 alias가 workspace 패키지를 올바르게 해석하지 못할 가능성. 대안: tsconfig paths + 상대 경로.
2. **Tailwind CSS v4 설정**: v4는 `tailwind.config.ts` 대신 CSS 기반 설정을 사용. `@import "tailwindcss"` 구문이 `packages/ui`의 컴포넌트에서도 정상 동작하는지 확인 필요.
3. **Next.js 16 + React 19**: 일부 Radix 컴포넌트가 React 19와 호환성 이슈가 있을 수 있음. shadcn 3.8.5가 Base UI 이중 지원을 제공하므로 필요 시 Base UI 기반 컴포넌트로 전환.

---

## Phase 4: 기본 레이아웃 구축 (공통 패턴 A)

### 목적
쇼케이스 사이트의 기본 골격을 구축한다: 사이드바 네비게이션, 상단 헤더, 콘텐츠 영역.

### 단계

#### 4-1. 레이아웃 구조 설계

```
+------+------------------------------------------+
| SIDE |  HEADER (breadcrumb + theme/lang switch)  |
| BAR  |------------------------------------------|
|      |                                          |
|      |  CONTENT AREA                            |
|      |  (각 패턴의 쇼케이스 페이지)                |
|      |                                          |
+------+------------------------------------------+
```

#### 4-2. 사이드바 컴포넌트 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/components/layout/app-sidebar.tsx`

shadcn의 `sidebar` 컴포넌트를 기반으로 구현:
- 로고 영역
- 패턴 카탈로그 네비게이션 (7개 패턴 + 공통)
- 컴포넌트 목록 네비게이션 (56개, 카테고리별 그룹)
- 축소/확장 가능
- 하단: 테마/언어 전환 버튼

> shadcn 사이드바 블록 참조: `sidebar-header`, `sidebar-footer`, `sidebar-group`, `sidebar-group-collapsible`, `sidebar-menu`, `sidebar-menu-sub`, `sidebar-menu-collapsible` 등 10개 블록 활용.

#### 4-3. 헤더 컴포넌트 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/components/layout/app-header.tsx`

- Breadcrumb (현재 위치)
- 테마 전환 드롭다운 (10개국)
- 언어 전환 드롭다운 (7개 언어)
- 다크/라이트 모드 토글

#### 4-4. 루트 레이아웃 구성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/app/layout.tsx`

- `SidebarProvider` + `SidebarInset` 패턴 적용
- 글꼴 설정 (한국어/일본어/중국어 지원 웹폰트 고려)
- `ThemeProvider` (Phase 5), `IntlProvider` (Phase 6) 래핑 자리 마련

#### 4-5. 라우트 구조 설계

```
apps/docs/src/app/
  layout.tsx                              # 루트 레이아웃
  page.tsx                                # 홈 (프로젝트 소개)
  (showcase)/
    patterns/
      page.tsx                            # 패턴 목록
      simple-search/page.tsx              # Pattern 1
      advanced-search/page.tsx            # Pattern 2
      master-detail/page.tsx              # Pattern 3
      complex-form/page.tsx               # Pattern 4
      calendar/page.tsx                   # Pattern 5
      workflow/page.tsx                   # Pattern 6
      dashboard/page.tsx                  # Pattern 7
    components/
      page.tsx                            # 컴포넌트 목록
      [component]/page.tsx                # 개별 컴포넌트 쇼케이스
```

#### 4-6. 홈페이지 기본 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/app/page.tsx`

- 프로젝트 소개 텍스트
- 패턴 카드 그리드 (7개 패턴으로 링크)
- 기능 하이라이트 (테마, i18n, 컴포넌트 수)

### 성공 기준
- [ ] 사이드바가 렌더링되고 축소/확장 동작
- [ ] 네비게이션 링크 클릭 시 해당 라우트로 이동
- [ ] Breadcrumb이 현재 위치를 정확히 반영
- [ ] 모바일에서 사이드바가 Sheet로 전환 (반응형)
- [ ] 각 패턴 페이지 라우트에 placeholder 컨텐츠가 표시

### 예상 산출물
```
apps/docs/src/
  components/
    layout/
      app-sidebar.tsx
      app-header.tsx
      sidebar-nav.tsx           # 네비게이션 데이터 + 렌더링
      theme-switcher.tsx        # (Phase 5에서 기능 구현)
      language-switcher.tsx     # (Phase 6에서 기능 구현)
  app/
    layout.tsx                  # 수정됨
    page.tsx                    # 홈페이지
    (showcase)/
      patterns/
        page.tsx
        simple-search/page.tsx
        advanced-search/page.tsx
        master-detail/page.tsx
        complex-form/page.tsx
        calendar/page.tsx
        workflow/page.tsx
        dashboard/page.tsx
      components/
        page.tsx
        [component]/page.tsx
```

---

## Phase 5: 테마 시스템 기반 설정

### 목적
10개국 관세청 브랜드를 반영하는 CSS 변수 기반 테마 시스템을 구축한다.

### 단계

#### 5-1. 테마 설계 원칙 수립

- OKLCh 색상 포맷 사용 (shadcn v3.x 표준)
- CSS 변수 계층: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--muted`, `--destructive`, `--border`, `--ring` 등
- 각 국가별로 primary/accent 색상만 변경하고, 나머지는 일관된 패턴 유지
- 다크 모드: 각 국가 테마에 대해 light/dark 변형 제공

#### 5-2. 10개국 테마 데이터 정의

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/packages/ui/src/themes/countries.ts`

```typescript
export const countryThemes = {
  KR: { name: "Korea", colors: { primary: "...", accent: "..." } },
  US: { name: "USA", colors: { ... } },
  // ... 8개국 추가
} as const;
```

대상 국가 (CUPIA ALCES 실제 도입국 기준 제안):
1. KR (한국) - 기본/참조 테마
2. US (미국)
3. EC (에콰도르)
4. GT (과테말라)
5. CM (카메룬)
6. MG (마다가스카르)
7. KE (케냐)
8. JM (자메이카)
9. PH (필리핀)
10. UZ (우즈베키스탄)

> **의사결정 포인트**: 국가 목록은 사용자와 확인 필요. 위는 CUPIA 실제 납품 이력 기반 제안.

#### 5-3. CSS 변수 파일 생성

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/packages/ui/src/themes/css/`

각 국가별 CSS 파일 또는 하나의 통합 CSS 파일에 `[data-theme="kr"]`, `[data-theme="us"]` 등의
선택자로 분리.

#### 5-4. ThemeProvider 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/packages/ui/src/providers/theme-provider.tsx`

- `next-themes` 패키지 활용 (다크/라이트 모드)
- 국가 테마는 `data-theme` 속성으로 별도 관리
- React Context로 현재 테마 국가 상태 관리
- `localStorage`에 선택 저장

#### 5-5. 테마 전환 UI 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/components/layout/theme-switcher.tsx`

- 드롭다운 메뉴에 국기 아이콘 + 국가명
- 선택 시 `data-theme` 속성 변경
- 다크/라이트 모드 토글 별도 제공

#### 5-6. 테마 미리보기 페이지

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/app/(showcase)/themes/page.tsx`

- 10개국 테마를 카드 그리드로 표시
- 각 카드에 색상 팔레트 미리보기
- 클릭 시 해당 테마 적용

### 성공 기준
- [ ] 테마 전환 시 페이지 전체 색상이 즉시 변경 (CSS 변수 기반, JS 리렌더링 없음)
- [ ] 10개 국가 테마 각각에 light/dark 변형이 존재
- [ ] 새로고침 후에도 선택한 테마가 유지 (localStorage)
- [ ] OKLCh 색상 포맷이 정상 적용 (브라우저 DevTools에서 확인)
- [ ] shadcn/ui 컴포넌트들이 테마 변경에 반응 (Button, Card 등의 색상 변경)

### 예상 산출물
```
packages/ui/src/
  themes/
    countries.ts                # 국가 테마 데이터
    css/
      themes.css                # 통합 CSS 변수 (또는 국가별 분리)
  providers/
    theme-provider.tsx          # ThemeProvider

apps/docs/src/
  components/layout/
    theme-switcher.tsx          # 테마 전환 UI (기능 구현)
  app/(showcase)/
    themes/
      page.tsx                  # 테마 미리보기 페이지
```

### 위험 요소
1. **OKLCh 브라우저 지원**: 최신 브라우저는 지원하나, 폴백 전략 필요 여부 검토
2. **next-themes + data-theme 이중 관리**: `next-themes`는 `data-theme` 속성을 쓰지 않는 경우가 많음. 속성 충돌 방지 설계 필요 (예: `data-country-theme` 별도 속성)
3. **테마 전환 FOUC**: SSR 환경에서 테마 전환 시 깜빡임 방지를 위한 스크립트 삽입 필요

---

## Phase 6: i18n 시스템 기반 설정

### 목적
7개 언어 + RTL 지원을 갖춘 국제화 시스템을 구축한다.

### 단계

#### 6-1. 라이브러리 선택 및 설치

**추천**: `next-intl` (v4.8.3 사용 가능)

```bash
pnpm --filter @cupia/docs add next-intl
```

> **근거**: Next.js App Router와의 네이티브 통합, RSC 지원, 타입 안전성.

#### 6-2. 지원 언어 및 로케일 정의

| 코드 | 언어 | 방향 | 비고 |
|------|------|------|------|
| ko | 한국어 | LTR | 기본 언어 |
| en | English | LTR | |
| es | Espanol | LTR | |
| fr | Francais | LTR | |
| ar | العربية | RTL | 아랍어 |
| ja | 日本語 | LTR | |
| zh | 中文 | LTR | 간체 |

#### 6-3. 메시지 파일 구조 설계

**디렉토리**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/messages/`

```
messages/
  ko.json
  en.json
  es.json
  fr.json
  ar.json
  ja.json
  zh.json
```

각 파일 구조:
```json
{
  "common": {
    "search": "검색",
    "save": "저장",
    "cancel": "취소",
    "delete": "삭제",
    "edit": "수정",
    "add": "추가",
    "close": "닫기",
    "confirm": "확인",
    "loading": "로딩 중...",
    "noResults": "결과 없음"
  },
  "nav": {
    "patterns": "패턴",
    "components": "컴포넌트",
    "themes": "테마"
  },
  "patterns": {
    "simpleSearch": { "title": "단순 검색 + 결과 테이블", "description": "..." },
    ...
  },
  "customs": {
    "hsCode": "HS 코드",
    "declaration": "신고서",
    "tariff": "관세율",
    "clearance": "통관",
    "importer": "수입자",
    "exporter": "수출자"
  }
}
```

#### 6-4. next-intl 라우팅 설정

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/i18n/routing.ts`

```typescript
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en", "es", "fr", "ar", "ja", "zh"],
  defaultLocale: "ko",
});
```

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/i18n/request.ts`

```typescript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

#### 6-5. 미들웨어 설정

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/middleware.ts`

```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
```

#### 6-6. 라우트 구조 변경 (locale prefix)

```
apps/docs/src/app/
  [locale]/                               # 로케일 동적 라우트
    layout.tsx                            # locale별 레이아웃
    page.tsx
    (showcase)/
      patterns/...
      components/...
      themes/...
```

> **주의**: Phase 4에서 만든 라우트 구조를 `[locale]` 아래로 이동해야 한다.
> Phase 4와 Phase 6의 순서를 고려하면, Phase 4에서부터 `[locale]`을 고려한 구조로
> 만드는 것이 이상적이나, Phase 4에서는 placeholder로 두고 Phase 6에서 이동하는 것도 가능하다.

#### 6-7. RTL 지원 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/app/[locale]/layout.tsx`

```typescript
const rtlLocales = ["ar"];
const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

return (
  <html lang={locale} dir={dir}>
    ...
  </html>
);
```

> shadcn CLI의 `--rtl` 옵션으로 생성된 프로젝트는 `direction` 컴포넌트가 포함되어 있다.
> 이를 활용하여 RTL 전환 시 컴포넌트 레이아웃이 자동 미러링되는지 확인.

#### 6-8. 언어 전환 UI 구현

**파일**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/apps/docs/src/components/layout/language-switcher.tsx`

- 드롭다운에 언어 목록 표시
- `useRouter` + `usePathname`으로 현재 경로 유지하며 locale만 변경
- RTL 언어 선택 시 `dir` 속성 자동 전환

#### 6-9. 관세 도메인 용어 번역

`customs` 네임스페이스에 관세 도메인 특화 용어 번역 추가.
이 데이터는 각 패턴 쇼케이스에서 실감나는 데모 데이터로 활용된다.

### 성공 기준
- [ ] URL에 locale prefix가 포함 (예: `/ko/patterns/simple-search`)
- [ ] 기본 언어(ko)로 접속 시 한국어 UI 표시
- [ ] 언어 전환 시 페이지 리로드 없이 텍스트 변경 (클라이언트 네비게이션)
- [ ] 아랍어(ar) 선택 시 전체 레이아웃이 RTL로 전환
- [ ] RTL 모드에서 사이드바가 오른쪽에 위치
- [ ] RTL 모드에서 shadcn/ui 컴포넌트(Button, Input 등)의 정렬이 올바름
- [ ] 7개 언어 메시지 파일 모두 동일한 키 구조 보유

### 예상 산출물
```
apps/docs/
  messages/
    ko.json
    en.json
    es.json
    fr.json
    ar.json
    ja.json
    zh.json
  src/
    i18n/
      routing.ts
      request.ts
    middleware.ts
    app/
      [locale]/
        layout.tsx              # locale별 (dir 속성 포함)
        page.tsx
        (showcase)/...          # Phase 4 라우트 이동
    components/layout/
      language-switcher.tsx     # 기능 구현
```

### 위험 요소
1. **next-intl + Next.js 16 호환성**: Next.js 16이 최신이므로 next-intl 호환성 확인 필요. 공식 문서에서 지원 버전 확인.
2. **RSC에서의 번역**: Server Component에서 `getTranslations()`, Client Component에서 `useTranslations()` 사용 패턴 분리.
3. **RTL + 사이드바**: shadcn의 sidebar 컴포넌트가 RTL에서 정상 동작하는지 검증 필요. `--rtl` 플래그로 생성했으므로 기본 지원이 되어야 하나, 커스텀 레이아웃 부분은 수동 확인.
4. **폰트 로딩**: 7개 언어를 지원하려면 아랍어(Noto Sans Arabic), CJK(Noto Sans CJK) 등 대용량 폰트 서브셋 전략 필요.

---

## Phase 간 의존성 맵

```
Phase 1 (패턴 카탈로그) ──────────────────────────────────────────┐
    │                                                             │
    v                                                             │
Phase 2 (모노레포 설정)                                            │
    │                                                             │
    v                                                             │
Phase 3 (shadcn/ui 생성) ← 패턴 카탈로그 참조하여 컴포넌트 선별 ──┘
    │
    v
Phase 4 (레이아웃) ──── Phase 5 (테마) 와 Phase 6 (i18n) 은 병렬 가능
    │                      │                │
    v                      v                v
    └──────── Phase 7+ (각 패턴 쇼케이스 구현, 본 계획 범위 밖)
```

- Phase 1 --> Phase 2: 문서가 먼저 있어야 구조 결정 가능
- Phase 2 --> Phase 3: 모노레포가 있어야 shadcn 프로젝트 생성 가능
- Phase 1 --> Phase 3: 패턴 카탈로그가 컴포넌트 설치 범위 결정
- Phase 3 --> Phase 4: 컴포넌트가 설치되어야 레이아웃 구현 가능
- Phase 4 --> Phase 5, 6: 레이아웃 골격이 있어야 테마/i18n 적용 가능
- Phase 5, 6: 상호 독립, 병렬 진행 가능

---

## 전체 위험 요소 요약

| ID | 위험 | 영향 | 대응 |
|----|------|------|------|
| R1 | shadcn CLI 모노레포 alias 미지원 | Phase 3 차단 | tsconfig paths + 상대 경로 대체 |
| R2 | next-intl + Next.js 16 비호환 | Phase 6 차단 | next-intl canary 또는 직접 구현 |
| R3 | RTL + sidebar 레이아웃 깨짐 | Phase 4, 6 | shadcn `direction` 컴포넌트 활용, CSS logical properties |
| R4 | CJK + 아랍어 폰트 번들 크기 | 성능 저하 | next/font 서브셋 + Unicode range |
| R5 | OKLCh 구형 브라우저 미지원 | 테마 깨짐 | PostCSS 폴백 또는 대상 브라우저 명시 |
| R6 | React 19 + Radix 호환성 | 런타임 에러 | shadcn Base UI 기반 대체 |

---

## 다음 단계 (Arranger/Inspector 검토 요청)

이 계획서를 다음 관점에서 검토해 주십시오:

### Arranger (테크니컬 어드바이저) 검토 요청
- Phase 3의 모노레포 + shadcn CLI 통합 전략의 실현 가능성
- Phase 5의 OKLCh + CSS 변수 테마 시스템 설계의 적절성
- Phase 6의 next-intl + RSC 패턴의 최신 모범 사례 부합 여부

### Inspector (QA 리드) 검토 요청
- 각 Phase의 성공 기준이 검증 가능한가
- 누락된 단계나 암묵적 가정이 있는가
- Phase 간 의존성이 정확한가

---

*이 문서는 Conductor(테크니컬 PM)가 작성하였으며, 실행 전 Arranger 및 Inspector의 검토를 거쳐야 합니다.*
