import { Story, Meta } from '@storybook/react/types-6-0';

import { Title, TitleProps } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
  args: {
    children: 'Bestsellers',
    textAlign: 'center',
  },
} as Meta<TitleProps>;

export const Desktop: Story<TitleProps> = args => (
  <div style={{ textAlign: 'center' }}>
    <Title {...args} />
  </div>
);

export const Mobile: Story<TitleProps> = args => (
  <div style={{ textAlign: 'center' }}>
    <Title {...args} />
  </div>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
