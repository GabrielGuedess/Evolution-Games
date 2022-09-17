import * as Avatar from '@radix-ui/react-avatar';
import * as Popover from '@radix-ui/react-popover';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const AvatarImage = styled(Avatar.Image)`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const Trigger = styled(Popover.Trigger)`
  cursor: pointer;
`;

export const UserLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.whiteText};
    transition: color 0.3s linear;

    :is(:hover, :focus) {
      color: ${theme.colors.primary};
    }
  `}
`;
