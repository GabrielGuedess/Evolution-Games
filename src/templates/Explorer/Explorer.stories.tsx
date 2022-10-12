import { QueryClientProvider, QueryClient } from 'react-query';

import { Story, Meta } from '@storybook/react/types-6-0';
import { rest } from 'msw';

import { Explorer, ExplorerTemplateProps } from './Explorer';

const filterCategories = {
  title: 'Genre',
  name: 'genre',
  type: 'checkbox',
  fields: [
    { title: 'Action', name: 'action' },
    { title: 'Adventure', name: 'adventure' },
    { title: 'Sports', name: 'sports' },
    { title: 'Puzzle', name: 'puzzle' },
    { title: 'Horror', name: 'horror' },
    { title: 'Platform', name: 'platform' },
    { title: 'Fantasy', name: 'fantasy' },
    { title: 'RPG', name: 'role-playing' },
    { title: 'JRPG', name: 'jrpg' },
    { title: 'Simulation', name: 'simulation' },
    { title: 'Strategy', name: 'strategy' },
    { title: 'Shooter', name: 'shooter' },
  ],
};

const filterYear = {
  title: 'Year',
  name: 'year',
  type: 'checkbox',
  fields: [
    { title: '1990 - 2000', name: '1990-2000' },
    { title: '2001 - 2005', name: '2001-2005' },
    { title: '2006 - 2011', name: '2006-2011' },
    { title: '2012 - 2017', name: '2012-2017' },
    { title: '2018 - Now', name: '2018-now' },
  ],
};

const filterPlatforms = {
  title: 'Platforms',
  name: 'platforms',
  type: 'checkbox',
  fields: [
    {
      title: 'Playstation 4',
      name: 'playstation-4',
    },
    {
      title: 'Playstation 5',
      name: 'playstation-5',
    },
    {
      title: 'Xbox One',
      name: 'xbox-one',
    },
    {
      title: 'Xbox Series X',
      name: 'xbox-series-x',
    },
  ],
};

const filterFeedback = {
  title: 'Notas',
  name: 'feedback',
  type: 'checkbox',
  fields: [
    { title: 'From 5.0', name: 'from-5.0' },
    { title: 'From 4.0', name: 'from-4.0' },
  ],
};

export default {
  title: 'Templates/Explorer',
  component: Explorer,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handles: [
        rest.get('/api/games', (req, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json([
              {
                id: '1',
                name: 'God of War: Ragnarök',
                slug: 'god-of-war-ragnarok',
                genres: ['Action-adventure'],
                developer: 'Santa Monica Games',
                releaseDate: '2022',
                platform: 'ps5',
                score: 5,
                primaryColor: '#9db4d0',
                video:
                  'https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/g/go/god-of-war-ragnarok/asset/hero/god-of-war-ragnarok-hero-desktop-02-en-11jul22.mp4',
                image:
                  'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
                background:
                  'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-raganok-clean-keyart-01-en-10mar22?$4000px$',
                description:
                  'God of War: Ragnarok, se passa três anos após o evento do jogo de 2018, com Atreus um pouco mais velho enquanto tenta entender suas origens e a importância de seu nome de batismo — Loki. A busca por respostas vai desencadear no auge do Ragnarok, o fim dos tempos Nórdicos.',
                gallery: [
                  {
                    src: '/img/games/god.jpg',
                    alt: 'The Witcher image gallery',
                    imageFit: 'cover',
                    width: 1920,
                    height: 1080,
                    type: 'image',
                  },
                  {
                    src: '/img/games/r8.jpg',
                    alt: 'Resident Evil 8 image gallery',
                    imageFit: 'cover',
                    width: 1920,
                    height: 1080,
                    type: 'image',
                  },
                  {
                    src: '/img/games/starWars.jpg',
                    alt: 'Star Wars image gallery',
                    imageFit: 'cover',
                    width: 1920,
                    height: 1080,
                    type: 'image',
                  },
                  {
                    src: '/img/games/theLastOfUs.jpg',
                    alt: 'The Last Of Us image gallery',
                    imageFit: 'cover',
                    width: 1920,
                    height: 1080,
                    type: 'image',
                  },
                  {
                    src: '/img/games/starWarsHighlight.png',
                    alt: 'Star Wars Highlight image gallery',
                    imageFit: 'cover',
                    width: 1920,
                    height: 1080,
                    type: 'image',
                  },
                  {
                    src: '/img/games/god.jpg',
                    alt: 'The Witcher 2 image gallery',
                    imageFit: 'cover',
                    width: 1920,
                    height: 1080,
                    type: 'image',
                  },
                ],
                price: 350,
              },
            ]),
          ),
        ),
      ],
    },
  },
  args: {
    filterItems: [
      filterCategories,
      filterYear,
      filterPlatforms,
      filterFeedback,
    ],
  },
} as Meta<ExplorerTemplateProps>;

const queryClient = new QueryClient();

export const Default: Story<ExplorerTemplateProps> = args => (
  <QueryClientProvider client={queryClient}>
    <Explorer {...args} />
  </QueryClientProvider>
);
