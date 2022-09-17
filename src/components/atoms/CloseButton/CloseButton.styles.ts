import * as Popover from '@radix-ui/react-popover';
import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Close = styled(Popover.Close)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    padding: 0.5rem;
    transition: color 0.3s linear;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    align-items: center;
    position: absolute;
    top: 0.5rem;
    left: 2.1rem;

    svg {
      cursor: pointer;
    }

    ${media.greaterThan('medium')`
      left: 0.5rem;
    `}
  `}
`;
