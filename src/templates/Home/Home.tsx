import { GameList } from 'components/organisms/GameList/GameList';
import { Navbar } from 'components/organisms/Navbar/Navbar';
import { Slider } from 'components/organisms/Slider/Slider';

import * as S from './Home.styles';
import { userInfo, sliderMock, gameCardItems } from './mock';

export const Home = () => (
  <S.Wrapper>
    <Navbar {...userInfo} />
    <Slider slides={sliderMock} />
    <GameList title="Bestsellers" data={gameCardItems} />
    <GameList title="Most Popular Games" data={gameCardItems} />
  </S.Wrapper>
);
