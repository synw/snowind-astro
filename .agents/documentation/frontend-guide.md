# Frontend Guide for AI Agents

> Practical guide for creating, adding, and editing pages and components in the Snowind Astro project.

## Architecture Overview

Snowind Astro uses a hybrid frontend architecture:

| Layer | Technology | File Extension | Purpose |
|-------|------------|----------------|---------|
| Pages | Astro | `.astro` | Route-based page files |
| Layouts | Astro | `.astro` | Page wrappers (BaseLayout, RootLayout) |
| Navigation/Layout Components | Astro | `.astro` | Header, footer, nav links |
| Interactive UI Components | Vue | `.vue` | Language switcher, theme toggle, etc. |
| Styling | Tailwind CSS v4 + SCSS | `.scss` | Utility classes + theming |

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/pages/` | Page routes (static and i18n) |
| `src/components/` | Reusable UI components (Vue and Astro) |
| `src/vibe/` | Hero sections, style guides, marketing components |
| `src/layouts/` | Layout wrappers (BaseLayout, RootLayout, EmptyLayout) |
| `src/i18n/` | Translation files and utilities |
| `src/scss/` | SCSS theme partials |

---

## Creating a New Page

### Non-i18n Pages (Static Routes)

Use for pages that don't need localization (e.g., style guides, admin tools).

**Location**: `src/pages/<name>.astro`

**Pattern**:
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="My Page" extraMainCls="container mx-auto">
    <h1>Hello World</h1>
    <p>Page content here.</p>
</BaseLayout>
```

**Example**: `src/pages/styleguide.astro`

### i18n Pages (Locale-Prefixed Routes)

Use for all user-facing pages that need translations.

**Location**: `src/pages/[lang]/<name>.astro`

**Pattern**:
```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getStaticPathsForLang } from "../../paths";

export async function getStaticPaths() {
    return getStaticPathsForLang();
}
---

<BaseLayout title="My Page" extraMainCls="container mx-auto">
    <h1>Hello World</h1>
</BaseLayout>
```

**Key Requirements**:
1. Page must be in `src/pages/[lang]/` directory
2. Must export `getStaticPaths()` function
3. Use `getStaticPathsForLang()` from `../../paths` for locale generation
4. Relative imports go up two levels (`../../`) to reach shared files

**Example**: `src/pages/[lang]/page1.astro`

### Page Conventions

| Convention | Detail |
|------------|--------|
| Layout wrapper | Always use `<BaseLayout>` unless page needs no header/footer (use `EmptyLayout`) |
| Title prop | Pass meaningful title to BaseLayout: `title="Page Name"` |
| Centered content | Use `extraMainCls="container mx-auto"` for centered layout |
| No padding | Add `noPadding` prop to BaseLayout if full-width needed |

---

## Adding a Component to a Page

### Astro Components (.astro)

Use for static content, layout structures, and navigation elements.

**Locations**: `src/components/` or `src/vibe/`

**Import in page**:
```astro
---
import Hero from "../../vibe/Hero.astro";
import NavLinks from "../../components/NavLinks.astro";
---

<BaseLayout title="Home">
    <Hero />
    <NavLinks />
</BaseLayout>
```

**Key Points**:
- No special directive needed
- Server-rendered by Astro
- Can use frontmatter (`---`) for logic
- Access `Astro.props` for passed data

### Vue Components (.vue)

Use for interactive UI: toggles, dropdowns, dynamic forms.

**Location**: `src/components/`

**Import in page**:
```astro
---
import LangSwitcher from "../../components/LangSwitcher.vue";
import ColorMode from "../../components/ColorMode.vue";
---

<BaseLayout title="Home">
    <LangSwitcher urllang={lang} client:only />
    <ColorMode client:only />
</BaseLayout>
```

**Key Points**:
- **MUST include `client:only` directive** for hydration
- Pass props directly: `<Component prop1={value} prop2={value2} client:only />`
- Use Vue Composition API with `<script setup lang="ts">`
- Access nanostores from `../state.ts`

### Component Selection Guide

| Use Case | Component Type | Example |
|----------|----------------|---------|
| Static content, sections | Astro | Hero.astro, TheFooter.astro |
| Navigation, layout | Astro | TheHeader.astro, NavLinks.astro |
| Interactive toggles | Vue | ColorMode.vue, ThemeSwitcher.astro |
| Dynamic forms/modals | Vue | LangSwitcher.vue, EditAiComponent.vue |

---

## Editing a Component

### Direct File Editing

Edit the component file directly using standard text editing.

**Astro Component Structure**:
```astro
---
// Frontmatter: imports and logic
import { translations } from "../i18n/components/Hero.ts";
import { getLangFromUrl, useTranslations } from "../i18n/utils.ts";

const lang = getLangFromUrl(translations, Astro.currentLocale);
const t = useTranslations(translations, lang);
---

<!-- Template: HTML with Astro expressions -->
<div class="component">
    <h1>{t("title")}</h1>
</div>
```

**Vue Component Structure**:
```vue
<template>
    <div class="component">
        <!-- Vue template with directives -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { langStore } from '../state';

const props = defineProps<{ urllang: string }>();
const isModalOpen = ref(false);

function toggle() {
    isModalOpen.value = !isModalOpen.value;
}
</script>

<style scoped>
/* Optional scoped styles */
</style>
```

### State Management Integration

Use nanostores from `src/state.ts` for persistent client state:

```vue
<script setup lang="ts">
import { themeStore, langStore, isMobileStore } from '../state';

// Read store value
const currentTheme = themeStore;

// Update store
langStore.set('fr');
</script>
```

### i18n Integration for Components

For components with translatable text:

1. Create translation file in `src/i18n/components/<Name>.ts`:
```ts
export const translations: Record<string, any> = {
    "en": {
        "component.title": "My Title",
        "component.subtitle": "My Subtitle"
    },
    "fr": {
        "component.title": "Mon Titre",
        "component.subtitle": "Mon Sous-titre"
    }
};
```

2. Use in Astro component:
```astro
---
import { translations } from "../i18n/components/MyComponent.ts";
import { getLangFromUrl, useTranslations } from "../i18n/utils.ts";

const lang = getLangFromUrl(translations, Astro.currentLocale);
const t = useTranslations(translations, lang);
---

<h1>{t("component.title")}</h1>
```

---

## Code Snippets Reference

### Creating a Static Page
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="My Page" extraMainCls="container mx-auto">
    <h1>Hello World</h1>
</BaseLayout>
```

### Creating an i18n Page
```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getStaticPathsForLang } from "../../paths";

export async function getStaticPaths() {
    return getStaticPathsForLang();
}
---
<BaseLayout title="My Page" extraMainCls="container mx-auto">
    <h1>Hello World</h1>
</BaseLayout>
```

### Astro Component Template
```astro
---
import { someUtil } from "../path/to/util";

const { prop1, prop2 } = Astro.props;
---

<div class="component-class">
    <span>{prop1}</span>
</div>
```

### Vue Component Template
```vue
<template>
    <div class="component" @click="handleClick">
        <span>{{ message }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { themeStore } from '../state';

const props = defineProps<{ message: string }>();
const isExpanded = ref(false);

function handleClick() {
    isExpanded.value = !isExpanded.value;
}
</script>
```

### Adding i18n to Component
```astro
---
import { translations } from "../i18n/components/MyComponent.ts";
import { getLangFromUrl, useTranslations } from "../i18n/utils.ts";

const lang = getLangFromUrl(translations, Astro.currentLocale);
const t = useTranslations(translations, lang);
---

<div>
    <h1>{t("mycomponent.title")}</h1>
    <p>{t("mycomponent.description")}</p>
</div>
```

---

## Quick Reference

| Task | Location | Key Pattern |
|------|----------|-------------|
| Create static page | `src/pages/` | Import BaseLayout, no getStaticPaths |
| Create i18n page | `src/pages/[lang]/` | Add `getStaticPaths()` with `getStaticPathsForLang()` |
| Create Astro component | `src/components/` or `src/vibe/` | Frontmatter + HTML template |
| Create Vue component | `src/components/` | `<template>` + `<script setup>` |
| Add Astro component to page | Direct import | `<MyComponent />` (no directive) |
| Add Vue component to page | Direct import | `<MyComponent client:only />` (required) |
| Edit component | Edit file in place | Standard text editing |
| Add translations | `src/i18n/components/` | Translation object per language code |
| Access state | Import from `src/state.ts` | `themeStore`, `langStore`, `isMobileStore` |

---

## Related Documentation

| Resource | Path |
|----------|------|
| Project conventions | [AGENTS.md](../../AGENTS.md) |
| Decision tree | [decision-tree.md](./decision-tree.md) |
| Navigation map | [project-nav.md](./project-nav.md) |
| Technical summary | [codebase-summary.md](./codebase-summary.md) |
