import Image from 'next/image';

import * as S from './Slide.styles';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export type SlideProps = {
  srcSlideImage: string;
  altSlideImage: string;
  srcHighlightImage: string;
  altHighlightImage: string;
};

export const Slide = ({
  srcSlideImage,
  altSlideImage,
  srcHighlightImage,
  altHighlightImage,
}: SlideProps) => (
  <S.Wrapper>
    <S.WrapperSlide>
      <Image
        src={srcSlideImage}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt={altSlideImage}
      />
    </S.WrapperSlide>
    <S.HighlightName>
      <Image
        src={srcHighlightImage}
        width={768}
        height={296}
        objectFit="contain"
        quality={100}
        alt={altHighlightImage}
        data-swiper-parallax="-300"
      />
    </S.HighlightName>
  </S.Wrapper>
);
