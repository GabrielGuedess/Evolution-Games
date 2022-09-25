import { Story, Meta } from '@storybook/react/types-6-0';

import { PlatformIcon, PlatformIconProps } from './PlatformIcon';

export default {
  title: 'Atoms/PlatformIcon',
  component: PlatformIcon,
  args: {
    hasTitle: true,
    isActive: false,
  },
} as Meta<PlatformIconProps>;

export const Playstation: Story<PlatformIconProps> = args => (
  <PlatformIcon {...args} />
);

Playstation.args = {
  platform: 'playstation',
  color: 'white',
};

export const Xbox: Story<PlatformIconProps> = args => (
  <PlatformIcon {...args} />
);

Xbox.args = {
  platform: 'xbox',
  color: 'white',
};

export const PC: Story<PlatformIconProps> = args => <PlatformIcon {...args} />;

PC.args = {
  platform: 'pc',
  color: 'white',
};

export const All: Story<PlatformIconProps> = args => <PlatformIcon {...args} />;

All.args = {
  platform: 'all',
  color: 'white',
};
