import { useSession } from 'next-auth/react';
import Link from 'next/link';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import Button from 'components/atoms/Button/Button';

import * as S from './MenuMobile.styles';

export type MenuProps = {
  path: string;
};

export const MenuMobile = ({ path }: MenuProps) => {
  const { data: session } = useSession();

  return (
    <S.Wrapper>
      <NavigationMenu.Root>
        <S.ListTextLink>
          <S.ItemTextLink>
            <Link href="/" passHref>
              <S.LinkTextLink active={path === '/'}>Home</S.LinkTextLink>
            </Link>
          </S.ItemTextLink>

          <S.ItemTextLink>
            <Link href="/explorer" passHref>
              <S.LinkTextLink active={path === '/explorer'}>
                Explorer
              </S.LinkTextLink>
            </Link>
          </S.ItemTextLink>

          <S.ItemTextLink>
            <Link href="/" passHref>
              <S.LinkTextLink active={path === '/contact'}>
                Contact
              </S.LinkTextLink>
            </Link>
          </S.ItemTextLink>

          <S.ItemTextLink>
            <Link
              href={!!session?.user.username ? '/profile/me' : '/sign-in'}
              passHref
            >
              <Button size="large" as="a">
                {!!session?.user.username ? 'View Profile' : 'Sign In'}
              </Button>
            </Link>
          </S.ItemTextLink>
        </S.ListTextLink>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </S.Wrapper>
  );
};
