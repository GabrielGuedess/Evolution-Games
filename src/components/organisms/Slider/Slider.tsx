import {
  Parallax,
  Keyboard,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';
import { Slide, SlideProps } from 'components/molecules/Slide/Slide';

import * as S from './Slider.styles';

export type SliderProps = {
  slides: SlideProps[];
};

export const Slider = ({ slides }: SliderProps) => (
  <S.Wrapper>
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        waitForTransition: true,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      parallax
      loop
      grabCursor
      effect="fade"
      modules={[
        Parallax,
        EffectFade,
        Autoplay,
        Navigation,
        Pagination,
        Keyboard,
      ]}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.altSlideImage}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>

    <MediaMatch greaterThan="medium">
      <ScrollDown />
    </MediaMatch>
  </S.Wrapper>
);
