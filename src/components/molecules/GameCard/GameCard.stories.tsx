import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCard, GameCardProps } from './GameCard';

export default {
  title: 'Molecules/GameCard',
  component: GameCard,
  args: {
    id: '1',
    name: 'God of War: Ragnarök',
    genres: [{ name: 'Action-adventure ', id: '1', slug: 'action-adventure' }],
    developers: [
      { id: '1', name: 'Santa Monica Games', slug: 'santa-monica-games' },
    ],
    release_date: new Date('2022'),
    image:
      'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
    price: 250.0,
    score: 5.0,
    platforms: [{ name: 'Plastation 5', slug: 'ps5', id: '1' }],
    slug: 'god-of-war-ragnarok',
    primary_color: '#9db4d0',
  },
} as Meta<GameCardProps>;

export const Default: Story<GameCardProps> = args => <GameCard {...args} />;
