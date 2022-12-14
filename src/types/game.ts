import { SlideImage } from 'yet-another-react-lightbox';

import { Platform } from 'components/atoms/PlatformIcon/PlatformIcon';

export type PCSystemDefault = {
  so: string;
  cpu: string;
  memory: string;
  gpu: string;
  hd: string;
};

export type PCSystem = {
  minimal: PCSystemDefault;
  recommended: PCSystemDefault;
};

export type Default = {
  id: string;
  name: string;
  slug: string;
};

export type PlatformData = {
  slug: Platform;
} & Omit<Default, 'slug'>;

type Game = {
  id: string;
  name: string;
  slug: string;
  release_date: Date | number | string;
  score: number;
  video?: string;
  image: string;
  primary_color: string;
  background: string;
  description: string;
  price: number;
  genres: Default[];
  developers: Default[];
  platforms: PlatformData[];
  games_gallery: SlideImage[];
  pc_system: PCSystem | null;
};

export default Game;
