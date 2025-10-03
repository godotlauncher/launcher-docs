---
id: windows-symlink
title: Godot Launcher Symlink Support on Windows
slug: /guides/windows-symlink
description: "Learn how to enable the Godot Launcher Symlink feature on Windows to reuse editor installs, save disk space, and streamline updates."
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

# Godot Launcher Symlink Support on Windows

The **Godot Launcher Symlink** feature lets Windows reuse a single installed editor across every project. Instead of copying the editor into each project folder, the launcher creates a Windows symlink that points back to the original install. The result is faster installs, smaller project directories, and consistent editor behavior from one release to the next.

Because Windows treats symlink creation as an administrative task, you need to prepare your system before enabling the feature to avoid annoying UAC prompts. This guide walks through the prerequisites, the launcher setting that unlocks symlinks, and how to confirm everything is working.

---

## Why enable Godot Launcher Symlink support?

- Reduce disk usage by keeping only one copy of each Godot editor release.
- Speed up new project setup because the launcher links instead of copying large files.
- Keep projects aligned with the same editor build, making it easier to switch versions or follow the [Change Project Editor Version](/guides/change-project-editor) workflow.

:::tip
Symlink support affects only new projects or projects that switch to a new release. Existing projects keep their current editor copy or symlink until you change the selected release.
:::

---

## Requirements on Windows

The launcher needs permission to create symlinks on your behalf. Make sure these requirements are in place before enabling the feature to avoid UAC prompts:

- **Windows Developer Mode** enabled.
- **Administrator privileges** for the Windows account you use with Godot Launcher.
- Godot Launcher 1.4.0 or later, where the setting first appears in the [Launcher Settings](/getting-started/launcher-settings/#behavior-tab).

### Enable Windows Developer Mode

1. Open **Settings**.
2. Go to **System → For Developers** (older builds may list **Privacy & security → For developers**).
3. Turn on **Developer Mode**, then confirm the Windows prompt.
4. Restart the machine if Windows requests it.

Developer Mode removes the requirement for the launcher to request and elevate commands to Administrator every time you create a symlink.

### Confirm Administrator rights

- Open the **Start** menu, type `Command Prompt`, right-click, and choose **Run as administrator**.
- Run `whoami /groups` and verify `BUILTIN\Administrators` is listed.
- Close the `Command Prompt` window and launch Godot Launcher normally.

:::warning
If your Windows account cannot elevate or Developer Mode is unavailable (for example, on managed corporate devices), the launcher falls back to copying the editor instead of creating symlinks.
:::

---

## Turn on Symlink Support in Godot Launcher

![Toggle Editor Symlink Gif](/img/windows_symlink_settings.gif)

1. Open **Godot Launcher**.
2. Click **Settings** from the sidebar or top-right menu.
3. Select the **Behavior** tab.
4. Toggle **Symlink Support** to **Enabled**.
5. The preference saves automatically.

The Godot Launcher Symlink preference applies to every Godot release you install moving forward. When you add a new release or update an existing one, the launcher reuses the same binary for all projects.

:::info
Switching the toggle only affects projects created (or reconfigured) after the change. To migrate an older project, switch it to a different editor release and then back again so the launcher recreates the link.
:::

---

## Create a project using symlinks

When symlink support is active:

- New projects reference the editor under your preferred folder for `Install Location` instead of copying it into the project folder.
- The **Projects** list shows no difference between copies and symlink editors. Everything looks the same as it did before.
- Downloading a new editor release happens once, even if you create multiple projects from it or copies are used (no change).

### Verify the symlink

1. Create a new project from the launcher.
2. Click **Open Editor Settings Folder**, then navigate one folder up.
3. Right-click the Godot executable, choose **Properties**, and confirm the **Type** reads *Symbolic (.exe)*.
4. Launch the project normally to ensure the editor opens as expected.

If Windows shows the type as `Application (.exe)` instead of a `symlink (.exe)`, double-check Developer Mode and administrator permissions, then recreate the project, remove and re-add the project, or switch the Godot release version.

---

## Troubleshooting Godot Launcher Symlink errors

- **UAC prompt appears every time a change in release happens**: Make sure you have enabled `Developer Mode`.
![Godot Launcher - UAC Prompt](/img/UAC_prompt.webp)
- **Corporate or school device restrictions**: Contact your administrator about enabling Developer Mode or request temporary elevation. Without it, symlink creation is blocked for security reasons.
- **Antivirus quarantines the symlink**: Add the launcher install directory to your antivirus exclusion list so the symbolic link target remains accessible.

---

## Summary

With the Godot Launcher Symlink feature configured, Windows projects stay lightweight while sharing a single editor install. Keep Developer Mode enabled, leave the launcher toggle on, and reuse the same releases across every project. From here you can explore other workflow optimizations, like fine-tuning [Launcher Settings](/getting-started/launcher-settings) or [changing editor versions](/guides/change-project-editor) per project.
