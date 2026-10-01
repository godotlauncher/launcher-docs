---
id: launch-godot-project-in-windowed-mode
title: "Launch Godot Project in Windowed Mode"
description: "Start the Godot editor in windowed mode when opening a project from Godot Launcher."
slug: "/projects/launch-godot-project-in-windowed-mode"
tags:
  - godot
  - godot-project-setup
  - quality-of-life
---

import ThemedImage from '@theme/ThemedImage';

# Launch a Godot Project in Windowed Mode

Enable **Windowed editor** in Godot Launcher to start the Godot editor in windowed mode.

## Change the project setting

1. Open **Projects**.
2. Click the project's settings button.
3. Open **Launch**.
4. Enable or disable **Windowed editor**.
5. Click **Update**.

<ThemedImage
  className="docs-media-frame"
  alt="Enabling windowed mode from the Launch tab in Project Settings"
  sources={{
    light: '/img/animations/windowed-mode/windowed-mode-anim_light.gif',
    dark: '/img/animations/windowed-mode/windowed-mode-anim_dark.gif',
  }}
/>

The setting applies when you open the project from the main window or the system tray.

The project card shows a **Windowed** status chip while the option is enabled.

## When to enable it

Enabling **Windowed editor** adds Godot's `--windowed` option when opening this project. Leave it off to use Godot's normal startup window state.

## Related guides

- [Project Settings](./project-settings.mdx)
- [Godot command-line display options](https://docs.godotengine.org/en/4.4/tutorials/editor/command_line_tutorial.html#display-options)
