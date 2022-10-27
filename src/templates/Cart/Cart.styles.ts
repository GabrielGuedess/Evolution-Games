import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4.6rem;
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('large')`
      flex-direction: row;
      min-height: 70vh;
    `}
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.whiteText};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      padding-bottom: ${theme.spacings.large};
    `}
  `}
`;

export const FirstColumn = styled.div`
  width: 100%;

  ${media.greaterThan('large')`
    width: 70%;
  `}
`;

export const SecondColumn = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  ${media.greaterThan('large')`
    width: 30%;
  `}
`;

export const Summary = styled.div`
  ${({ theme }) => css`
    min-height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.gameDetails};
    border-radius: ${theme.border.radius.regular};
    padding: ${theme.spacings.large};
    position: sticky;
    top: 0;
  `}
`;

export const SummaryHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.strong`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.whiteText};
  `}
`;

export const EmptyBox = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 9rem;
`;
