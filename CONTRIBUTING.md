# Contributing to the Documentation

This guide is for anyone who wants to contribute to the **Godot Launcher Documentation**, hosted at [github.com/godotlauncher/launcher-docs](https://github.com/godotlauncher/launcher-docs).

If you're looking to contribute to the Godot Launcher app itself, check out the [main Godot Launcher repository](https://github.com/godotlauncher/launcher), or visit the [website](https://godotlauncher.org) for more information.  
If you want to contribute to the **Godot Launcher website**, visit the [launcher-website repository](https://github.com/godotlauncher/launcher-website).

We welcome your feedback, ideas, and pull requests—whether it’s fixing a typo or writing an entirely new guide.

---

## Table of Contents

- [How the Docs Are Structured](#how-the-docs-are-structured)
- [Reporting Issues](#reporting-issues)
- [Proposing Improvements](#proposing-improvements)
- [Contributing Pull Requests](#contributing-pull-requests)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Documentation Standards](#documentation-standards)
- [Quickstart: How to Contribute](#quickstart-how-to-contribute)
- [Need Help?](#need-help)

---

## How the Docs Are Structured

The documentation site is built with [Docusaurus](https://docusaurus.io), a static site generator powered by Markdown.

- All content lives in the `docs/` folder.
- Sidebar structure is defined in `sidebars.js`.
- Static assets (e.g., images) go in `static/`.

Please follow the folder structure when adding or editing pages.

---

## Reporting Issues

> [!IMPORTANT]  
> Before creating a new issue, check the [open issues](https://github.com/godotlauncher/launcher-docs/issues) and [closed issues](https://github.com/godotlauncher/launcher-docs/issues?q=is%3Aissue%20state%3Aclosed) to avoid duplicates.

Submit documentation issues [here](https://github.com/godotlauncher/launcher-docs/issues/new?template=bug_report.md).  
We’ve added templates to make it easier to share your idea.

- Submit a **separate issue for each problem or suggestion**.
- If you’re reporting outdated or incorrect documentation, include the affected page or section.
- Suggestions are welcome even if you're not submitting a fix yourself.

---

## Proposing Improvements

> [!IMPORTANT]  
> Before creating a new feature request, please check the [open issues](https://github.com/godotlauncher/launcher-docs/issues) and [closed issues](https://github.com/godotlauncher/launcher-docs/issues?q=is%3Aissue%20state%3Aclosed).

Submit proposals [here](https://github.com/godotlauncher/launcher-docs/issues/new?template=feature_request.md).  
We’ve added templates to make it easier to explain your suggestions.

- **Create one suggestion per issue** to keep feedback focused.
- For major structural or content changes, discuss them first on [Discord](https://discord.gg/Ju9jkFJGvz).

---

## Contributing Pull Requests

Thank you for helping improve the documentation!

- Fix typos, clarify steps, or add missing information.
- For large changes, start a discussion or open an issue first.
- No contribution is too small—every fix helps users.

---

## Pull Request Guidelines

### Keep PRs Simple and Focused

- Each PR should address **one issue or improvement at a time**.
- Avoid bundling unrelated changes.
- Link your PR to any relevant issue (e.g., `Fixes #45`).

### Writing Good Commit Messages

- First line should be short and descriptive (under 72 characters).
- Use **imperative tone** (e.g., `Fix typo in guide`, `Add image section to docs`).
- Add more context in a second paragraph if necessary.

**Examples:**

```
Fix broken link in system tray guide

The URL to the image was outdated and caused a 404.
```

```
Add quick tips block to editor version change guide

Provides a clearer explanation for resolving missing editor warnings.
```

### Keeping Your Branch Updated

Before submitting your PR, update your branch:

```
git pull --rebase upstream main
```

---

## Documentation Standards

- Be clear, concise, and user-friendly.
- Use proper spelling and grammar (American English).
- Match the tone of existing pages.
- Prefer short sentences and active voice.

---

## Quickstart: How to Contribute

1. **Fork** the repository and clone it locally.
2. Create a new branch: `git checkout -b fix-typo-in-guide`
3. Make your changes inside the `docs/` folder.
4. Run `npm install && npm run start` to preview the site locally.
5. Commit your changes and open a pull request.

If you’re unsure, open a [discussion](https://github.com/godotlauncher/launcher-docs/discussions) or ask on [Discord](https://discord.gg/Ju9jkFJGvz).

---

## Need Help?

If you're unsure how to contribute or want feedback on an idea, join the [Discord community](https://discord.gg/Ju9jkFJGvz) or open a [discussion thread](https://github.com/godotlauncher/launcher-docs/discussions).

---

## Thank You!

Every contribution improves the experience for users around the world. Whether you're fixing a typo, rewriting a section, or writing new guides—**thank you for supporting Godot Launcher**.
