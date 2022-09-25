import { Story, Meta } from '@storybook/react/types-6-0';

import { GameList, GameListProps } from './GameList';
import gameCardItems from './mock';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  title: 'Organisms/GameList',
  component: GameList,
} as Meta<GameListProps>;

export const Default: Story = () => (
  <GameList title="Bestsellers" data={gameCardItems} />
);
