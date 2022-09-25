import * as S from './ArrowButtons.styles';

export type ArrowButtonsProps = {
  prevId?: string;
  nextId?: string;
};

export const ArrowButtons = ({ prevId, nextId }: ArrowButtonsProps) => (
  <S.Wrapper>
    <S.Button id={prevId} direction="left">
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 8 13"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M7.258 12.466a.937.937 0 0 0 0-1.325L2.618 6.5l4.64-4.64A.937.937 0 0 0 5.933.533L.629 5.837a.938.938 0 0 0 0 1.326l5.304 5.303a.937.937 0 0 0 1.325 0Z"
        />
      </svg>
    </S.Button>

    <S.Button id={nextId} direction="right">
      <svg
        fill="none"
        aria-hidden="true"
        viewBox="0 0 8 13"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M7.258 12.466a.937.937 0 0 0 0-1.325L2.618 6.5l4.64-4.64A.937.937 0 0 0 5.933.533L.629 5.837a.938.938 0 0 0 0 1.326l5.304 5.303a.937.937 0 0 0 1.325 0Z"
        />
      </svg>
    </S.Button>
  </S.Wrapper>
);
