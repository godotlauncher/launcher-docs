---
id: change-project-editor
title: Change Project Editor Version
slug: /editors/change-project-editor
description: "Learn how to change the editor version for your Godot projects in the launcher, including custom-built Godot editors, .NET transitions, and missing editor recovery."
tags:
  - guides
  - godot
  - editor-version
  - project-settings
  - custom-editor
  - dotnet
  - gdscript
---

import ThemedImage from '@theme/ThemedImage';

# Change Project Editor Version

<ThemedImage
  className="docs-media-frame"
  alt="Changing Project Editor Version"
  sources={{
    light: '/img/animations/change-project-editor/change-project-editor-anim_light.gif',
    dark: '/img/animations/change-project-editor/change-project-editor-anim_dark.gif',
  }}
/>

Godot Launcher lets you choose which editor each project uses. You can switch between official releases, .NET editors, and registered custom-built Godot editors from the Projects list.

## Choose the editor version

When creating a new project, choose the editor in the project setup form. For existing projects, use the editor selector in the **Projects** list.

<ThemedImage
  className="docs-media-frame"
  alt="Create Project view with a custom editor selected"
  sources={{
    light: '/img/screenshots/screen_projects_new_project_custom_editor_light.webp',
    dark: '/img/screenshots/screen_projects_new_project_custom_editor_dark.webp',
  }}
/>

For projects you import, the launcher reads `project.godot` and selects the closest compatible editor it can find.

:::info
Keep the editor versions your projects depend on installed or registered. This is especially useful when you maintain projects across different Godot versions or switch between GDScript and .NET workflows.
:::

## Change an existing project

1. Open **Godot Launcher**.
2. Locate your project in the **Projects** list.
3. Use the dropdown in the **Editor** column to select a different editor.

The launcher updates the project setup it manages for that editor. When VS Code integration is enabled, it also updates the relevant VS Code workspace files for the selected editor.

## Custom-built Godot editors

Once a custom-built Godot editor is registered, it appears in project editor selectors like a regular installed editor.

Use custom-built Godot editors for locally compiled editors, team-distributed editors, or other editor binaries that are not part of the official Godot release list. See [Custom-Built Godot Editors](/editors/custom-editors) to register or replace one.

## Handling .NET and GDScript transitions

Switching between **GDScript** and **.NET (C#)** workflows involves more than choosing another editor binary. The launcher helps by adjusting the development environment it manages.

When switching to .NET:

- VS Code settings are updated automatically if VS Code integration is enabled.
- Existing editor settings are preserved when they are already configured.
- The launcher can generate or update:
  - A build task to compile C# scripts.
  - A launch configuration for running/debugging the project.
- Recommended VS Code extensions for .NET and Godot are added if missing.

:::warning
The launcher defaults to **Visual Studio Code** for .NET projects when VS Code is installed. Existing editor settings for the selected version are not overwritten without warning.

To manually configure VS Code for C#, refer to the [official Godot documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_basics.html).
:::

## Missing or invalid editor paths

If an editor used by a project is uninstalled, moved, or unavailable, the launcher marks the project as having a missing editor and prevents launch until the problem is resolved.

<ThemedImage
  className="docs-media-frame"
  alt="Projects list showing a missing editor state"
  sources={{
    light: '/img/screenshots/screen_projects_missing_editor_light.webp',
    dark: '/img/screenshots/screen_projects_missing_editor_dark.webp',
  }}
/>

For official releases, you can:

- Mount or reconnect the storage device that contains the editor.
- Retry validation after restoring the path.
- Reinstall the editor.
- Remove the broken install entry.
- Select another compatible editor for the project.

For custom-built Godot editors, the launcher explains that the editor path is unavailable. Removing the custom editor unregisters it from Godot Launcher but does not delete the editor files from disk.

## Summary

Godot Launcher gives you control over which editor each project uses. It supports official releases, registered custom-built Godot editors, GDScript/.NET transitions, and clear recovery when an editor path is missing.
