import { X } from 'phosphor-react';

import * as S from './CloseButton.styles';

export type CloseButtonProps = {
  side?: 'left' | 'right';
  color?: 'primary' | 'white';
  as?: React.ElementType;
};

export const CloseButton = ({
  side = 'left',
  color = 'primary',
  ...props
}: CloseButtonProps) => (
  <S.Close side={side} color={color} {...props} aria-label="Close Action">
    <X size={20} />
  </S.Close>
);
