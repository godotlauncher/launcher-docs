---
id: install-editor
slug: /getting-started/install-editor
title: Installing Godot Editor
description: "Learn how to install Godot Editor versions with Godot Launcher, including GDScript and .NET builds, multiple versions, and prereleases."
tags:
  - godot
  - editor-installation
  - setup-guide
  - getting-started
---

# Installing an Editor

Before you can create new projects or import existing ones, you need at least one version of the Godot Editor installed in **Godot Launcher**.

![Godot Launcher - Install Editor Version](/img/launcher-install-editor-ui-anim.gif)

## Steps to install

1. Go to the **Installs** section from the left-hand navigation menu.  
2. Click the **Install Editor** button. This opens a popup where you can select which version of the Godot Editor to install.  
3. In the popup, choose the version you need and click the icon for either **GDScript** or **.NET (Mono)**.  
   - The icon updates to show the current status: **Downloading / Installing**, then **Installed** when complete.  
4. Once the installation finishes, close the popup by clicking the **X** in the top-right corner.

:::tip
You can install multiple editor releases side by side in the launcher. This is useful if you maintain projects across different minor versions or want to test prereleases.  
:::

---

## Choosing GDScript vs .NET builds

- **GDScript (standard build):** Works for most projects.  
- **.NET (Mono build):** Required if your project uses C# (`.csproj` / `.sln` files).  

If you are not sure which one to pick, start with **GDScript**. You can always add a Mono build later if you begin working with C#.  

:::important
Godot Launcher focuses on the most commonly used versions of Godot, starting from **Godot 4 and newer**.  
Godot 3.x projects are not supported, as adoption is steadily decreasing and custom configuration for 3.x has not been included.  

If you plan to use .NET builds, you also need to install the **.NET SDK** from the [Microsoft .NET website](https://dotnet.microsoft.com/download).  
See the [Godot Engine docs on C# basics](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/c_sharp_basics.html) for more details.  

When [adding an existing project](/getting-started/add-existing-project), make sure you already have at least one stable editor release installed in the launcher.  
:::


---

## Managing installed editors

- You can install as many versions of the Godot Editor as you need.  
- To remove an editor, go to the **Installs** section and click the **trash icon** next to the version.  
- Editors are stored in the launcher’s install folder (set in [settings](/getting-started/launcher-settings)).  
- Removing an editor version does not delete your projects. If a project references a removed editor, it will be marked as **missing** until you install a compatible version again or select an available editor.

---

## Next steps

- [Create Your First Project](/getting-started/create-project)  
- [Add an Existing Project](/getting-started/add-existing-project)  
- [Godot Launcher Settings](/getting-started/launcher-settings)  
