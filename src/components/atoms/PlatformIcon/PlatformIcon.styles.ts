import styled, { css } from 'styled-components';

import { PlatformIconProps } from './PlatformIcon';

const iconModifiers = {
  small: () => ({
    playstation: () => css`
      width: 1.8rem;
      height: 1.8rem;
    `,

    xbox: () => css`
      width: 1.8rem;
      height: 1.8rem;
    `,

    pc: () => css`
      width: 2rem;
      height: 1rem;
    `,

    all: () => css`
      width: 1.5rem;
      height: 1.5rem;
    `,
  }),

  medium: () => ({
    playstation: () => css`
      width: 2.8rem;
      height: 2.8rem;
    `,

    xbox: () => css`
      width: 2.2rem;
      height: 2.2rem;
    `,

    pc: () => css`
      width: 3.2rem;
      height: 1.7rem;
    `,

    all: () => css`
      width: 2rem;
      height: 2rem;
    `,
  }),
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

export const Icon = styled.svg<Pick<PlatformIconProps, 'platform' | 'size'>>`
  ${({ platform, size }) => css`
    ${!!iconModifiers[size!]()[platform] && iconModifiers[size!]()[platform]}
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
