import { Story, Meta } from '@storybook/react/types-6-0';

import { userInfo } from 'templates/Home/mock';

import { AvatarUser, AvatarUserProps } from './AvatarUser';

export default {
  title: 'Molecules/AvatarUser',
  component: AvatarUser,
  args: userInfo,
  argTypes: {
    name: {
      type: 'string',
    },
    bio: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
    userPhoto: {
      type: 'string',
    },
  },
} as Meta<AvatarUserProps>;

export const Default: Story = args => <AvatarUser {...args} />;
