import Link from 'next/link';

import { PointerEvent } from 'react';

import Button from 'components/atoms/Button/Button';

import * as S from './styles';

export const NotFoundPage = () => {
  function fromCenter({ x, y }: { x: number; y: number }) {
    return Math.min(
      Math.max(
        0,
        Math.sqrt((y - 0.5) * (y - 0.5) + (x - 0.5) * (x - 0.5)) / 0.5,
      ),
      1,
    );
  }

  function hover3D(e: PointerEvent<HTMLElement>) {
    const x = e.clientX;
    const y = e.clientY;
    const BOX = e.currentTarget.getBoundingClientRect();
    const POINT = { x: x - BOX!.x, y: y - BOX!.y };
    const RATIO = { x: POINT.x / BOX!.width, y: POINT.y / BOX!.height };
    const CENTER = fromCenter(RATIO);

    e.currentTarget.style.setProperty('--ratio-x', String(RATIO.x));
    e.currentTarget.style.setProperty('--ratio-y', String(RATIO.y));
    e.currentTarget.style.setProperty('--from-center', String(CENTER));
  }

  return (
    <S.Wrapper onPointerMove={e => hover3D(e)} className="loading">
      <header>
        <svg viewBox="-50 0 100 20">
          <text x="0" y="15">
            404
          </text>
        </svg>

        <Link href="/" passHref>
          <Button minimal>Voltar para Home</Button>
        </Link>
      </header>
    </S.Wrapper>
  );
};
