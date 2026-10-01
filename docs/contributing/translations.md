---
id: translations
title: Translation Contribution Guide
slug: /contributing/translations
description: "Help review and expand the Godot Launcher translations, including how to report fixes, submit pull requests, and request new locales."
tags:
  - contributing
  - localisation
  - community
  - translations
---

# Translation Contribution Guide

Godot Launcher supports automatic language detection, a manual language picker, and a growing set of bundled locales. Every locale benefits from human review, and future language additions rely on contributors like you. Use this page when you want to polish an existing language, submit a new one, or report an issue.

---

## Supported Languages Today

The launcher currently offers:

- System (auto-detect)
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

---

## Quick Feedback (No Files Needed)

If you spot a typo or phrasing that feels off:

1. Grab a screenshot or copy the wording and note the language.
2. Share it in the [community Discord](../support/community.md) localisation channel **or** open a [GitHub localisation issue](https://github.com/godotlauncher/launcher/issues/new/choose).
3. Add the screen where it appears (for example, "Settings > Updates") and a suggested correction if you have one.

Community members can often patch small copy fixes quickly when they have that context.

---

## Quick Start for New or Updated Translations

### 1. Create the Locale Folder

Inside the launcher repository (`godotlauncher/launcher`), create a folder under `locales/` that matches your language code. Use [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and agree regional variants with the maintainers when adding a new locale (for example `pt-BR`, `zh-CN`, `zh-TW`).

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

Duplicate every JSON file from `locales/en/` into your new folder. The namespace files are:

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
// ✅ Correct
{
  "title": "Proyectos",
  "description": "Gestiona tus proyectos de Godot"
}
```

Incorrect: the translated keys below would prevent the launcher from finding these strings.

```json
// ❌ Incorrect - keys must stay in English
{
  "titulo": "Proyectos",
  "descripcion": "Gestiona tus proyectos de Godot"
}
```

Focus on the tone of the launcher: friendly, direct, and aligned with Godot terminology.

### 4. Register a New Locale

New locales require registration before they can be selected and tested:

1. Add the locale code to `SUPPORTED_LOCALES` in `main/src/i18n/config.ts`.
2. Add the locale code and its native language name to `LANGUAGE_OPTIONS` in `renderer/src/components/settings/language-select.component.tsx`.
3. Add the matching `javascript-time-ago` locale import and a lowercase locale-code entry in `RELATIVE_TIME_LOCALES` in `renderer/src/i18n/relative-time.util.ts` so relative dates use the selected language.

If you need help with registration, mention it in your pull request or issue. Registration must be completed before a new locale can be included in the launcher.

---

## Helpful Translation Tips

- **Variables**: Leave items like `{{version}}` or `{projectName}` exactly as-is.
- **Formatting**: Preserve new lines, Markdown, and HTML tags.
- **Buttons & Menus**: Keep labels short so they fit in the UI.
- **Consistency**: Re-use the same wording for recurring terms (Project, Install, Release, etc.).
- **Special Characters**: Confirm accented characters render correctly in your language.

---

## Testing Your Work

Once the files are translated, switch the launcher to your language and do a quick tour:

- Check the loading screen, navigation, Projects, Installs, Settings, and Help.
- Review the Create Project and Install Editor modals.
- Open the tray menu and system dialogs.
- Step through the Welcome wizard if you touched those strings.

---

## Submitting Your Contribution

- **Pull Request (recommended):**
  1. Fork the repository and create a branch (for example `add-spanish-translation`).
  2. Add or update the JSON files and language registration.
  3. Test in development (`npm run dev`) and switch to your locale.
  4. Commit with a meaningful message like `feat(i18n): add Spanish translation`.
  5. Open a PR describing what changed and how you verified it.

- **Issue Attachment:**
  - If you cannot run the project locally, open an issue titled "Translation: Language Name," attach the translated JSON files matching every file in `locales/en/`, and share any testing notes. A maintainer can help complete registration.

Where possible, keep one language per PR so reviewers can focus on the context.

---

## Ready-to-Submit Checklist

Before you press "Create pull request," make sure:

- [ ] Every JSON file in `locales/en/` has a matching file in your locale folder, and each contains valid JSON.
- [ ] Keys remain in English and interpolation variables are untouched.
- [ ] Terminology is consistent across the files.
- [ ] You tested the main screens or noted anything you could not verify.
- [ ] New locales are registered in the supported locale list, language selector, and relative-time mapping, or you have identified the remaining registration work for a maintainer.

---

## Need Help?

- Visit the localisation thread in the [community Discord](../support/community.md) to coordinate with other translators.
- Review the high-level workflow in the [main contributing guide](../contributing.md).
- Ask maintainers in your PR or issue if you are unsure where a string lives or how to run a specific check.
