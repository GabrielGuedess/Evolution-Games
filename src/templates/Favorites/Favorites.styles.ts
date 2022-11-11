import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';
import * as GameCardStyles from 'components/molecules/GameCard/GameCard.styles';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 3rem;
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
