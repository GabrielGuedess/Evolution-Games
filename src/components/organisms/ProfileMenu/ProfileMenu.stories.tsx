import { Story, Meta } from '@storybook/react/types-6-0';

import { ProfileMenu } from './ProfileMenu';

export default {
  title: 'Organisms/ProfileMenu',
  component: ProfileMenu,
} as Meta;

export const Default: Story = () => <ProfileMenu />;
