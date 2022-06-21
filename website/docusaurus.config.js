// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robot Framework Guides',
  tagline: 'Yes, we are open source!',
  url: 'http://marketsquare.github.io',
  baseUrl: '/robotframeworkguides/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'marketsquare', // Usually your GitHub org/user name.
  projectName: 'robotframeworkguides', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/MarketSquare/robotframeworkguides',
        },
        blog: false,
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
        title: 'Robot Framework Guides',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/MarketSquare/robotframeworkguides',
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
                label: 'Guides',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'http://forum.robotframework.org/',
              },
              {
                label: 'Slack',
                href: 'https://robotframework.slack.com/',
              },
              {
                label: 'Twitter',
                href: 'http://twitter.com/robotframework',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MarketSquare/robotframeworkguides',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robot Framework Guides Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'GMGW7XXAQB',
  
        // Public API key: it is safe to commit it
        apiKey: 'b14e514cb158f8bb5360fe8622d36ea5',
  
        indexName: 'robotframeworkguides',
  
        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
};

module.exports = config;
