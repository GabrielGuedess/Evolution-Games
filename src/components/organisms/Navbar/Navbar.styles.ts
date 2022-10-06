import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Container).attrs({ as: 'menu' })`
  ${({ theme }) => css`
    position: absolute;
    inset: 0 0 auto 0;
    padding: 1.4rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    z-index: ${theme.layers.menu};
    justify-content: space-between;

    ${media.greaterThan('large')`
      flex-direction: row;
      padding: 3.6rem 0;
    `}
  `}
`;

export const WrapperLogotipo = styled.div`
  order: 2;

  ${media.greaterThan('large')`
    order: initial;
  `}
`;

export const CustomMediaMatch = styled(MediaMatch)`
  order: 3;

  ${media.greaterThan('large')`
    order: initial;
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
  order: 1;

  ${media.greaterThan('large')`
    gap: 3rem;
    order: initial;
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
