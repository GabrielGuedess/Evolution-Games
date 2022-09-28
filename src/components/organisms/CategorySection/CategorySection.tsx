import Image from 'next/image';
import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';

import { Container } from 'components/atoms/Container/Container';
import { Title } from 'components/atoms/Title/Title';

import * as S from './CategorySection.styles';

export const CategorySection = () => {
  const isPortrait = useMediaQuery({ query: '(max-width: 1169px)' });

  return (
    <S.Wrapper>
      <Container>
        <Title textAlign="left">Categorias</Title>
      </Container>
      <S.CategoryGrid>
        <Link href="/">
          <S.ImageWrapper className="image-one">
            <S.ImageHeader>
              <S.ImageTitle>Para os amantes da emoção</S.ImageTitle>
              <S.ImageSubTitle>Acão e Aventura</S.ImageSubTitle>
            </S.ImageHeader>
            <Image
              quality={100}
              objectFit="cover"
              alt="Acão e Aventura"
              className="image-category"
              width={isPortrait ? 396 : 608}
              height={isPortrait ? 370 : 568}
              src="/img/category/actionAdventure.png"
            />
          </S.ImageWrapper>
        </Link>
        <Link href="/">
          <S.ImageWrapper className="image-two">
            <S.ImageHeader>
              <S.ImageTitle>Para os amantes do terror</S.ImageTitle>
              <S.ImageSubTitle>Terror</S.ImageSubTitle>
            </S.ImageHeader>
            <Image
              alt="Terror"
              quality={100}
              objectFit="cover"
              className="image-category"
              width={isPortrait ? 396 : 1029}
              height={isPortrait ? 370 : 568}
              src="/img/category/horror.png"
            />
          </S.ImageWrapper>
        </Link>
        <Link href="/">
          <S.ImageWrapper className="image-three">
            <S.ImageHeader>
              <S.ImageTitle>Para os amantes da qualidade</S.ImageTitle>
              <S.ImageSubTitle>Jogos 4k</S.ImageSubTitle>
            </S.ImageHeader>
            <Image
              quality={100}
              alt="Jogos 4k"
              objectFit="cover"
              className="image-category"
              width={isPortrait ? 396 : 1656}
              height={isPortrait ? 370 : 787}
              src="/img/category/4k.png"
            />
          </S.ImageWrapper>
        </Link>
      </S.CategoryGrid>
    </S.Wrapper>
  );
};
