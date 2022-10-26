import media from 'styled-media-query';

import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  max-width: 40.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  > button span {
    padding: 0.9rem 0;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${media.greaterThan('medium')`
    gap: 1.6rem;
  `}
`;
