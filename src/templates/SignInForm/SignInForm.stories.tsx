import { Story, Meta } from '@storybook/react/types-6-0';

import { SignInForm } from './SignInForm';

export default {
  title: 'Templates/SignInForm',
  component: SignInForm,
} as Meta;

export const Default: Story = () => <SignInForm />;
