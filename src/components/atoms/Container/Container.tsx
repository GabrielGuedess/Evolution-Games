import styled, { css } from 'styled-components';

import { customMedia } from 'utils/media/customMedia';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 1.6rem;

    ${customMedia.greaterThan('large')`
      margin: 0 3.2rem;
    `}

    ${customMedia.greaterThan('huge')`
      margin: 0 4.8rem;
    `}

    ${customMedia.greaterThan('max')`
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`;
