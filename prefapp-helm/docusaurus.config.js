// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prefapp Helm',
  tagline: 'Prefapp Helm is a helm microframework for implementing modular charts and umbrella charts.',
  url: 'https://prefapp-helm.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'prefapp', // Usually your GitHub org/user name.
  projectName: 'prefapp-helm', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PrefappHelm',
        logo: {
          alt: 'My Site Logo',
          src: 'img/prefapp_helm.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/overview', label: 'Quick Overview', position: 'left'},
          {
            href: 'https://github.com/prefapp/prefapp-helm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/prefapp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'License',
                to: '/license',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/prefapp/prefapp-helm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Francisco Maseda, Javier Gómez & Juan Sixto`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
