import * as Popover from '@radix-ui/react-popover';
import { Story, Meta } from '@storybook/react/types-6-0';

import { userInfo } from 'templates/Home/mock';

import { AvatarUserProps } from 'components/molecules/AvatarUser/AvatarUser';

import { UserInfo } from './UserInfo';

export default {
  title: 'Molecules/UserInfo',
  component: UserInfo,
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

export const Default: Story = args => (
  <Popover.Root>
    <UserInfo {...args} />
  </Popover.Root>
);
