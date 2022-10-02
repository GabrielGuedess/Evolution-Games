import { CategorySection } from 'components/organisms/CategorySection/CategorySection';
import { Footer } from 'components/organisms/Footer/Footer';
import { GameList } from 'components/organisms/GameList/GameList';
import { HighlightCarousel } from 'components/organisms/HighlightCarousel/HighlightCarousel';
import { highlightMock } from 'components/organisms/HighlightCarousel/mock';
import { Navbar } from 'components/organisms/Navbar/Navbar';
import { Slider } from 'components/organisms/Slider/Slider';

import * as S from './Home.styles';
import { userInfo, sliderMock, gameCardItems } from './mock';

export const Home = () => (
  <S.Wrapper>
    <Navbar {...userInfo} />
    <Slider slides={sliderMock} />

    <GameList title="Bestsellers" data={gameCardItems} />
    <HighlightCarousel title="Pre-order" data={highlightMock} />
    <GameList title="Most Popular Games" data={gameCardItems} />
    <CategorySection />
    <Footer />
  </S.Wrapper>
);
