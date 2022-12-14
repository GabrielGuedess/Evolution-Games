import * as Popover from '@radix-ui/react-popover';
import media from 'styled-media-query';

import styled, { css } from 'styled-components';

import { CloseButtonProps } from './CloseButton';

type CloseProps = Pick<CloseButtonProps, 'side' | 'color'>;

const closeModifiers = {
  left: () => css`
    top: 0.5rem;
    left: 2.1rem;
  `,

  right: () => css`
    top: 0;
    right: 0;
  `,
};

export const Close = styled(Popover.Close)<CloseProps>`
  ${({ theme, side, color }) => css`
    color: ${theme.colors[color!]};
    padding: 0.5rem;
    transition: color 0.3s linear;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    align-items: center;
    position: absolute;
    z-index: ${theme.layers.alwaysOnTop};
    ${closeModifiers[side!]()}

    svg {
      cursor: pointer;
    }

    ${media.greaterThan('medium')`
      left: 0.5rem;
    `}
  `}
`;
