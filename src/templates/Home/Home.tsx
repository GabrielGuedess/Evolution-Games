import { Navbar } from 'components/organisms/Navbar/Navbar';
import { SliderMock } from 'components/organisms/Slider/mock';
import { Slider } from 'components/organisms/Slider/Slider';

import * as S from './Home.styles';
import { userInfo } from './mock';

export const Home = () => (
  <S.Wrapper>
    <Navbar {...userInfo} />
    <Slider slides={SliderMock} />
  </S.Wrapper>
);
