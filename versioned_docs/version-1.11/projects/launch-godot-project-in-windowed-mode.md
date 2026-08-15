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

Use windowed mode when you want a project to open in a regular window every time.

## Change the project setting

1. Open **Projects**.
2. Click the project's settings button.
3. Open **Launch**.
4. Enable or disable **Use windowed mode**.
5. Click **Update**.

<ThemedImage
  className="docs-media-frame"
  alt="Enabling windowed mode from the Launch tab in Project Settings"
  sources={{
    light: '/img/docs/1.11/animations/windowed-mode/windowed-mode-anim_light.gif',
    dark: '/img/docs/1.11/animations/windowed-mode/windowed-mode-anim_dark.gif',
  }}
/>

The setting applies when you open the project from the main window or the system tray.

The project card shows a **Windowed** status chip while the option is enabled.

## When to enable it

Godot 4.4 and later can remember the editor window state. Leave **Use windowed mode** off when you want Godot to restore that state. Enable it when you always want this project to open in a regular window.

## Related guides

- [Project Settings](./project-settings.mdx)
- [Godot command-line display options](https://docs.godotengine.org/en/4.4/tutorials/editor/command_line_tutorial.html#display-options)
