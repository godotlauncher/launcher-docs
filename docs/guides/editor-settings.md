---
id: editor-settings
title: Editor Settings Per Project
slug: /guides/editor-settings
description: "Understand how the Godot Launcher handles per-project editor settings, where they're stored, and how to manage them across Godot versions."
tags:
  - guides
  - Godot
  - editor settings
  - project settings
  - configuration
---

# Editor Settings Per Project

The Godot Launcher supports **per-project editor settings**, allowing each project to maintain its own editor configuration. This helps prevent cross-project conflicts and ensures a consistent development environment across different Godot versions.

## Where Editor Settings Are Stored

Editor settings for a project are saved in:

```
<editor-location-settings>/.editor_settings/<project-name>/editor_data/
```

:::note
defaults to `~/Godot/Editors/` or `/home/<user>/Godot/Editors/` (user home directory).
On Windows, this is `c:\Users\<user>\Godot\Editors\`
:::

The file storing the settings follows this naming format (Godot Engine):

```
editor_settings-<major.minor>.tres
```

:::info
The `<major.minor>` portion reflects the Godot version used by the project—for example, `editor_settings-4.4.tres`. Patch versions like `4.4.1` are not included in the filename.
:::

## Importing and Exporting Settings

The launcher provides built-in options to **import** or **export** editor settings for each project. This is useful for migrating settings, keeping consistency across machines, or sharing configurations in a team.

:::tip
![Launcher Project Menu UI](/img/Per_Project_Editor_Settings_Dark.png)

Use the project dropdown menu in the launcher to access the import and export options.
:::

## Resetting Settings

The launcher does **not** support resetting editor settings. If you need to restore defaults, you can manually remove the settings file or import a clean configuration.

:::warning
There is no "Reset to Default" option. Always back up your current settings before making changes.
:::

## Summary

Godot Launcher isolates editor settings per project and per Godot version (major.minor). With import and export support, it’s easy to manage and share editor configurations without affecting other projects.
