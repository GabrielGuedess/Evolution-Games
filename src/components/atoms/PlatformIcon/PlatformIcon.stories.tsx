import { Story, Meta } from '@storybook/react/types-6-0';

import { PlatformIcon, PlatformIconProps } from './PlatformIcon';

export default {
  title: 'Atoms/PlatformIcon',
  component: PlatformIcon,
  args: {
    hasTitle: true,
    isActive: false,
    size: 'medium',
    variant: 'simple',
  },
} as Meta<PlatformIconProps>;

export const Playstation4: Story<PlatformIconProps> = args => (
  <PlatformIcon {...args} />
);

Playstation4.args = {
  platform: 'ps4',
  color: 'white',
};

export const Playstation5: Story<PlatformIconProps> = args => (
  <PlatformIcon {...args} />
);

Playstation5.args = {
  platform: 'ps5',
  color: 'white',
};

export const XboxOne: Story<PlatformIconProps> = args => (
  <PlatformIcon {...args} />
);

XboxOne.args = {
  platform: 'one',
  color: 'white',
};

export const XboxSeries: Story<PlatformIconProps> = args => (
  <PlatformIcon {...args} />
);

XboxSeries.args = {
  platform: 'xs',
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
