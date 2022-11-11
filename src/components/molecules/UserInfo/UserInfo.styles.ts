import * as Avatar from '@radix-ui/react-avatar';

import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

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

export const WrapperPhoto = styled.div`
  ${({ theme }) => css`
    position: relative;

    ::before,
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      border-top: 0.2rem solid ${theme.colors.white};
      z-index: ${theme.layers.base};
      filter: drop-shadow(0 0 2px ${theme.colors.primary})
        drop-shadow(0 0 5px ${theme.colors.primary})
        drop-shadow(0 0 10px ${theme.colors.primary})
        drop-shadow(0 0 20px ${theme.colors.primary});
      animation: ${rotate} 5s infinite linear;
    }

    ::after {
      filter: drop-shadow(0 0 2px #f554ff) drop-shadow(0 0 5px #f554ff)
        drop-shadow(0 0 10px #f554ff) drop-shadow(0 0 20px #f554ff);
      animation-delay: -2.5s;
    }
  `}
`;
export const AvatarImage = styled(Avatar.Image)`
  width: 12rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
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
