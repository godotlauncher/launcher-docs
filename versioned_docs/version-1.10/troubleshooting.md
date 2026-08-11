---
id: troubleshooting
title: Troubleshooting
slug: /troubleshooting
description: "Find the right Godot Launcher guide when installation, editor paths, project launch, Git, VS Code, updates, or platform-specific behavior needs attention."
tags:
  - troubleshooting
  - help
  - support
---

# Troubleshooting

Use this page as a starting point when something in Godot Launcher is not behaving as expected. The detailed steps live in the relevant workflow guides so each fix stays close to the feature it supports.

## Installation and startup

- **Windows install or upgrade issues**: See [Installing Godot Launcher with winget](./platform/windows-winget.mdx#troubleshooting-tips).
- **Linux AppImage startup or Chromium sandbox errors**: See [Running Godot Launcher in No-Sandbox Mode on Linux](./platform/linux-no-sandbox.md).
- **General installation steps by platform**: See [Installation](./getting-started/installation.mdx).

## Editors and project launch

- **No editor is installed yet**: Start with [Installing Godot Editor](./editors/install-editor.mdx).
- **A project asks for an editor that is not installed**: See [Add an Existing Project](./projects/add-existing-project.mdx#missing-editor-resolution).
- **A project has a missing or invalid editor path**: See [Change Project Editor Version](./editors/change-project-editor.md#missing-or-invalid-editor-paths).
- **A custom-built Godot editor cannot be registered or launched**: See [Custom-Built Godot Editors](./editors/custom-editors.mdx#troubleshooting).

## Git and Visual Studio Code

- **Git is missing or not detected**: See [Installing Git](./tools/install-git.md).
- **Git cannot create the first commit**: See [Using Git With Godot Launcher](./tools/using-git-with-godot-launcher.mdx#git-user-not-configured).
- **VS Code is missing, moved, or not detected**: See [Visual Studio Code Setup for Godot](./tools/vscode-setup.md#enable-vs-code-from-the-launcher).
- **VS Code config files were invalid and recovered**: See [Visual Studio Code Setup for Godot](./tools/vscode-setup.md#recover-from-invalid-vs-code-config-files).

## Settings and updates

- **Tool actions are disabled in project menus**: See [Project Tool Toggles](./projects/project-tool-toggles.mdx#troubleshooting).
- **Launcher update download or retry problems**: See [Manage Launcher Updates](./updates/manage-launcher-updates.mdx#errors-and-retry).
- **Manual update is required on rpm-ostree systems**: See [Manage Launcher Updates](./updates/manage-launcher-updates.mdx#manual-update-required-on-rpm-ostree).
- **System tray behavior is confusing**: See [System Tray](./settings/system-tray.mdx).

## Platform-specific behavior

- **Windows symlink setup or UAC prompts**: See [Godot Launcher Symlink Support on Windows](./platform/windows-symlink.md#troubleshooting-godot-launcher-symlink-errors).
- **winget cannot find or update the package**: See [Installing Godot Launcher with winget](./platform/windows-winget.mdx#troubleshooting-tips).
- **Linux sandbox workaround questions**: See [Running Godot Launcher in No-Sandbox Mode on Linux](./platform/linux-no-sandbox.md#troubleshooting).

## Still need help?

- Visit [Help & Support](./support/help-and-support.md) for official links.
- Join the [community Discord](./support/community.md) to ask questions and share context.
- Open a GitHub issue from the launcher project if you have a reproducible bug.
