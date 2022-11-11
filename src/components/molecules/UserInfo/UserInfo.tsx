import Link from 'next/link';

import * as Avatar from '@radix-ui/react-avatar';
import Avvvatars from 'avvvatars-react';

import Button from 'components/atoms/Button/Button';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';

import * as S from './UserInfo.styles';

type UserInfoProps = {
  name: string;
  email: string;
  bio?: string | null;
  username: string;
  userPhoto?: string | null;
};

export const UserInfo = ({
  name,
  email,
  bio,
  username,
  userPhoto,
}: UserInfoProps) => (
  <S.Wrapper>
    <CloseButton />

    <S.Root>
      <S.WrapperPhoto>
        {userPhoto ? (
          <S.AvatarImage src={userPhoto} alt="Image User" />
        ) : (
          <Avvvatars size={120} value={email} />
        )}
      </S.WrapperPhoto>
      <Avatar.Fallback />
    </S.Root>

    <S.UserInfoWrapper>
      <S.Name>{name}</S.Name>
      <S.Username>
        <span>@</span>
        {username}
      </S.Username>

      {bio && <S.Bio>{bio}</S.Bio>}

      <S.ButtonWrapper>
        <Link href="/profile/me" passHref>
          <Button as="a">View Profile</Button>
        </Link>
      </S.ButtonWrapper>
    </S.UserInfoWrapper>
  </S.Wrapper>
);
