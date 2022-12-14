import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 32rem 1fr;
      gap: 8rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    color: ${theme.colors.whiteText};
    padding: ${theme.spacings.xsmall};
  `}
`;
