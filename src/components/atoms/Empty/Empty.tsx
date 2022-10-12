import Link from 'next/link';

import Button from 'components/atoms/Button/Button';

import * as S from './Empty.styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

export const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/svg/Empty.svg"
      alt="two gamers in a couch playing videogame"
    />

    <S.Infos>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Voltar a Home</Button>
        </Link>
      )}
    </S.Infos>
  </S.Wrapper>
);
