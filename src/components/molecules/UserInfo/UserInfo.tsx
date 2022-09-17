import Link from 'next/link';

import * as Avatar from '@radix-ui/react-avatar';

import Button from 'components/atoms/Button/Button';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import { AvatarUserProps } from 'components/molecules/AvatarUser/AvatarUser';

import * as S from './UserInfo.styles';

export const UserInfo = ({
  name,
  bio,
  username,
  userPhoto,
}: AvatarUserProps) => (
  <S.Wrapper>
    <CloseButton />

    <S.Root>
      <S.AvatarImage src={userPhoto!} alt="Image User" />
      <Avatar.Fallback />
    </S.Root>

    <S.UserInfoWrapper>
      <S.Name>{name}</S.Name>
      <S.Username>
        <span>@</span>
        {username}
      </S.Username>
      <S.Bio>{bio}</S.Bio>

      <S.ButtonWrapper>
        <Link href="/profile/me" passHref>
          <Button as="a">View Profile</Button>
        </Link>
      </S.ButtonWrapper>
    </S.UserInfoWrapper>
  </S.Wrapper>
);
