import Link from 'next/link';

import { CaretLeft } from 'phosphor-react';

import * as S from './Auth.styles';

export type AuthProps = {
  children: React.ReactNode;
};

export const Auth = ({ children }: AuthProps) => (
  <S.Wrapper>
    <Link href="/" passHref>
      <S.IconWrapper>
        <CaretLeft size={32} className="arrow" />
      </S.IconWrapper>
    </Link>

    <S.FirstColumn>{children}</S.FirstColumn>

    <S.SecondColumn>
      <Link href="/" passHref>
        <S.GoBack>Voltar para a Home</S.GoBack>
      </Link>
    </S.SecondColumn>
  </S.Wrapper>
);
