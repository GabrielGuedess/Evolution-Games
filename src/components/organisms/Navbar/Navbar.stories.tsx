import { Story, Meta } from '@storybook/react/types-6-0';

import { Navbar } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
} as Meta;

export const Default: Story = () => <Navbar />;
