import styled, { css } from 'styled-components';

import { PlatformIconProps } from './PlatformIcon';

const iconModifiers = {
  small: () => css`
    height: 1.4rem;
  `,
  medium: () => css`
    height: 1.8rem;
  `,
};

export const Wrapper = styled.div<
  Pick<PlatformIconProps, 'color' | 'isActive'>
>`
  ${({ theme, color, isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${isActive ? theme.colors.primary : theme.colors[color!]};
    transition: color 0.3s linear;

    :hover {
      cursor: pointer;
      color: ${theme.colors.primary};
    }
  `}
`;

export const Icon = styled.svg<Pick<PlatformIconProps, 'size'>>`
  ${({ size }) => css`
    ${!!iconModifiers[size!]() && iconModifiers[size!]()}
  `}
`;

export const Label = styled.span<Pick<PlatformIconProps, 'size'>>`
  ${({ theme, size }) => css`
    font-style: normal;
    font-weight: ${theme.font.regular};
    margin-left: ${theme.spacings.xsmall};
    font-size: ${size === 'medium'
      ? theme.font.sizes.medium
      : theme.font.sizes.small};
  `}
`;
