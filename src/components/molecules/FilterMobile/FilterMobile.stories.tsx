import * as Dialog from '@radix-ui/react-dialog';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FunnelSimple } from 'phosphor-react';

import { FilterMobile, FilterMobileProps } from './FilterMobile';

export default {
  title: 'Molecules/FilterMobile',
  component: FilterMobile,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    filterBy: 'all',
    setFilterBy: () => ({}),
  },
} as Meta<FilterMobileProps>;

export const Default: Story<FilterMobileProps> = args => (
  <Dialog.Root>
    <Dialog.Trigger>
      <FunnelSimple aria-label="Icon" size={32} style={{ cursor: 'pointer' }} />
    </Dialog.Trigger>
    <FilterMobile {...args} />
  </Dialog.Root>
);
