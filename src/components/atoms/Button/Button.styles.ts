import media from 'styled-media-query';

import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from './Button';

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'variant' | 'minimal'>;

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

  solid: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.whiteText};

    :not(:disabled):is(:hover, :focus) {
      box-shadow: ${theme.shadows.box};
      color: ${theme.colors.whiteText};
    }

    .effect {
      fill: ${theme.colors.primary};
    }
  `,

  outline: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.secondary};

    .effect {
      fill: none;
      stroke-width: 2px;
      stroke: ${theme.colors.secondary};

      path {
        transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }
    }

    :not(:disabled):is(:hover, :focus) .effect {
      stroke: ${theme.colors.primary};
    }

    :not(:disabled):is(:hover, :focus) {
      color: ${theme.colors.primary};
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.secondary};

    :not(:disabled):is(:hover, :focus) {
      box-shadow: 0 0 0 transparent;
      color: ${theme.colors.whiteText};
    }

    .effect {
      display: none;
    }
  `,

  disabled: () => css`
    :disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, size, fullWidth, disabled, variant, minimal }) => css`
    width: fit-content;
    cursor: pointer;
    position: relative;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    ${!!size && wrapperModifiers[size](theme)};
    ${!!variant && wrapperModifiers[variant](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${minimal && wrapperModifiers.minimal(theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled()};

    :not(:disabled):is(:hover, :focus) {
      filter: brightness(1.1);
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
      position: absolute;
      top: initial;
      left: initial;
      width: 100%;
      height: 100%;
      z-index: -1;

      path {
        transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }

      ${media.greaterThan('small')`
        top: -5%;
        left: -5%;
        width: 110%;
        height: 110%;
      `}
    }

    :not(:disabled):is(:hover, :focus) .effect path {
      d: path(
        'M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0'
      );
    }

    :not(:disabled):active .effect path {
      d: path(
        'M0 5C0 2.23858 2.23858 0 5 0H95C97.7614 0 100 2.23858 100 5V95C100 97.7614 97.7614 100 95 100H5C2.23858 100 0 97.7614 0 95V5Z'
      );
    }
  `}
`;
