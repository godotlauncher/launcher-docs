---
id: system-tray
slug: /guides/system-tray
title: System Tray
description: "Learn how to use the system tray feature in the Godot Launcher for quick access and efficient project management."
tags: [system-tray, launcher, quick-launch, guides]
---

# System Tray

The system tray feature in the Godot Launcher provides a convenient way to manage your Godot projects and access the launcher without keeping the main window open. This guide covers how the system tray works, how to customize its behavior, and how to use it to quickly launch recent projects.

> ![Godot Launcher - Quick Launch from System Tray UI Windows](/img/Quick_Edit_From_System_Tray_Dark.webp)  
> _Image: System tray access on Windows_

---

## Overview of the System Tray

When the Godot Launcher is running, it places an icon in your system tray. This tray icon gives you access to key actions without needing to open the full launcher interface.

:::info

- **Windows**: Left-click opens the launcher window. Right-click opens the tray menu.
- **macOS and Linux**: Both left- and right-click open the tray menu. To reopen the launcher, select **Show Godot Launcher**.
  :::

---

## Launcher Behavior Settings

> ![Launcher Settings - Behavior Tab](/img/launcher-settings-behavior-ui.webp)  
> _Image: Behavior tab in settings affecting system tray options_

You can customize how the launcher interacts with the system tray under **Settings > Behavior**.

### Behavior When Launching a Project

- **Close to System Tray**: Enabled by default. When you launch a project, the launcher minimizes to the tray instead of closing completely.

:::tip
Disable this if you prefer the launcher window to stay open or minimize to the taskbar.
:::

### Startup Behavior

- **Start when computer starts**: Launches Godot Launcher automatically on system boot.
- **Start in System Tray**: When used together with the above, the launcher will start hidden in the tray and not show the main window.

---

## Closing and Reopening the Launcher

Closing the launcher window does not quit the application. It continues to run in the background and can be accessed at any time from the tray icon.

To fully exit the launcher:

1. Right-click the tray icon.
2. Select **Quit** from the menu.

---

## Quick Launch Recent Projects from the System Tray

The tray menu includes a list of the **last three projects** you opened or edited. This makes it easy to launch a project directly, without opening the main window.

:::info
This is especially useful when you're switching between projects often or want to quickly jump back into your latest work.
:::

---

## Summary

The system tray in Godot Launcher helps streamline your workflow by giving quick access to projects and keeping the launcher running unobtrusively in the background. With customizable behavior settings and fast project launching, it’s a lightweight and powerful part of the development experience.
