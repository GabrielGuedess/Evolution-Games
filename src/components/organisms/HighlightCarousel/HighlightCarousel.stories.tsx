import { Story, Meta } from '@storybook/react/types-6-0';

import { HighlightCarousel, HighlightCarouselProps } from './HighlightCarousel';
import { highlightMock } from './mock';

export default {
  title: 'Organisms/HighlightCarousel',
  component: HighlightCarousel,
  args: {
    title: 'Pre-order',
    data: highlightMock,
  },
} as Meta<HighlightCarouselProps>;

export const Default: Story<HighlightCarouselProps> = args => (
  <HighlightCarousel {...args} />
);
