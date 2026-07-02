---
id: storage-paths
title: Storage Paths and Files
slug: /reference/storage-paths
description: "Reference for default Godot Launcher project, editor, preference, release cache, and per-project settings paths."
tags:
  - configuration
  - launcher-settings
  - reference
---

# Storage Paths and Files

Godot Launcher keeps user-selected project/editor locations separate from small configuration files.

## Default folders

| Purpose | Default path |
| --- | --- |
| New projects | `<home>/Godot/Projects` |
| Downloaded editor installs | `<home>/Godot/Editors` |
| Launcher config files | `<home>/.gd-launcher` |

On Windows, `<home>` is your user profile folder, such as `C:\Users\You`. On Linux and macOS, `<home>` is your home directory, such as `/home/you` or `/Users/you`.

You can change the project and editor install locations from [Launcher Settings](/getting-started/launcher-settings).

## Config files

Godot Launcher stores small internal files in the config folder:

| File | Purpose |
| --- | --- |
| `prefs.json` | User preferences such as paths, language, update settings, and launch behavior. |
| `releases.json` | Cached official stable Godot release metadata. |
| `prereleases.json` | Cached official prerelease metadata. |
| `installed-releases.json` | Registered official and custom editor installs. |
| `migrations.json` | Internal migration state. |

:::warning
These files are launcher-managed. Edit them manually only when you are recovering from a specific problem and have a backup.
:::

## Project files

Godot Launcher expects each imported or created project to have a `project.godot` file.

The launcher does not move existing projects when you add them. It stores a record that points to the existing folder.

## Per-project editor settings

Godot Launcher isolates Godot editor settings per project and editor version.

The settings file name follows this pattern:

```text
editor_settings-<major.minor>.tres
```

For the full explanation, see [Editor Settings Per Project](/guides/editor-settings).

## Custom editor manifests

Custom-built Godot editors are registered from:

```text
godotlauncher-editor-manifest.json
```

For the manifest shape, see [Custom Editor Manifest Format](/reference/custom-editor-manifest).
