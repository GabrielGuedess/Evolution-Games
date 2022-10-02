import * as S from './Title.styles';

export type TitleProps = {
  children: React.ReactNode;
  hasAnimation?: boolean;
  size?: 'normal' | 'large';
  textAlign?: 'center' | 'left';
};

export const Title = ({
  children,
  hasAnimation = false,
  size = 'normal',
  textAlign = 'center',
}: TitleProps) => (
  <S.Title size={size} hasAnimation={hasAnimation} textAlign={textAlign}>
    {children}
  </S.Title>
);
