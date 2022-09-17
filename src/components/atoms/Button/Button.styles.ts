import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from './Button';

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    span {
      margin-left: ${theme.spacings.xsmall};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, size, fullWidth, disabled }) => css`
    width: fit-content;
    background: ${theme.colors.primaryForWhite};
    cursor: pointer;
    position: relative;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.whiteText};
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${disabled && wrapperModifiers.disabled()};

    :not(:disabled):is(:hover, :focus) {
      filter: brightness(1.1);
      box-shadow: ${theme.shadows.box};
    }

    :not(:disabled):active {
      filter: brightness(0.9);
    }

    span {
      font-size: ${theme.font.sizes.medium};
      font-weight: 500;
      line-height: 1;
      display: block;
      position: relative;
      transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      z-index: 1;
    }

    :not(:disabled):is(:hover, :focus) span {
      transform: scale(1.05);
    }

    :not(:disabled):is(:hover, :focus) .icon {
      transform: scale(1.2);
    }

    :not(:disabled):active span {
      transform: scale(0.95);
    }

    svg {
      transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    .effect {
      fill: ${theme.colors.primary};
      position: absolute;
      top: -5%;
      left: -5%;
      width: 110%;
      height: 110%;
      z-index: -1;

      path {
        transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }
    }

    :not(:disabled):is(:hover, :focus) .effect path {
      d: path(
        'M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0'
      );
    }

    :not(:disabled):active .effect path {
      d: path(
        'M0,0 C30,10 70,10 100,0 C95,30 95,70 100,100 C70,90 30,90 0,100 C5,70 5,30 0,0'
      );
    }
  `}
`;
