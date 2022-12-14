import { Story, Meta } from '@storybook/react/types-6-0';

import { SignUpData, SignUpDataProps } from './SignUpData';

const dataInputs = {
  name: '',
  lastName: '',
  cpf: '',
  cellphone: '',
  date: new Date(),
};

const setDataInputs = () => ({});
const setCurrentStep = () => ({});

export default {
  title: 'Organisms/SignUpData',
  component: SignUpData,
  args: {
    dataInputs,
    setDataInputs,
    setCurrentStep,
    currentStep: 1,
  },
} as Meta<SignUpDataProps>;

export const Default: Story<SignUpDataProps> = args => <SignUpData {...args} />;
