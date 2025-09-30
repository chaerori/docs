import type { ComponentProps, ReactNode } from 'react';
import {
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: 'Android',
    docId: 'android',
    icon: AndroidIcon,
    section: 'mobile-ui-kit',
  },
  {
    name: 'iOS',
    docId: 'ios',
    icon: AppleIcon,
    section: 'mobile-ui-kit',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'UI Kit',
      section: 'mobile-ui-kit',
      description: 'Use our pre-built mobile UI Kit SDK, ready to go',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
