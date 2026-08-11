# Godot Launcher Documentation

This repository contains the source code for the official **Godot Launcher Documentation**, built using [Docusaurus](https://docusaurus.io/), a modern static site generator.

## 📖 Contributing

Contributions are always welcome! The Godot Launcher documentation is open source, just like the [Godot Luncher](https://github.com/godotlauncher/launcher) Project.

Feel free to fix typos, improve, or add new content. To contribute:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Make sure to follow the existing structure and style for consistency.

> Keep in mind that this documentation is the public face of the Godot Launcher project documentation. For that reason, major edits or structural changes should be approached thoughtfully. While you don't need to submit a formal proposal, it's highly recommended to open an issue in this repo or start a discussion in the Godot Launcher Discord, where community conversations about the website and project happen regularly.

## 🚀 Development

This website is built using **Node.js 24 LTS** and **npm**. To run it locally:

### 1. Fork the repository

First, fork the repository to your GitHub account:

1. Go to the [Godot Launcher Docs repository](https://github.com/godotlauncher/launcher-docs).
2. Click the "Fork" button in the top-right corner.

Then, clone your forked repository:

```bash
git clone https://github.com/<your-username>/launcher-docs.git
cd launcher-docs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run start
```

This will launch a local dev server at [http://localhost:3000](http://localhost:3000).

### 4. Test Build for production

It is important to test out your production build, generate the static site and run it locally to test things out.

```bash
npm run build
```

To preview the production build:

```bash
npm run serve
```

## 🧩 Project Structure

- `/docs` - Documentation for the upcoming launcher release.
- `/versioned_docs` - Frozen documentation for published minor releases.
- `/versioned_sidebars` - Frozen sidebar definitions for published minor releases.
- `/versions.json` - Published documentation versions, newest first.
- `/src` - Documentation site components and styles.
- `/static` - Shared assets and immutable version-specific media.
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
to use that immutable path before synchronizing current media again.

Keep internal documentation links relative and include the `.md` or `.mdx`
extension. Docusaurus then keeps navigation within the version a reader is
viewing.

Current screenshots referenced by `docs/` or site source are selected from the
workspace's canonical media and synchronized into `static/img/screenshots/`.
Unreferenced current screenshots are removed on the next sync. Canonical
features and animations are synchronized into `static/img/{features,animations}`.
Frozen versions use immutable paths under `static/img/docs/<major.minor>/`, so
later media synchronization cannot replace or remove their UI images.

---

Feel free to reach out or open an issue if you spot something broken or unclear.
