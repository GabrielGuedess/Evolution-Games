import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';

import * as S from './Button.styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  children: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, icon, size = 'medium', fullWidth, ...props },
  ref,
) => (
  <S.Wrapper
    hasIcon={!!icon}
    size={size}
    ref={ref}
    fullWidth={fullWidth}
    aria-label="Button Action"
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}

    <svg
      className="effect"
      viewBox="-5 -5 110 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
    </svg>
  </S.Wrapper>
);

export default forwardRef(Button);
