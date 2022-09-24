import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Popover.Content)`
  ${({ theme }) => css`
    width: calc(100vw - (1.6rem * 2));
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 1.2rem;
    margin: 0 1.6rem;
    background: rgba(4, 4, 12, 0.8);
    backdrop-filter: blur(0.3rem);
    border-radius: ${theme.border.radius.regular};

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;

export const ListTextLink = styled(NavigationMenu.List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

export const ItemTextLink = styled(NavigationMenu.Item)`
  list-style: none;
`;

export const LinkTextLink = styled(NavigationMenu.Link)`
  ${({ theme, active }) => css`
    text-decoration: none;
    outline: none;
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
    line-height: 3.2rem;
    text-transform: uppercase;
    transition: color 0.3s linear;

    color: ${active ? theme.colors.primary : theme.colors.whiteText};
    text-shadow: ${active && theme.shadows.text};

    :is(:hover, :focus) {
      color: ${theme.colors.primary};
      text-shadow: ${theme.shadows.text};
    }
  `}
`;
