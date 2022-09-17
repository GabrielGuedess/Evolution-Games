import * as Avatar from '@radix-ui/react-avatar';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-width: 40rem;
    width: 40rem;
    padding: ${theme.spacings.large};
    background: ${theme.colors.gameDetails};
    border-radius: ${theme.border.radius.regular};
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    position: relative;
  `}
`;

export const Root = styled(Avatar.Root)`
  display: flex;
  justify-content: center;
`;

export const AvatarImage = styled(Avatar.Image)`
  ${({ theme }) => css`
    width: 10rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    box-shadow: ${theme.shadows.box};
  `}
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Name = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xbig};
    color: ${theme.colors.whiteText};
    font-weight: 500;
    text-align: center;
  `}
`;

export const Username = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.secondary};

    span {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Bio = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.whiteText};
    line-height: 2rem;
  `}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
