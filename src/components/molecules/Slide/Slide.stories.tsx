import { Story, Meta } from '@storybook/react/types-6-0';

import { Slide, SlideProps } from './Slide';

export default {
  title: 'Molecules/Slide',
  component: Slide,
  args: {
    srcSlideImage: '/img/games/theLastOfUs.png',
    altSlideImage: 'The Last Of Us',
    srcHighlightImage: '/img/games/highlightName/nameTheLastOfUs.png',
    altHighlightImage: 'The Last Of Us Highlight',
  },
} as Meta<SlideProps>;

export const Default: Story<SlideProps> = args => (
  <div style={{ width: '100%', height: '100vh' }}>
    <Slide {...args} />
  </div>
);
