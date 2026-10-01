---
id: windows-symlink
title: Godot Launcher Symlink Support on Windows
slug: /platform/windows-symlink
description: "Enable symbolic links for Windows project editors to reduce duplicate editor files, with permission requirements and a copy fallback."
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

# Godot Launcher Symlink Support on Windows

On Windows, Godot Launcher can use symbolic links to share an installed Godot editor between projects that select it. Each link points to the installed editor, reducing duplicate editor files.

The launcher stores each project's editor copy or links in a separate environment under `.editor_config` in the editor install location. These files are outside the Godot project folder. Enabling links does not change the size or contents of that project folder.

Windows may request administrator approval when the launcher creates a symlink. Developer Mode can allow symlink creation without elevation. This guide explains the setting and how to check the result.

---

## Why enable Godot Launcher Symlink support?

- Reduce disk usage when several projects use the same installed editor.
- Avoid copying the editor files each time the launcher prepares a project editor.

:::info Existing project editors
Changing the preference does not convert existing copies or links. The launcher uses it when preparing an editor for a new or added project, or when a project's editor is changed or reinstalled.
:::

---

## Requirements on Windows

The launcher first tries to create symlinks without elevation. If Windows denies permission, it requests administrator approval. You can enable **Windows Developer Mode** to allow symlink creation without elevation, or approve the elevation request when needed. If symlink creation fails, the launcher falls back to copying the editor.

The setting is available in [Godot Launcher Settings](../settings/launcher-settings.mdx#behavior-tab).

### Enable Windows Developer Mode

1. Open Windows **Settings**.
2. Search for **Developer Mode**. On Windows 11 25H2 and later, it is under **System > Advanced > For developers**; earlier versions use a **For developers** page.
3. Turn on **Developer Mode**, then confirm the Windows prompt.
4. Restart the machine if Windows requests it.

Developer Mode can allow symlink creation without an administrator prompt. Enabling Developer Mode itself requires administrator access, and device policies may restrict it. See Microsoft's [Developer Mode instructions](https://learn.microsoft.com/windows/advanced-settings/developer-mode).

If your device is managed, ask your administrator which option is permitted.

---

## Turn on Symlink Support in Godot Launcher

<ThemedImage
  className="docs-media-frame"
  alt="Enable editor symlinks in the Behavior settings and confirm the change"
  sources={{
    light: '/img/animations/windows-symlink/windows-symlink-anim_light.gif',
    dark: '/img/animations/windows-symlink/windows-symlink-anim_dark.gif',
  }}
/>

1. Open **Godot Launcher**.
2. Click **Settings** from the sidebar or top-right menu.
3. Select the **Behavior** tab.
4. Under **Editor symlinks**, enable **Use symbolic links for Windows project editors**, then confirm **Enable symlinks**.
5. The preference saves automatically.

The preference controls how project editors are prepared. Downloading an editor release alone does not convert existing project editor copies or links.

---

## Create a project using symlinks

When symlink support is active:

- The launcher tries to create links in the project's separate editor environment that point to the selected installed editor.
- If link creation fails, the launcher copies the editor files into that environment.
- The **Projects** list does not indicate whether an editor uses copies or links.

### Verify the symlink

1. In **Projects**, open the project's folder menu and select **Open Editor Settings Folder**.
2. In File Explorer, navigate one folder up from `editor_data` to the project's editor environment.
3. Type `cmd` in File Explorer's address bar and press Enter to open Command Prompt in that folder.
4. Run `dir /a:l *.exe`. This lists executable files with the reparse-point attribute, including symbolic links. A linked Godot executable is shown with its target path.

If the executable is absent from that listing but appears with `dir *.exe`, the project uses a copy. This can be an existing copy or the fallback after link creation failed. You can continue using the editor; check permissions before the next editor change if you want to use links. See Microsoft's [dir command reference](https://learn.microsoft.com/windows-server/administration/windows-commands/dir) for the listing options.

---

## Troubleshooting Godot Launcher Symlink errors

- **Windows requests administrator approval**: Approve the request if permitted on your device, or enable **Developer Mode** to allow links without elevation. Leave symlink support off if you prefer editor copies.

  <img
    className="docs-media-frame"
    src="/img/UAC_prompt.webp"
    alt="Godot Launcher - UAC Prompt"
  />
- **Corporate or school device restrictions**: Ask your administrator whether Developer Mode or elevation is permitted. Editor copies remain available when symbolic links cannot be created.
- **Antivirus blocks or quarantines the launcher**: Godot Launcher Windows releases are code signed. If Windows or your antivirus flags the launcher, check that the file signature is valid before allowing it. See [Windows release signing](../getting-started/installation.mdx#windows-release-signing) for details.
- **Antivirus blocks or quarantines the symlink target**: Check your antivirus quarantine or protection history. If the blocked file is a Godot editor executable, verify it comes from the official Godot release you installed. Add an exclusion only for the specific executable or symlink target, and avoid excluding the whole launcher install directory unless your antivirus does not support narrower exclusions.

---

## Summary

Symbolic links reduce duplicate files in the launcher's editor environments. They do not change the Godot project folders or the compatibility of editor releases. Use [Change Project Editor Version](../editors/change-project-editor.md) to select a compatible editor for a project.
