---
id: windows-symlink
sidebar_label: Windows Editor Links
title: Save Disk Space with Godot Editor Links on Windows
slug: /platform/windows-symlink
description: "Save disk space with optional Godot editor symbolic links on Windows. Enable the setting, understand permission prompts, and check whether an editor uses links."
tags:
  - guides
  - godot
  - editor-version
  - project-settings
  - windows-only
keywords:
  - Godot Launcher Symlink
  - Windows symlink support
  - Godot Launcher
---

import ThemedImage from '@theme/ThemedImage';

# Save Disk Space with Godot Editor Links on Windows {#godot-launcher-symlink-support-on-windows}

On Windows, Godot Launcher can use symbolic links to share an installed Godot editor between projects that select it. This reduces duplicate editor files and avoids copying them when preparing a project editor. Symbolic links are optional and **off by default**.

<a id="why-enable-godot-launcher-symlink-support"></a>

Each project's editor copy or links are stored in a separate environment under `.editor_config` in the [editor install location](../settings/editor-installs-location.mdx). They are outside the Godot project folder, so enabling links does not change that folder's contents or size.

## Enable editor links {#turn-on-symlink-support-in-godot-launcher}

1. Open **Settings > Behavior** in Godot Launcher.
2. Under **Editor symlinks**, select **Use symbolic links for Windows project editors**.
3. Confirm with **Enable symlinks**. The preference saves automatically.

<ThemedImage
  className="docs-media-frame"
  alt="Enable editor symlinks in the Behavior settings and confirm the change"
  sources={{
    light: '/img/animations/windows-symlink/windows-symlink-anim_light.gif',
    dark: '/img/animations/windows-symlink/windows-symlink-anim_dark.gif',
  }}
/>

:::info Existing project editors keep their files
Changing the preference does not convert existing copies or links. It applies when the launcher prepares an editor for a new or added project, or when a project's editor is changed or reinstalled.
:::

To return to editor copies, clear the same checkbox and confirm with **Disable symlinks**. Existing links remain until the project's editor is changed or reinstalled.

## Windows permissions {#requirements-on-windows}

The launcher first tries to create links without administrator approval. If Windows denies permission, it requests approval through User Account Control (UAC). If link creation fails, the launcher falls back to copying the editor files.

<img
  className="docs-media-frame"
  src="/img/UAC_prompt.webp"
  alt="Windows User Account Control prompt requesting administrator approval"
/>

[Windows Developer Mode](https://learn.microsoft.com/windows/advanced-settings/developer-mode) can allow link creation without an administrator prompt. On a managed device, ask your administrator whether Developer Mode or elevation is permitted. You can leave editor links off and use copies.

### Enable Windows Developer Mode

1. Open Windows **Settings** and search for **Developer Mode**.
2. Turn on **Developer Mode** and confirm the Windows prompt.

On Windows 11 25H2 and later, the setting is under **System > Advanced > For developers**. Earlier versions use a **For developers** page. Enabling Developer Mode requires administrator access, and device policies may restrict it.

<a id="create-a-project-using-symlinks"></a>

## Check whether an editor uses links {#verify-the-symlink}

The **Projects** list does not indicate whether an editor uses copies or links. To check:

1. In **Projects**, open the project's folder menu and select **Open Editor Settings Folder**.
2. In File Explorer, go up one folder from `editor_data` to the project's editor environment.
3. Type `cmd` in File Explorer's address bar and press Enter.
4. Run `dir /a:l *.exe` in Command Prompt.

The command lists executable files with the reparse-point attribute, including symbolic links. A linked Godot executable appears with its target path. See Microsoft's [dir command reference](https://learn.microsoft.com/windows-server/administration/windows-commands/dir) for the listing options.

If the executable appears with `dir *.exe` but not with `dir /a:l *.exe`, it is a copy. This may be an existing copy or the fallback after link creation failed. You can continue using it. If you want future editor changes to use links, check the [Windows permissions](#requirements-on-windows).

## Troubleshooting {#troubleshooting-godot-launcher-symlink-errors}

- **Windows keeps requesting administrator approval:** Enable Developer Mode if your device permits it, approve the requests, or turn editor links off to use copies for future editor changes.
- **Security software blocks the launcher or a Godot executable:** Check its protection history to identify the file. Follow the [Windows release signing guidance](../getting-started/installation.mdx#windows-release-signing) for the launcher, and verify that a blocked Godot editor came from the official release you installed before allowing it.

<a id="summary"></a>

To select another editor version for a project, see [Change a Project's Godot Version](../editors/change-project-editor.md).
