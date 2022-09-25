import styled, { css } from 'styled-components';

import { PlatformIconProps } from './PlatformIcon';

const iconModifiers = {
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

export const Icon = styled.svg<Pick<PlatformIconProps, 'platform'>>`
  ${({ platform }) => css`
    ${!!iconModifiers[platform] && iconModifiers[platform]}
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    font-weight: ${theme.font.regular};
    margin-left: ${theme.spacings.xsmall};
  `}
`;
