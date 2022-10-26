import { Story, Meta } from '@storybook/react/types-6-0';

import { SignIn } from './SignIn';

export default {
  title: 'Organisms/SignIn',
  component: SignIn,
} as Meta;

export const Default: Story = () => <SignIn />;
