import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: fit-content;
    transition: color 0.3s linear;

    :is(:hover, :focus) {
      cursor: pointer;
      color: ${theme.colors.primary};
    }
  `}
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    box-shadow: ${theme.shadows.text};
    color: ${theme.colors.white};
    font-size: 1.2rem;
    line-height: 1rem;
    border-radius: 1rem;
    padding: 0.3rem 0.6rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    cursor: pointer;

    ${media.greaterThan('medium')`
      font-size: 0.8rem;
    `}
  `}
`;
