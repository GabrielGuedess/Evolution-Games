import { SessionProvider } from 'next-auth/react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Favorites } from './Favorites';

export default {
  title: 'Templates/Favorites',
  component: Favorites,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story = () => (
  <SessionProvider>
    <Favorites />
  </SessionProvider>
);
