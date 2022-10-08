import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { FunnelSimple } from 'phosphor-react';
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
import { FilterMobile } from 'components/molecules/FilterMobile/FilterMobile';
import {
  GameCard,
  GameCardProps,
} from 'components/molecules/GameCard/GameCard';

import * as S from './GameList.styles';

export type GameListProps = {
  title: string;
  data: GameCardProps[];
};

export const GameList = ({ title, data }: GameListProps) => {
  const [filterBy, setFilterBy] = useState<Platform>('all');
  const id = title.toLocaleLowerCase().replaceAll(' ', '-');

  const filteredPlatform = data.filter(game =>
    filterBy === 'all' ? true : game.platform.includes(filterBy),
  );

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <S.TitleBox>
            <Title hasAnimation>{title}</Title>
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
                  platform="ps5"
                  color="secondary"
                  isActive={filterBy === 'ps5'}
                  onClick={() => setFilterBy('ps5')}
                />
                <PlatformIcon
                  hasTitle
                  platform="xs"
                  color="secondary"
                  isActive={filterBy === 'xs'}
                  onClick={() => setFilterBy('xs')}
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

          <MediaMatch lessThan="large">
            <Dialog.Root modal>
              <Dialog.Trigger>
                <FunnelSimple size={20} />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay />
                <FilterMobile setFilterBy={setFilterBy} filterBy={filterBy} />
              </Dialog.Portal>
            </Dialog.Root>
          </MediaMatch>

          <MediaMatch greaterThan="large">
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
        loop={false}
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
