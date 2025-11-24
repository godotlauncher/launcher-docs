---
id: add-existing-project
slug: /getting-started/add-existing-project
title: Add an Existing Project
description: "Learn how to import an existing Godot project into Godot Launcher and how the launcher selects the right editor version."
tags:
  - getting-started
  - project-import
  - godot-project-setup
---

# Add an Existing Project

If you already have a Godot project, you can bring it into **Godot Launcher** instead of starting fresh.

You can add projects in two ways:

![Projects View showing Add button](/img/screenshots/screen_projects_view_dark.webp)

- **Add button**: Click **Add** in the **Projects** screen and select the folder containing your project’s `project.godot` file.

![Projects View - Drop Overlay](/img/screenshots/screen_projects_drop_overlay_dark.webp)

- **Drag and drop**: Open the **Projects** screen and drag one or more `project.godot` files onto the window. Each project imports automatically, and a progress indicator shows how many remain when adding multiple items.

Once added, your project appears in the **Projects** section, ready to launch with the most compatible installed Godot Editor.

:::info
Since v1.6.0 during import the launcher also:

- Regenerates per-project Godot editor settings to match the detected version.
- Updates VSCode workspace Settings files and sets the editor to use VSCode as external editor when the `.vscode` folder exists
- Flags whether the project already contains Git (`.git` folder) or VS Code metadata so badges display immediately.

:::

:::important
The launcher does **not** move or copy your project files. It simply links to your existing folder and sets up the required editor settings.  
You must already have at least one [Godot Editor installed](/getting-started/install-editor) in the launcher for the project to run.
:::

---

## How the launcher selects an editor version

When importing an existing project, Godot Launcher chooses an editor release using the following rules:

1. **Match the project’s major version**  
   The launcher first looks for an installed editor that matches the project’s Godot major version (for example, 3.x or 4.x).  
   If you have not installed any yet, see [Installing an Editor](/getting-started/install-editor).

2. **Check for Mono / .NET projects**

   - If the project folder contains sibling `.csproj` or `.sln` files, the launcher assumes the project requires a Mono/.NET editor.
   - In that case, only installed **Mono builds** are considered valid.

3. **Fallback behavior**

- If no C# project files are found, the launcher can use either a standard or a Mono build.
- If there is no exact match, it falls back to the **best available stable release** for that major version.
- If the only option is a Mono build, it will be used even for GDScript projects.

4. **When the launcher refuses to open**
   - If a project does contain `.csproj` files but there is no matching Mono/.NET editor installed, the launcher will **not** fall back to a GDScript build.
   - Instead, it stops and shows an error or notification so you know a Mono build is required.

:::warning
To import an existing project successfully, you must have at least one stable [Godot Editor installed](/getting-started/install-editor).  
If your project uses C#, make sure you also install a Mono/.NET release.
:::

---

## Editor integrations

- **Visual Studio Code**  
  If your project includes a `.vscode` folder, the launcher configures Godot to use Visual Studio Code as the external editor and offers a toggle in the project overflow menu so you can manage the integration later.  
  See the [Visual Studio Code setup guide](/guides/vscode-setup-for-godot) and [Project Tool Toggles](/guides/project-tool-toggles) for details.

- **Git**  
  Existing repositories are detected automatically. If your project does not already use Git, you can initialize it later from the overflow menu without reimporting.  
  See the [Git guide](/guides/using-git-with-godot-launcher) for more details.

---

## Quick actions

:::tip
To open a project in Godot, simply click its name in the **Projects** list.  
Godot Launcher will start it with the selected editor version.
:::

---

## Next steps

- [Create Your First Project](/getting-started/create-project) if you prefer starting new.
- [Install an Editor](/getting-started/install-editor) to ensure you always have the right versions available.
- Review [Launcher Settings](/getting-started/launcher-settings) to adjust default editor locations and behavior before importing more projects.
