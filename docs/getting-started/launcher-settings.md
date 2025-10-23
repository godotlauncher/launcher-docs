---
id: launcher-settings
title: Launcher Settings
slug: /getting-started/launcher-settings
description: "Learn how to configure the Godot Launcher using the available settings tabs, including project locations, editor installs, appearance, behavior, tools, and update preferences."
tags: 
  - getting-started
  - launcher-settings
---

# Launcher Settings

The **Godot Launcher** includes a configurable **Settings** section that lets you tailor the launcher to your workflow. This guide covers each settings tab and explains how to adjust default paths, change the appearance, configure behavior, and set up tools like Git and Visual Studio Code.

---

## Projects Tab

![Settings - Projects Tab](/img/launcher-settings-projects-ui.webp)

The **Projects** tab allows you to define the default location where new Godot projects are created.

- **Project Location**: Sets the base directory for newly created projects.
  - This does not affect existing projects already added to the launcher.
  - You can change this path at any time without impacting existing data.

:::info
Changing this location only affects _new_ projects created through the launcher.
:::

:::info
Adding existing projects will not move them to this location
:::

---

## Installs Tab

![Settings - Installs Tab](/img/launcher-settings-installs-ui.webp)

The **Installs** tab lets you choose where Godot editor versions are stored.

- **Editor Installs Location**: Sets the directory where downloaded editor versions are installed.
  - This path is used when installing new Godot versions through the launcher.
  - Existing installations are not moved when you change this setting.

:::tip
It's helpful to store your editors on a fast local drive, especially if you work with multiple Godot versions.
:::

---

## Appearance Tab

![Settings - Appearance Tab Showing the Language Picker](/img/godot-launcher-language-selector.webp)

The **Appearance** tab lets you customize the look and feel of the launcher interface.

- **Theme**: Choose between:

  - Light
  - Dark
  - System (follows your OS setting)

- **Language**: Control the interface language for the launcher UI.
  - The launcher auto-detects your operating system language the first time you sign in (`System` option).
  - You can manually switch between: System (auto detected) and any other available language.
  - Changing the language updates the launcher UI, native menus, and tray entries instantly.

:::note
Right-to-left languages are not available yet, but the localisation system is ready for future releases.
:::

:::info
This setting affects only the Godot Launcher interface—it does not change the language of the Godot editor.
:::

:::tip
Found a string that needs polish or want to help add a new locale? Follow the [translation contribution guide](/contributing/translations) to share feedback or submit improvements.
:::

---

## Behavior Tab

![Settings - Behavior Tab](/img/launcher-settings-behavior-ui-win.webp)

The **Behavior** tab defines how the launcher behaves when launching projects or starting with your system.

- **Project Confirmation**: Toggle to confirm before removing a project.
- **Project Launch Action**:
  - _Nothing_: The launcher stays open.
  - _Minimize_: Launcher minimizes after launch.
  - _Close to System Tray_: Default behavior—closes to tray after project launch.
- **Symlink Support** (Windows only – added in 1.4.0) <br/> [See the guide on windows symlink support](/guides/windows-symlink)
  - _Enabled_ (default: disabled): Instead of copying the Godot Editor into each project, the launcher creates a symlink to the installed Editor. This reduces disk usage, but requires the user to have **Administrator privileges** and **Developer Mode** enabled.  
  - :::info
      Changing this setting only affects **new projects**. Existing projects are not automatically migrated; they will switch to symlinks or copies the next time their selected release changes. [read more](/guides/windows-symlink)
    :::


- **Startup Preference**:
  - _Start when computer starts_: Auto-starts with your system.
  - _Start in tray_: Starts hidden in the system tray.

  - :::tip
    Enabling "Start in tray" keeps your workspace clean and lets you access the launcher only when needed.
    :::



---

## Tools Tab

> ![Settings - Tools Tab](/img/launcher-settings-tools-ui.webp)

The **Tools** tab manages integration with development tools like Git and Visual Studio Code.

- **Git**:
  - Shows whether Git is detected.
  - Displays the installed version.
- **Visual Studio Code**:
  - Detects the installed path automatically.
  - Confirms installation for use with GDScript and .NET.

:::tip Note On Visual Studio Code
If you have a non standard installation location, you can manually choose there Visual Studio Code is located.
:::

:::info
The launcher uses this information to configure external editor support, also for .NET projects using C#.
:::

---

## Updates Tab

![Settings - Updates Tab](/img/launcher-settings-updates-ui.webp)

The **Updates** tab controls how the launcher checks for updates.

- **Automatically check for updates**: Enabled by default.
- **Manual Check**: Click **Check for updates** to check immediately.

:::tip
Keeping this enabled ensures you always have the latest features and fixes.
:::

---

## Summary

The Settings section of the Godot Launcher is designed to be simple yet powerful. It helps you:

- Customize default paths for projects and editors.
- Tweak the launcher's look and startup behavior.
- Integrate external tools like Git and VS Code.
- Stay up to date with new launcher releases.

Spend a few minutes configuring it to match your workflow—you’ll save time in the long run.
