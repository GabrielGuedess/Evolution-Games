import { CaretRight, CaretLeft, HandbagSimple, Heart } from 'phosphor-react';
import { rgba } from 'polished';
import media from 'styled-media-query';
import { customMedia } from 'utils/media/customMedia';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

type SubTitleGameProps = {
  color?: 'whiteText' | 'secondary';
};

export const Wrapper = styled.div``;

export const WrapperPrimaryGame = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100vh;

    .backgroundImage {
      user-select: none;
      z-index: -1;

      mask-image: linear-gradient(
          90deg,
          transparent 20%,
          rgba(4, 4, 12, 0.7) 80%
        ),
        linear-gradient(
          180deg,
          transparent 4%,
          ${theme.colors.white} 56%,
          transparent 100%
        );

      ${media.greaterThan('large')`
        mask-image: linear-gradient(
          180deg,
          transparent 4%,
          ${theme.colors.white} 56%,
          transparent 100%
        );
      `}
    }

    .swiper {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 2rem 1rem;
    }
  `}
`;

export const WrapperVideo = styled.div`
  position: absolute;
  inset: 0;
`;

export const WrapperRelativeVideo = styled.div`
  ${({ theme }) => css`
    z-index: -1;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    mask-image: linear-gradient(90deg, transparent 20%, rgba(4, 4, 12, 0.7) 80%),
      linear-gradient(
        180deg,
        transparent 4%,
        ${theme.colors.white} 56%,
        transparent 100%
      );

    ${media.greaterThan('large')`
        mask-image: linear-gradient(
          180deg,
          transparent 4%,
          ${theme.colors.white} 56%,
          transparent 100%
        );
      `}
  `}
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    z-index: ${theme.layers.base};
    margin-top: 6rem;
    margin-bottom: 6rem;
  `}
`;

export const WrapperRequire = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  `}
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const WrapperContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    height: 100%;

    ${Info} {
      display: none;
    }

    ${media.greaterThan('large')`
      padding-top: 10rem;
      display: flex;
      height: 100%;
      margin-left: 0;

      ${Info} {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          padding: 0 12% 2rem 0;
          overflow-y: auto;
          z-index: ${theme.layers.base};
          margin-top: 0;
          margin-bottom: 0;
          padding-left: 3.2rem;

          ::-webkit-scrollbar {
            display: none;
          }
        }
    `}

    ${customMedia.greaterThan('huge')`
      ${Info} {
        padding-left: 4.8rem;
      }
    `}

    ${customMedia.greaterThan('max')`
      margin-left: calc(((100% - 165.6rem) / 2) - 4.8rem);
    `}
  `}
`;

export const TitleInfo = styled.strong`
  ${({ theme }) => css`
    font-weight: 500;
    line-height: 3.2rem;
    font-size: 2rem;
    color: ${theme.colors.whiteText};

    span {
      font-weight: 500;
      line-height: 3.2rem;
      text-shadow: ${theme.shadows.text};
      font-size: 2rem;
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xbig};

      span {
        font-size: ${theme.font.sizes.xbig};
      }
    `}
  `}
`;

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-style: italic;
    color: ${theme.colors.whiteText};
    font-size: ${theme.font.sizes.medium};
    line-height: 3.2rem;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    line-height: 3.2rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.whiteText};

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const ArrowLeft = styled(CaretLeft)`
  position: absolute;
  top: 50%;
  left: -2rem;
  cursor: pointer;
  transform: translate(-50%, -50%);

  &.swiper-button-disabled {
    display: none;
  }
`;

export const ArrowRight = styled(CaretRight)`
  position: absolute;
  top: 50%;
  right: -2rem;
  cursor: pointer;
  transform: translate(50%, -50%);

  &.swiper-button-disabled {
    display: none;
  }
`;

export const HeartIcon = styled(Heart)`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  ${media.greaterThan('large')`
    width: 3rem;
    height: 3rem;
  `}
`;

export const Handbag = styled(HandbagSimple)`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  ${media.greaterThan('large')`
    width: 3rem;
    height: 3rem;
  `}
`;

export const WrapperHandbag = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    box-shadow: ${theme.shadows.text};
    color: ${theme.colors.white};
    font-size: 1.4rem;
    border-radius: 1rem;
    padding: 0.3rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    cursor: pointer;
  `}
`;

export const SwiperContainer = styled.div`
  position: relative;
  overflow: visible;
`;

export const GalleryItem = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    box-shadow: 0 0.8rem 1rem ${rgba(theme.colors.primary, 0.25)};
  `}
`;

export const GridRequire = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RequireItem = styled.p`
  ${({ theme }) => css`
    font-style: italic;
    font-size: ${theme.font.sizes.small};
    line-height: 3.2rem;
    color: ${theme.colors.whiteText};

    span {
      color: ${theme.colors.primary};
    }
  `}
`;

export const InfoGame = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 5rem;
    padding-bottom: calc(6rem - 1.6rem);
    z-index: ${theme.layers.base};

    @media screen and (orientation: landscape) {
      gap: 1rem;
      padding-bottom: calc(3rem - 1.6rem);
    }

    ${media.greaterThan('large')`
      width: 50%;
      gap: 5rem;
      padding-bottom: calc(9rem - 1.6rem);
    `}
  `}
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    gap: 2rem;
    padding-right: 1.2rem;
  }

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-right: 0;
  `}
`;

export const WrapperGame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media screen and (orientation: landscape) {
    gap: 1.5rem;
  }

  ${media.greaterThan('huge')`
    gap: 3rem;
  `}
`;

export const TitleGame = styled.h1`
  ${({ theme }) => css`
    font-size: 2.8rem;
    font-weight: 500;
    color: ${theme.colors.white};

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const SecondInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitleGame = styled.span<SubTitleGameProps>`
  ${({ theme, color = 'whiteText' }) => css`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3.2rem;
    color: ${theme.colors[color]};

    ${media.greaterThan('large')`
      font-size: 2rem;
    `}
  `}
`;

export const FooterInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperPlatform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const Price = styled.strong`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 2.8rem;
    color: ${theme.colors.whiteText};

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const WrapperInfoBlur = styled.div`
  display: none;
  position: absolute;
  inset: 0 auto 0 0;
  overflow: hidden;
  width: 50%;
  height: 100%;

  ${media.greaterThan('large')`
    display: block;
  `}
`;

export const WrapperRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Blur = styled.div`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 100%;
  height: 120%;
  filter: blur(1.5rem);
  background: linear-gradient(90deg, #04040c 53.13%, rgba(4, 4, 12, 0.7) 100%);
`;
