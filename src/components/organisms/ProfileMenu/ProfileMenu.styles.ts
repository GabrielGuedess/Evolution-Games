import media from 'styled-media-query';

import styled, { css, DefaultTheme } from 'styled-components';

type LinkProps = {
  isActive?: boolean;
};

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.mainBg};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    border-bottom: 0.1rem solid ${theme.colors.secondary};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.secondary};
      }
    `}
  `}
`;

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, 0.3s linear;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};
  `}
`;
