---
id: update-states
title: Launcher Update States
slug: /reference/update-states
description: "Reference for the launcher update states shown in Settings and the main project view."
tags:
  - launcher-updates
  - reference
---

# Launcher Update States

Godot Launcher can check for new launcher releases in the background, but it does not download updates automatically. The user decides when to download and when to restart.

## States

| State | Meaning | User action |
| --- | --- | --- |
| Checking | The launcher is checking for a newer version. | Wait for the check to finish. |
| Up to date | No newer version was found. | No action needed. |
| Update available | A newer version is available. | Download the update or skip that version. |
| Downloading | The update is being downloaded. | Wait for download progress to finish. |
| Ready to install | The update was downloaded and prepared locally. | Restart Godot Launcher to install. |
| Skipped | The user skipped a specific version. | Run a manual check to surface the skipped version again. |
| Manual update required | Automatic installation is not supported on this system. | Open the download page and install manually. |
| Error | The update could not be checked, downloaded, or prepared. | Retry or install manually. |

## Stable and prerelease channels

- **Stable updates** are used by default.
- **Prerelease updates** can be enabled in **Settings -> Updates**.
- Switching prerelease updates off returns future checks to stable releases.

## rpm-ostree systems

On rpm-ostree systems, Godot Launcher can detect that automatic update installation is not supported. In that case, it shows a manual update message and opens the download page instead of starting the in-app installer.

## More details

For screenshots and step-by-step behavior, see [Manage Launcher Updates](/settings/updates).
