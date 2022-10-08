import { SlideImage } from 'yet-another-react-lightbox';

import { Platform } from 'components/atoms/PlatformIcon/PlatformIcon';

export type PCSystemItem = {
  type: 'minimal' | 'recommended';
  so: string;
  cpu: string;
  memory: string;
  gpu: string;
  hd: string;
};

type Game = {
  id?: string;
  name: string;
  slug: string;
  genres: string[];
  developer: string;
  releaseDate: Date | number | string;
  score: number;
  price: number;
  platform: Platform;
  image: string;
  background: string;
  video?: string;
  description: string;
  gallery: SlideImage[];
  primaryColor: string;
  pcSystem?: [PCSystemItem, PCSystemItem];
};

export default Game;
