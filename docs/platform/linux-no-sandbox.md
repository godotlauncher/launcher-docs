---
id: linux-no-sandbox
title: Fix Godot Launcher Sandbox Errors on Linux
slug: /platform/linux-no-sandbox
description: "Diagnose Godot Launcher startup errors mentioning chrome-sandbox on Linux, with a temporary --no-sandbox test and its security limits."
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

# Fix Godot Launcher Sandbox Errors on Linux {#running-godot-launcher-in-no-sandbox-mode-on-linux}

If Godot Launcher stops during startup with an error mentioning `chrome-sandbox` or `SUID sandbox helper`, Chromium's sandbox may be unable to start. Run the launcher from a terminal to read the error before choosing a workaround.

## Check the startup error {#when-should-i-use-no-sandbox}

For a sandbox error, check your distribution's guidance for running Electron applications. If you use an AppImage, you can also try the [`.deb` or `.rpm` package](../getting-started/installation.mdx#linux) for your distribution.

A FUSE error or a missing shared library is a different problem. Follow the [Linux installation instructions](../getting-started/installation.mdx#linux) or the dependency named in the error; disabling the sandbox does not install missing libraries.

## Test without the sandbox {#how-to-run-godot-launcher-with-no-sandbox}

:::danger Disabling the sandbox removes process isolation
The Chromium sandbox restricts what the launcher's processes can access. `--no-sandbox` disables this protection for all Chromium processes in Godot Launcher. Electron recommends using this option only for testing. Use it to diagnose a startup failure, and resolve the underlying sandbox problem before returning to normal use. See [Electron's sandbox documentation](https://www.electronjs.org/docs/latest/tutorial/sandbox#disabling-chromiums-sandbox-testing-only).
:::

### Run with a command line option {#option-1-command-line-flag}

In a terminal, open the folder containing the AppImage and run:

```bash
./Godot_Launcher-x.y.z-linux_x64.AppImage --no-sandbox
```

Replace `x.y.z` with the downloaded version. For an ARM64 download, replace `x64` with `arm64`. Use the actual filename if you renamed the download.

The option applies only to this run. Godot Launcher also accepts `--disable-sandbox` with the same effect.

### Use an environment variable {#option-2-environment-variable}

Alternatively, set the variable for a single command:

```bash
GODOT_LAUNCHER_DISABLE_SANDBOX=1 ./Godot_Launcher-x.y.z-linux_x64.AppImage
```

This has the same effect as `--no-sandbox`. The assignment above applies only to that command; do not add it to your shell configuration as a routine startup setting.

## If startup still fails {#troubleshooting}

Check the new terminal output. If the error still mentions the sandbox, check the spelling of `--no-sandbox` and that the option follows the executable name. If the error changes, use that message to investigate the next cause.

<a id="summary"></a>

If you need help, include your distribution and version, the Godot Launcher version, the package type, and the terminal error. Follow [Troubleshooting](../troubleshooting.md#still-need-help) for reporting guidance. After resolving the problem, start Godot Launcher without the option or environment variable.
