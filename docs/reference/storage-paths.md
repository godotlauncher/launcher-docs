---
id: storage-paths
title: Storage Paths and Files
slug: /reference/storage-paths
description: "Reference for Godot Launcher project, editor, local configuration, portable project metadata, and per-project settings paths."
tags:
  - configuration
  - launcher-settings
  - reference
---

# Storage Paths and Files

Use this page to find the folders and files created or managed by Godot Launcher.

## Default folders

| Purpose | Default path |
| --- | --- |
| New projects | `<home>/Godot/Projects` |
| Downloaded editor installs | `<home>/Godot/Editors` |
| Launcher config files | `<home>/.gd-launcher` |

On Windows, `<home>` is your user profile folder, such as `C:\Users\You`. On Linux and macOS, `<home>` is your home directory, such as `/home/you` or `/Users/you`.

You can change the project and editor install locations from [Launcher Settings](../settings/launcher-settings.mdx).

## Config files

Godot Launcher stores small internal files in the config folder:

| File | Purpose |
| --- | --- |
| `prefs.json` | User preferences such as paths, language, update settings, and launch behavior. |
| `projects.json` | The local project list, including device-specific project organization and activity. |
| `editor-catalog.json` | Saved official editor catalog data used when a refresh is unavailable. |
| `tool-integrations.json` | Launcher-managed tool settings and cached installation details. |
| `releases.json` | Cached official stable Godot release metadata. |
| `prereleases.json` | Cached official prerelease metadata. |
| `installed-releases.json` | Registered official and custom editor installs. |
| `migrations.json` | Internal migration state. |

## Project folders

Godot Launcher expects each imported or created project to have a `project.godot` file.

Adding an existing project does not move it. The launcher keeps a local record that points to its folder.

## Information that stays on this computer

Some project information belongs to one launcher installation and stays in the local project list:

- The selected external code editor, such as Visual Studio Code, VSCodium, or **None**.
- The project's last-opened history used for recent-project ordering and tray quick launch.
- Pin state and pinned-project order.

These choices are not restored when you add the project on another computer.

## Information stored with the project

When present, `.godotlauncher` identifies:

- The Godot Launcher version that wrote it.
- The selected Godot editor channel, flavor, compatible base version, and exact version.

The file does not contain the code editor choice, recent activity, or pin order. The launcher can still recognize a supported code editor from the project's existing setup.

:::warning
`.godotlauncher` and the JSON files in the launcher config folder are launcher-managed. Edit them manually only when you are recovering from a specific problem and have a backup.
:::

## Per-project editor settings

Godot Launcher isolates Godot editor settings per project and editor version.

The settings file name follows this pattern:

```text
editor_settings-<major.minor>.tres
```

For the full explanation, see [Editor Settings Per Project](../editors/editor-settings.mdx).

## Custom editor manifests

Custom-built Godot editors are registered from:

```text
godotlauncher-editor-manifest.json
```

For the manifest shape, see [Custom Editor Manifest Format](./custom-editor-manifest.md).
