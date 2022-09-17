import Link from 'next/link';

import * as Avatar from '@radix-ui/react-avatar';
import * as Popover from '@radix-ui/react-popover';
import { User } from 'phosphor-react';

import { UserInfo } from 'components/molecules/UserInfo/UserInfo';

import * as S from './AvatarUser.styles';

export type AvatarUserProps = {
  name?: string | null;
  bio?: string | null;
  username?: string | null;
  userPhoto?: string | null;
};

export const AvatarUser = ({
  username,
  userPhoto,
  ...props
}: AvatarUserProps) => (
  <S.Wrapper>
    <Popover.Root>
      <S.Trigger aria-label="User Photo Button">
        {username ? (
          <Avatar.Root>
            <S.AvatarImage
              src={userPhoto!}
              alt="Image User"
              aria-label="User Photo"
            />
            <Avatar.Fallback />
          </Avatar.Root>
        ) : (
          <Link href="/sign-in" passHref>
            <S.UserLink aria-label="Link for Login">
              <User size={24} />
            </S.UserLink>
          </Link>
        )}
      </S.Trigger>
      <Popover.Anchor />
      <Popover.Content>
        {username && (
          <UserInfo userPhoto={userPhoto} username={username} {...props} />
        )}

        <Popover.Arrow />
      </Popover.Content>
    </Popover.Root>
  </S.Wrapper>
);
