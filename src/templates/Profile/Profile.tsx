import { useRouter } from 'next/router';

import { Base } from 'templates/Base/Base';

import { Container } from 'components/atoms/Container/Container';
import { Title } from 'components/atoms/Title/Title';
import { ProfileMenu } from 'components/organisms/ProfileMenu/ProfileMenu';

import * as S from './Profile.styles';

export type ProfileProps = {
  children: React.ReactNode;
};

export const Profile = ({ children }: ProfileProps) => {
  const { asPath } = useRouter();

  return (
    <Base hasColors hasMarginTop>
      <Container>
        <Title hasAnimation textAlign="left">
          Minha Conta
        </Title>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};
