# Translations

Use AI to translate and integrate multiple languages. First configure your languages in `src/conf.mjs`.

## Extract strings to translate from a component

This workflow extracts the text strings from a component and create an i18n
translations file. To translate a `src/aiwidgets/home/Hero.astro` component, cd in the site directory and:

```bash
lm astro-extract-translations "home/Hero" -v # verbose
```

This will extract the text strings and create a `src/i18n/components/home/Hero.astro` file. Next
step is to modify the component to use the translation strings.

## Integrate translation strings into a component

```bash
lm astro-integrate-translations "home/Hero" -v # verbose
```

This will modify the component to use the translations.

## Translate

### Translate one component

Translate english strings into multiple languages for a component:

```bash
lm astro-translate-component "home/Hero" Spanish es
```

Parameters:

- Component relative path without extension
- Destination language name
- Destination language code

This will translate the strings in `src/i18n/components/home/Hero.astro` from
english to spanish. To translate from another source language provide the language code:

```bash
lm astro-translate-component "home/Hero" Spanish es fr
```

This will translate from french to spanish.

### Translate all components

To translate all components that are in `src/i18n/components` at once:

```bash
lm astro-update-translations
```

To provide a source language code:

```bash
lm astro-update-translations de
```

By default if the translations already exist they are overrided. To preserve existing
translations use the `skip` argument:

```bash
lm astro-update-translations skip
```

This will not override the existing translations, and only translate the missing parts.
