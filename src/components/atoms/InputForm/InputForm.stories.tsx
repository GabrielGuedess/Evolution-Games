import { Story, Meta } from '@storybook/react/types-6-0';
import { Envelope } from 'phosphor-react';

import { InputForm, InputFormProps } from './InputForm';

export default {
  title: 'Atoms/InputForm',
  component: InputForm,
  args: {
    isInvalid: false,
    errorMessage: 'Campo obrigatório',
  },
} as Meta<InputFormProps>;

export const Default: Story<InputFormProps> = args => (
  <div style={{ maxWidth: '440px' }}>
    <InputForm label="E-mail" placeholder="Insira seu email" {...args} />
  </div>
);

export const Invalid: Story<InputFormProps> = args => (
  <div style={{ maxWidth: '440px' }}>
    <InputForm label="E-mail" placeholder="Insira seu email" {...args} />
  </div>
);

Invalid.args = {
  isInvalid: true,
  errorMessage: 'Campo obrigatório',
};

export const WithIcon: Story<InputFormProps> = args => (
  <div style={{ maxWidth: '440px' }}>
    <InputForm label="Senha" placeholder="Insira sua senha" {...args} />
  </div>
);

WithIcon.args = {
  icon: <Envelope size={28} />,
};
