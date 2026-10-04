---
id: vscodium-setup-for-godot
sidebar_label: VSCodium Setup
title: "VSCodium Setup for Godot"
description: "Set up VSCodium for a Godot Launcher project and understand the workspace files it maintains."
slug: "/integrations/vscodium-setup-for-godot"
tags:
  - guides
  - code-editor
  - vscodium
  - editor-setup
  - troubleshooting
  - dotnet
---

import ThemedImage from '@theme/ThemedImage';

# VSCodium Setup for Godot

[VSCodium](https://vscodium.com/) is supported by Godot Launcher. Select it for a project to open scripts in VSCodium when you launch Godot through Godot Launcher. The launcher also maintains the project's VSCodium workspace files.

Godot Launcher does not install VSCodium or its extensions.

## Install VSCodium

Install VSCodium separately by following the [official VSCodium installation guide](https://vscodium.com/install).

Then make it available in Godot Launcher:

1. Open **Settings > Code Editors**.
2. Find the **VSCodium** card and select **Rescan**.
3. Keep the editor **Enabled** so you can choose it for projects.

Select the star on its card to make VSCodium the default for new projects. See [Code Editor Settings](../settings/code-editors.mdx) for custom paths and launch arguments.

## Choose VSCodium for a project

For a new project, select **VSCodium** from **Code Editor** in the **New Project** drawer.

<ThemedImage
  className="docs-media-frame"
  alt="New Project drawer with Visual Studio Code and VSCodium in the Code Editor selector"
  sources={{
    light: '/img/screenshots/screen_projects_new_project_code_editor_options_light.webp',
    dark: '/img/screenshots/screen_projects_new_project_code_editor_options_dark.webp',
  }}
/>

For an existing project:

1. Select **Project settings** on the project card.
2. Open the **Code Editor** tab.
3. Choose **VSCodium**.
4. Select **Update**.

The next time you launch Godot through Godot Launcher, opening a script uses VSCodium. The launcher creates or updates the `.vscode` files described below.

To stop using an external code editor, select **None** in the same tab and select **Update**. Existing `.vscode` files stay in place.

## Workspace files and extension recommendations

Godot Launcher maintains these files under `.vscode`:

- `settings.json` records the matching Godot editor path and related workspace defaults.
- `extensions.json` recommends [Godot Tools](https://open-vsx.org/extension/geequlim/godot-tools) through Open VSX.
- For a .NET project, `extensions.json` also recommends [DotRush](https://open-vsx.org/extension/nromanov/dotrush) for C# through Open VSX.
- For a .NET project, `tasks.json` receives a VSCodium-specific build task and `launch.json` receives a VSCodium-specific attach configuration.

Selecting VSCodium adds extension recommendations; it does not install the extensions. Open the project folder in VSCodium and install the extensions you need from Open VSX.

When updating workspace files, Godot Launcher keeps settings and entries outside those it manages. Switching from Visual Studio Code replaces the entries managed for that editor, while keeping other valid recommendations, tasks, and launch configurations.

## Imported projects

After importing a project, choose VSCodium from **Project Settings > Code Editor** if it is not already selected. A `.vscode` folder can be used by several editors, so the launcher does not select VSCodium from that folder alone.

For editor detection and project setup recovery, see [Troubleshooting](../troubleshooting.md#code-editors).

## Related guides

- [Code Editor Settings](../settings/code-editors.mdx)
- [Project Settings](../projects/project-settings.mdx)
- [Visual Studio Code Setup for Godot](./vscode-setup.md)
