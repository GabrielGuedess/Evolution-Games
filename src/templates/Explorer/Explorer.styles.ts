import * as Popover from '@radix-ui/react-popover';
import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';
import * as GameCardStyles from 'components/molecules/GameCard/GameCard.styles';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Container)`
  margin-top: 4.8rem;
  display: flex;
  gap: 2rem;
`;

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WrapperHeaderFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;

export const Filters = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  transition: 1s all linear;
`;

export const FilterTitle = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
  `}
`;

export const WrapperFilterSecondary = styled(Popover.Trigger)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    gap: 2rem;
    cursor: pointer;
  `}
`;

export const ContentFilterSecondary = styled(Popover.Content)`
  ${({ theme }) => css`
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    background: ${theme.colors.gameDetails};
  `}
`;

export const Arrow = styled(Popover.Arrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.gameDetails};
  `}
`;

export const More = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.greaterThan('small')`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(29.1rem, 1fr));
      gap: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      ${GameCardStyles.Wrapper} {
        width: 100%;
      }

      ${GameCardStyles.GameContent} {
        height: auto;
      }
    `}
  `}
`;
