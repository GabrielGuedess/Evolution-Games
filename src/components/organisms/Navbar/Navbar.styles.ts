import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Container).attrs({ as: 'menu' })`
  ${({ theme }) => css`
    position: relative;
    padding: 1.4rem 0;
    display: flex;
    flex-direction: row;
    z-index: ${theme.layers.base};
    justify-content: space-between;

    ${media.greaterThan('medium')`
      flex-direction: row;
      padding: 3.6rem 0;
    `}
  `}
`;

export const ListTextLink = styled(NavigationMenu.List)`
  display: flex;
  gap: 6.4rem;
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

export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${media.greaterThan('medium')`
    gap: 3rem;
  `}
`;

export const HeartLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.whiteText};
    transition: color 0.3s linear;

    :is(:hover, :focus) {
      cursor: pointer;
      color: ${theme.colors.primary};
    }
  `}
`;
