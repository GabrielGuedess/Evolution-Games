import { SessionProvider } from 'next-auth/react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Success } from './Success';

export default {
  title: 'Templates/Success',
  component: Success,
} as Meta;

export const Default: Story = () => (
  <SessionProvider>
    <Success />
  </SessionProvider>
);
