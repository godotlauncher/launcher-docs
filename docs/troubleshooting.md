---
id: troubleshooting
title: Troubleshooting
slug: /troubleshooting
description: "Resolve Godot Launcher installation, editor, project, Git, code editor, update, and system tray problems."
tags:
  - troubleshooting
  - help
  - support
---

import ThemedImage from '@theme/ThemedImage';

# Troubleshooting

Find the problem that matches what you see, try the listed actions, then follow the linked guide when you need more detail.

## Installation and startup

### Windows blocks or warns about the installer

Download the installer from the official [Godot Launcher download page](https://godotlauncher.org/download). To check its signature:

1. Right-click the downloaded `.exe` and choose **Properties**.
2. Open **Digital Signatures**.
3. Select the signature and confirm that Windows reports it as valid.

For winget installation and upgrade problems, see [Installing Godot Launcher with winget](./platform/windows-winget.mdx#troubleshooting-tips).

### Linux package or startup problems

- If a `.deb` installation reports missing dependencies, run `sudo apt --fix-broken install`.
- If an AppImage does not start, confirm that FUSE is available and that the file is executable.
- If the error mentions `chrome-sandbox` or the Chromium sandbox, see [Running Godot Launcher in No-Sandbox Mode on Linux](./platform/linux-no-sandbox.md).

See [Installation](./getting-started/installation.mdx) for the normal steps for each platform.

## Godot editor installation and availability

### The editor list cannot refresh

If a saved editor list is available, you can continue using it. Wait a few minutes, check your connection, then select **Refresh** again.

<ThemedImage
  className="docs-media-frame"
  alt="Install Godot Editor message explaining that the saved editor list is still available"
  sources={{
    light: '/img/screenshots/screen_installs_catalog_error_light.webp',
    dark: '/img/screenshots/screen_installs_catalog_error_dark.webp',
  }}
/>

If no saved list is available, the launcher needs a working connection before it can show official releases.

### An editor download fails

Check your connection and select the same Standard or .NET action again. If GitHub is limiting requests or temporarily unavailable, wait a few minutes before retrying.

### An installed editor is unavailable

Open **Installs** and use the action that matches the problem:

- **Retry** checks the saved location again after you restore or reconnect it.
- **Reinstall** downloads an official release again.
- **Remove** removes an unavailable entry from the launcher.

Removing a custom editor registration does not delete its files. See [Installing a Godot Editor](./editors/install-editor.mdx) or [Custom-Built Godot Editors](./editors/custom-editors.mdx#troubleshooting) for more detail.

## Project editor selection

### An added project needs a Godot editor

When the project requests a version that is not installed, choose one of the available actions:

- Download the requested official editor.
- Use a compatible installed editor.
- Add the project now and choose an editor later.

<ThemedImage
  className="docs-media-frame"
  alt="Editor version required dialog with download and compatible editor choices"
  sources={{
    light: '/img/screenshots/screen_projects_editor_resolution_options_light.webp',
    dark: '/img/screenshots/screen_projects_editor_resolution_options_dark.webp',
  }}
/>

If you add the project without an editor, **Edit in Godot** remains unavailable until you install, register, or choose a compatible editor.

### A project card shows an editor warning

- If the Godot editor is missing, reconnect its location, reinstall it, or choose another editor from the same major version in **Project Settings**.
- If `project.godot` is missing, restore the project folder or remove the entry and add the project again from its current location.
- If the project needs a custom build, restore that build or register its replacement.

Godot Launcher does not open a project with a different major Godot version. Follow the [official Godot upgrading guide](https://docs.godotengine.org/en/stable/tutorials/migrating/upgrading_to_godot_4.html) before changing major versions.

## Code editors

### Visual Studio Code or VSCodium is not found

1. Confirm that the code editor is installed.
2. Open **Settings > Code Editors** and select **Rescan** on its card.
3. If it is installed outside the usual locations, select **Edit** and choose its executable or application bundle.
4. Keep the editor enabled if you want to choose it for new projects.

### A selected code editor is unavailable when opening a project

Godot can still open the project. Choose the result you want:

<ThemedImage
  className="docs-media-frame"
  alt="Warning with options to launch, stop using the missing code editor, or open settings"
  sources={{
    light: '/img/screenshots/screen_projects_code_editor_launch_warning_light.webp',
    dark: '/img/screenshots/screen_projects_code_editor_launch_warning_dark.webp',
  }}
/>

- **Launch anyway** opens Godot without changing the project.
- **Disable & Launch** stops using this code editor for the project, then opens Godot.
- **Open settings** lets you find the editor again or choose its location.

### Godot does not open scripts in the selected code editor

Open **Project Settings > Code Editor** and select **Reset config**. This restores the project's code editor setup without changing the global Code Editor Settings.

If the launcher cannot read a managed `.vscode` file, it keeps the original as a timestamped `.bad` copy and creates a valid replacement. The warning lists the recovered files so you can compare or restore your custom content.

See [Visual Studio Code Setup](./tools/vscode-setup.md) or [VSCodium Setup](./tools/vscodium-setup.md) for the files each editor uses.

## Git

### Git is not found

Install Git, then open **Settings > Tools** and select **Rescan tools**. See [Installing Git](./tools/install-git.md) for the normal setup.

### Git needs a name and email

The first commit for a new project needs an author identity. Choose:

- **Add Git identity** to enter the missing values. Save them for this project only or for all repositories on the computer.
- **Skip initial commit** to create the project and repository without the first commit.

You can create the first commit later after configuring Git. See [Using Git With Godot Launcher](./tools/using-git-with-godot-launcher.mdx) for the files prepared by the launcher.

### Git appears inactive for a project inside a larger repository

Godot Launcher detects Git only when the project folder has its own `.git` entry. Do not select **Initialize Git** when the project is already inside a larger repository, because this may create a second repository inside it.

## System tray

System tray support varies across Linux desktops. When the launcher cannot use the tray:

- Closing the main window quits the launcher instead of hiding it.
- **Close to system tray** leaves the window visible after opening a project.
- A request to start hidden opens a normal window.

<ThemedImage
  className="docs-media-frame"
  alt="Linux Preferences warning that tray actions will keep the launcher window visible"
  sources={{
    light: '/img/screenshots/screen_onboarding_preferences_linux_tray_unavailable_light.webp',
    dark: '/img/screenshots/screen_onboarding_preferences_linux_tray_unavailable_dark.webp',
  }}
/>

The saved preference does not change. The launcher can use it again when a tray becomes available. See [System Tray](./settings/system-tray.mdx) for normal tray behavior.

## Updates and platform options

- For launcher update download or retry problems, see [Manage Launcher Updates](./updates/manage-launcher-updates.mdx#errors-and-retry).
- For manual updates on rpm-ostree systems, see [Manage Launcher Updates](./updates/manage-launcher-updates.mdx#manual-update-required-on-rpm-ostree).
- For Windows editor link or UAC problems, see [Godot Launcher Symlink Support on Windows](./platform/windows-symlink.md#troubleshooting-godot-launcher-symlink-errors).
- For winget package problems, see [Installing Godot Launcher with winget](./platform/windows-winget.mdx#troubleshooting-tips).

## Still need help?

- Visit [Help & Support](./support/help-and-support.md) for official links.
- Join the [community Discord](./support/community.md) to ask questions and share context.
- Open a GitHub issue from the launcher project if you have a reproducible bug.
