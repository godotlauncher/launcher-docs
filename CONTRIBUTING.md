# Contributing to the Documentation

Use this guide to report documentation problems, suggest improvements, or contribute to the [Godot Launcher documentation](https://github.com/godotlauncher/launcher-docs).

For app or website changes, use the [launcher repository](https://github.com/godotlauncher/launcher) or [website repository](https://github.com/godotlauncher/launcher-website).

## Table of Contents

- [How the Docs Are Structured](#how-the-docs-are-structured)
- [Reporting Issues](#reporting-issues)
- [Proposing Improvements](#proposing-improvements)
- [Contributing Pull Requests](#contributing-pull-requests)
- [AI-Assisted Contributions](#ai-assisted-contributions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Documentation Standards](#documentation-standards)
- [Quickstart: How to Contribute](#quickstart-how-to-contribute)
- [Need Help?](#need-help)

## How the Docs Are Structured

The documentation site is built with [Docusaurus](https://docusaurus.io), a static site generator powered by Markdown.

- Upcoming-release content lives in the `docs/` folder.
- Published minor releases are frozen under `versioned_docs/`.
- The current sidebar is defined in `sidebars.ts`; frozen sidebars live under
  `versioned_sidebars/`.
- Shared assets and version-specific media live in `static/`.

### Version-Aware Links And Media

- Link to another documentation file with a relative `.md` or `.mdx` path.
  Do not use a root-relative documentation URL such as `/settings` because it
  can leave the version the reader selected.
- For pages in `docs/`, place screenshots in `static/img/screenshots/`, feature
  images in `static/img/features/`, and animations in
  `static/img/animations/`.
- For frozen documentation, copy its media into
  `static/img/docs/<major.minor>/` and reference it from that location.
- Keep logos, icons, and other release-independent assets in their shared
  paths.
- Do not edit a frozen version for a new launcher release. Apply corrections
  there only when the published version itself is inaccurate.

## Reporting Issues

Search [open](https://github.com/godotlauncher/launcher-docs/issues) and [closed issues](https://github.com/godotlauncher/launcher-docs/issues?q=is%3Aissue%20state%3Aclosed) before opening a new report.

[Report incorrect or outdated documentation](https://github.com/godotlauncher/launcher-docs/issues/new?template=bug_report.yml). Include the affected page or section, what is wrong, and the expected behaviour. Keep each report focused on one problem.

## Proposing Improvements

[Suggest a documentation improvement](https://github.com/godotlauncher/launcher-docs/issues/new?template=feature_request.yml) after checking existing issues. Explain the reader's task and what the documentation needs to cover. Discuss major content or structure changes first, either in an issue or on [Discord](https://discord.gg/Ju9jkFJGvz).

## Contributing Pull Requests

You can fix typos, clarify steps, or add missing information. Follow the setup and preview instructions in [README.md](./README.md).

## AI-Assisted Contributions

This repository follows the project-wide [AI-Assisted Contributions Policy](https://github.com/godotlauncher/launcher/blob/main/AI_POLICY.md). AI-assisted tools may be used, but their output is treated as untrusted input. Contributors remain responsible for understanding, reviewing, adapting, testing, and maintaining everything they submit.

## Pull Request Guidelines

### Keep PRs Simple and Focused

- Each PR should address **one issue or improvement at a time**.
- Avoid bundling unrelated changes.
- Link your PR to any relevant issue (e.g., `Fixes #45`).

### Writing Good Commit Messages

- Use a short, descriptive first line with a Conventional Commit prefix, such as `docs: clarify editor installation steps`.
- Describe the action in the imperative, such as "fix" or "add".
- Add a second paragraph only when the change needs more context.

**Examples:**

```
docs: fix broken link in system tray guide

The URL to the image was outdated and caused a 404.
```

```
docs: clarify editor version change guidance

Provides a clearer explanation for resolving missing editor warnings.
```

### Keeping Your Branch Updated

If your fork uses `upstream` for the original repository, update your branch before submitting:

```
git pull --rebase upstream main
```

## Documentation Standards

- Use British English and ASCII punctuation. Preserve exact UI labels, identifiers, proper names, and translated text.
- Explain the reader's task and the result in direct, factual language. Use short sentences and active voice; remove praise, filler, and repeated explanations.
- Verify behaviour against the app. Include prerequisites, relevant limitations, and recovery steps where readers need them.
- Write exact UI labels in **bold**, and use `code` for filenames, commands, and literal values. Separate steps in a menu path with `>`.
- Use numbered steps when order matters. Name the starting screen, controls, and visible result.
- Use callouts for a specific prerequisite, limitation, or risk. Give each callout a descriptive title.
- Add screenshots or animations only when they explain a control, state, or sequence. Check that the media is accurate, write useful alt text, and keep the instructions usable without it.
- Preserve page URLs and heading anchors. Use relative documentation links with a `.md` or `.mdx` extension.

## Quickstart: How to Contribute

1. **Fork** the repository and clone it locally.
2. Create a new branch: `git checkout -b fix-typo-in-guide`
3. Make your changes inside the `docs/` folder.
4. Run `npm ci`, then `npm run start`, and review the affected pages at [http://localhost:3001](http://localhost:3001).
5. Run `npm run build` and fix any errors caused by your changes.
6. Commit your changes and open a pull request.

## Need Help?

Join the [Godot Launcher Discord](https://discord.gg/Ju9jkFJGvz) to ask contribution questions or get early feedback on an idea.

<a id="thank-you"></a>
