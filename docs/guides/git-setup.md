---
id: git-setup
title: "Git Setup"
description: "Learn how to configure Git for version control in your Godot Launcher projects."
slug: "/guides/git"
tags:
  - guides
  - git
  - version-control
---

# Git Setup

### What is Git?

Git is a distributed version control system that tracks changes to your project’s files over time. Whether working alone or in a team, Git helps manage code history, collaborate effectively, and recover from mistakes.

## Why Use Git?

Using Git with your Godot projects makes development safer and more organized. It allows you to:

- Track changes across code and assets

- Revert to earlier versions if needed

- Collaborate without overwriting each other’s work

> It is recommended to use a Git hosting service like GitHub to keep external backups—even for solo projects.

## Installing Git
To check if Git is already installed, open a terminal and run:

```
git --version
```

If the command is not recognized, Git is not installed.

> Note: Godot Launcher works without Git, but it will not automatically create a repository for new projects.

## Install Git

To install Git, download it from [https://git-scm.com](https://git-scm.com/downloads).

:::warning
After installing Git for the first time, you need to configure your name and email address. This is required for Git to track changes properly. Run the following commands in your terminal:

```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

You can also set these configurations per project by omitting the `--global` flag.
:::
