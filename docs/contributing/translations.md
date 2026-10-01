---
id: translations
title: Translate Godot Launcher
slug: /contributing/translations
description: "Review Godot Launcher translations, report wording problems, or add a language with the required files and locale registration."
tags:
  - contributing
  - localisation
  - community
  - translations
---

# Translate Godot Launcher {#translation-contribution-guide}

Translate Godot Launcher by editing the JSON files in the [launcher repository](https://github.com/godotlauncher/launcher). You can also report wording problems without editing files.

## Supported Languages Today

Choose a language in **Settings > Appearance > Language**. The available options are:

- System (Auto-detect)
- English (`en`)
- Italiano (`it`)
- Português (`pt`)
- Português (Brasil) (`pt-BR`)
- 简体中文 (`zh-CN`)
- 繁體中文 (`zh-TW`)
- Deutsch (`de`)
- Français (`fr`)
- Español (`es`)
- Polski (`pl`)
- Русский (`ru`)
- 日本語 (`ja`)
- Türkçe (`tr`)
- Malti (`mt`)

## Report a Translation Problem {#quick-feedback-no-files-needed}

Open a [GitHub localisation issue](https://github.com/godotlauncher/launcher/issues/new/choose) or share feedback in the [community Discord](../support/community.md). Include the language, the screen or control, the current wording, and your suggested correction. A screenshot can help locate the text.

## Add or Update a Translation {#quick-start-for-new-or-updated-translations}

### 1. Create the Locale Folder

For an existing language, edit its folder under `locales/`. For a new language, create a folder matching its [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Agree regional variants with the maintainers, such as `pt-BR`, `zh-CN`, or `zh-TW`.

```bash
locales/es/       # Spanish
locales/fr/       # French
locales/de/       # German
locales/pt-BR/    # Brazilian Portuguese
locales/ja/       # Japanese
locales/zh-CN/    # Simplified Chinese
locales/zh-TW/    # Traditional Chinese
```

### 2. Copy the English Templates

For a new language, copy every JSON file from `locales/en/` into the locale folder. For an existing language, check for missing files and keys against the English files. All 11 namespace files are required:

- `dialogs.json`
- `menus.json`
- `common.json`
- `projects.json`
- `installs.json`
- `exportTemplates.json`
- `settings.json`
- `help.json`
- `createProject.json`
- `installEditor.json`
- `welcome.json`

### 3. Translate the Values Only

Keep the JSON keys as they are and translate the text on the right-hand side:

Correct: the keys stay unchanged.

```json
{
  "title": "Proyectos",
  "description": "Gestiona tus proyectos de Godot"
}
```

Incorrect: the translated keys below would prevent the launcher from finding these strings.

```json
{
  "titulo": "Proyectos",
  "descripcion": "Gestiona tus proyectos de Godot"
}
```

Use direct wording and consistent Godot terminology.

### 4. Register a New Locale

New locales require registration before they can be selected and tested:

1. Add the locale code to `SUPPORTED_LOCALES` in `main/src/i18n/config.ts`.
2. Add the locale code and its native language name to `LANGUAGE_OPTIONS` in `renderer/src/components/settings/language-select.component.tsx`.
3. Add the matching `javascript-time-ago` locale import and a lowercase locale-code entry in `RELATIVE_TIME_LOCALES` in `renderer/src/i18n/relative-time.util.ts` so relative dates use the selected language.

Registration is required before a new locale can be included in the launcher. If you cannot complete it, identify the remaining work in your pull request or issue.

## Preserve Variables and Formatting {#helpful-translation-tips}

- **Variables**: Leave items like `{{version}}` or `{{projectName}}` unchanged.
- **Formatting**: Preserve new lines, Markdown, and HTML tags.
- **Buttons and menus**: Keep labels short so they fit in the UI.
- **Consistency**: Use the same wording for recurring terms (Project, Install, Release, etc.).
- **Special characters**: Confirm accented characters render correctly in your language.

## Testing Your Work

Follow the [app development setup](https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md), then run `npm run dev` and select your language in **Settings > Appearance > Language**.

Check the areas affected by your translation:

- The loading screen, navigation, **Projects**, **Installs**, **Settings**, and **Help**.
- Project creation, editor installation, and export template controls.
- Application, context, and tray menus, plus system dialogs.
- The welcome wizard, if you changed its strings.

Look for untranslated keys, clipped labels, incorrect variables, and characters that do not display correctly.

<span id="ready-to-submit-checklist"></span>

## Submitting Your Contribution

Keep one language per pull request where possible. Check that every file contains valid JSON, keys and variables are unchanged, and terminology is consistent. Describe the changes and any areas you could not test. New locales must include all 11 files and the registration changes above.

If you cannot run the project locally, open a [GitHub issue](https://github.com/godotlauncher/launcher/issues/new/choose) titled "Translation: Language Name". Attach the translated JSON files and note any missing registration or testing so a maintainer can complete it.

## Need Help?

Ask in your issue or pull request if you cannot find a string or need help testing. See the [contribution guide](../contributing.md) for the project guidelines.
