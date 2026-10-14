---
id: update-states
sidebar_label: Update States
title: Godot Launcher Update States
slug: /reference/update-states
description: "Look up Godot Launcher update status messages and the controls for downloading, installing, skipping, or retrying an update."
tags:
  - launcher-updates
  - reference
---

# Godot Launcher Update States

Godot Launcher shows update messages in **Settings > Updates**. When an update is available or needs attention, select **Update** in the sidebar to open its details and actions. During a download, this control shows **Downloading**, with a percentage when progress is known.

Automatic checks are enabled by default. You choose when to download an update and restart to install it. **Read release notes** opens the notes for the update's exact version on the Godot Launcher documentation site in your browser. The link appears when the update includes an exact release version.

## States

| State | Meaning | User action |
| --- | --- | --- |
| Checking | The launcher is checking for a newer version. | Wait for the check to finish. |
| Up to date | No newer version was found. | No action needed. |
| Update available | A newer version is available. | Select **Download update** or **Skip this version**. |
| Downloading | The update is being downloaded. | Wait for download progress to finish. |
| Ready to install | The downloaded update is ready. | Select **Restart and install** in the panel or **Restart now** in Settings. Select **Later** in the panel to close it and continue using Godot Launcher. |
| Skipped | You skipped this version, so background checks do not prompt you about it. | Select **Check for updates** to offer it again, or **Unskip skipped update** to restore background reminders. |
| Manual update required | The app cannot install the update on this rpm-ostree system. | Select **Download manually** in the panel or **Open download page** in Settings and install the package manually. |
| Error | The update could not be checked, downloaded, or installed. | Open the sidebar panel to read the error. **Retry**, when available, repeats the failed check, download, or installation. If the failed operation is unknown, use **Check for updates** in Settings to start a new check. |

Closing the panel, including selecting **Later**, does not skip the update or cancel a download. A downloaded update remains ready to install.

## Stable and prerelease channels

- Stable releases are offered by default.
- Enable **Receive beta updates** in **Settings > Updates** to include beta builds.
- Turning **Receive beta updates** off returns future checks to stable releases. It does not downgrade the installed version.

## rpm-ostree systems

On rpm-ostree Linux systems, the launcher can check for updates, but installation requires a manual download. You can still use **Skip this version** when the message includes a version number.

## More details

For installation steps and recovery if updates keep failing, see [Update Godot Launcher](../updates/manage-launcher-updates.mdx).
