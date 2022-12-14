import { useState, Dispatch, SetStateAction } from 'react';
import InputMask from 'react-input-mask';

import { FieldErrors, signUpDataValidate } from 'utils/validations';

import Button from 'components/atoms/Button/Button';
import { InputForm } from 'components/atoms/InputForm/InputForm';

import * as S from './SignUpData.styles';

export type DataInputs = {
  name: string;
  lastName: string;
  cpf: string;
  cellphone: string;
  date: Date;
};

export type SignUpDataProps = {
  dataInputs: DataInputs;
  setDataInputs: Dispatch<SetStateAction<DataInputs>>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

export const SignUpData = ({
  dataInputs,
  setDataInputs,
  currentStep,
  setCurrentStep,
}: SignUpDataProps) => {
  const [errorMessages, setErrorMessages] = useState<FieldErrors>({});

  const handleInput = (field: keyof DataInputs, value: string | Date) => {
    setDataInputs(s => ({ ...s, [field]: value }));

    const errors = signUpDataValidate({ ...dataInputs, [field]: value });

    setErrorMessages({ ...errorMessages, [field]: errors[field] });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      dataInputs.date.toISOString().slice(0, 10) ===
      new Date().toISOString().slice(0, 10)
    ) {
      setErrorMessages({ date: 'Não pode ser hoje' });
      return;
    }

    if (
      Object.values(errorMessages).some(item => item !== undefined) ||
      Object.values(dataInputs).some(item => item === '')
    ) {
      setErrorMessages(errorMessages);
      return;
    }

    setErrorMessages({});
    setCurrentStep(currentStep + 1);
  };

  return (
    <S.Wrapper role="form" onSubmit={handleSubmit}>
      <S.InputBox>
        <InputForm
          required
          type="text"
          name="nome"
          label="Nome"
          labelFor="nome"
          value={dataInputs.name}
          placeholder="Insira seu nome"
          errorMessage={errorMessages?.name}
          onChange={e => handleInput('name', e.target.value)}
          isInvalid={!!errorMessages?.name}
        />

        <InputForm
          required
          type="text"
          name="sobrenome"
          label="Sobrenome"
          labelFor="sobrenome"
          value={dataInputs.lastName}
          placeholder="Insira seu sobrenome"
          errorMessage={errorMessages?.lastName}
          onChange={e => handleInput('lastName', e.target.value)}
          isInvalid={!!errorMessages?.lastName}
        />

        <InputForm
          required
          as={InputMask}
          mask="999.999.999-99"
          type="text"
          name="cpf"
          label="CPF"
          labelFor="cpf"
          value={dataInputs.cpf}
          placeholder="Insira seu CPF"
          errorMessage={errorMessages?.cpf}
          onChange={e =>
            handleInput('cpf', e.target.value.replace(/[^0-9]/g, ''))
          }
          isInvalid={!!errorMessages?.cpf}
        />

        <InputForm
          required
          type="text"
          as={InputMask}
          mask="(99) 99999-9999"
          name="celular"
          label="Celular"
          labelFor="celular"
          value={dataInputs.cellphone}
          placeholder="Insira seu celular"
          errorMessage={errorMessages?.cellphone}
          onChange={e =>
            handleInput('cellphone', e.target.value.replace(/[^0-9]/g, ''))
          }
          isInvalid={!!errorMessages?.cellphone}
        />

        <InputForm
          required
          type="date"
          name="date"
          label="Data de nascimento"
          labelFor="date"
          value={dataInputs.date.toISOString().slice(0, 10)}
          placeholder="Insira sua data de nascimento"
          errorMessage={errorMessages?.date}
          onChange={e => handleInput('date', new Date(e.target.value))}
          isInvalid={!!errorMessages?.date}
        />
      </S.InputBox>

      <Button
        disabled={
          Object.values(errorMessages).some(item => item !== undefined) ||
          Object.values(dataInputs).some(item => item === '')
        }
        as="button"
        type="submit"
        size="large"
        fullWidth
      >
        Próximo
      </Button>
    </S.Wrapper>
  );
};
