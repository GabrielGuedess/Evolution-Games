import * as Popover from '@radix-ui/react-popover';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Arrow = styled(Popover.Arrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.gameDetails};
  `}
`;

export const Content = styled(Popover.Content)`
  width: 100%;
  margin: 0 1.6rem;
`;
