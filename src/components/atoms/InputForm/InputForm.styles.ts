import * as LabelPrimitive from '@radix-ui/react-label';

import styled, { css } from 'styled-components';

import { InputFormProps } from './InputForm';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const Input = styled.input<Pick<InputFormProps, 'isInvalid'>>`
  ${({ theme, isInvalid }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
    font-style: normal;
    line-height: ${theme.spacings.medium};
    border-width: 1px;
    border-style: solid;
    border-color: ${isInvalid ? theme.colors.gameBad : theme.colors.whiteText};
    background-color: transparent;
    border-radius: ${theme.border.radius.regular};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.white};

    &:-webkit-autofill ~ div,
    &:-webkit-autofill:hover ~ div,
    &:-webkit-autofill:focus ~ div,
    &:-webkit-autofill:active ~ div {
      color: ${theme.colors.secondary};
    }

    &::placeholder {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const Label = styled(LabelPrimitive.Root)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    font-weight: ${theme.font.regular};
    line-height: ${theme.spacings.medium};
    margin-bottom: 0.3rem;
  `}
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    color: ${theme.colors.gameBad};

    > span {
      font-size: ${theme.font.sizes.xsmall};
      font-style: normal;
      font-weight: ${theme.font.regular};
      margin: ${theme.spacings.xxsmall} 0.4rem;
    }
  `}
`;
