---
id: storage-paths
title: Storage Paths and Files
slug: /reference/storage-paths
description: "Find Godot Launcher configuration files, editor and project folders, export template storage paths, and portable project metadata."
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
| Godot Launcher configuration files | `<home>/.gd-launcher` |

On Windows, `<home>` is your user profile folder, such as `C:\Users\You`. On Linux and macOS, `<home>` is your home directory, such as `/home/you` or `/Users/you`.

You can change the project and editor install locations from [Godot Launcher Settings](../settings/launcher-settings.mdx).

## Shared export templates

Official export templates use Godot's normal per-user location by default:

| System | Default template folder |
| --- | --- |
| Windows | `%APPDATA%\Godot\export_templates` |
| macOS | `~/Library/Application Support/Godot/export_templates` |
| Linux | `$XDG_DATA_HOME/godot/export_templates`, or `~/.local/share/godot/export_templates` when `XDG_DATA_HOME` is unset or is not absolute |

Each collection has a folder named for its full Godot version and edition, such as `4.7.stable` or `4.7.stable.mono`. It can contain a selection of template files rather than every supported platform.

Change the physical location from **Settings > Export Templates**. After a move, a directory link at Godot's default location points to the new storage folder. Windows uses directory junctions. Use **Move back to Godot's default location** to return relocated Official files.

:::info Editor and template locations are separate

Changing the editor install location does not move export templates. Use the template storage controls to move Official or imported files and update their connections.

:::

In the project's editor environment, `editor_data/export_templates` connects to the shared collection when **Official** is selected. For a selected imported build, it contains a version link to that build. Choices for other editor versions are remembered, but only the current editor's imported build is connected. Other `editor_data` contents remain separate.

Some project environments also have `editor_data/launcher_export_templates/official` for their managed Official connection. Leave these connections under the launcher's control; use the migration review for existing local template files.

See [Export Templates](../editors/export-templates.mdx) for downloads, migration, build selection, and storage moves.

## Imported export template library

The default physical library location is `<home>/Godot/ExportTemplates`. You can change it independently of Official storage from **Settings > Export Templates**.

Within the library, package files are stored under `imported/<version-and-edition>/<build-folder>`. For example, `imported/4.7.stable/Cloud Build` contains a named Standard build. Folder names are derived from build names and adjusted for supported filesystem names. Use **Open template folder** on the build to find its exact location.

`imported-templates.json` in the library records build identities, names, versions, and package files. Renaming changes the readable folder name; replacement keeps the build identity and the projects' selections.

The launcher maintains a connection from `<home>/.gd-launcher/export-templates` to the physical library. If the default location cannot be set up, this configuration-folder location may be used instead. **Settings > Export Templates** shows the location in use.

:::warning Manage packages through Godot Launcher

Do not rename, move, or delete library folders manually. Use **Rename**, **Replace TPZ**, **Delete imported build**, or the storage **Move** action so saved project references and connections are updated. If files are missing, the build can appear as **Unavailable** in Project Settings.

:::

Project build choices are stored in `projects.json`. Selecting a build connects the project to the library files; it does not create a project-local copy.

## Config files

Godot Launcher stores these files in `<home>/.gd-launcher`:

| File | Purpose |
| --- | --- |
| `prefs.json` | User preferences such as paths, language, update settings, and launch behaviour. |
| `projects.json` | The local project list, code editor and launch choices, pin order, activity, and per-version export template choices. |
| `project-tags.json` | Project tag names, colours, and assignments on this computer. |
| `template-storage.json` | Saved Official and imported template storage locations. |
| `app-integrations.json` | Non-secret connection details used to show connected accounts, installations, and connection health. |
| `app-integration-secrets.json` | Encrypted connection credentials. The operating system's secure credential storage must be available to save or read them. |
| `editor-catalog.json` | Saved official editor catalogue data used when a refresh is unavailable. |
| `tool-integrations.json` | Tool settings and cached installation details managed by the launcher. |
| `releases.json` | Cached official stable Godot release metadata. |
| `prereleases.json` | Cached official prerelease metadata. |
| `installed-releases.json` | Registered official and custom editor installs. |
| `migrations.json` | Internal migration state. |

## Project folders

Godot Launcher expects each imported or created project to have a `project.godot` file.

Adding an existing project does not move it. The launcher keeps a local record that points to its folder.

## Information that stays on this computer

The launcher stores the following information locally:

- The selected external code editor, such as Visual Studio Code, VSCodium, or **None**.
- The project's last-opened history used for recent-project ordering and tray quick launch.
- Pin state and pinned-project order.
- Project tags and their assignments.
- The project's **Launch in terminal** and **Windowed editor** choices.
- Per-version imported-build selections.

These choices are not restored when you add the project on another computer.

## Information stored with the project

When present, `.godotlauncher` identifies:

- The metadata format version.
- The Godot Launcher version that wrote it.
- The project's display name, when saved by Godot Launcher.
- The selected Godot editor channel, flavour, compatible base version, and exact version.

The local choices listed above are not included. The launcher can still recognise a supported code editor from the project's existing setup.

:::warning Use the launcher to change saved settings

`.godotlauncher` and the JSON files in the launcher config folder are launcher-managed. Edit them manually only when you are recovering from a specific problem and have a backup.

:::

## Per-project editor settings

Godot Launcher isolates Godot editor settings per project and editor version.

In Godot 4.3 and later, the settings file name follows this pattern:

```text
editor_settings-<major.minor>.tres
```

Godot 4.0 to 4.2 use `editor_settings-4.tres`. For the full explanation, see [Editor Settings Per Project](../editors/editor-settings.mdx).

## Custom editor manifests

Custom-built Godot editors are registered from:

```text
godotlauncher-editor-manifest.json
```

For the manifest shape, see [Custom Editor Manifest Format](./custom-editor-manifest.md).
