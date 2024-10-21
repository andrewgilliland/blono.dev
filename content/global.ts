import { ImageProps } from '@/types';

export type GlobalContent = {
  mainLogo: ImageProps;
};

export const global: GlobalContent = {
  mainLogo: {
    src: '/bn-logo-1.svg',
    alt: 'Bloomington-Normal Developers Logo',
  },
};
