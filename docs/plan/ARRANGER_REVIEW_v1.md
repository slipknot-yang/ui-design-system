# Arranger Review - 실행 계획 v1 분석 보고서

> **대상 문서**: `EXECUTION_PLAN_v1.md`
> **분석일**: 2026-02-16
> **분석자**: Arranger (Technical Advisor)
> **권고**: **REVISE** (수정 후 진행)

---

## 1. 숨겨진 의도 (Hidden Intentions)

### 1-1. [WARNING] 쇼케이스의 최종 소비자가 불명확

계획은 "쇼케이스 사이트 구축"이라고 명시하지만, **누가 이 쇼케이스를 보는가**에 대한 정의가 없다.

- **가능성 A**: CUPIA 내부 개발팀이 참조하는 컴포넌트 라이브러리 문서 (Storybook 대체)
- **가능성 B**: 각국 관세청 고객에게 보여주는 영업/데모 사이트
- **가능성 C**: 실제 제품에 화이트라벨링을 적용하기 전 PoC (Proof of Concept)

소비자가 누구냐에 따라 다음이 달라진다:
- 코드 품질 수준 (프로덕션 vs 프로토타입)
- 데모 데이터의 사실성 수준
- 접근성(a11y) 준수 범위
- 배포 인프라 필요 여부

### 1-2. [INFO] "Phase 7+"의 존재는 사실상 핵심 목표

의존성 맵에서 "Phase 7+ (각 패턴 쇼케이스 구현, 본 계획 범위 밖)"이라고 했지만, 사용자가 원하는 것은 **7개 패턴의 실동작하는 쇼케이스**일 가능성이 높다. Phase 1-6은 골격(scaffolding)이며, 진짜 가치는 Phase 7+에서 나온다. 현재 계획은 골격만 다루므로, 사용자가 "완성된 쇼케이스"를 기대한다면 기대치 갭이 발생할 수 있다.

### 1-3. [INFO] 모노레포 구조의 실제 동기

`packages/ui`를 분리하는 모노레포 구조를 채택했지만, 현재 요구사항은 단일 쇼케이스 앱이다. 모노레포가 필요한 이유는 아마도 **향후 실제 CUPIA 제품에서 `@cupia/ui`를 npm 패키지로 가져다 쓰려는 의도**일 것이다. 이 가정이 맞다면 Phase 2-3의 설계가 달라져야 한다 (publish 준비, 번들링 설정 등). 그러나 현 계획에는 번들링/빌드 전략이 전혀 없다.

---

## 2. 모호성 (Ambiguity Detection)

### 2-1. [CRITICAL] Phase 3의 모노레포 전략이 shadcn 공식 방식과 충돌

**발견**: shadcn CLI 3.8.5는 `shadcn init -t next-monorepo` 템플릿을 **공식 지원**한다. 이 템플릿은 다음을 자동으로 생성한다:

```
apps/web/          # Next.js 앱 (components.json 포함)
packages/ui/       # 공유 UI 패키지 (components.json 포함)
packages/eslint-config/
packages/typescript-config/
```

그러나 현재 계획은 이 공식 템플릿을 사용하지 않고, `shadcn create docs`로 단독 앱을 생성한 뒤 수동으로 모노레포를 구성하려 한다. 이는 다음 문제를 야기한다:

| 항목 | 계획의 접근 | 공식 접근 |
|------|------------|----------|
| 패키지 스코프 | `@cupia/ui` | `@workspace/ui` |
| CLI 템플릿 | `shadcn create` + 수동 조정 | `shadcn init -t next-monorepo` |
| components.json | 수동 alias 재설정 | 자동 설정 |
| 빌드 시스템 | 없음 | Turborepo 기본 포함 |
| 앱 이름 | `docs` | `web` |

**권고**: `shadcn init -t next-monorepo`를 기본으로 사용하되, 앱 이름과 패키지 스코프만 커스터마이즈하는 것이 위험을 크게 줄인다. 단, 패키지 스코프를 `@workspace`에서 `@cupia`로 변경할 때 CLI 호환성을 테스트해야 한다.

### 2-2. [CRITICAL] components.json의 style 필드 오류

계획에서 `"style": "default"`로 명시했지만, shadcn 3.x에서 **`default` 스타일은 deprecated**되었다. 현재 유일한 공식 스타일은 `"new-york"`이다. CLI 3.8.5에서 `default`를 지정하면 경고 또는 에러가 발생할 수 있다.

### 2-3. [WARNING] `@cupia/ui` vs `@workspace/ui` alias 네이밍 충돌

shadcn의 모노레포 공식 문서는 `@workspace/ui`를 표준으로 사용한다. 계획은 `@cupia/ui`를 사용하는데:

- `shadcn add` CLI가 내부적으로 `@workspace` prefix를 기대할 수 있다
- components.json의 alias 해석 시 `@cupia/ui`가 pnpm workspace 프로토콜로 올바르게 resolve되는지 불확실하다
- `@workspace`는 pnpm의 workspace 프로토콜과 자연스럽게 연동되는 반면, `@cupia`는 추가 설정이 필요하다

**권고**: 두 가지 선택지:
1. 공식 `@workspace/ui`를 그대로 사용 (안전, CLI 호환성 보장)
2. `@cupia/ui`를 사용하되 tsconfig.json paths + package.json exports 양쪽을 정밀하게 설정 (위험하지만 브랜딩에 유리)

### 2-4. [WARNING] 56개 컴포넌트의 카운트 불일치

계획서에서 "56개 UI 컴포넌트"라고 했는데, shadcn 레지스트리 조회 결과 실제로 56개의 `registry:ui` 타입 컴포넌트가 확인되었다. 그러나 계획의 2차 설치 명령어에 나열된 컴포넌트 목록에서 **`item` 컴포넌트가 누락**되어 있다. `item`은 shadcn 3.x에서 추가된 새 컴포넌트(ItemGroup, ItemContent 등)로, 리스트 렌더링에 유용하다.

**실제 설치 명령어에 나열된 컴포넌트 수**: 1차(16개) + 2차(36개) = 52개. 4개가 부족하다.
누락 후보: `item`, `label`(1차에 포함), 기타.

### 2-5. [WARNING] Phase 4-6 라우트 구조 재작업 문제

계획은 Phase 4에서 라우트를 만든 뒤, Phase 6에서 `[locale]` prefix를 추가하기 위해 모든 라우트를 이동한다고 명시한다. 이는 **불필요한 재작업**이다.

> "Phase 4에서부터 [locale]을 고려한 구조로 만드는 것이 이상적이나, Phase 4에서는 placeholder로 두고 Phase 6에서 이동하는 것도 가능하다."

이 모호한 표현은 AI 에이전트에게 "어느 쪽을 선택할지" 재량을 남기고 있다. 명시적으로 하나를 선택해야 한다.

**권고**: Phase 4에서부터 `[locale]` 구조로 시작하되, 실제 번역은 Phase 6에서 추가한다. 이렇게 하면 파일 이동이 불필요하다.

### 2-6. [WARNING] next-themes의 `data-theme` vs `data-country-theme` 미확정

Phase 5에서 `next-themes`(다크/라이트)와 국가 테마를 이중으로 관리한다고 했지만:

- `next-themes`는 기본적으로 `class` 또는 `data-theme` 속성을 사용
- 국가 테마도 `data-theme`를 사용하면 충돌
- 계획서는 "data-country-theme 별도 속성"을 제안하지만, 이것이 확정인지 대안인지 모호

**권고**: `next-themes`의 `attribute` 옵션을 `"class"`로 설정하고(다크/라이트 모드), 국가 테마는 `data-country-theme`으로 확정 분리한다.

---

## 3. AI 실패 지점 (AI Failure Points)

### 3-1. [CRITICAL] `shadcn create` 명령어의 인터랙티브 프롬프트

```bash
npx shadcn@3.8.5 create docs -t next --src-dir --rtl -c ./apps
```

`shadcn create`는 `-y` 플래그가 기본으로 `true`이지만, **프리셋 선택** 프롬프트가 여전히 나타날 수 있다. AI 에이전트는 인터랙티브 프롬프트를 처리할 수 없다. `--preset` 옵션으로 명시적으로 지정하거나, 프롬프트 없이 실행되는지 사전 검증이 필요하다.

추가로, `shadcn create`는 내부적으로 `create-next-app`을 호출할 수 있으며, 이 과정에서도 추가 프롬프트가 발생할 수 있다.

**권고**: 계획에서 `--preset` 값을 명시하거나, 대안으로 `shadcn init -t next-monorepo`를 사용하여 프로젝트를 초기화한다. `init` 명령어도 `-y` 플래그가 기본 `true`이므로 더 안전하다.

### 3-2. [CRITICAL] packages/ui에 대한 `shadcn init` 실행 실패 가능성

계획 3-3단계:
```bash
npx shadcn@3.8.5 init -c ./packages/ui --src-dir --css-variables
```

`packages/ui`는 Next.js 앱이 아니므로, `shadcn init`이 다음을 기대할 때 실패할 수 있다:
- `next.config.ts` 또는 `next.config.js` 파일
- `tsconfig.json`의 `compilerOptions.jsx` 설정
- `package.json`에 `next` 의존성

계획서 자체도 "위험 요소"로 이를 인지하고 있지만, **구체적인 대안이 없다**.

**권고**: `shadcn init -t next-monorepo`를 루트에서 실행하면 `packages/ui`에 대한 설정이 자동으로 생성된다. 수동 init은 피한다.

### 3-3. [CRITICAL] components.json alias에서 pnpm workspace 해석 불가

계획의 components.json:
```json
"aliases": {
    "components": "@cupia/ui/components",
    "utils": "@cupia/ui/lib/utils",
    "ui": "@cupia/ui/components/ui"
}
```

shadcn CLI는 이 alias를 기반으로 파일을 설치할 경로를 결정한다. `@cupia/ui`가 pnpm workspace로 등록되어 있어도, shadcn CLI가 이를 **파일시스템 경로로 resolve하지 못할** 가능성이 높다. 공식 문서는 `@workspace/ui`만을 테스트된 패턴으로 제시한다.

실패 시나리오:
1. `shadcn add button`을 실행
2. CLI가 `@cupia/ui/components/ui/button.tsx` 경로를 resolve하려 함
3. `@cupia/ui`가 tsconfig paths에 없거나, pnpm workspace 심링크를 따라가지 못함
4. 파일이 엉뚱한 곳에 생성되거나 에러 발생

**권고**: 첫 번째 컴포넌트(`button`)를 설치한 뒤 반드시 파일 위치를 확인하는 검증 단계를 삽입한다.

### 3-4. [WARNING] 56개 컴포넌트 일괄 설치 시 타임아웃/실패

```bash
npx shadcn@3.8.5 add button input table pagination select badge separator \
  sidebar navigation-menu breadcrumb dropdown-menu avatar sonner tooltip \
  card label form -c ./apps/docs -y
```

16개 + 36개 컴포넌트를 두 번에 나눠 설치하는데:
- 각 컴포넌트는 npm 의존성 설치를 트리거한다 (radix-ui, react-hook-form 등)
- 대량 설치 시 pnpm lockfile 충돌, 네트워크 타임아웃, 디스크 I/O 병목 발생 가능
- AI 에이전트의 명령어 실행 타임아웃(2분)에 걸릴 수 있다

**권고**: 5-8개씩 나눠서 설치하고, 각 배치 후 `pnpm install`이 정상인지 확인한다.

### 3-5. [WARNING] OKLCh 색상 값의 환각(hallucination) 위험

계획은 10개국의 CSS 변수를 OKLCh 포맷으로 작성하라고 하지만:
- 각국 관세청의 공식 브랜드 색상 데이터가 제공되지 않았다
- AI가 국기 색상이나 일반적인 국가 이미지에서 색상을 추측할 가능성이 높다
- OKLCh 변환이 정확하지 않을 수 있다

**권고**: 각국 테마의 primary/accent 색상을 HEX 또는 HSL로 먼저 확정하고, OKLCh 변환은 도구(예: oklch.com)를 사용한다.

### 3-6. [WARNING] 7개 언어 번역 파일의 품질

7개 언어(ko, en, es, fr, ar, ja, zh)의 번역 파일을 AI가 생성해야 하는데:
- 관세 도메인 전문 용어(HS 코드, 통관, 결재 등)의 정확한 번역이 필요
- 아랍어(RTL)의 경우 UI 용어 번역이 특히 어려움
- AI가 생성한 번역은 네이티브 검수가 필수

**권고**: 영어(en)와 한국어(ko)만 정확히 작성하고, 나머지 5개 언어는 placeholder로 두거나 번역 API를 활용한다.

### 3-7. [WARNING] next-intl 4.8.3의 라우팅 설정 패턴

계획의 코드:
```typescript
import { defineRouting } from "next-intl/routing";
```

next-intl 4.x의 API가 3.x에서 변경되었을 수 있다. next-intl 4.8.3의 peerDependencies에서 Next.js 16 호환이 확인되었지만 (`^16.0.0`), 구체적인 API 패턴은 공식 문서를 참조해야 한다. AI가 이전 버전의 API를 사용할 위험이 있다.

### 3-8. [INFO] Phase 4의 사이드바 블록 참조

> "sidebar-header, sidebar-footer, sidebar-group, sidebar-group-collapsible, sidebar-menu, sidebar-menu-sub, sidebar-menu-collapsible 등 10개 블록 활용"

shadcn의 sidebar 블록(block)은 registry:block 타입으로 별도 설치가 필요할 수 있다. `shadcn add sidebar`는 기본 컴포넌트만 설치하며, 블록은 `shadcn add @shadcn/sidebar-header` 등으로 추가 설치해야 할 수 있다. 이 부분이 계획에서 명확하지 않다.

---

## 4. 누락된 고려사항

### 4-1. [CRITICAL] Turborepo 또는 빌드 오케스트레이션 부재

shadcn의 공식 모노레포 템플릿은 Turborepo를 포함한다. 현재 계획은 Turborepo를 사용하지 않아:
- `packages/ui`와 `apps/docs` 간 빌드 순서 관리가 없다
- 캐싱, 병렬 빌드 등의 이점을 못 누린다
- `pnpm -r` 명령어로 대체 가능하나, 비효율적이다

**권고**: `shadcn init -t next-monorepo` 사용 시 Turborepo가 자동 포함된다.

### 4-2. [WARNING] packages/ui의 빌드/번들링 전략 부재

`packages/ui/package.json`의 exports 필드:
```json
"exports": {
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts"
}
```

이는 **소스 코드 직접 참조** 방식으로, 다음 제약이 있다:
- 소비자(apps/docs)가 반드시 TypeScript + Tailwind를 사용해야 한다
- Next.js의 `transpilePackages` 또는 Tailwind의 `content` 경로 설정이 필요하다
- 외부 프로젝트에서 npm으로 가져다 쓸 수 없다

이것이 의도적인지, 빌드 파이프라인이 누락된 것인지 불명확하다.

### 4-3. [WARNING] TypeScript 설정 공유 부재

모노레포에서 `packages/ui`와 `apps/docs`가 tsconfig.json을 각각 독립적으로 가질 텐데, 공유 TypeScript 설정(`packages/typescript-config`)이 계획에 없다. shadcn의 공식 모노레포 템플릿은 이를 포함한다.

### 4-4. [WARNING] ESLint/Prettier 설정 부재

코드 품질 도구 설정이 전혀 없다. 56개 컴포넌트를 다루는 프로젝트에서 린팅 규칙 없이 진행하면 일관성 문제가 발생한다.

### 4-5. [INFO] 테스트 전략 부재

단위 테스트, 통합 테스트, 시각적 회귀 테스트에 대한 언급이 없다. 쇼케이스 성격상 E2E 테스트까지는 불필요하더라도, 테마 전환과 i18n 전환의 정상 동작을 검증하는 최소한의 테스트가 필요하다.

### 4-6. [INFO] 접근성(a11y) 고려 부재

7개 언어와 RTL을 지원하면서 접근성 언급이 없다. shadcn/ui가 Radix 기반으로 기본 a11y를 제공하지만, 커스텀 레이아웃(사이드바, 헤더)과 패턴 쇼케이스 페이지에서는 추가 고려가 필요하다.

### 4-7. [INFO] 배포 전략 부재

쇼케이스 사이트의 배포 방법(Vercel, self-hosted 등)이 언급되지 않았다. i18n의 `[locale]` prefix 전략은 배포 환경에 따라 다를 수 있다.

### 4-8. [INFO] 폰트 전략의 구체성 부족

7개 언어를 지원하려면 다음 폰트가 필요하다:
- 한국어/일본어/중국어: Noto Sans CJK 또는 각 언어별 서브셋
- 아랍어: Noto Sans Arabic 또는 유사 폰트
- 라틴 문자(en/es/fr): Inter 또는 기본 폰트

Next.js의 `next/font`를 사용한 서브셋 로딩 전략이 필요하지만, 구체적인 폰트 목록과 로딩 방식이 정의되지 않았다.

---

## 5. 기술적 검증 결과

조사를 통해 확인된 사실:

| 항목 | 결과 | 계획과의 차이 |
|------|------|--------------|
| Node.js v22.19.0 | 확인됨 | 일치 |
| pnpm v9.11.0 | 확인됨 | 일치 |
| shadcn CLI 3.8.5 | 확인됨 | 일치 |
| Next.js 16.1.6 (npm latest) | 확인됨 | 일치 |
| Tailwind CSS 4.1.18 (npm latest) | 확인됨 | 일치 |
| next-intl 4.8.3 | Next.js 16 호환 확인 (`^16.0.0`) | **위험 해소** |
| shadcn `init -t next-monorepo` | **지원 확인** | **계획 미반영** (중요) |
| shadcn `default` style | **deprecated** | **계획 오류** |
| `@workspace/ui` 공식 패턴 | 확인됨 | 계획은 `@cupia/ui` 사용 |
| `item` 컴포넌트 | 레지스트리에 존재 | 계획에서 누락 |
| 56개 UI 컴포넌트 | 레지스트리에서 확인 | 설치 명령어에 52개만 나열 |

---

## 6. 권고 (Recommendation)

### 최종 판정: **REVISE** (수정 후 진행)

### 필수 수정 사항 (MUST)

1. **Phase 2-3 통합**: `shadcn init -t next-monorepo`로 모노레포를 한 번에 초기화하는 방식으로 전환. 수동 모노레포 설정(Phase 2) + 수동 shadcn 설정(Phase 3)을 하나로 합침.

2. **components.json style 수정**: `"default"` -> `"new-york"` (또는 `shadcn init`이 자동 선택하는 값을 수용)

3. **패키지 스코프 결정**: `@workspace/ui` (안전) vs `@cupia/ui` (브랜딩) 중 하나를 확정. `@cupia/ui`를 선택한다면, CLI 호환성 테스트 단계를 Phase 3에 명시적으로 추가.

4. **Phase 4의 라우트를 처음부터 `[locale]` 구조로 설계**: Phase 6에서의 대규모 파일 이동을 방지.

5. **인터랙티브 프롬프트 방지**: 모든 CLI 명령어에 `--preset`, `-y` 등 비인터랙티브 옵션을 명시.

### 강력 권고 사항 (SHOULD)

6. **컴포넌트 설치를 5-8개 배치로 분할**: 타임아웃 및 실패 방지.

7. **각 Phase 종료 시 검증 명령어 명시**: 예) `pnpm dev` 실행 후 HTTP 200 확인, 특정 파일 존재 확인 등.

8. **`next-themes` attribute 전략 확정**: `class`(다크모드) + `data-country-theme`(국가 테마) 이중 속성 사용을 명확히 기술.

9. **Turborepo 포함**: `shadcn init -t next-monorepo` 사용 시 자동 포함됨.

10. **누락 컴포넌트 보완**: `item` 컴포넌트를 설치 목록에 추가하고, 1차+2차 설치 목록이 정확히 56개가 되는지 재확인.

### 참고 사항 (NICE TO HAVE)

11. 번역 파일은 ko/en만 정확히 작성하고, 나머지는 stub으로 둔다.
12. 각국 테마 색상은 HEX로 먼저 정의하고 OKLCh 변환은 별도 단계로.
13. 폰트 전략을 Phase 4에 추가 (next/font + Unicode range subset).
14. 최소한의 Playwright 또는 Cypress 테스트를 Phase 7+에서 고려.

---

## 7. 수정된 Phase 구조 제안

```
Phase 1: 패턴 카탈로그 문서 (변경 없음)
    |
    v
Phase 2: shadcn init -t next-monorepo + 커스터마이즈
    (기존 Phase 2 + Phase 3 통합)
    - shadcn init으로 모노레포 골격 자동 생성
    - 패키지 스코프 변경 (@workspace -> @cupia, 선택적)
    - 56개 컴포넌트 배치 설치 (5-8개씩)
    - 빌드 테스트 검증
    |
    v
Phase 3: 기본 레이아웃 + [locale] 라우트 구조
    (기존 Phase 4, [locale] 구조 포함)
    - 사이드바, 헤더, 콘텐츠 영역
    - [locale] prefix 적용된 라우트 (번역은 placeholder)
    |
    v
Phase 4: 테마 시스템        Phase 5: i18n 시스템
    (기존 Phase 5)            (기존 Phase 6)
    - 병렬 진행 가능           - 병렬 진행 가능
```

이렇게 6 Phase에서 5 Phase로 줄이면, 실행 복잡도가 낮아지고 Phase 간 재작업이 제거된다.

---

## 참조

- [shadcn/ui Monorepo 공식 문서](https://ui.shadcn.com/docs/monorepo)
- [shadcn/ui components.json 공식 문서](https://ui.shadcn.com/docs/components-json)
- [shadcn CLI 3.0 Changelog](https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp)
- [shadcn/ui Monorepo Templates - DeepWiki](https://deepwiki.com/shadcn-ui/ui/2.4-monorepo-templates)
- [shadcn CLI 명령어 문서](https://ui.shadcn.com/docs/cli)

---

*이 문서는 Arranger(Technical Advisor)가 작성하였으며, Conductor에게 계획 수정을 권고합니다.*
*Inspector는 이 분석 결과를 참고하여 검증 계획을 수립해 주십시오.*
