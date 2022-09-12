import { Container } from 'components/atoms/Container/Container';
import { Logo } from 'components/atoms/Logo/Logo';

import * as S from './Home.styles';

export const Home = () => (
  <S.Wrapper>
    <Container>
      <Logo />
    </Container>
  </S.Wrapper>
);
