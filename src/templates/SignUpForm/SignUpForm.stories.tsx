import { Story, Meta } from '@storybook/react/types-6-0';

import { steps } from './mock';
import { SignUpForm, SignUpFormProps } from './SignUpForm';

export default {
  title: 'Templates/SignUpForm',
  component: SignUpForm,
  args: {
    steps,
  },
} as Meta<SignUpFormProps>;

export const Default: Story<SignUpFormProps> = args => <SignUpForm {...args} />;
