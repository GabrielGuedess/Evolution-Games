import styled from 'styled-components';

export const Wrapper = styled.main`
  --glitter: url('/img/silver-glitter-background.webp');
  --ratio-x: 0.87;
  --ratio-y: 0.64;
  --from-center: 0.8;

  --bgOffsetX: calc(2.9px * var(--ratio-x));
  --bgOffsetY: calc(4.3px * var(--ratio-y));
  --pointerX: calc(100% * var(--ratio-x));
  --pointerY: calc(100% * var(--ratio-y));
  --h: calc(360deg * var(--from-center));
  --s: calc(90% * var(--from-center));

  height: 100vh;

  background: linear-gradient(
      135deg,
      hsl(28deg var(--s) 15%),
      hsl(198deg var(--s) 15%)
    ),
    var(--glitter), var(--glitter),
    radial-gradient(
      farthest-corner circle at var(--pointerX) var(--pointerY),
      hsla(0, 30%, 100%, 1) 20px,
      hsla(0, 30%, 90%, 0.38) 150px,
      hsla(0, 30%, 0%, 1) 65%
    );

  background-position: calc(70% + var(--bgOffsetX)) calc(70% + var(--bgOffsetY)),
    calc(30% - var(--bgOffsetX)) calc(30% - var(--bgOffsetY));

  background-size: cover, 560px auto, 400px auto, cover;

  background-blend-mode: overlay, multiply, color, overlay;

  transition: opacity 4s ease-out;

  header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    mix-blend-mode: color-dodge;
    fill: #908190;
    opacity: calc(1.5 - 0.5);
    filter: drop-shadow(0 0 30px black) drop-shadow(0 0 10px black)
      brightness(1.5);
    pointer-events: none;
    text-anchor: middle;

    text {
      font-size: 2rem;
    }
  }
`;
