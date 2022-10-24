import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCartDrop, GameCartDropProps } from './GameCartDrop';

export default {
  title: 'Molecules/GameCartDrop',
  component: GameCartDrop,
  args: {
    src: 'https://images.unsplash.com/photo-1662414590066-91c548626702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIxMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjMyOTQxNjQ&ixlib=rb-1.2.1&q=80&w=1080',
    genres: ['Action'],
    title: 'The Witcher 3',
    developer: 'CD Projekt',
    price: 100,
    quantity: 1,
  },
} as Meta<GameCartDropProps>;

export const Desktop: Story<GameCartDropProps> = args => (
  <div style={{ maxWidth: 890, margin: '0 auto' }}>
    <GameCartDrop {...args} />
  </div>
);

export const Mobile: Story<GameCartDropProps> = args => (
  <GameCartDrop {...args} />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
