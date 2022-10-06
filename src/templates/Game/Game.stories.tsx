import { Story, Meta } from '@storybook/react/types-6-0';

import { Game, GameProps } from './Game';
import { gameMock } from './mock';

export default {
  title: 'Templates/Game',
  component: Game,
  parameters: {
    layout: 'fullscreen',
  },
  args: gameMock,
} as Meta<GameProps>;

export const Default: Story<GameProps> = args => <Game {...args} />;
