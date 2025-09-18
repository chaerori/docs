import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Kollus VOD',
    icon: VideoRegular,
    links: [
      { label: '서비스 가이드', href: '/guides/live-video/intro-video-conf'},
      { label: '개발 가이드', href: '/dev-guide/kollus-vod/api-integration' }
    ]
  },
  {
    title: 'Kollus Live',
    icon: VideoRegular,
    links: [
      { label: '서비스 가이드', href: '/guides/voice-conf/intro-voice-conf'},
      { label: '개발 가이드', href: '/dev-guide/kollus-live/api-integration' }
    ]
  },
  {
    title: 'Kollus Live Commerce',
    icon: VideoRegular,
    links: [
      { label: '서비스 가이드', href: '/guides/livestream/livestream-overview'},
    ]
  },
  {
    title: 'Charlla',
    icon: LiveRegular,
    links: [
      { label: '서비스 가이드', href: '/guides/livestream/livestream-overview'},
    ]
  },
  {
    title: 'Loomex',
    icon: LiveRegular,
    links: [
      { label: '서비스 가이드', href: '/guides/livestream/livestream-overview'},
    ]
  }
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  links,
}: (typeof PRODUCTS)[0]) {
  return (
    <div
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary dark:text-white',
        'w-[90vw] border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800 sm:w-[440px]',
      )}
    >
      <div className="p-6">
        <h3 className="mb-1.5 flex items-center justify-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {/* {beta && <span className="font-normal text-text-400"> (Beta)</span>} */}
          </div>
        </h3>
        
        {links && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {links.map((linkItem, index) => (
              <Link
                key={index}
                to={linkItem.href}
                className="rounded-md bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20 hover:no-underline"
              >
                {linkItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            All About Video
          </h2>
          <p className="max-w-xl text-center text-text-400">
            온라인 동영상 서비스의 모든 것
          </p>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 px-4">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </div>
  );
}
