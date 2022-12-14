import Image from 'next/image';
import Link from 'next/link';

import Game from 'types/game';

import { PlatformIcon } from 'components/atoms/PlatformIcon/PlatformIcon';

import theme from '../../../styles/theme';
import * as S from './GameCard.styles';

export type GameCardProps = Pick<
  Game,
  | 'id'
  | 'name'
  | 'slug'
  | 'release_date'
  | 'genres'
  | 'developers'
  | 'image'
  | 'score'
  | 'price'
  | 'platforms'
  | 'primary_color'
>;

export const GameCard = ({
  release_date: releaseDate,
  genres,
  name,
  price,
  image,
  score,
  slug,
  developers,
  platforms,
  primary_color: primaryColor,
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
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </S.GameImage>
      </Link>
      <S.GameContent>
        <S.CircleBlur color={primaryColor} />

        <Link href={`/game/${slug}`} passHref>
          <S.GameInfo>
            <S.BoxHighlight>
              <S.Title>{name}</S.Title>
              <S.Genre>{genres.map(genre => genre.name).join(', ')}</S.Genre>
              <S.Developer>
                {developers.map(developer => developer.name).join(' | ')},{' '}
                {new Date(releaseDate).getFullYear()}
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
              <S.Percentage>{Number(score).toFixed(1)}</S.Percentage>
            </S.Score>
          </S.GameInfo>
        </Link>
        <S.GameFooter>
          <S.Price>
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </S.Price>
          <S.Platform>
            {platforms.map(platform => (
              <PlatformIcon
                key={platform.slug}
                platform={platform.slug}
                variant="complete"
              />
            ))}
          </S.Platform>
        </S.GameFooter>
      </S.GameContent>
    </S.Wrapper>
  );
};
