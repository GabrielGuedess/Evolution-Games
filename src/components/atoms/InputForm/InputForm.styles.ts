import media from 'styled-media-query';

import styled, { css } from 'styled-components';

import { InputFormProps } from './InputForm';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    left: 1rem;
    top: 1.7rem;
    padding: 0 3px;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    transition: all 0.3s;
    z-index: 2;

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      z-index: -1;

      ${media.greaterThan('medium')`
        background: ${theme.colors.mainBg};
      `}
    }
  `}
`;

export const Input = styled.input<Pick<InputFormProps, 'isInvalid'>>`
  ${({ theme, isInvalid }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xmedium};
    font-weight: ${theme.font.regular};
    font-style: normal;
    line-height: ${theme.spacings.medium};
    border-width: 2px;
    border-style: solid;
    border-color: ${isInvalid ? theme.colors.gameBad : '#272530'};
    background-color: transparent;
    border-radius: 0.5rem;
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    outline: none;
    transition: all 0.3s;

    ::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23272530" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
      transition: all 0.3s;
    }

    ${Label} {
      color: ${isInvalid ? theme.colors.gameBad : theme.colors.white};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 100rem ${theme.colors.mainBg} inset;
      -webkit-text-fill-color: ${theme.colors.white};
    }

    &:-webkit-autofill ~ div,
    &:-webkit-autofill:hover ~ div,
    &:-webkit-autofill:focus ~ div,
    &:-webkit-autofill:active ~ div {
      color: ${theme.colors.secondary};
    }

    &::placeholder {
      font-size: ${theme.font.sizes.small};
      opacity: 0;
      transition: all 0.3s;
    }

    &:focus {
      border-color: ${isInvalid ? theme.colors.gameBad : theme.colors.primary};

      ::-webkit-calendar-picker-indicator {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%237C3AED" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
      }

      ::placeholder {
        opacity: 1;
      }
    }

    &:is(:focus, :valid) + ${Label} {
      top: -2rem;
      color: ${isInvalid ? theme.colors.gameBad : theme.colors.primary};
      font-size: ${theme.font.sizes.xsmall};

      ${media.greaterThan('medium')`
        top: -8px;
      `}
    }

    ${isInvalid &&
    css`
      &:invalid + ${Label} {
        top: -2rem;
        color: ${theme.colors.gameBad};
        font-size: ${theme.font.sizes.xsmall};

        ${media.greaterThan('medium')`
          top: -8px;
        `}
      }
    `}

    ::selection {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }
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
