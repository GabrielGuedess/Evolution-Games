import { Story, Meta } from '@storybook/react/types-6-0';

import { SignUpFinally, SignUpFinallyProps } from './SignUpFinally';

export default {
  title: 'Organisms/SignUpFinally',
  component: SignUpFinally,
  args: {
    name: 'Gabriel',
  },
} as Meta<SignUpFinallyProps>;

export const Default: Story<SignUpFinallyProps> = args => (
  <SignUpFinally {...args} />
);
