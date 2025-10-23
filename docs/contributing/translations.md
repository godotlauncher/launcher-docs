---
id: translations
title: Translation Contribution Guide
slug: /contributing/translations
description: "Help review and expand the Godot Launcher translations shipped with version 1.5.0, including how to report fixes, submit pull requests, and request new locales."
tags:
  - contributing
  - localisation
  - community
  - translations
---

# Translation Contribution Guide

Godot Launcher 1.5.0 ships with an auto-detected language, a manual picker, and 14 bundled locales. Every phrase started as an automated translation, so human review and future language additions rely on contributors like you. Use this page when you want to polish an existing language, submit a new one, or report an issue.

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

:::note
Right-to-left languages are on the roadmap but not activated yet.
:::

---

## Quick Feedback (No Files Needed)

If you spot a typo or phrasing that feels off:

1. Grab a screenshot or copy the wording and note the language.
2. Share it in the [community Discord](/community) localisation channel **or** open a [GitHub localisation issue](https://github.com/godotlauncher/launcher/issues/new/choose).
3. Add the screen where it appears (for example, “Settings → Updates”) and a suggested correction if you have one.

Community members can often patch small copy fixes quickly when they have that context.

---

## Quick Start for New or Updated Translations

### 1. Create the Locale Folder

Inside the launcher repo (`godotlauncher/launcher`), create a folder under `src/locales/` that matches your language code. Use [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and only add regional variants when the writing system demands it (for example `pt-BR`, `zh-CN`, `zh-TW`).

```bash
src/locales/es/       # Spanish
src/locales/fr/       # French
src/locales/de/       # German
src/locales/pt-BR/    # Brazilian Portuguese
src/locales/ja/       # Japanese
src/locales/zh-CN/    # Simplified Chinese
src/locales/zh-TW/    # Traditional Chinese
```

### 2. Copy the English Templates

Duplicate every JSON file from `src/locales/en/` into your new folder. There are 11 namespaces to translate:

- `translation.json`
- `dialogs.json`
- `menus.json`
- `common.json`
- `projects.json`
- `installs.json`
- `settings.json`
- `help.json`
- `createProject.json`
- `installEditor.json`
- `welcome.json`

### 3. Translate the Values Only

Keep the JSON keys as they are and translate the text on the right-hand side:

```json
// ✅ Correct
{
  "title": "Proyectos",
  "description": "Gestiona tus proyectos de Godot"
}

// ❌ Incorrect — keys must stay in English
{
  "titulo": "Proyectos",
  "descripcion": "Gestiona tus proyectos de Godot"
}
```

Focus on the tone of the launcher: friendly, direct, and aligned with Godot terminology.

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

- Check the loading screen, navigation, and all four main tabs.
- Review the Create Project and Install Editor modals.
- Open the tray menu and system dialogs.
- Step through the Welcome wizard if you touched those strings.

:::tip
Adding a brand-new language also means updating the language registry in `src/electron/i18n/index.ts`, `src/ui/i18n/index.ts`, and `src/ui/components/settings/LanguageSelector.tsx`. If you are unsure how to do that, mention it in your pull request and a maintainer can assist.
:::

---

## Submitting Your Contribution

- **Pull Request (recommended):**
  1. Fork the repo and create a branch (for example `add-spanish-translation`).
  2. Add or update the JSON files and language registration.
  3. Test in development (`npm run dev`) and switch to your locale.
  4. Commit with a meaningful message like `Add Spanish translation`.
  5. Open a PR describing what changed and how you verified it.

- **Issue Attachment:**
  - If you cannot run the project locally, open an issue titled “Translation: Language Name,” attach the 11 JSON files, and share any testing notes. A maintainer will wire things up.

Where possible, keep one language per PR so reviewers can focus on the context.

---

## Ready-to-Submit Checklist

Before you press “Create pull request,” make sure:

- [ ] All 11 JSON files for your locale exist and contain valid JSON.
- [ ] Keys remain in English and interpolation variables are untouched.
- [ ] Terminology is consistent across the files.
- [ ] You tested the main screens or noted anything you could not verify.
- [ ] New languages are registered in the language selector (or you flagged it for review).

---

## Current Localisation Coverage

The following locales ship with 1.5.0 and will keep evolving as translators refine them:

- English, Italiano, Português, Português (Brasil)
- 简体中文 (zh-CN), 繁體中文 (zh-TW)
- Deutsch, Français, Español, Polski
- Русский, 日本語, Türkçe, Malti
- System auto-detect (falls back to English when a locale is missing)

If yours is missing, we would love to add it next.

---

## Need Help?

- Visit the localisation thread in the [community Discord](/community) to coordinate with other translators.
- Review the high-level workflow in the [main contributing guide](/contributing).
- Ask maintainers in your PR or issue if you are unsure where a string lives or how to run a specific check.

Every contribution keeps the multilingual experience feeling natural for more Godot Launcher users—thanks for helping us grow it!
