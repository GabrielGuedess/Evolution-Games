import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Autoplay,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { ArrowButtons } from 'components/atoms/ArrowButtons/ArrowButtons';
import Button from 'components/atoms/Button/Button';
import { Container } from 'components/atoms/Container/Container';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import { Title } from 'components/atoms/Title/Title';
import {
  HighlightGame,
  HighlightGameProps,
} from 'components/molecules/HighlightGame/HighlightGame';

import * as S from './HighlightCarousel.styles';

export type HighlightCarouselProps = {
  title: string;
  data: HighlightGameProps[];
};

export const HighlightCarousel = ({ title, data }: HighlightCarouselProps) => {
  const id = title.toLocaleLowerCase().replaceAll(' ', '-');

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <S.TitleBox>
            <Title hasAnimation>{title}</Title>
          </S.TitleBox>

          <MediaMatch greaterThan="medium">
            <S.ButtonBox>
              <Button size="small" variant="outline">
                All
              </Button>
              <ArrowButtons
                prevId={`${id}-game-list-prev-arrow`}
                nextId={`${id}-game-list-next-arrow`}
              />
            </S.ButtonBox>
          </MediaMatch>
        </S.Header>
      </Container>
      <S.SwiperContainer
        navigation={{
          nextEl: `#${id}-game-list-next-arrow`,
          prevEl: `#${id}-game-list-prev-arrow`,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1.1}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Navigation,
          Pagination,
          Keyboard,
        ]}
        slideToClickedSlide
        centeredSlides
        grabCursor
        loop
      >
        {data.map(highlight => (
          <SwiperSlide key={highlight.alt}>
            <HighlightGame {...highlight} />
          </SwiperSlide>
        ))}
      </S.SwiperContainer>
    </S.Wrapper>
  );
};
