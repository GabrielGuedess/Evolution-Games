import * as Popover from '@radix-ui/react-popover';
import { Story, Meta } from '@storybook/react/types-6-0';

import { userInfo } from 'templates/Home/mock';

import { UserInfo, UserInfoProps } from './UserInfo';

export default {
  title: 'Molecules/UserInfo',
  component: UserInfo,
  args: userInfo,
  argTypes: {
    email: {
      type: 'string',
    },
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
} as Meta<UserInfoProps>;

export const Default: Story<UserInfoProps> = args => (
  <Popover.Root>
    <UserInfo {...args} />
  </Popover.Root>
);
