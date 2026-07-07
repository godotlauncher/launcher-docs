import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import "dotenv/config";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Godot Launcher Docs",

  tagline: "Documentation for Godot Launcher",
  favicon: "img/favicon-16x16.png",

  // Set the production url of your site here
  url: "https://docs.godotlauncher.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "godotlauncher", // Usually your GitHub org/user name.
  projectName: "launcher-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  markdown: {
    hooks: { onBrokenMarkdownLinks: "throw", onBrokenMarkdownImages: "throw" },
  },

  baseUrlIssueBanner: false,
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/getting-started/launcher-settings",
            to: "/settings",
          },
          {
            from: "/guides/custom-editors",
            to: "/editors/custom-editors",
          },
          {
            from: "/guides/change-project-editor",
            to: "/editors/change-project-editor",
          },
          {
            from: "/guides/editor-settings",
            to: "/editors/editor-settings",
          },
          {
            from: "/guides/project-settings",
            to: "/projects/project-settings",
          },
          {
            from: "/guides/project-tool-toggles",
            to: "/projects/project-tool-toggles",
          },
          {
            from: "/guides/launch-godot-project-in-windowed-mode",
            to: "/projects/launch-godot-project-in-windowed-mode",
          },
          {
            from: "/guides/install-git",
            to: "/integrations/install-git",
          },
          {
            from: "/guides/using-git-with-godot-launcher",
            to: "/integrations/using-git-with-godot-launcher",
          },
          {
            from: "/guides/vscode-setup-for-godot",
            to: "/integrations/vscode-setup-for-godot",
          },
          {
            from: "/guides/system-tray",
            to: "/settings/system-tray",
          },
          {
            from: "/guides/manage-launcher-updates",
            to: "/settings/updates",
          },
          {
            from: "/guides/windows-winget",
            to: "/platform/windows-winget",
          },
          {
            from: "/guides/windows-symlink",
            to: "/platform/windows-symlink",
          },
          {
            from: "/guides/linux-no-sandbox",
            to: "/platform/linux-no-sandbox",
          },
          {
            from: "/help-and-support",
            to: "/support/help-and-support",
          },
          {
            from: "/community",
            to: "/support/community",
          },
          {
            from: "/project-badges",
            to: "/reference/project-badges",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/godotlauncher/launcher-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: { containerId: process.env.GOOGLE_TAG_MANAGER_ID },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: "godotlauncher",
      insights: true,
    },
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    // Replace with your project's social card
    image: "img/Godot-Launcher-Social-Card.jpg",
    navbar: {
      title: "Godot Launcher Docs",
      hideOnScroll: true,
      logo: {
        alt: "Godot Launcher Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Project",
          items: [
            { label: "Roadmap", href: "https://github.com/orgs/godotlauncher/projects/1" },
            {
              label: "Website",
              href: "https://godotlauncher.org",
            },
            {
              label: "GitHub",
              href: "https://github.com/godotlauncher",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Privacy Policy",
              href: "https://godotlauncher.org/privacy",
            },
            {
              html: `<a href="#cookie-settings" data-cc="c-settings" class="footer__link-item">Cookie Settings</a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mario Debono and contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
