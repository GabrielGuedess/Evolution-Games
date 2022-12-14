import { Story, Meta } from '@storybook/react/types-6-0';

import sliderMock from './mock';
import { Slider, SliderProps } from './Slider';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default {
  title: 'Organisms/Slider',
  component: Slider,
  args: {
    slides: sliderMock,
  },
} as Meta<SliderProps>;

export const Default: Story<SliderProps> = args => <Slider {...args} />;
