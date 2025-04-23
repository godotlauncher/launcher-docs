---
id: create-project
slug: /getting-started/create-project
title: Creating a Project
description: "Learn how to create your first project with Godot Launcher."
tags:
  - godot-project-setup
  - getting-started
  - setup-guide
---

# Create Your First Project

You can create a new project and start editing in seconds, or choose to add an existing project to start using it with Godot Launcher.

## Create a new Project

![Godot Launcher - Create New Project](/img/launcher-create-project-ui-anim.gif)

1. Navigate to the **Projects** section from the left-hand navigation menu.
2. Click **Create Project** and follow the prompts to set up a new project.

## Add an Existing Project

Click **Add** and select the folder containing your project `project.godot`.

:::important
When adding an existing project, the launcher does not move the project files. Instead, it creates a link to your existing location and selects the most compatible installed editor version and generates the necessary editor settings.
:::

:::note on VSCode and Git
**Visual Studio Code**:
If your existing project contains a `.vscode` folder, it will automatically attempt to configure settings in the editor for Visual Studio Code as text editor. See [Visual Studio Code guide](/guides/vscode-setup-for-godot) for more details.

**Git**:
Adding a project will not automatically initialize Git for projects that do not already use Git. See [Git guide](/guides/using-git-with-godot-launcher) for more details.
:::

Once completed, your project will appear in the **Projects** section, ready for you to start working on.

:::tip
To launch a project and start editing with Godot, simply click the project's name in the **Projects** list.
:::
