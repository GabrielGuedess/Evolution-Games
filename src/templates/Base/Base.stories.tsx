import { Story, Meta } from '@storybook/react/types-6-0';

import { Container } from 'components/atoms/Container/Container';

import { Base, BaseTemplateProps } from './Base';

export default {
  title: 'Templates/Base',
  component: Base,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    hasColors: true,
    hasMarginTop: true,
  },
} as Meta<BaseTemplateProps>;

export const Default: Story<BaseTemplateProps> = args => (
  <Base {...args}>
    <Container>
      <h1>Base</h1>
    </Container>
  </Base>
);
