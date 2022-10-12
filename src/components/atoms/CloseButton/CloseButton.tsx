import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { X } from 'phosphor-react';

import * as S from './CloseButton.styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type CloseButtonProps = {
  side?: 'left' | 'right';
  color?: 'primary' | 'white';
  as?: React.ElementType;
} & ButtonTypes;

export const CloseButton = ({
  side = 'left',
  color = 'primary',
  ...props
}: CloseButtonProps) => (
  <S.Close side={side} color={color} {...props} aria-label="Close Action">
    <X size={20} />
  </S.Close>
);
