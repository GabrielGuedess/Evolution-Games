import { Story, Meta } from '@storybook/react/types-6-0';

import { SignUpUser, SignUpUserProps } from './SignUpUser';

const userInputs = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const setUserInputs = () => ({});
const setCurrentStep = () => ({});
const setUserPhoto = () => ({});

export default {
  title: 'Organisms/SignUpUser',
  component: SignUpUser,
  args: {
    userInputs,
    setUserInputs,
    currentStep: 0,
    setCurrentStep,
    userPhoto: null,
    setUserPhoto,
  },
} as Meta<SignUpUserProps>;

export const Default: Story<SignUpUserProps> = args => <SignUpUser {...args} />;
