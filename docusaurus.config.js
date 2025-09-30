const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: '카테노이드 서포트 센터',
  tagline: 'catenoid documentation',
  url: 'https://chaerori.github.io',
  baseUrl: process.env.BASE_URL || '/docs/',
  organizationName: 'chaerori',
  projectName: 'docs',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        calendar: 'gregory',
        path: 'ko',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },
  titleDelimiter: '|',
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'demo-player',
    path: 'docs/demo-player',
    routeBasePath: '/demo-player',
    sidebarPath: false,
  },
  {
    id: 'dev-guide',
    path: 'docs/dev-guide',
    routeBasePath: '/dev-guide',
  },
  {
    id: 'api-vod',
    path: 'docs/api/vod',
    routeBasePath: '/api/vod',
  },
  {
    id: 'api-live',
    path: 'docs/api/live',
    routeBasePath: '/api/live',
  },

  // Mobile UI Kits
  {
    id: 'android',
    path: 'docs/android',
    routeBasePath: '/android',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'ios',
    path: 'docs/ios',
    routeBasePath: '/ios',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        if (path.startsWith('/guides/capabilities/chat/export-chat-dump')) {
          return ['/capabilities/export-chat-dump'];
        }

        if (path.startsWith('/guides/capabilities/misc/embed')) {
          return ['/guides/capabilities/embed'];
        }


        if (
          path.startsWith(
            '/guides/capabilities/misc/livestreaming-other-platforms',
          )
        ) {
          return [
            '/guides/capabilities/livestreaming-other-platforms',
            '/guides/capabilities/recording/livestream-recording',
          ];
        }

        if (
          path.startsWith('/guides/capabilities/video/add-virtual-background')
        ) {
          return [
            '/guides/capabilities/middleware/add-virtual-background',
            '/guides/capabilities/customization/add-virtual-background',
          ];
        }

        if (path.startsWith('/guides/live-video/concepts')) {
          return ['/guides/live-video/concepts-live-video'];
        }

        if (path.startsWith('/guides/voice-conf/concepts')) {
          return ['/guides/voice-conf/concepts-voice-conf'];
        }

        if (path.startsWith('/guides/livestream/concepts')) {
          return ['/guides/livestream/concepts-ils'];
        }

        if (path.startsWith('/guides/capabilities/webhooks')) {
          return [
            path.replace('/guides/capabilities/webhooks', '/guides/webhooks'),
            path.replace(
              '/guides/capabilities/webhooks',
              '/guides/features/webhooks',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/recording')) {
          return [
            path.replace('/guides/capabilities/recording', '/guides/recording'),
            path.replace(
              '/guides/capabilities/recording',
              '/guides/features/recording',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/recording')) {
          return [
            path.replace('/guides/capabilities/recording', '/guides/recording'),
            path.replace(
              '/guides/capabilities/recording',
              '/guides/features/recording',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/embed')) {
          return [
            path.replace('/guides/capabilities/embed', '/guides/embed'),
            path.replace(
              '/guides/capabilities/embed',
              '/guides/features/embed',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/export-chat-dump')) {
          return [
            path.replace(
              '/guides/capabilities/export-chat-dump',
              '/guides/export-chat-dump',
            ),
            path.replace(
              '/guides/capabilities/export-chat-dump',
              '/guides/features/export-chat-dump',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/breakoutroom')) {
          return [
            path.replace(
              '/guides/capabilities/breakoutroom',
              '/guides/breakoutroom',
            ),
            path.replace(
              '/guides/capabilities/breakoutroom',
              '/guides/features/breakoutroom',
            ),
          ];
        }
        /* for everything else */
        if (path.startsWith('/guides/capabilities')) {
          return [path.replace('/guides/capabilities', '/guides/features')];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  future: {
    experimental_faster: true,
  },

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  clientModules: [
    require.resolve('./src/client/set-framework.js'),
    require.resolve('./src/client/external-link-icon.js'),
  ],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js', async: true }],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          sidebarPath: require.resolve('./sidebars-guides.js'),
          sidebarCollapsible: true,
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['**/tags/**', '/api/*'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: '서포트 센터',
        logo: {
          alt: '',
          src: '/favicon.ico',
        },
        hideOnScroll: true,
        items: [
          {
            label: '서비스 가이드',
            to: 'guides',
            className: 'guides-top-header',
          },
          {
            label: '개발 가이드',
            to: '/dev-guide',
          },
          {
            label: 'API & SDK',
            type: 'dropdown',
            className: 'sdks-dropdown',
            items: [
              {
                label: 'Kollus VOD API',
                to: '/api/vod',
              },
              {
                label: 'Kollus Live API',
                to: '/api/live',
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.5rem 0; border: none; border-top: 1px solid #e0e0e0;">',
              },
              {
                label: 'iOS SDK',
                to: '/ios',
              },
              {
                label: 'Android SDK',
                to: '/android',
              },
            ],
          },
          {
            label: '데모 플레이어',
            to: '/demo-player',
          },
          {
            label: '문의하기',
            to: 'https://www.catenoid.net/ko/contact/',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: '가입하기',
            href: 'https://www.catenoid.net/ko/contact/',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [],
            dropdownItemsBefore: [],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Catenoid Inc. All rights reserved.`
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'json',
          'bash',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  // webpack: {
  //   jsLoader: (isServer) => ({
  //     loader: require.resolve('swc-loader'),
  //     options: {
  //       jsc: {
  //         parser: {
  //           syntax: 'typescript',
  //           tsx: true,
  //         },
  //         target: 'es2017',
  //       },
  //       module: {
  //         type: isServer ? 'commonjs' : 'es6',
  //       },
  //     },
  //   }),
  // },
};

module.exports = config;
