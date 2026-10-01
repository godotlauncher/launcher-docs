---
id: launch-godot-project-in-windowed-mode
title: "Open the Godot Editor in Windowed Mode"
description: "Start the Godot editor in windowed mode when opening a project from Godot Launcher."
sidebar_label: Windowed Editor
slug: "/projects/launch-godot-project-in-windowed-mode"
tags:
  - godot
  - godot-project-setup
  - quality-of-life
---

import ThemedImage from '@theme/ThemedImage';

# Open the Godot Editor in Windowed Mode {#launch-a-godot-project-in-windowed-mode}

Enable **Windowed editor** in Godot Launcher to start the Godot editor in windowed mode.

## Change the project setting

1. Open **Projects**.
2. Select the project's settings button.
3. Open **Launch**.
4. Enable or disable **Windowed editor**.
5. Select **Update**.

<ThemedImage
  className="docs-media-frame"
  alt="Enabling windowed mode from the Launch tab in Project Settings"
  sources={{
    light: '/img/animations/windowed-mode/windowed-mode-anim_light.gif',
    dark: '/img/animations/windowed-mode/windowed-mode-anim_dark.gif',
  }}
/>

The setting is saved for this project and applies the next time you open it from the main window or the system tray.

The project card shows a **Windowed** status chip while the option is enabled.

## When to enable it

Enable **Windowed editor** to request windowed mode for the Godot editor. Leave it off to use Godot's normal startup window state. Godot Launcher uses Godot's `--windowed` command-line option for this setting.

## Related guides

- [Project Settings](./project-settings.mdx)
- [Godot command-line display options](https://docs.godotengine.org/en/4.4/tutorials/editor/command_line_tutorial.html#display-options)
