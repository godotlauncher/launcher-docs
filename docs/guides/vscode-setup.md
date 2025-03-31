---
id: vscode-setup
title: "Visual Studio Code Setup"
description: "Configure Visual Studio Code to automatically use with Godot Launcher projects."
slug: "/guides/vscode"
tags:
  - guides
  - vscode
  - editor-setup
---

# Visual Studio Code Setup

## Why Use Visual Studio Code?

[Visual Studio Code](https://code.visualstudio.com/) is a popular, lightweight, and extensible code editor. It works well with GDScript, C#, and integrates easily with version control systems like Git.

## Installing Visual Studio Code

Download and install VS Code from the official site:

[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

## Recommended Extensions

:::success TIP
If you create a project in Godot Launcher with the "Use VS Code" option checked, these extensions are automatically recommended when you open the project in VS Code. You don’t need to install them manually.
:::

To improve your experience when working with Godot projects, the following extensions are recommended:

- **Godot Tools** – Adds GDScript support and integration with the Godot editor.
- **C#** (if you're using C# in your project)
- **GitLens** – Enhances Git functionality within the editor.
- **Godot Theme** – Provides syntax highlighting and a theme tailored for GDScript.

:::info
If you use VS Code for other types of work besides game development, it is recommended to use [profiles](https://code.visualstudio.com/docs/editor/profiles) in VS Code. Profiles allow you to customize your editor settings, extensions, and configurations for different workflows, keeping your game development setup separate from other projects.
:::

To install extensions manually, open the Extensions sidebar (`Ctrl+Shift+X`) and search by name.

## Setting Up Godot Integration

:::success TIP
Godot Launcher automatically sets up the integration between the Godot editor and VS Code when you create a project with the "Use VS Code" option checked. This includes configuring the Godot executable path in the Godot editor and setting up the necessary settings in VS Code.
:::

If you prefer to set up the integration manually, you can follow the instructions provided by the **Godot Tools** extension:

1. Open VS Code.
2. Install the **Godot Tools** extension.
3. Press `Ctrl+Shift+P` to open the Command Palette.
4. Search for `Godot: Set Godot Executable Path` and select it.
5. Browse to the Godot executable you want to use.
   > For projects created with Godot Launcher, it is recommended to use the path where the launcher opens the project from. You can find this path by going to the project screen, clicking the "More" menu (the three vertical dots), selecting "Open Editor Settings Folder," and then navigating up one folder to locate the Godot engine binaries.

> For more details on manual setup, refer to the documentation of the **Godot Tools** extension.

## Launching VS Code from Godot

If VS Code is set up correctly (which is done automatically when using the launcher), it will be used as the default editor for editing scripts (GDScript or C#). When you edit a script in the Godot editor, VS Code will automatically open as the editor.

Additionally, when running a scene from VS Code, it will automatically execute the scene if the Godot editor path is correctly configured.

## Automatic Build and Launch Configuration for .NET

When using the .NET version of Godot, the Godot Launcher will automatically add the necessary build and launch configurations to your VS Code project. This ensures that you can build and debug your C# scripts seamlessly within VS Code without requiring additional setup.

These configurations include:

- A build task to compile your C# scripts.
- A launch configuration to run and debug your Godot project directly from VS Code.

You can find these configurations in the `.vscode` folder within your project directory. If you need to customize them, you can edit the `tasks.json` and `launch.json` files in that folder.
