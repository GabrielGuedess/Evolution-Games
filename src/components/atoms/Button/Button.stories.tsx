import { Story, Meta } from '@storybook/react/types-6-0';
import { Funnel } from 'phosphor-react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
  },
  args: {
    variant: 'solid',
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const Disable: Story<ButtonProps> = args => <Button {...args} />;

Disable.args = {
  children: 'Buy now',
  disabled: true,
};

export const fullWidth: Story<ButtonProps> = args => <Button {...args} />;

fullWidth.args = {
  children: 'Buy now',
  fullWidth: true,
};
export const withIcon: Story<ButtonProps> = args => <Button {...args} />;

withIcon.args = {
  size: 'medium',
  children: 'Buy now',
  icon: <Funnel weight="fill" size={20} className="icon" />,
};
export const OnlyIcon: Story<ButtonProps> = args => <Button {...args} />;

OnlyIcon.args = {
  size: 'medium',
  icon: <Funnel weight="fill" size={20} className="icon" />,
};

export const asLink: Story<ButtonProps> = args => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};

export const outline: Story<ButtonProps> = args => <Button {...args} />;

outline.args = {
  children: 'All',
  variant: 'outline',
};

export const minimal: Story<ButtonProps> = args => <Button {...args} />;

minimal.args = {
  icon: <Funnel weight="fill" size={20} className="icon" />,
  minimal: true,
};
