# Inspector 검증 보고서 - EXECUTION_PLAN_v1

> **검증 대상**: `EXECUTION_PLAN_v1.md`
> **검증자**: Inspector (QA Lead)
> **검증일**: 2026-02-16
> **대상 문서 위치**: `/Users/slipknot-yang/Development/Frontend/Design/ui-design-system/docs/plan/EXECUTION_PLAN_v1.md`

---

## 최종 판정: NEEDS_REVISION

---

## 점수 요약

| 기준 | 점수 | 판정 |
|------|------|------|
| 명확성 (Clarity) | 4/5 | PASS |
| 검증 가능성 (Verifiability) | 3/5 | NEEDS_REVISION |
| 완전성 (Completeness) | 3/5 | NEEDS_REVISION |
| 순서 (Ordering) | 3/5 | NEEDS_REVISION |
| 범위 (Scope) | 4/5 | PASS |
| **종합** | **17/25** | **NEEDS_REVISION** |

---

## 1. 명확성 (Clarity) - 4/5 - PASS

### 우수한 점

- 모든 파일 경로가 절대 경로로 명시되어 있어, 실행자가 어디에 파일을 생성해야 하는지 혼동이 없다.
- 각 Phase에 ASCII 다이어그램(Phase 4 레이아웃, Phase 의존성 맵)을 포함하여 시각적 이해를 돕는다.
- 명령어가 복사-붙여넣기 가능한 형태로 제공되어 있다.
- 위험 요소마다 대응 전략이 함께 기술되어 있다.

### 개선이 필요한 점

**[C-1] Phase 1 패턴 설명에 `...` placeholder가 과다하다.**

Phase 1의 PATTERN_CATALOG.md 내용 구조에서 각 패턴의 `설명: ...` 부분이 전부 placeholder로 되어 있다. 실행자가 "어느 정도 수준으로 작성해야 하는가"를 판단할 수 없다. 최소한 Pattern 1에 대해서라도 완성된 예시 한 건을 제공해야 한다.

**[C-2] Phase 3 단계 3-3과 3-4 사이의 의사결정이 미확정이다.**

> "packages/ui에는 shadcn init을 하지 않고... 수동 이동하는 전략도 고려해야 한다"
> "추천 전략: apps/docs에 shadcn을 설정하되, components.json의 aliases.components 경로를..."

두 가지 전략이 병기되어 있으나 어느 쪽을 채택하는지 확정되지 않았다. "고려해야 한다"는 모호한 표현이다. 계획 문서에서 의사결정 포인트를 남기는 것은 허용되지만, **추천 전략을 기본 경로(happy path)로 확정하고, 대안을 폴백으로 명시**해야 실행자가 혼란 없이 진행할 수 있다.

**[C-3] `shadcn init`에 `--template next-monorepo` 옵션이 존재한다.**

환경 검증 결과, `shadcn init`은 `--template` 옵션에 `next-monorepo`를 지원한다:

```
-t, --template <template>  the template to use. (next, start, vite, next-monorepo)
```

이 옵션의 존재가 계획에서 전혀 언급되지 않았다. 모노레포 통합에 대한 주요 위험(R1)을 해소할 수 있는 공식 경로가 있으므로, 반드시 평가 후 계획에 반영해야 한다.

**[C-4] Phase 5-2의 국가 목록이 확정되지 않은 상태에서 "10개국"이라고 단정한다.**

> "의사결정 포인트: 국가 목록은 사용자와 확인 필요"

미확정 사항이지만 Phase 전체가 이 목록에 의존한다. 확정 전까지 Phase 5를 시작하면 재작업 위험이 있다. 확정 시점을 Phase 1 또는 Phase 2 단계로 앞당기거나, 기본값(현재 제안 목록)으로 진행한다는 명시적 결정이 필요하다.

---

## 2. 검증 가능성 (Verifiability) - 3/5 - NEEDS_REVISION

### 우수한 점

- 모든 Phase에 체크리스트 형태의 성공 기준이 있다.
- Phase 2의 `pnpm install`, `pnpm ls -r` 등 구체적인 검증 명령어가 제시되어 있다.
- Phase 6의 성공 기준이 7개 항목으로 가장 상세하다.

### 개선이 필요한 점

**[V-1] Phase 3의 성공 기준에 자동화된 검증 명령이 부족하다.**

Phase 3 성공 기준:
- "packages/ui/src/components/ui/ 디렉토리에 설치된 컴포넌트 파일이 존재"
- "apps/docs 페이지에서 `<Button>` 같은 기본 컴포넌트를 import하여 렌더링 가능"

이것들은 수동 확인이다. 다음과 같은 자동화 검증을 추가해야 한다:

```bash
# 컴포넌트 파일 수 확인
ls packages/ui/src/components/ui/*.tsx | wc -l  # 56 이상이어야 함

# TypeScript 컴파일 확인
pnpm --filter @cupia/docs tsc --noEmit

# 빌드 성공 확인
pnpm --filter @cupia/docs build
```

**[V-2] Phase 4의 성공 기준에 "반응형 동작" 검증 방법이 없다.**

> "모바일에서 사이드바가 Sheet로 전환 (반응형)"

이를 어떻게 검증하는가? 브라우저 DevTools 반응형 모드에서 확인하는 것인지, Playwright/Cypress 같은 E2E 테스트를 작성하는 것인지 명시되어 있지 않다. 현재 프로젝트에 테스트 프레임워크 설정 단계가 전혀 없다.

**[V-3] Phase 5의 "CSS 변수 기반, JS 리렌더링 없음" 검증이 주관적이다.**

CSS 변수 전환이 JS 리렌더링을 유발하지 않는다는 것을 어떻게 증명하는가? React DevTools Profiler로 렌더 카운트를 측정하는 등의 구체적 방법이 필요하다. 또는 이 기준이 과도하다면 "테마 전환 시 페이지가 깜빡이지 않음" 정도로 조정해야 한다.

**[V-4] Phase 6의 "페이지 리로드 없이 텍스트 변경" 검증 방법이 불명확하다.**

next-intl의 locale 전환은 `<Link>` 기반 클라이언트 네비게이션으로 이루어지므로 실제로는 soft navigation이 발생한다. "리로드 없이"라는 표현이 "full page reload 없이"인지, "어떤 네비게이션도 없이"인지 구분이 필요하다. next-intl은 locale 변경 시 경로가 바뀌므로(`/ko/... -> /en/...`) 네비게이션 자체는 발생한다.

**[V-5] 전체 Phase에 걸쳐 "실패 시 진단 방법"이 기술되어 있지 않다.**

성공 기준만 있고, 실패 시 어디를 확인해야 하는지(로그 위치, 디버깅 순서)가 전혀 없다. 특히 Phase 3의 shadcn CLI 모노레포 통합은 실패 확률이 높다고 계획 자체가 인정하고 있으므로, 실패 시 진단 체크리스트를 반드시 추가해야 한다.

---

## 3. 완전성 (Completeness) - 3/5 - NEEDS_REVISION

### 우수한 점

- 6개 Phase가 빈틈없이 전체 범위를 커버한다.
- 각 Phase에 예상 산출물 트리가 명확히 기술되어 있다.
- 위험 요소 6건에 대한 식별과 대응 전략이 있다.

### 개선이 필요한 점

**[CO-1] (Critical) `shadcn init --template next-monorepo` 옵션 미평가**

환경 검증에서 확인된 바, `shadcn@3.8.5 init`은 `--template next-monorepo` 옵션을 공식 지원한다. 이 옵션은 Phase 3의 핵심 위험(R1: shadcn CLI 모노레포 alias 미지원)을 근본적으로 해소할 수 있는 경로이다.

현재 계획의 Phase 2-3 전략을 다음과 같이 재평가해야 한다:

- **평가 항목**: `shadcn init --template next-monorepo`가 pnpm workspace와 어떤 구조를 생성하는가?
- **평가 항목**: 이 템플릿이 `packages/ui` + `apps/docs` 구조를 자동 생성하는가?
- **평가 항목**: Phase 2의 수동 모노레포 설정이 여전히 필요한가, 아니면 `shadcn init --template next-monorepo`가 이를 대체하는가?

이 옵션을 먼저 실험(spike)한 후 Phase 2-3을 재설계하는 것이 전략적으로 올바르다.

**[CO-2] Phase 2에서 `apps/docs` 디렉토리를 생성하지만 Phase 3에서 `shadcn create`가 동일 디렉토리에 프로젝트를 생성한다.**

Phase 2-6에서 `mkdir -p apps/docs`를 실행하고, Phase 3-1에서 `shadcn create docs -c ./apps`를 실행한다. `shadcn create`는 `./apps/docs` 디렉토리를 생성하려 할 텐데, 이미 존재하는 디렉토리에 대한 동작이 명시되어 있지 않다. 빈 디렉토리에 생성하는 것인지, 기존 파일과 병합되는 것인지, 에러가 발생하는 것인지 확인이 필요하다.

추천: Phase 2에서 `apps/docs`는 생성하지 않고, Phase 3의 `shadcn create`가 생성하도록 한다. 또는 `shadcn create`가 기존 디렉토리를 허용하는지 사전 테스트한다.

**[CO-3] tsconfig.json 설정이 누락되어 있다.**

Phase 3에서 `@cupia/ui` 패키지를 workspace 의존성으로 사용하려면, `apps/docs/tsconfig.json`에 path alias 설정이 필요하다:

```json
{
  "compilerOptions": {
    "paths": {
      "@cupia/ui/*": ["../../packages/ui/src/*"]
    }
  }
}
```

이 설정 단계가 Phase 3 어디에도 명시되어 있지 않다. `shadcn create`가 생성하는 tsconfig가 workspace 패키지를 인식할 리 없으므로, 수동 설정이 반드시 필요하다.

**[CO-4] `next.config.ts`의 transpilePackages 설정이 누락되어 있다.**

Next.js에서 모노레포 내 패키지의 TypeScript 소스를 직접 import하려면 `next.config.ts`에 다음 설정이 필요하다:

```typescript
const nextConfig = {
  transpilePackages: ["@cupia/ui"],
};
```

이 설정이 Phase 3에 포함되어 있지 않다.

**[CO-5] Phase 4의 라우트 구조와 Phase 6의 `[locale]` 래핑이 충돌한다.**

Phase 4에서 다음 구조를 만든다:

```
app/
  layout.tsx
  page.tsx
  (showcase)/patterns/...
```

Phase 6에서 이것을 `[locale]/` 아래로 이동한다:

```
app/
  [locale]/
    layout.tsx
    page.tsx
    (showcase)/patterns/...
```

계획 자체도 이 문제를 인지하고 있다(6-6의 주의사항). 그러나 **구체적인 이동 절차**(파일 이동 명령, import 경로 변경, layout.tsx 분리 방법)가 기술되어 있지 않다. 이것은 단순 파일 이동이 아니라 layout.tsx의 `<html>` 태그 위치, RootLayout vs LocaleLayout 분리 등 구조적 변경을 수반하므로 상세 단계가 필요하다.

**[CO-6] Phase 5의 `next-themes` 설치 명령이 없다.**

Phase 5-4에서 `next-themes` 패키지를 사용하지만, 설치 명령이 어디에도 없다:

```bash
pnpm --filter @cupia/docs add next-themes
```

이 단계를 Phase 5-1 또는 5-4 앞에 추가해야 한다.

**[CO-7] `packages/ui`의 Tailwind CSS 설정 전략이 불명확하다.**

`packages/ui`에 컴포넌트를 배치하면, 이 컴포넌트들의 Tailwind 클래스가 `apps/docs`의 Tailwind 빌드에 포함되어야 한다. Tailwind CSS v4에서는 `@source` 지시문 또는 `content` 설정으로 외부 패키지의 파일을 스캔하도록 해야 한다. 이 설정이 Phase 3에 누락되어 있다.

```css
/* apps/docs/src/app/globals.css */
@import "tailwindcss";
@source "../../packages/ui/src/**/*.tsx";
```

**[CO-8] 롤백 계획이 전혀 없다.**

6개 Phase 어디에도 "이 단계가 실패하면 어떻게 복구하는가"가 기술되어 있지 않다. 최소한 다음 수준의 롤백 전략이 필요하다:

- Phase 2: `git init` 후 실패 시 `.git` 삭제
- Phase 3: `shadcn create` 실패 시 `apps/docs` 삭제 후 재시도
- Phase 4-6: Git 커밋 기반 롤백 (`git reset --soft HEAD~1`)

각 Phase 완료 시점에 Git 커밋을 하라는 지침도 함께 추가해야 한다.

**[CO-9] ESLint/Prettier 설정이 누락되어 있다.**

Phase 2의 루트 `package.json`에 `lint` 스크립트가 있지만, ESLint 설정 파일(`eslint.config.js` 또는 `.eslintrc`)이 어디에도 계획되어 있지 않다. `shadcn create`가 기본 ESLint 설정을 포함할 수 있지만, 모노레포 루트 레벨의 공유 설정이 필요한지 언급이 없다.

---

## 4. 순서 (Ordering) - 3/5 - NEEDS_REVISION

### 우수한 점

- Phase 간 의존성 맵이 ASCII 다이어그램으로 시각화되어 있다.
- Phase 1 -> 2 -> 3 -> 4 순서는 논리적으로 타당하다.

### 개선이 필요한 점

**[O-1] (Critical) Phase 5와 Phase 6의 병렬 실행이 실제로는 불가능하다.**

계획은 Phase 5(테마)와 Phase 6(i18n)이 병렬 가능하다고 기술한다. 그러나 다음 이유로 병렬 실행에 심각한 충돌이 발생한다:

1. **Phase 6이 라우트 구조를 변경한다**: Phase 6-6에서 `app/` 아래의 모든 파일을 `app/[locale]/` 아래로 이동한다. Phase 5가 동시에 `app/(showcase)/themes/page.tsx`를 생성하면, Phase 6의 이동 대상에 포함되는지 여부가 불명확하다.

2. **Phase 5의 ThemeProvider와 Phase 6의 IntlProvider가 layout.tsx에서 중첩된다**: 두 Phase가 동시에 `layout.tsx`를 수정하면 병합 충돌이 발생한다.

3. **Phase 5의 theme-switcher.tsx와 Phase 6의 language-switcher.tsx가 동일 헤더에 배치된다**: `app-header.tsx`를 동시에 수정하게 된다.

**추천**: Phase 6(i18n)을 먼저 실행한 후 Phase 5(테마)를 실행하거나, 반대 순서로 직렬화한다. 이유: Phase 6의 라우트 구조 변경이 더 파괴적이므로, Phase 6을 먼저 완료하여 라우트 구조를 확정한 후 Phase 5를 적용하는 것이 안전하다.

의존성 수정 제안:
```
Phase 4 -> Phase 6 -> Phase 5
```

또는, Phase 4에서부터 `[locale]` 구조를 도입하여 Phase 6의 구조 변경 범위를 최소화하는 전략(아래 O-2 참조)을 채택하면 병렬이 가능해질 수 있다.

**[O-2] Phase 4에서 `[locale]` 라우트를 미리 설정해야 한다.**

계획 자체가 이 점을 인지하고 있다:

> "Phase 4에서부터 [locale]을 고려한 구조로 만드는 것이 이상적이나, Phase 4에서는 placeholder로 두고 Phase 6에서 이동하는 것도 가능하다."

"이상적"이라고 인정하면서 "가능하다"라는 약한 표현으로 대안을 선택한 것은 기술 부채를 만든다. Phase 4에서 처음부터 `[locale]` 구조를 도입하면:

- Phase 6의 파일 이동 작업이 불필요해진다 (재작업 제거)
- Phase 5와 Phase 6의 병렬 실행이 가능해진다 (layout.tsx 충돌 감소)
- Phase 4의 추가 작업량은 미미하다 (디렉토리 한 단계 추가)

이를 채택하지 않을 합리적 이유가 없다.

**[O-3] Phase 3-5의 "2차 설치"를 Phase 3에서 전부 수행할 필요가 없다.**

계획에서:
> "2차 설치 (나머지 패턴용 -- 이후 Phase에서 필요 시)"

라고 기술하면서도, Phase 3 내에서 56개 컴포넌트를 전수 설치한다. "이후 Phase에서 필요 시"라는 주석과 실제 행동이 모순된다. 두 가지 중 하나를 선택해야 한다:

- (A) Phase 3에서 전수 설치 -- 주석에서 "이후 Phase에서"를 삭제
- (B) Phase 3에서 1차만 설치하고, 각 패턴 쇼케이스 구현 Phase에서 필요한 컴포넌트를 추가 설치

쇼케이스 프로젝트의 성격상 (A)가 합리적이므로, 주석을 명확히 수정한다.

---

## 5. 범위 (Scope) - 4/5 - PASS

### 우수한 점

- 6개 Phase 각각이 하나의 세션에서 완료 가능한 크기로 설계되어 있다.
- Phase 7+(각 패턴 쇼케이스 구현)을 명시적으로 범위 밖으로 선언한 점이 적절하다.
- 각 Phase의 신규 파일 수와 복잡도 추정이 현실적이다.
- Gold-plating(불필요한 추가 기능)이 관찰되지 않는다.

### 개선이 필요한 점

**[S-1] Phase 3의 56개 컴포넌트 전수 설치가 현재 범위에 비해 과도할 수 있다.**

Phase 4까지의 범위에서는 sidebar, breadcrumb, button, card 등 약 15-20개 컴포넌트만 실제로 사용된다. 56개 전수 설치는 각 패턴 쇼케이스 구현(Phase 7+)을 위한 것인데, Phase 7+은 범위 밖이다.

그러나 shadcn의 특성상 컴포넌트는 프로젝트에 직접 복사되는 파일이므로, 미리 전수 설치해도 빌드 크기에 영향이 없고 의존성 충돌도 없다. 따라서 전수 설치 자체는 문제가 되지 않으나, **의도를 명시적으로 기술**해야 한다: "Phase 7+ 쇼케이스 구현 시 컴포넌트 추가 설치 없이 바로 사용할 수 있도록 선제 설치한다."

**[S-2] Phase 1의 "선택" 단계(1-3 와이어프레임)가 실행자를 혼란시킬 수 있다.**

"(선택)"이라고 표기된 단계는 실행 여부가 불명확하다. 스킵해도 되는가, 아니면 가능하면 해야 하는가? "선택"을 "권장" 또는 "Phase 7+ 이전에 작성"으로 명확히 하거나, Phase 1에서 완전히 제거하고 별도 Phase로 분리한다.

---

## 환경 검증 결과

Inspector가 직접 환경을 확인한 결과:

| 항목 | 계획의 기술 | 실제 확인 결과 | 판정 |
|------|------------|---------------|------|
| Node.js | v22.19.0 | v22.19.0 | 일치 |
| pnpm | v9.11.0 | v9.11.0 | 일치 |
| Next.js (npm latest) | 16.1.6 | 16.1.6 | 일치 |
| shadcn CLI | 3.8.5 | 3.8.5 | 일치 |
| Tailwind CSS | 4.1.18 | 4.1.18 | 일치 |
| 프로젝트 디렉토리 | 비어있음 | `docs/plan/` 존재 | **수정 필요** |
| next-intl + Next.js 16 호환 | R2: 비호환 가능성 | peerDep: `^16.0.0` **호환 확인** | **위험 해소** |
| Radix + React 19 호환 | R6: 호환성 이슈 가능 | peerDep: `^19.0` **호환 확인** | **위험 해소** |
| next-themes + React 19 | 미언급 | peerDep: `^19` **호환 확인** | 호환 |
| `shadcn init --template` | `next-monorepo` 미언급 | **next-monorepo 옵션 존재** | **누락 발견** |

### 위험 요소 재평가

| ID | 원래 평가 | Inspector 재평가 | 근거 |
|----|----------|-----------------|------|
| R1 | Phase 3 차단 | **낮음 (Low)** | `shadcn init --template next-monorepo` 옵션 발견. 이 옵션으로 해소 가능성 높음. 사전 spike 필요. |
| R2 | Phase 6 차단 | **해소 (Resolved)** | `next-intl@4.8.3`의 peerDependencies에 `next: ^16.0.0`이 명시적으로 포함되어 있음. 호환 확인 완료. |
| R3 | Phase 4, 6 | **중간 (Medium)** -- 변동 없음 | RTL + sidebar 조합은 실제 렌더링 테스트가 필요. shadcn `--rtl` 옵션 존재. |
| R4 | 성능 저하 | **중간 (Medium)** -- 변동 없음 | `next/font`의 서브셋 전략으로 대응 가능하나, 7개 언어 조합 시 초기 로딩 측정 필요. |
| R5 | 테마 깨짐 | **낮음 (Low)** | 쇼케이스 프로젝트이므로 최신 브라우저만 대상으로 해도 무방. 대상 브라우저를 명시적으로 선언하면 해소. |
| R6 | 런타임 에러 | **해소 (Resolved)** | `@radix-ui/react-dialog@1.1.15`, `@radix-ui/react-popover` 모두 `react: ^19.0` 지원 확인. |

---

## 필수 수정 사항 (우선순위 순)

### P0 - 차단 사항 (계획 실행 전 반드시 수정)

1. **[CO-1] `shadcn init --template next-monorepo` 옵션을 평가하고 Phase 2-3 전략을 재설계한다.**
   - 이 옵션이 생성하는 구조를 실험(spike)한다.
   - 결과에 따라 Phase 2의 수동 모노레포 설정이 불필요해질 수 있다.
   - Phase 3의 `shadcn create` + `shadcn init` 이중 실행 전략도 단순화될 수 있다.

2. **[O-1] Phase 5와 Phase 6의 의존성을 직렬화하거나, [O-2]를 채택하여 Phase 4에서 `[locale]` 구조를 도입한다.**
   - 추천: Phase 4에서 `[locale]` 도입 + Phase 5, 6 직렬화 (Phase 6 -> Phase 5 순서)

### P1 - 중요 수정 (계획의 실행 성공률에 직접 영향)

3. **[CO-3] `apps/docs/tsconfig.json`에 `@cupia/ui` path alias 설정 단계를 Phase 3에 추가한다.**
4. **[CO-4] `apps/docs/next.config.ts`에 `transpilePackages: ["@cupia/ui"]` 설정 단계를 Phase 3에 추가한다.**
5. **[CO-7] `apps/docs/src/app/globals.css`에 `@source "../../packages/ui/src/**/*.tsx"` Tailwind 스캔 설정을 Phase 3에 추가한다.**
6. **[CO-6] Phase 5에 `next-themes` 설치 명령을 추가한다.**
7. **[CO-2] Phase 2의 `mkdir -p apps/docs`와 Phase 3의 `shadcn create docs`의 디렉토리 충돌을 해소한다.**

### P2 - 권장 수정 (품질 향상)

8. **[C-2] Phase 3의 모노레포 통합 전략을 하나로 확정한다.** (P0-1의 spike 결과에 따라 결정)
9. **[V-1] Phase 3에 자동화된 검증 명령을 추가한다.** (`tsc --noEmit`, `pnpm build`, 파일 수 카운트)
10. **[V-5] Phase 3에 실패 시 진단 체크리스트를 추가한다.**
11. **[CO-8] 각 Phase 완료 시점에 Git 커밋을 하라는 지침과 롤백 방법을 추가한다.**
12. **[C-1] Phase 1의 Pattern 1에 대해 완성된 예시를 1건 제공한다.**
13. **[O-3] Phase 3-5의 "이후 Phase에서 필요 시" 주석을 "선제 설치" 의도로 수정한다.**
14. **[S-2] Phase 1-3의 "(선택)" 표기를 "권장" 또는 "범위 밖"으로 명확히 한다.**
15. **[C-4] Phase 5-2의 국가 목록 확정 시점을 계획에 명시한다.**

### P3 - 선택 수정 (참고)

16. **[V-2] E2E 테스트 프레임워크(Playwright) 설정을 별도 Phase로 고려한다.** (범위 확장이므로 현 시점에서는 참고만)
17. **[CO-9] ESLint 설정 전략을 Phase 2 또는 Phase 3에 포함한다.**
18. **위험 요소 R2, R6을 해소 상태로 업데이트한다.** (Inspector 환경 검증에서 호환성 확인 완료)

---

## 결론

본 실행 계획은 전체 구조와 범위 설정이 우수하며, 주요 위험 요소에 대한 인식도 적절하다. 특히 모든 파일 경로의 절대 경로 명시, 예상 산출물 트리 제공, 위험 대응 전략 병기는 높이 평가한다.

그러나 다음 세 가지 핵심 문제로 인해 현 상태로는 실행을 승인할 수 없다:

1. `shadcn init --template next-monorepo` 옵션의 존재가 Phase 2-3의 전체 전략을 바꿀 수 있으며, 이를 평가하지 않고 진행하면 불필요한 수동 작업과 위험을 감수하게 된다.

2. Phase 5와 Phase 6의 병렬 실행이 layout.tsx 수정 충돌과 라우트 구조 변경 충돌로 인해 실제로는 불가능하다.

3. tsconfig paths, transpilePackages, Tailwind source 스캔 등 모노레포 워크스페이스 간 연결에 필수적인 설정 단계가 누락되어 있어, Phase 3 완료 후 빌드가 실패할 가능성이 높다.

P0 수정 사항 2건과 P1 수정 사항 5건을 반영한 v2 계획을 작성한 후 재검증을 요청해 주십시오.

---

*이 검증 보고서는 Inspector(QA Lead)가 작성하였으며, Conductor(테크니컬 PM)에게 전달됩니다.*
*위험 요소 재평가는 2026-02-16 시점의 npm registry 실제 데이터에 기반합니다.*
