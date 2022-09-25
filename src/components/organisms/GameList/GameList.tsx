/* eslint-disable prettier/prettier */
import { useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { ArrowButtons } from 'components/atoms/ArrowButtons/ArrowButtons';
import Button from 'components/atoms/Button/Button';
import { Container } from 'components/atoms/Container/Container';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import {
  PlatformIcon,
  Platform,
} from 'components/atoms/PlatformIcon/PlatformIcon';
import { Title } from 'components/atoms/Title/Title';
import { GameCard, GameCardProps } from 'components/molecules/GameCard/GameCard';

import * as S from './GameList.styles';

export type GameListProps = {
  title: string;
  data: GameCardProps[];
};

export const GameList = ({ title, data }: GameListProps) => {
  const [filterBy, setFilterBy] = useState<Platform>('all');
  const id = title.toLocaleLowerCase().replaceAll(' ', '-');

  const filteredPlatform = data.filter(game => (filterBy === 'all' ? true : game.platform.includes(filterBy)));

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <S.TitleBox>
            <Title>{title}</Title>
            <MediaMatch greaterThan="large">
              <S.ControlBox>
                <PlatformIcon
                  hasTitle
                  platform="all"
                  color="secondary"
                  isActive={filterBy === 'all'}
                  onClick={() => setFilterBy('all')}
                />
                <PlatformIcon
                  hasTitle
                  platform="playstation"
                  color="secondary"
                  isActive={filterBy === 'playstation'}
                  onClick={() => setFilterBy('playstation')}
                />
                <PlatformIcon
                  hasTitle
                  platform="xbox"
                  color="secondary"
                  isActive={filterBy === 'xbox'}
                  onClick={() => setFilterBy('xbox')}
                />
                <PlatformIcon
                  hasTitle
                  platform="pc"
                  color="secondary"
                  isActive={filterBy === 'pc'}
                  onClick={() => setFilterBy('pc')}
                />
              </S.ControlBox>
            </MediaMatch>
          </S.TitleBox>
          <MediaMatch greaterThan="medium">
            <S.ButtonBox>
              <Button size="small" variant="outline">All</Button>
              <ArrowButtons
                prevId={`${id}-game-list-prev-arrow`}
                nextId={`${id}-game-list-next-arrow`}
              />
            </S.ButtonBox>
          </MediaMatch>
        </S.Header>
      </Container>
      <S.SwiperContainer
        loop={false}
        navigation={{
          nextEl: `#${id}-game-list-next-arrow`,
          prevEl: `#${id}-game-list-prev-arrow`,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {filteredPlatform.map(card => (
          <SwiperSlide key={card.id}>
            <GameCard {...card} />
          </SwiperSlide>
        ))}
      </S.SwiperContainer>
    </S.Wrapper>
  );
};
