---
id: change-project-editor
title: Change Project Editor Version
slug: /editors/change-project-editor
description: "Choose which official, .NET, or custom-built Godot editor opens a project."
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

Each project can use a different installed or registered Godot editor. Change it when a project needs another release, a .NET build, or a custom build.

<ThemedImage
  className="docs-media-frame"
  alt="Opening Project Settings and changing the Godot editor version"
  sources={{
    light: '/img/animations/change-project-editor/change-project-editor-anim_light.gif',
    dark: '/img/animations/change-project-editor/change-project-editor-anim_dark.gif',
  }}
/>

## Choose another Godot editor

1. Open the **Projects** view.
2. Select **Project settings** on the project card.
3. Stay on the **Project** tab.
4. Choose an available version from **Godot Editor**.
5. Select **Update**.

The project uses the selected editor the next time you open it. Its folder and `project.godot` file do not move.

:::info
Godot Launcher only changes a project between editors from the same major Godot version. Follow the [official Godot upgrading guide](https://docs.godotengine.org/en/stable/tutorials/migrating/upgrading_to_godot_4.html) before opening a project with a different major version.
:::

## Use an official or custom build

Official releases and registered custom builds appear together in **Godot Editor**. Custom builds are useful for locally compiled or team-provided versions.

See [Custom-Built Godot Editors](./custom-editors.mdx) to register or replace one.

## Keep the code editor working

Changing the Godot editor does not change the project's Visual Studio Code or VSCodium choice.

If the project uses either editor and it is available, the launcher updates its project setup for the new Godot version. This includes supported build and debug setup when you choose a .NET editor.

To choose another code editor, open [Project Settings > Code Editor](../projects/project-settings.mdx#code-editor).

If the selected editor is no longer available, see [Troubleshooting](../troubleshooting.md#project-editor-selection).

## Related guides

- [Project Settings](../projects/project-settings.mdx)
- [Editor Settings Per Project](./editor-settings.mdx)
