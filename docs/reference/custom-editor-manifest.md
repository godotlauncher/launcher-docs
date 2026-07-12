---
id: custom-editor-manifest-reference
title: Custom Editor Manifest Format
slug: /reference/custom-editor-manifest
description: "Reference for the godotlauncher-editor-manifest.json file used to register custom-built Godot editors."
tags:
  - custom-editor
  - manifest
  - reference
---

# Custom Editor Manifest Format

Godot Launcher registers custom-built Godot editors from a `godotlauncher-editor-manifest.json` file.

Most users should create this file from **Installs -> Custom Editor -> Create custom editor manifest**. Use this reference when you need to inspect, generate, or review a manifest manually.

For the canonical machine-readable definition, see the [v1 engine manifest JSON schema](https://github.com/godotlauncher/launcher/blob/main/schemas/v1/engine-manifest.json).

## File name

```text
godotlauncher-editor-manifest.json
```

## Required fields

| Field | Type | Notes |
| --- | --- | --- |
| `schema_version` | number | Must be `1`. |
| `version` | string | Unique version identifier shown to the launcher, for example `4.4-custom.1`. |
| `name` | string | Display name shown in Godot Launcher. |
| `base_version` | string | Godot compatibility version in `major.minor` format, for example `4.4`. |
| `flavor` | string | Use `gdscript` for standard builds or `dotnet` for .NET builds. Custom values are accepted. |
| `config_version` | number | Must be `5` for supported Godot 4 project files. |
| `platforms` | array | One or more platform entries. |

## Optional fields

| Field | Type | Notes |
| --- | --- | --- |
| `$schema` | string | Optional JSON schema URL for editor validation. |
| `prerelease` | boolean | Marks the custom editor as a prerelease build. Defaults to `false`. |
| `mono` | boolean | Deprecated compatibility field. Godot Launcher derives .NET behavior from `flavor === "dotnet"`. |

## Platform entries

Each item in `platforms` must include:

| Field | Values | Notes |
| --- | --- | --- |
| `platform` | `windows`, `linux`, `macos` | Operating system for this editor entry. |
| `arch` | `x64`, `arm64`, `universal` | CPU architecture. `universal` matches any architecture for the selected platform. |
| `paths.editor` | string | Path to the editor executable or app bundle. |
| `paths.console` | string | Optional console executable path. |

Paths are resolved relative to the manifest file location.

## Example

```json
{
  "$schema": "https://raw.githubusercontent.com/godotlauncher/launcher/main/schemas/v1/engine-manifest.json",
  "schema_version": 1,
  "version": "4.4-custom.1",
  "name": "Acme Godot 4.4 Custom Editor",
  "base_version": "4.4",
  "flavor": "gdscript",
  "config_version": 5,
  "prerelease": false,
  "platforms": [
    {
      "platform": "windows",
      "arch": "x64",
      "paths": {
        "editor": "./Godot_v4.4-custom_win64.exe",
        "console": "./Godot_v4.4-custom_win64_console.exe"
      }
    }
  ]
}
```

## Validation behavior

When registering a manifest, Godot Launcher:

- Validates the manifest shape.
- Selects the platform entry matching the current operating system and architecture.
- Accepts `universal` as a platform architecture match.
- Verifies that the editor path exists.
- Verifies the optional console path when it is present.
- Registers the editor as a custom install without deleting or moving the editor files.

For the full user workflow, see [Custom-Built Godot Editors](/editors/custom-editors).
