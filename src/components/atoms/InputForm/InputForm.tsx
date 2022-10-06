import { InputHTMLAttributes } from 'react';

import { WarningCircle } from 'phosphor-react';

import * as S from './InputForm.styles';

export type InputFormProps = {
  label?: string;
  labelFor?: string;
  icon?: JSX.Element;
  isInvalid?: boolean;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputForm = ({
  label,
  isInvalid = false,
  labelFor,
  icon,
  errorMessage,
  ...props
}: InputFormProps) => (
  <S.Wrapper>
    {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
    <S.WrapperInput>
      <S.Input name={labelFor} id={labelFor} isInvalid={isInvalid} {...props} />
      {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.WrapperInput>
    {isInvalid && !!errorMessage && (
      <S.ErrorMessage>
        <WarningCircle size={18} />
        <span>{errorMessage}</span>
      </S.ErrorMessage>
    )}
  </S.Wrapper>
);
