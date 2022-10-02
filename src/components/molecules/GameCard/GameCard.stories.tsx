import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCard, GameCardProps } from './GameCard';

export default {
  title: 'Molecules/GameCard',
  component: GameCard,
  args: {
    title: 'God of War: Ragnarök',
    genre: 'Action-adventure ',
    developer: 'Santa Monica Games',
    year: '2022',
    img: 'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
    price: '$ 60.99',
    score: 5.0,
    platform: ['playstation'],
    primaryColor: '#9db4d0',
    slug: '',
  },
} as Meta<GameCardProps>;

export const Default: Story<GameCardProps> = args => <GameCard {...args} />;
