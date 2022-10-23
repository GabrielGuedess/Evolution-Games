import { Story, Meta } from '@storybook/react/types-6-0';

import { Auth, AuthProps } from './Auth';

export default {
  title: 'Templates/Auth',
  component: Auth,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<AuthProps>;

export const Default: Story<AuthProps> = () => <Auth>Auth</Auth>;
