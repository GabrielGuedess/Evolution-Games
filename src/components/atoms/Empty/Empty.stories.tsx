import { Story, Meta } from '@storybook/react/types-6-0';

import { Empty, EmptyProps } from './Empty';

export default {
  title: 'Atoms/Empty',
  component: Empty,
  args: {
    title: 'Nenhum resultado encontrado',
    description: 'Infelizmente não achamos nenhum resultado para a sua busca.',
  },
} as Meta<EmptyProps>;

export const Default: Story<EmptyProps> = args => <Empty {...args} />;

export const WithButton: Story<EmptyProps> = args => <Empty {...args} />;

WithButton.args = {
  hasLink: true,
};
