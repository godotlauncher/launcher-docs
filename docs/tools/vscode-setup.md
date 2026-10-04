---
id: vscode-setup-for-godot
sidebar_label: VS Code Setup
title: "Visual Studio Code Setup for Godot"
description: "Set up Visual Studio Code for a Godot Launcher project and understand the workspace files it maintains."
slug: "/integrations/vscode-setup-for-godot"
tags:
  - guides
  - code-editor
  - vscode
  - editor-setup
  - troubleshooting
---

import ThemedImage from '@theme/ThemedImage';

# Visual Studio Code Setup for Godot

[Visual Studio Code](https://code.visualstudio.com/) is supported by Godot Launcher. Select it for a project to open scripts in VS Code when you launch Godot through Godot Launcher. The launcher also maintains the project's VS Code workspace files.

Godot Launcher does not install VS Code or its extensions.

## Install Visual Studio Code

Download and install VS Code from the [official Visual Studio Code download page](https://code.visualstudio.com/download).

Then make it available in Godot Launcher:

1. Open **Settings > Code Editors**.
2. Find the **Visual Studio Code** card and select **Rescan**.
3. Keep the editor **Enabled** so you can choose it for projects.

Select the star on its card to make VS Code the default for new projects. See [Code Editor Settings](../settings/code-editors.mdx) for custom paths and launch arguments.

## Choose VS Code for a project

For a new project, select **Visual Studio Code** from **Code Editor** in the **New Project** drawer.

For an existing project:

1. Select **Project settings** on the project card.
2. Open the **Code Editor** tab.
3. Choose **Visual Studio Code**.
4. Select **Update**.

<ThemedImage
  className="docs-media-frame"
  alt="Project Settings Code Editor tab with Visual Studio Code selected"
  sources={{
    light: '/img/screenshots/screen_projects_settings_code_editor_light.webp',
    dark: '/img/screenshots/screen_projects_settings_code_editor_dark.webp',
  }}
/>

The next time you launch Godot through Godot Launcher, opening a script uses VS Code. The launcher creates or updates the `.vscode` files described below.

To stop using an external code editor, select **None** in the same tab and select **Update**. Existing `.vscode` files stay in place.

## Workspace files and extension recommendations

For a standard Godot project, the launcher can maintain:

- `.vscode/settings.json`, including the matching Godot editor path.
- `.vscode/extensions.json`, with recommendations for Godot Tools and a Godot theme extension.

For a Godot .NET project using C#, it can also add:

- The Microsoft C# extension to the recommendations.
- A `.vscode/tasks.json` build task.
- A `.vscode/launch.json` configuration for running and debugging the project.

Selecting VS Code adds extension recommendations; it does not install the extensions. Open the project folder in VS Code and install the extensions you need.

When updating workspace files, Godot Launcher keeps settings and entries outside those it manages. Switching from VSCodium replaces the entries managed for that editor, while keeping other valid recommendations, tasks, and launch configurations.

For manual Godot Tools configuration, see the [Godot Tools extension documentation](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools#godot-tools).

For editor detection and project setup recovery, see [Troubleshooting](../troubleshooting.md#code-editors).

## Related guides

- [Code Editor Settings](../settings/code-editors.mdx)
- [Project Settings](../projects/project-settings.mdx)
- [VSCodium Setup for Godot](./vscodium-setup.md)
