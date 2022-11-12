import Image from 'next/image';

import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import {
  Platform,
  PlatformIcon,
} from 'components/atoms/PlatformIcon/PlatformIcon';

import * as S from './HighlightGame.styles';

export type HighlightGameProps = {
  img: string;
  alt: string;
  gameLogo: string;
  gameLogoAlt: string;
  releaseYear: Date;
  genre: string;
  developer: string;
  platform: Platform[];
};

export const HighlightGame = ({
  img,
  alt,
  gameLogo,
  gameLogoAlt,
  releaseYear,
  genre,
  developer,
  platform,
}: HighlightGameProps) => (
  <S.Wrapper>
    <S.WrapperHighlight>
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt={alt}
        className="imageBackground"
        loading="lazy"
      />
    </S.WrapperHighlight>

    <S.WrapperInfo>
      <S.Info>
        <Image
          src={gameLogo}
          width={768}
          height={296}
          objectFit="contain"
          alt={gameLogoAlt}
          loading="lazy"
        />

        <S.Release>
          {releaseYear.toLocaleString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </S.Release>
        <S.GenreDeveloper>
          {genre}, {developer}
        </S.GenreDeveloper>

        <MediaMatch lessThan="medium">
          <S.Platforms>
            {platform.map(item => (
              <PlatformIcon key={item} platform={item} size="small" />
            ))}
          </S.Platforms>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <S.Platforms>
            {platform.map(item => (
              <PlatformIcon key={item} platform={item} />
            ))}
          </S.Platforms>
        </MediaMatch>
      </S.Info>
    </S.WrapperInfo>
  </S.Wrapper>
);
