import * as Popover from '@radix-ui/react-popover';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CloseButton } from './CloseButton';

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
} as Meta;

export const Default: Story = () => (
  <Popover.Root>
    <CloseButton />
  </Popover.Root>
);
