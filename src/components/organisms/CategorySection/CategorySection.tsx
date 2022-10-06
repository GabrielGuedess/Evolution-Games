import Image from 'next/image';
import Link from 'next/link';

import { Container } from 'components/atoms/Container/Container';
import { Title } from 'components/atoms/Title/Title';

import * as S from './CategorySection.styles';

export const CategorySection = () => (
  <S.Wrapper>
    <Container>
      <Title textAlign="left">Categorias</Title>
    </Container>
    <S.FirstColumn>
      <Link href="/">
        <S.ActionImageCategory>
          <S.ImageHeader>
            <S.ImageTitle>Para os amantes da emoção</S.ImageTitle>
            <S.ImageSubTitle>Ação e Aventura</S.ImageSubTitle>
          </S.ImageHeader>
          <Image
            layout="fill"
            loading="lazy"
            quality={100}
            objectFit="cover"
            alt="Ação e Aventura"
            className="image-category"
            src="/img/category/actionAdventure.png"
          />
        </S.ActionImageCategory>
      </Link>
      <Link href="/">
        <S.TerrorImageCategory>
          <S.ImageHeader>
            <S.ImageTitle>Para os amantes do terror</S.ImageTitle>
            <S.ImageSubTitle>Terror</S.ImageSubTitle>
          </S.ImageHeader>
          <Image
            alt="Terror"
            layout="fill"
            quality={100}
            loading="lazy"
            objectFit="cover"
            className="image-category"
            src="/img/category/horror.png"
          />
        </S.TerrorImageCategory>
      </Link>
    </S.FirstColumn>
    <S.SecondColumn>
      <Link href="/">
        <S.QualityImageCategory>
          <S.ImageHeader>
            <S.ImageTitle>Para os amantes da qualidade</S.ImageTitle>
            <S.ImageSubTitle>Jogos em 4k</S.ImageSubTitle>
          </S.ImageHeader>
          <Image
            layout="fill"
            loading="lazy"
            quality={100}
            alt="Jogos 4k"
            objectFit="cover"
            className="image-category"
            src="/img/category/4k.png"
          />
        </S.QualityImageCategory>
      </Link>
    </S.SecondColumn>
  </S.Wrapper>
);
