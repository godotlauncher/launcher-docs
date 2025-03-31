---
id: change-project-editor
title: Change Project Editor Version
slug: /guides/change-project-editor
description: "Learn how to change the editor version for your Godot projects in the launcher, including handling .NET and GDScript transitions, and managing missing editor versions."
tags:
  - guides
  - Godot
  - editor version
  - project settings
  - .NET
  - GDScript
---

# Change Project Editor Version

![Changing Project Editor Version](/img/launcher-project-editor-change-ui-anim.gif)

The **Godot Launcher** makes it easy to manage multiple versions of the Godot editor across your projects.  
This guide explains how to:

- Change the editor version for new or existing projects.
- Transition smoothly between GDScript and .NET workflows.
- Resolve missing or removed editor versions with minimal disruption.

---

## Choosing the Editor Version

When creating a new project, the launcher lets you choose which installed editor version to use. Just select your preferred version during setup.

For existing projects, the launcher reads the `project.godot` file to detect which version the project was created with and selects the closest installed match.

:::info
To avoid compatibility issues, it's recommended to keep multiple Godot versions installed—especially if you're working with both GDScript and .NET or across different Godot releases.
:::

---

## Changing the Editor Version

You can switch the editor version for any project directly from the launcher:

1. Open the **Godot Launcher**.
2. Locate your project in the **Projects** list.
3. Use the dropdown in the **Editor** column to select a different Godot version.

The launcher will update the project’s configuration and editor-specific settings accordingly.

---

## Handling .NET and GDScript Transitions

Switching between **GDScript** and **.NET (C#)** workflows involves more than just changing the editor version. The launcher helps manage this transition by adjusting the development environment as needed.

When switching to .NET:

- VS Code settings are updated automatically (if it is your external editor).
- Existing editor settings are preserved if already configured.
- The launcher will generate or update:
  - A build task to compile C# scripts.
  - A launch configuration for running/debugging the project.
- Recommended VS Code extensions for .NET and Godot are added if missing.

:::warning
The launcher defaults to **Visual Studio Code** for .NET projects, if installed. Existing editor settings for the selected version will not be overwritten. You’ll see a warning if that happens.

To manually configure VS Code for C#, refer to the [official Godot documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_basics.html).
:::

---

## Managing Missing or Removed Editor Versions

If an editor version used by a project is uninstalled or moved, the launcher detects it and marks the version as missing.

When this occurs:

- A warning appears in the project list.
- The missing version is removed from the installed editors list.
- The project will be marked as having a **missing editor version** and cannot be launched.

You’ll need to assign a new version before you can open the project again.

:::warning
Missing editor versions are automatically removed from the list. Projects depending on them will show a warning and become unlaunchable until resolved.
:::

:::tip
To fix this, use the editor dropdown in the **Projects** list to assign an available version.
:::

---

## Summary

Godot Launcher gives you full control over which editor version each project uses. It simplifies version switching, supports transitions between GDScript and .NET, and gracefully handles missing editors. Whether you’re maintaining multiple workflows or upgrading versions, the launcher ensures your projects stay compatible and ready to run.
