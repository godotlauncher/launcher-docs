---
id: install-git
title: "Installing Git"
description: "Install Git and make it available for new and existing Godot Launcher projects."
slug: "/integrations/install-git"
tags:
  - guides
  - git
  - setup-guide
---

# Installing Git

Install Git before asking Godot Launcher to create a repository for a project.

## Check whether Git is installed

Open a terminal and run:

```bash
git --version
```

If the command is not found, install Git from the [official Git downloads page](https://git-scm.com/downloads) and follow the instructions for your operating system.

## Rescan in Godot Launcher

After installation:

1. Open **Settings > Tools**.
2. Click **Rescan tools**.
3. Confirm that Git is marked **Available**.

## Initialize a repository

- For a new project, open **Projects > New Project** and enable **Initialize Git Repository**.
- For an existing project, open its settings and choose **Source Control > Initialize Git**. This creates the repository without changing or committing project files.

See [Using Git With Godot Launcher](./using-git-with-godot-launcher.mdx) for the different setup results and generated files.

If Git remains unavailable after a rescan, see [Troubleshooting](../troubleshooting.md#git).

## Related guides

- [Create a New Godot Project](../projects/create-project.mdx)
- [Add an Existing Project](../projects/add-existing-project.mdx)
- [Project Settings](../projects/project-settings.mdx)
