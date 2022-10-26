import { InputHTMLAttributes } from 'react';

import * as S from './RadioButton.styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioButtonProps = {
  title: string;
  icon?: JSX.Element;
  onCheck?: (value?: RadioValue) => void;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  title,
  icon,
  id,
  value,
  onCheck,
  ...props
}: RadioButtonProps) => {
  const onChange = () => {
    if (!!onCheck) {
      onCheck(value);
    }
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>
        <S.Radio
          data-testid={id}
          id={id}
          type="radio"
          value={value}
          onChange={onChange}
          {...props}
          {...props}
        />
        <S.WrapperInfos>
          {icon}
          {!!title && <span>{title}</span>}
        </S.WrapperInfos>
      </S.Label>
    </S.Wrapper>
  );
};
