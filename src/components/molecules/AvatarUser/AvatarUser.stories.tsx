import { Story, Meta } from '@storybook/react/types-6-0';

import { AvatarUser } from './AvatarUser';

export default {
  title: 'Molecules/AvatarUser',
  component: AvatarUser,
} as Meta;

export const Default: Story = () => <AvatarUser />;
