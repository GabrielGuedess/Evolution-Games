import { Story, Meta } from '@storybook/react/types-6-0';

import { PlatformIcon } from '../PlatformIcon/PlatformIcon';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    title: 'Playstation',
    icon: <PlatformIcon platform="playstation" size="small" />,
  },
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = args => <Checkbox {...args} />;
