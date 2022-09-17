import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: calc(100vw - (1.6rem * 2));
    padding: 2rem 1.2rem;
    border-radius: ${theme.border.radius.regular};
    background: ${theme.colors.gameDetails};

    ${media.greaterThan('medium')`
      width: 45rem;
      position: relative;
    `}
  `}
`;

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    border-bottom: 1px solid ${theme.colors.whiteText};
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.whiteText};
    font-size: 1.4rem;
  `}
`;

export const ViewAll = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    padding: 1rem;
    text-decoration: underline;
    cursor: pointer;
  `}
`;

export const TotalAllWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;

    strong {
      text-transform: uppercase;
      font-size: 1.6rem;
      color: ${theme.colors.whiteText};

      ${media.greaterThan('medium')`
        font-size: 1.8rem;
      `}
    }

    h2 {
      text-transform: uppercase;
      font-size: 1.6rem;
      color: ${theme.colors.whiteText};

      ${media.greaterThan('medium')`
        font-size: 1.8rem;
      `}
    }
  `}
`;
