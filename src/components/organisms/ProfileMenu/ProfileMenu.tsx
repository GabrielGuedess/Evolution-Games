import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ListBullets, SignOut, UserCircle } from 'phosphor-react';

import * as S from './ProfileMenu.styles';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

export const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter();

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My Profile">
          <UserCircle size={24} />
          <span>My Profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My Orders">
          <ListBullets size={24} />
          <span>My Orders</span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={async () => {
          const { url } = await signOut({ redirect: false, callbackUrl: '/' });
          push(url);
        }}
      >
        <SignOut size={24} />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  );
};
