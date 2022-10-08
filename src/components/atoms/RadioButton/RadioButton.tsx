import { InputHTMLAttributes } from 'react';

import * as S from './RadioButton.styles';

export type RadioButtonProps = {
  title: string;
  icon?: JSX.Element;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  title,
  icon,
  id,
  ...props
}: RadioButtonProps) => (
  <S.Wrapper>
    <S.Label htmlFor={id}>
      <S.Radio data-testid={id} id={id} type="radio" {...props} />
      <S.WrapperInfos>
        {icon}
        {!!title && <span>{title}</span>}
      </S.WrapperInfos>
    </S.Label>
  </S.Wrapper>
);
