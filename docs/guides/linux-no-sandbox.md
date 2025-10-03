---
id: linux-no-sandbox
title: Running Godot Launcher in No-Sandbox Mode on Linux
slug: /guides/linux-no-sandbox
description: "Learn how to run Godot Launcher with the --no-sandbox option on Linux if you encounter Chromium sandbox errors."
tags:
  - guides
  - godot
  - linux
  - troubleshooting
keywords:
  - Godot Launcher Linux
  - no-sandbox
  - disable sandbox
  - Electron
---

# Running Godot Launcher in No-Sandbox Mode on Linux

On Linux, the **Chromium sandbox** used by Electron sometimes causes problems when launching Godot Launcher. This usually happens if the sandbox helper binary cannot be set up correctly, for example on certain distributions or when running from an AppImage. The result is that the launcher may fail to start with a fatal error.

To help with this, Godot Launcher includes a **no-sandbox mode**. When enabled, all Chromium processes inside the launcher bypass the sandbox. This can resolve startup issues, but it should only be used as a workaround if you cannot run the launcher normally.

---

## When should I use no-sandbox?

- The launcher crashes on startup with an error mentioning `chrome-sandbox` or `SUID sandbox helper`.
- Running from AppImage or a restricted environment where Chromium cannot apply its usual sandboxing.
- You have already tried reinstalling or updating your system packages but the issue persists.

:::warning
The Chromium sandbox is a security feature. Disabling it should only be done if absolutely necessary, and only on Linux systems where you cannot launch the app otherwise.
:::

---

## How to run Godot Launcher with no-sandbox

Godot Launcher detects the no-sandbox option if you pass it on the command line or through an environment variable.

### Option 1: Command line flag

Run the AppImage or launcher binary with:

```
./Godot_Launcher.AppImage --no-sandbox
```

or

```
./Godot_Launcher.AppImage --disable-sandbox
```

This only applies to that single run.

### Option 2: Environment variable

Set the environment variable before launching:

```
GODOT_LAUNCHER_DISABLE_SANDBOX=1 ./Godot_Launcher.AppImage
```

This tells the launcher to append the `--no-sandbox` switch internally before any windows are created.

#### Make it permanent

To avoid typing this every time, you can export the variable in your shell config:

- For Bash users:

```
echo 'export GODOT_LAUNCHER_DISABLE_SANDBOX=1' >> ~/.bashrc
source ~/.bashrc
```

- For system-wide setting (all users):

```
echo 'GODOT_LAUNCHER_DISABLE_SANDBOX=1' | sudo tee -a /etc/environment
```

After adding this, you can launch the AppImage normally without typing the flag.

---

## Troubleshooting

- **Still seeing sandbox errors**: Double-check that you spelled the option correctly (`--no-sandbox` with two dashes).
- **Environment variable not working**: Make sure it is exported in the same shell session or added to your shell config.
- **No difference after enabling**: Some distributions require extra runtime libraries. Try updating your system and ensure `libnss3`, `libx11`, and related Electron dependencies are installed.
- **Security concerns**: If possible, prefer fixing sandbox permissions rather than disabling the feature. The `--no-sandbox` mode is only a fallback.

---

## Summary

If Godot Launcher fails to start on Linux with a Chromium sandbox error, you can use **no-sandbox mode** by passing `--no-sandbox`, `--disable-sandbox`, or setting `GODOT_LAUNCHER_DISABLE_SANDBOX=1`. You can even make the environment variable permanent in your shell config for convenience. Only enable this if necessary, as it reduces process isolation and security.
