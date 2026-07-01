---
id: vscode-setup-for-godot
title: "Visual Studio Code Setup For Godot"
description: "Configure Visual Studio Code for Godot Launcher projects and recover from invalid VS Code config files."
slug: "/guides/vscode-setup-for-godot"
tags:
  - guides
  - vscode
  - editor-setup
  - troubleshooting
---

import ThemedImage from '@theme/ThemedImage';

# Visual Studio Code Setup for Godot

## Why use Visual Studio Code?

[Visual Studio Code](https://code.visualstudio.com/) is a lightweight, extensible code editor. It works well with GDScript, C#, and Git.

## Install Visual Studio Code

Download and install VS Code from the official site:

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

## Recommended extensions

:::success TIP
If you create or update a project in Godot Launcher with VS Code enabled, these extensions are automatically recommended when you open the project in VS Code. You do not need to find them manually.
:::

Recommended extensions:

- **Godot Tools**: GDScript support and Godot editor integration.
- **C#**: Required when you use C# in your Godot project.
- **GitLens**: Extra Git workflow tools.
- **Godot Theme**: Syntax highlighting and theme support for GDScript.

If you use VS Code for other types of work, consider [profiles](https://code.visualstudio.com/docs/editor/profiles) so your game development setup can stay separate.

## Enable VS Code from the launcher

Godot Launcher exposes a project-level toggle so you can control VS Code integration after project creation.

<ThemedImage
  alt="Godot Launcher project overflow menu"
  sources={{
    light: '/img/screenshots/screen_projects_menu_light.webp',
    dark: '/img/screenshots/screen_projects_menu_dark.webp',
  }}
/>

1. In the **Projects** list, open a project's overflow menu.
2. Turn on **Use Visual Studio Code as Text Editor**.

The launcher checks whether VS Code is available. If the toggle is disabled, visit **Settings -> Tools** and click **Rescan tools** after installing or relocating VS Code.

When enabled, the launcher:

- Updates Godot editor settings to use VS Code as the external text editor.
- Creates or merges `.vscode/settings.json`, `.vscode/extensions.json`, and `.vscode/launch.json` where needed.
- Adds the VS Code icon next to the project name.

Turning the option off stops using VS Code as the external text editor for that project. Existing VS Code project files are left in place.

## Setting up Godot integration manually

:::success TIP
Godot Launcher automatically sets up the integration between Godot and VS Code when you create a project with **Use VS Code** checked or enable the project toggle later.
:::

If you prefer to set up the integration manually:

1. Open VS Code.
2. Install the **Godot Tools** extension.
3. Press `Ctrl+Shift+P` or `Cmd+Shift+P` on macOS to open the Command Palette.
4. Search for `Godot: Set Godot Executable Path` and select it.
5. Browse to the Godot executable you want to use.

For projects created with Godot Launcher, use the path where the launcher opens the project from. You can find this path from the project overflow menu by opening the editor settings folder and navigating up one folder to the editor binaries.

For more details, see the [Godot Tools extension documentation](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools#godot-tools).

## Automatic build and launch configuration for .NET

When you use a .NET version of Godot, Godot Launcher can add the build and launch configuration needed for C# development. This happens when you create a project with VS Code enabled and whenever you change the editor version while the VS Code toggle is enabled.

The launcher can add:

- A build task to compile C# scripts.
- A launch configuration to run and debug the Godot project from VS Code.
- Recommended extensions for Godot and .NET workflows.

You can find these files in the `.vscode` folder inside your project directory. If you need to customize them, edit the files there.

## Recover from invalid VS Code config files

If VS Code config files cannot be safely read or have an unsupported shape, Godot Launcher preserves the original files as timestamped `.bad` copies, recreates the config it needs, and shows a warning with the recovered file paths.

<ThemedImage
  alt="VS Code configuration recovery warning"
  sources={{
    light: '/img/screenshots/screen_projects_vscode_config_recovered_light.webp',
    dark: '/img/screenshots/screen_projects_vscode_config_recovered_dark.webp',
  }}
/>

Recovery applies to:

- `.vscode/settings.json`
- `.vscode/extensions.json`
- `.vscode/launch.json`

Valid JSONC files with comments or trailing commas are supported and updated. The launcher preserves and updates supported JSONC files; it does not try to understand every custom VS Code setting.

## Related guides

- [Project Tool Toggles](/guides/project-tool-toggles)
- [Change Project Editor Version](/guides/change-project-editor)
