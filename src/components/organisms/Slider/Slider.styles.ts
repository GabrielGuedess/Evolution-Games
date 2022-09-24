import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100vh;

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      background: ${theme.colors.mainBg};
    }

    .swiper-pagination {
      margin-bottom: 3rem;

      span.swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: ${theme.colors.primary};
        opacity: 1;
      }

      .swiper-pagination-bullet {
        background-color: ${theme.colors.white};
        opacity: 1;
      }
    }
  `}
`;
