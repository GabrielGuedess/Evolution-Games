import * as Dialog from '@radix-ui/react-dialog';
import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Wrapper = styled(Dialog.Content)`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 3.2rem 2.4rem 7rem 2.4rem;
    background: ${theme.colors.gameDetails};
    z-index: ${theme.layers.alwaysOnTop};

    ${media.greaterThan('large')`
      display: none;
    `}
  `}
`;

export const WrapperContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterButton = styled.div`
  position: fixed;
  padding: 0 4rem 2rem 4rem;
  inset: auto 0 0 0;
`;
