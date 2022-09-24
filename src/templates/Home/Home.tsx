import { Navbar } from 'components/organisms/Navbar/Navbar';
import { Slider } from 'components/organisms/Slider/Slider';

import * as S from './Home.styles';
import { userInfo, sliderMock } from './mock';

export const Home = () => (
  <S.Wrapper>
    <Navbar {...userInfo} />
    <Slider slides={sliderMock} />
  </S.Wrapper>
);
