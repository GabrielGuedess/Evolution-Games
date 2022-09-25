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
  variant?: 'solid' | 'outline';
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, icon, size = 'medium', variant = 'solid', fullWidth, ...props },
  ref,
) => (
  <S.Wrapper
    hasIcon={!!icon}
    size={size}
    ref={ref}
    fullWidth={fullWidth}
    variant={variant}
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
      <path d="M0 8C0 3.58172 3.58172 0 8 0H92C96.4183 0 100 3.58172 100 8V92C100 96.4183 96.4183 100 92 100H8C3.58172 100 0 96.4183 0 92V8Z" />
    </svg>
  </S.Wrapper>
);

export default forwardRef(Button);
