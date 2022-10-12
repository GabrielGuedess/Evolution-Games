import styled, { keyframes } from 'styled-components';

const worm1 = keyframes`
    from {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: -87.96;
    }
    20% {
      animation-timing-function: ease-in;
      stroke-dashoffset: 0;
    }
    60% {
      stroke-dashoffset: -791.68;
      visibility: visible;
    }
    60.1%,
    to {
      stroke-dashoffset: -791.68;
      visibility: hidden;
    }
`;

const worm2 = keyframes`
    from, 60% {
      stroke-dashoffset: -87.96;
      visibility: hidden;
    }
    60.1% {
      animation-timing-function: cubic-bezier(0, 0, 0.5, 0.75);
      stroke-dashoffset: -87.96;
      visibility: visible;
    }
    77% {
      animation-timing-function: cubic-bezier(0.5, 0.25, 0.5, 0.88);
      stroke-dashoffset: -340;
      visibility: visible;
    }
    to {
      stroke-dashoffset: -669.92;
      visibility: visible;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = styled.svg`
  width: 5em;
  height: 10em;

  .ap__ring {
    stroke: hsla(223, 10%, 90%, 0.1);
    transition: stroke 0.3s;
  }

  .ap__worm1,
  .ap__worm2 {
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  .ap__worm1 {
    animation-name: ${worm1};
  }
  .ap__worm2 {
    animation-name: ${worm2};
    visibility: hidden;
  }
`;
