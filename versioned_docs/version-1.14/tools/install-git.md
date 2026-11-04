---
id: install-git
sidebar_label: Install Git
title: "Install Git for Godot Launcher"
description: "Install Git, rescan it in Godot Launcher, and check that it is available for creating and importing project repositories."
slug: "/integrations/install-git"
tags:
  - guides
  - git
  - setup-guide
---

# Install Git for Godot Launcher {#installing-git}

Godot Launcher uses your Git installation to create and import repositories and show project Git status. Install Git separately, then rescan it in the launcher.

## Check whether Git is installed

Open a terminal and run:

```bash
git --version
```

If the command is not found, install Git from the [official Git downloads page](https://git-scm.com/downloads) and follow the instructions for your operating system.

## Rescan in Godot Launcher

After installation:

1. Open **Settings > Tools**.
2. Select **Rescan Git** beside Git.
3. Confirm that Git is marked **Available**.

## Set up a project repository {#initialize-a-repository}

Once Git is **Available**, follow [Git setup for Godot projects](./using-git-with-godot-launcher.mdx). That guide explains how to create a repository for a new or existing project, choose a commit identity, and use Git LFS.

If Git remains unavailable after a rescan, see [Troubleshooting](../troubleshooting.md#git).

## Related guides

- [Create a New Godot Project](../projects/create-project.mdx)
- [Add an Existing Project](../projects/add-existing-project.mdx)
- [Project Settings](../projects/project-settings.mdx)
