import * as Popover from '@radix-ui/react-popover';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CaretDown } from 'phosphor-react';

import { MenuMobile, MenuProps } from './MenuMobile';

export default {
  title: 'Molecules/MenuMobile',
  component: MenuMobile,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    path: '/',
  },
  argTypes: {
    path: {
      control: {
        type: 'select',
        options: ['NotActive', '/', '/explorer', '/contact'],
      },
    },
    username: {
      control: {
        type: 'select',
        options: ['User', null],
      },
    },
  },
} as Meta<MenuProps>;

export const Default: Story<MenuProps> = args => (
  <Popover.Root>
    <Popover.Trigger>
      <CaretDown aria-label="Icon" size={32} style={{ cursor: 'pointer' }} />
    </Popover.Trigger>
    <MenuMobile {...args} />
  </Popover.Root>
);
