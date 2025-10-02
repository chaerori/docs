/**
 * Guides 섹션 전용 사이드바 설정
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guides: [
    {
      type: 'doc',
      id: 'guides',
      label: '서비스 가이드',
    },
    {
      type: 'category',
      label: 'Live Video',
      items: [
        'live-video/intro-video-conf',
        'live-video/concepts',
        'live-video/get-started',
        'live-video/build-live-video-app',
        'live-video/next-steps',
        {
          type: 'category',
          label: 'Live Video Client Setup',
          items: [
            'live-video/client-setup/index',
            'live-video/client-setup/javascript',
            'live-video/client-setup/react',
            'live-video/client-setup/angular',
            'live-video/client-setup/ios',
            'live-video/client-setup/android',
            'live-video/client-setup/flutter',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Voice Conference',
      items: [
        'voice-conf/intro-voice-conf',
        'voice-conf/concepts',
        'voice-conf/get-started',
        'voice-conf/build-voice-app',
        'voice-conf/next-steps',
        {
          type: 'category',
          label: 'Voice Conference Client Setup',
          items: [
            'voice-conf/client-setup/index',
            'voice-conf/client-setup/javascript',
            'voice-conf/client-setup/react',
            'voice-conf/client-setup/angular',
            'voice-conf/client-setup/ios',
            'voice-conf/client-setup/android',
            'voice-conf/client-setup/flutter',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Livestream',
      items: [
        'livestream/livestream-overview',
        'livestream/concepts',
        'livestream/get-started',
        'livestream/build-livestream-app',
        {
          type: 'category',
          label: 'Livestream Client Setup',
          items: [
            'livestream/client-setup/index',
            'livestream/client-setup/javascript',
            'livestream/client-setup/react',
            'livestream/client-setup/angular',
            'livestream/client-setup/ios',
            'livestream/client-setup/android',
            'livestream/client-setup/flutter',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'livestream/advanced/configuring-permissions',
            'livestream/advanced/livestream-any-rtmp',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Charlla',
      items: [
        'charlla/index',
      ],
    },
    {
      type: 'category',
      label: 'Loomex',
      items: [
        'loomex/index',
      ],
    },
  ],
};

module.exports = sidebars;
