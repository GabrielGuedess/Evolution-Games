import { InputHTMLAttributes, useState } from 'react';

import * as S from './Checkbox.styles';

export type CheckboxProps = {
  title: string;
  isChecked?: boolean;
  icon?: JSX.Element;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  title,
  isChecked = false,
  icon,
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    if (!!onCheck) {
      onCheck(status);
    }
  };

  return (
    <S.Wrapper>
      <S.CheckboxWrapper htmlFor={title}>
        <S.Checkbox
          onChange={onChange}
          checked={checked}
          value={value}
          type="checkbox"
          id={title}
          {...props}
        />

        <S.Icon viewBox="0 0 24 24">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <rect x="1" y="1" width="22" height="22" />

            <polyline
              className="box-worm"
              points="23,1 1,1 1,23 23,23 23,4"
              strokeDasharray="30 146"
              strokeDashoffset="30"
            />
            <polyline
              className="check-worm"
              points="23,4 10,17 5,12 18,12"
              strokeDasharray="17.38 149.68"
              strokeDashoffset="103.38"
            />
          </g>
        </S.Icon>

        <S.WrapperInfos>
          {icon}

          <S.Title>{title}</S.Title>
        </S.WrapperInfos>
      </S.CheckboxWrapper>
    </S.Wrapper>
  );
};
