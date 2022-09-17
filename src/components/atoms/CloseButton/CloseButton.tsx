import { X } from 'phosphor-react';

import * as S from './CloseButton.styles';

export const CloseButton = () => (
  <S.Close aria-label="Close Action">
    <X size={20} />
  </S.Close>
);
