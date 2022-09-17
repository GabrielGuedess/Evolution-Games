import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 8.6rem;
    height: 2rem;
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

    ${media.greaterThan('medium')`
      width: 13.7rem;
      height: 3.2rem;
      color: ${theme.colors.primary};
    `}
  `}
`;
