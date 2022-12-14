import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  min-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: center;
    align-items: center;
    margin-left: 0.2rem;
    color: ${theme.colors.gameBad};

    > span {
      font-size: ${theme.font.sizes.xsmall};
      font-style: normal;
      font-weight: ${theme.font.regular};
      margin: ${theme.spacings.xxsmall} 0.4rem;
    }
  `}
`;

export const Footer = styled.div`
  display: flex;

  a {
    text-align: center;
  }
`;
