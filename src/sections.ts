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

const SECTIONS: Section[] = [];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [];

export { SECTIONS, SECTION_GROUPS };
