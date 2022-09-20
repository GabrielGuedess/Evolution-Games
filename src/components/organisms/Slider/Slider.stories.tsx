import { Story, Meta } from '@storybook/react/types-6-0';

import { SliderMock } from './mock';
import { Slider, SliderProps } from './Slider';

export default {
  title: 'Organisms/Slider',
  component: Slider,
  args: {
    slides: SliderMock,
  },
} as Meta<SliderProps>;

export const Default: Story<SliderProps> = args => <Slider {...args} />;
