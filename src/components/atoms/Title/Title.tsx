import * as S from './Title.styles';

export type TitleProps = {
  children: React.ReactNode;
  textAlign?: 'center' | 'left';
};

export const Title = ({ children, textAlign = 'center' }: TitleProps) => (
  <S.Title textAlign={textAlign}>{children}</S.Title>
);
