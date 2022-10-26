/* eslint-disable no-console */
import Link from 'next/link';

import { useState, ChangeEvent, FormEvent } from 'react';

import { Eye, EyeSlash, CircleNotch } from 'phosphor-react';
import requestFake from 'utils/requestFake';
import { validateEmail } from 'utils/validations';

import Button from 'components/atoms/Button/Button';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import { InputForm } from 'components/atoms/InputForm/InputForm';

import * as S from './SignIn.styles';

type ErrorMessages = {
  [key: string]: boolean;
};

type Validations = {
  [key: string]: (value: string) => boolean;
};

export const SignIn = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});
  const [formInputs, setFormInputs] = useState({ email: '', password: '' });

  const validateFields = (name: string, value: string) => {
    const validations: Validations = {
      email: validateEmail,
    };

    if (!!validations[name]) {
      const isValid = validations[name](value);
      setErrorMessages({ ...errorMessages, [name]: isValid });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateFields(name, value);
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      await requestFake();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setFormInputs({ email: '', password: '' });
    }
  };

  return (
    <S.Wrapper role="form" onSubmit={handleSubmit}>
      <S.Title>Bem-vindo!</S.Title>
      <S.Subtitle>Bem-vindo! Por favor, insira seus dados</S.Subtitle>
      <S.InputBox>
        <InputForm
          required
          type="email"
          name="email"
          label="E-mail"
          labelFor="email"
          value={formInputs.email}
          placeholder="Insira seu e-mail"
          errorMessage="E-mail inválido"
          onChange={e => handleInputChange(e)}
          isInvalid={
            errorMessages.email !== undefined ? !errorMessages.email : false
          }
          icon={
            <S.IconValidEmail
              viewBox="0 0 16 16"
              isValid={errorMessages?.email ?? false}
            >
              <path d="M10.8000002,10.8000002 C9.85000038,11.6500006 9.18349609,12 8,12 C5.80000019,12 4,10.1999998 4,8 C4,5.80000019 5.80000019,4 8,4 C10.1999998,4 12,6 12,8 C12,9.35332031 12.75,9.5 13.5,9.5 C14.25,9.5 15,8.60000038 15,8 C15,4 12,1 8,1 C4,1 1,4 1,8 C1,12 4,15 8,15 C12,15 15,12 15,8" />
              <polyline
                points="5 8.375 7.59090909 11 14.5 4"
                transform="translate(0 -0.5)"
              />
            </S.IconValidEmail>
          }
        />
        <InputForm
          required
          label="Senha"
          name="password"
          labelFor="password"
          value={formInputs.password}
          placeholder="Insira sua senha"
          errorMessage="Campo obrigatório"
          type={show ? 'text' : 'password'}
          onChange={e => handleInputChange(e)}
          icon={
            <S.WrapperIconPass onClick={() => setShow(!show)}>
              {show ? (
                <EyeSlash aria-label="Esconder senha" size={26} />
              ) : (
                <Eye aria-label="Mostrar senha" size={26} />
              )}
            </S.WrapperIconPass>
          }
        />
      </S.InputBox>
      <S.AlignBox>
        <Checkbox title="Manter-me conectado" />
        <Link href="/sign-in" passHref>
          <S.Link>Forgot password</S.Link>
        </Link>
      </S.AlignBox>
      <Button
        disabled={loading}
        as="button"
        icon={
          loading ? (
            <CircleNotch size={24} className="animation-spinner">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="0.6s"
                from="0 0 0"
                to="360 0 0"
                repeatCount="indefinite"
              />
            </CircleNotch>
          ) : undefined
        }
        type="submit"
        size="large"
        fullWidth
      >
        Entrar
      </Button>
      <S.AlignBox justifyContent="center">
        <S.NoAccount>Não tem uma conta?</S.NoAccount>
        <Link href="/sign-up" passHref>
          <S.Link>Inscrever-se</S.Link>
        </Link>
      </S.AlignBox>
    </S.Wrapper>
  );
};
