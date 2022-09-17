import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo } from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    color: 'primary',
    size: 'normal',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aZpx3Iog2fpuqR3WsY1Eqx/E-commerce-Games?node-id=502%3A1195',
      allowFullscreen: true,
    },
  },
} as Meta;

export const Default: Story = () => <Logo />;
