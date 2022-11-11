import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Avatar from '@radix-ui/react-avatar';
import * as Popover from '@radix-ui/react-popover';
import Avvvatars from 'avvvatars-react';
import { User } from 'phosphor-react';

import { UserInfo } from 'components/molecules/UserInfo/UserInfo';

import * as S from './AvatarUser.styles';

export const AvatarUser = () => {
  const { data: session, status } = useSession();
  const { asPath } = useRouter();

  return (
    <S.Wrapper>
      <Popover.Root>
        <S.Trigger aria-label="User Photo Button">
          {status === 'authenticated' ? (
            <Avatar.Root>
              {session.user.photo ? (
                <S.AvatarImage
                  src={session.user.photo!}
                  alt="Image User"
                  aria-label="User Photo"
                />
              ) : (
                <Avvvatars size={30} value={session.user.email} />
              )}
              <Avatar.Fallback />
            </Avatar.Root>
          ) : (
            <Link href={`/sign-in?callbackUrl=${asPath}`} passHref>
              <S.UserLink aria-label="Link for Login">
                <User size={24} />
              </S.UserLink>
            </Link>
          )}
        </S.Trigger>
        <Popover.Anchor />
        <Popover.Content>
          {status === 'authenticated' && (
            <UserInfo
              userPhoto={session.user.photo}
              username={session.user.username}
              email={session.user.email}
              name={session.user.name}
            />
          )}

          <Popover.Arrow />
        </Popover.Content>
      </Popover.Root>
    </S.Wrapper>
  );
};
