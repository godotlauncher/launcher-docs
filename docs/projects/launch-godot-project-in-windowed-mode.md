---
id: launch-godot-project-in-windowed-mode
title: "Launch Godot Project in Windowed Mode"
description: "Choose whether Godot Launcher requests windowed mode when opening a project."
slug: "/projects/launch-godot-project-in-windowed-mode"
tags:
  - godot
  - godot-project-setup
  - quality-of-life
---

import ThemedImage from '@theme/ThemedImage';

# Launch a Godot Project in Windowed Mode

Enable **Windowed editor** in Godot Launcher to request a regular editor window with Godot's `--windowed` option.

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

Leave **Windowed editor** off to use Godot's normal startup window state. Enable it to request windowed mode each time the launcher opens this project.

## Related guides

- [Project Settings](./project-settings.mdx)
- [Launch Godot in a Terminal](./launch-godot-in-terminal.mdx)
- [Godot command-line display options](https://docs.godotengine.org/en/4.4/tutorials/editor/command_line_tutorial.html#display-options)
