import Link from 'next/link';

import Button from 'components/atoms/Button/Button';

import * as S from './SignUpFinally.styles';

export type SignUpFinallyProps = {
  name: string;
};

export const SignUpFinally = ({ name }: SignUpFinallyProps) => (
  <S.Wrapper>
    <S.WrapperInfo>
      <S.Title>Parabéns, {name}!</S.Title>
      <S.Description>
        Você completou a integração, você pode começar a usar a Evolution!
      </S.Description>
    </S.WrapperInfo>

    <S.WrapperButton>
      <Link href="/" passHref>
        <Button as="a" size="large" fullWidth>
          Começar
        </Button>
      </Link>
    </S.WrapperButton>
  </S.Wrapper>
);
