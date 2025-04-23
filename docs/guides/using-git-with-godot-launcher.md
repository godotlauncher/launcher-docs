---
id: using-git
title: "Using Git With Godot Launcher"
description: "Learn how Git is used and configured in your Godot Launcher projects."
slug: "/guides/using-git-with-godot-launcher"
tags:
  - guides
  - git
  - version-control
---

# Using Git With Godot Launcher

## What is Git?

Git is a distributed version control system. It helps you track changes to files over time. Whether you're working alone or in a team, Git makes it easier to manage your work, recover from mistakes, and collaborate smoothly.

## Why Use Git With Godot?

Using Git with Godot projects makes your development safer and more efficient. When you add Git to a Godot project, you can:

- Track changes in both code and assets
- Revert to earlier versions when needed
- Collaborate with others without overwriting work

:::info
Even if you're working solo, it's a good idea to use a Git hosting service like [GitHub](https://github.com) to store backups of your Godot projects.
:::

## Git in Godot Launcher

Godot Launcher automatically detects Git and gives you the option to initialize the new Godot project with Git when created.

:::info
Git is detected using this background shell command:

~~~bash
$ git --version
git version 2.39.5 (Apple Git-154)
~~~
:::

### Create a New Godot Project With Git

When Git is detected, the `New Project` UI will show an option to enable Git:
![Godot Launcher - New Project With Git UI](/img/launcher-new-project-ui.webp)

:::info
You can see if Git is detected in `Settings` → `Tools`. [More info here](/getting-started/launcher-settings/#tools-tab)
:::

If you choose to enable Git, the launcher will automatically run the following commands:

~~~bash
git init
git add .
git commit -m "initial commit"
git branch -m main
~~~

This sets up your Godot project with Git and creates the first commit. It's a clean starting point that you can use later to reset your project if needed.

:::warning
If Git is installed but your `user.name` and `user.email` are not set, the launcher won’t be able to make the first commit.
No changes are lost, but you’ll need to [configure Git](#git-user-not-configured) to start using it.
:::

### What Happens if Git Is Not Installed?

If Git is not installed, Godot Launcher still creates your project, but shows a warning. Git features are disabled, and no Git repository is initialized.

This is what the UI looks like when Git is missing:
![Godot Launcher - New Project No Git UI](/img/godot-launcher-new-project-no-git-ui.webp)

:::info
To get the most out of version control in Godot, [install Git using this guide](/guides/install-git).
:::

## Git User Not Configured?

If Git is installed but the `user.name` and `user.email` values are missing, the first commit in your Godot Git project will fail.

:::warning
You need to have set a `user.name` and `user.email` to create commits.
:::

To fix this, run the following commands from terminal:

~~~bash
cd /path/to/your/project/directory
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
~~~

You can also set these values for just one project by removing `--global`.

---

## Related Links

- [Create a New Godot Project](/getting-started/create-project)
- [Install Git](/guides/install-git)
- [Launcher Settings](/getting-started/launcher-settings)
- [VS Code Setup](/guides/vscode-setup-for-godot)
- [Editor Settings](/guides/editor-settings)



