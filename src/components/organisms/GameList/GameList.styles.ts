import { Swiper, SwiperSlide } from 'swiper/react';

import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const SwiperContainer = styled(Swiper).attrs({
  breakpoints: {
    315: {
      slidesPerView: 1.2,
      spaceBetween: 14,
      centeredSlides: true,
    },
    430: {
      slidesPerView: 1.4,
      spaceBetween: 20,
      centeredSlides: true,
    },
    520: {
      slidesPerView: 1.8,
      spaceBetween: 20,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    720: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1120: {
      slidesPerView: 3.8,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 4.8,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
})`
  max-width: 1920px;
`;

export const Slide = styled(SwiperSlide)`
  padding: 2px;
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

export const ControlBox = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
