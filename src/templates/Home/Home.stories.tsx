import { Story, Meta } from '@storybook/react/types-6-0';

import { Home } from './Home';
import { gameCardItems } from './mock';

export default {
  title: 'Templates/Home',
  component: Home,
} as Meta;

export const Default: Story = () => <Home gameList={gameCardItems} />;
