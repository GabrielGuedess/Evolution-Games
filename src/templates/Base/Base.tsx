import { Footer } from 'components/organisms/Footer/Footer';
import { Navbar } from 'components/organisms/Navbar/Navbar';

import * as S from './Base.styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
  hasColors?: boolean;
  hasMarginTop?: boolean;
};

export const Base = ({
  children,
  hasColors = false,
  hasMarginTop = false,
}: BaseTemplateProps) => (
  <S.Wrapper>
    {hasColors && (
      <>
        <S.CircleBlurLeft aria-label="Circle left blur" />
        <S.CircleBlurRight aria-label="Circle right blur" />
      </>
    )}

    <Navbar />

    <S.Content aria-label="Content" hasMarginTop={hasMarginTop}>
      {children}
    </S.Content>

    <S.SectionFooter>
      <Footer />
    </S.SectionFooter>
  </S.Wrapper>
);
