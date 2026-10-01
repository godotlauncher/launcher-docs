# Godot Launcher Documentation

This repository contains the [Godot Launcher documentation](https://docs.godotlauncher.org), built with [Docusaurus](https://docusaurus.io/).

<a id="-contributing"></a>

## Contributing

To fix a typo, clarify instructions, or add a guide, read [CONTRIBUTING.md](./CONTRIBUTING.md). For changes to the app, use the [Godot Launcher repository](https://github.com/godotlauncher/launcher).

Discuss major content or structure changes in an issue or on the [community Discord](https://discord.gg/Ju9jkFJGvz) before starting.

<a id="-development"></a>

## Development

Use Node.js 24 and npm. The repository declares npm 12.0.2 as its package manager.

### 1. Fork the repository

Fork the repository to your GitHub account:

1. Go to the [Godot Launcher Docs repository](https://github.com/godotlauncher/launcher-docs).
2. Select **Fork**.

Clone your fork:

```bash
git clone https://github.com/<your-username>/launcher-docs.git
cd launcher-docs
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Start the development server

```bash
npm run start
```

Open the development site at [http://localhost:3001](http://localhost:3001).

### 4. Test Build for production

Build the static site to check for broken links and rendering errors:

```bash
npm run build
```

Preview the production build at [http://localhost:3001](http://localhost:3001):

```bash
npm run serve
```

<a id="-project-structure"></a>

## Project Structure

- `/docs` - Documentation for the upcoming launcher release.
- `/versioned_docs` - Frozen documentation for published minor releases.
- `/versioned_sidebars` - Frozen sidebar definitions for published minor releases.
- `/versions.json` - Published documentation versions, newest first.
- `/src` - Documentation site components and styles.
- `/static` - Shared assets and version-specific media.
- `docusaurus.config.ts` - Site and documentation-version configuration.

## Documentation Versions

Documentation is versioned by launcher minor release, not by beta or patch
release. The latest stable documentation remains at the site root. Work for an
upcoming release lives in `docs/` and is published under `/next/` until the
stable documentation version is cut.

Create a frozen version only after the current documentation is ready:

```bash
npm run docusaurus docs:version <major.minor>
```

The Docusaurus command freezes document and sidebar files, but it does not
freeze files under `static/`. After cutting a version, copy every referenced
UI image into `static/img/docs/<major.minor>/` and update the frozen documents
to reference it from that location.

Keep internal documentation links relative and include the `.md` or `.mdx`
extension. Docusaurus then keeps navigation within the version a reader is
viewing.

For current documentation, place screenshots in `static/img/screenshots/`,
feature images in `static/img/features/`, and animations in
`static/img/animations/`. Place media for frozen versions in
`static/img/docs/<major.minor>/`.
