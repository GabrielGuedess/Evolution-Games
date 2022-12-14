import media from 'styled-media-query';
import { Swiper } from 'swiper/react';

import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

export const SwiperContainer = styled(Swiper).attrs({
  breakpoints: {
    315: {
      speed: 1000,
      slidesPerView: 1.15,
      spaceBetween: -10,
    },
    1120: {
      speed: 2500,
      slidesPerView: 1.1,
      spaceBetween: -60,
    },
    1440: {
      speed: 2500,
      slidesPerView: 1.1,
      spaceBetween: -100,
    },
  },
})`
  max-width: 1920px;
  height: 25rem;

  .swiper-slide {
    transition: all 1s linear;

    :not(.swiper-slide-active) {
      scale: 0.85;
    }

    ${media.greaterThan('medium')`
      transition: all 2s linear;

      :not(.swiper-slide-active) {
        scale: 0.85;
      }
    `}
  }

  .swiper-slide.swiper-slide-active {
    .imageBackground {
      mask-image: linear-gradient(270deg, transparent 0%, #fff 85%);
    }
  }

  ${media.greaterThan('medium')`
    height: 75.6rem;

    .swiper-slide.swiper-slide-active {
      .imageBackground {
        mask-image: linear-gradient(270deg, transparent 0%, #fff 60%);
      }
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
