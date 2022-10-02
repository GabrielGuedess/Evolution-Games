/* eslint-disable react/no-unused-prop-types */
import Image from 'next/image';
import Link from 'next/link';

import {
  PlatformIcon,
  Platform,
} from 'components/atoms/PlatformIcon/PlatformIcon';

import theme from '../../../styles/theme';
import * as S from './GameCard.styles';

export type GameCardProps = {
  id?: string;
  title: string;
  slug: string;
  genre: string;
  developer: string;
  year: string;
  img: string;
  score: number;
  price: string;
  platform: Platform[];
  primaryColor: string;
};

export const GameCard = ({
  year,
  genre,
  title,
  price,
  img,
  score,
  slug,
  developer,
  platform,
  primaryColor,
}: GameCardProps) => {
  const { gameBad, gameAverage, gameGreat } = theme.colors;
  const formatValue = Math.trunc((score / 5) * 100);
  const dasharray = `${formatValue} ${100 - formatValue}`;
  const feedbackColors = [
    gameBad,
    gameBad,
    gameAverage,
    gameAverage,
    gameGreat,
    gameGreat,
  ];

  return (
    <S.Wrapper>
      <Link href={`/game/${slug}`} passHref>
        <S.GameImage>
          <Image
            src={img}
            alt={title}
            priority
            layout="fill"
            objectFit="cover"
          />
        </S.GameImage>
      </Link>
      <S.GameContent>
        <S.CircleBlur color={primaryColor} />

        <Link href={`/game/${slug}`} passHref>
          <S.GameInfo>
            <S.BoxHighlight>
              <S.Title>{title}</S.Title>
              <S.Genre>{genre}</S.Genre>
              <S.Developer>
                {developer}, {year}
              </S.Developer>
            </S.BoxHighlight>
            <S.Score>
              <svg
                viewBox="0 0 42 42"
                width={42}
                height={42}
                role="img"
                aria-label="Score"
              >
                <path
                  strokeDasharray={dasharray}
                  strokeDashoffset="-25"
                  pathLength="100"
                  d="M1 21a20 20 0 1 1 40 0 20 20 0 0 1-40 0"
                  fill="none"
                  stroke={feedbackColors[Math.trunc(score)]}
                  strokeWidth="2"
                />
              </svg>
              <S.Percentage>
                {score.toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </S.Percentage>
            </S.Score>
          </S.GameInfo>
        </Link>
        <S.GameFooter>
          <S.Price>{price}</S.Price>
          <S.Platform>
            {platform?.includes('playstation') && (
              <PlatformIcon platform="playstation" />
            )}

            {platform?.includes('xbox') && <PlatformIcon platform="xbox" />}

            {platform?.includes('pc') && <PlatformIcon platform="pc" />}
          </S.Platform>
        </S.GameFooter>
      </S.GameContent>
    </S.Wrapper>
  );
};
