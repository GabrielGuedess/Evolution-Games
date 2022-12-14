import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: ${theme.font.sizes.xxbig};
    line-height: 34px;
    text-align: center;
    color: ${theme.colors.primary};
    text-shadow: 0px 0.8rem 2.4rem rgba(118, 74, 241, 0.25);
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xmedium};
    text-align: center;
    color: ${theme.colors.secondary};
  `}
`;
