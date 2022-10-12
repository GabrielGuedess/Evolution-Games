import { tint, darken } from 'polished';

import theme from 'styles/theme';

import * as S from './Preloader.styles';

export const Preloader = () => (
  <S.Wrapper>
    <S.Loader
      aria-label="Loading"
      viewBox="0 0 128 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ap-grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.colors.primary} />
          <stop offset="100%" stopColor={tint(0.1, theme.colors.primary)} />
        </linearGradient>
        <linearGradient id="ap-grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={tint(0.3, theme.colors.primary)} />
          <stop offset="50%" stopColor={darken(0.1, theme.colors.primary)} />
          <stop offset="100%" stopColor={tint(0.1, theme.colors.primary)} />
        </linearGradient>
      </defs>

      <circle
        className="ap__ring"
        r="56"
        cx="64"
        cy="192"
        fill="none"
        stroke="#ddd"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle
        className="ap__worm1"
        r="56"
        cx="64"
        cy="192"
        fill="none"
        stroke="url(#ap-grad1)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="87.96 263.89"
      />
      <path
        className="ap__worm2"
        d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z"
        fill="none"
        stroke="url(#ap-grad2)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="87.96 494"
      />
    </S.Loader>
  </S.Wrapper>
);
