import { Story, Meta } from '@storybook/react/types-6-0';

import { Home } from './Home';

export default {
  title: 'Templates/Home',
  component: Home,
} as Meta;

export const Default: Story = () => <Home />;
