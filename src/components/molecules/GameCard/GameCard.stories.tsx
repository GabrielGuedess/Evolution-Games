import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCard, GameCardProps } from './GameCard';

export default {
  title: 'Molecules/GameCard',
  component: GameCard,
  args: {
    id: '1',
    name: 'God of War: Ragnarök',
    genres: ['Action-adventure '],
    developer: 'Santa Monica Games',
    releaseDate: new Date('11-09-2022'),
    image:
      'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
    price: 250.0,
    score: 5.0,
    platform: 'ps5',
    primaryColor: '#9db4d0',
    slug: '',
  },
} as Meta<GameCardProps>;

export const Default: Story<GameCardProps> = args => <GameCard {...args} />;
