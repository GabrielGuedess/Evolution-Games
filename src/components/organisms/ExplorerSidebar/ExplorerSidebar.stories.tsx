import { Story, Meta } from '@storybook/react/types-6-0';

import { ExplorerSidebar, ExploreSidebarProps } from './ExplorerSidebar';
import { filterItems } from './mock';

export default {
  title: 'Organisms/ExplorerSidebar',
  component: ExplorerSidebar,
  args: {
    initialValues: {},
    isOpen: false,
    setIsOpen: () => ({}),
    onFilter: () => ({}),
    items: filterItems,
  },
} as Meta<ExploreSidebarProps>;

export const Default: Story<ExploreSidebarProps> = args => (
  <ExplorerSidebar {...args} />
);
