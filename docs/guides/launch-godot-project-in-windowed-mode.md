---
id: launch-godot-project-in-windowed-mode
title: "Launch Godot Project in Windowed Mode"
description: "Learn how to enable or disable windowed mode for each project in Godot Launcher 1.2.0 and take full advantage of Godot 4.4's window size memory."
slug: "/guides/launch-godot-project-in-windowed-mode"
tags:
  - godot
  - godot-project-setup
  - quality-of-life
  - open-source
---


# Launch Godot Project in Windowed Mode

**New in Godot Launcher 1.2.0**

## Overview

Before Godot 4.4, the editor would always launch in fullscreen unless the `-w` flag was passed to force windowed mode. To avoid fullscreen launches (especially annoying on ultrawide displays), Godot Launcher used to always launch the editor with `-w`.

Starting with Godot 4.4, this is no longer necessary. The editor now remembers the window state. Godot Launcher 1.2.0 reflects this by:

- Defaulting to **not** pass `-w` (non-windowed mode).
- Providing a **per-project option** to enable windowed mode if desired.

This gives users full control over how projects are launched.
## How to Enable Windowed Mode for a Project
![Change per project to open in windowed mode](/img/godot-launcher-project-windowed-mode-ui-anim.gif)

1. Open **Godot Launcher**.
2. Find your project in the **Project View**.
3. Click the **3-dot menu** next to the project.
4. Click **Open Windowed** to toggle the setting.

When enabled, Godot Launcher will pass `-w` when launching the editor for that project. The setting is saved per project.

## Badge Indicator

If a project is set to launch in windowed mode, you’ll see a **(w)** badge next to it in the project list. Hovering over the badge shows a tooltip explaining that the project will launch with `-w`.

## Where It Works

The windowed mode setting is respected no matter how you launch:

- From the **main Godot Launcher window**
- From the **Godot System Tray** menu

## When to Use This

If you prefer the editor to always open in a smaller window, you can enable this option. Otherwise, you can let the Godot Editor manage the window size automatically.

For **Godot 4.4 and newer**, you may want to leave this off and let the editor restore your last layout automatically.

## Requirements

- **Godot Launcher** version 1.2.0 or later
- **Godot Editor** version 4.4 or newer (for window memory support)

## Related

- [Download Godot Launcher](https://godotlauncher.org/download/)
- [Project Badges and Tooltips](/project-badges/)
- [Managing Godot Editor Versions](/guides/change-project-editor/)

---

This feature improves quality of life and gives you more flexibility when launching Godot projects.
