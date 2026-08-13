---
id: vscodium-setup-for-godot
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

[VSCodium](https://vscodium.com/) is supported by Godot Launcher. Choose it for a project to open Godot scripts in VSCodium and keep the workspace setup up to date.

Godot Launcher does not install VSCodium or its extensions.

## Install VSCodium

Install VSCodium separately by following the [official VSCodium installation guide](https://vscodium.com/install).

Then make it available in Godot Launcher:

1. Open **Settings > Code Editors**.
2. Find the **VSCodium** card and select **Rescan**.
3. Keep the editor **Enabled** so you can choose it for projects.

Select the star to make VSCodium the default for new projects. See [Code Editor Settings](../settings/code-editors.mdx) for custom paths and launch arguments.

## Choose VSCodium for a project

Choose VSCodium from **Code Editor** while creating a project.

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

Godot will open project scripts in VSCodium. Choose **None** to stop using a code editor for the project. Existing `.vscode` files stay in place.

## Workspace files and extension recommendations

The VSCodium integration can create or merge files under `.vscode`:

- `settings.json` records the matching Godot editor path and related workspace defaults.
- `extensions.json` recommends **Godot Tools** for Godot development through Open VSX.
- For a .NET project, `extensions.json` also recommends **DotRush** through Open VSX.
- For a .NET project, `tasks.json` receives a VSCodium-specific build task and `launch.json` receives a VSCodium-specific attach configuration.

The launcher only adds recommendation entries. It does not install Godot Tools or DotRush. Install the extensions you want from within VSCodium.

When the launcher updates these files, it keeps other valid settings, recommendations, tasks, and launch configurations. When you switch from Visual Studio Code, it replaces only the entries that it manages for the previous editor.

## Imported projects

After importing a project, choose VSCodium from **Project Settings > Code Editor** if it is not already selected. A `.vscode` folder can be used by several editors, so the launcher does not select VSCodium from that folder alone.

For editor detection and project setup recovery, see [Troubleshooting](../troubleshooting.md#code-editors).

## Related guides

- [Code Editor Settings](../settings/code-editors.mdx)
- [Project Settings](../projects/project-settings.mdx)
- [Visual Studio Code Setup for Godot](./vscode-setup.md)
