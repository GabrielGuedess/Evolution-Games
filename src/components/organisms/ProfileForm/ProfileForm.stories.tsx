import { Story, Meta } from '@storybook/react/types-6-0';

import { ProfileForm } from './ProfileForm';

export default {
  title: 'Organisms/ProfileForm',
  component: ProfileForm,
} as Meta;

export const Default: Story = () => <ProfileForm />;
