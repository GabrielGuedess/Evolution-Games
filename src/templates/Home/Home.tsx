import { Navbar } from 'components/organisms/Navbar/Navbar';

import * as S from './Home.styles';
import { userInfo } from './mock';

export const Home = () => (
  <S.Wrapper>
    <Navbar {...userInfo} />
  </S.Wrapper>
);
