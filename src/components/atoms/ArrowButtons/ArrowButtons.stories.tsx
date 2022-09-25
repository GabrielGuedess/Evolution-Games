import { Story, Meta } from '@storybook/react/types-6-0';

import { ArrowButtons } from './ArrowButtons';

export default {
  title: 'Atoms/ArrowButtons',
  component: ArrowButtons,
} as Meta;

export const Default: Story = () => <ArrowButtons />;
