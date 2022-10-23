import { Story, Meta } from '@storybook/react/types-6-0';

import { SignUpLocation, SignUpLocationProps } from './SignUpLocation';

const locationInputs = {
  cep: '',
  logradouro: '',
  numero: '',
  complemento: '',
  referencia: '',
  bairro: '',
  cidade: '',
  uf: '',
};

const setLocationInputs = () => ({});
const setCurrentStep = () => ({});

export default {
  title: 'Organisms/SignUpLocation',
  component: SignUpLocation,
  args: {
    locationInputs,
    setLocationInputs,
    setCurrentStep,
    currentStep: 3,
  },
} as Meta<SignUpLocationProps>;

export const Default: Story<SignUpLocationProps> = args => (
  <SignUpLocation {...args} />
);
