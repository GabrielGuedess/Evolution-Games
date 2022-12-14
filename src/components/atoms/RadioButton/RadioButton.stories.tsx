import { Story, Meta } from '@storybook/react/types-6-0';

import { PlatformIcon } from '../PlatformIcon/PlatformIcon';
import { RadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  args: {
    title: 'playstation',
    icon: <PlatformIcon platform="ps4" size="small" />,
  },
} as Meta<RadioButtonProps>;

export const Default: Story<RadioButtonProps> = args => (
  <RadioButton {...args} />
);
