import Link from 'next/link';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import Button from 'components/atoms/Button/Button';
import { AvatarUserProps } from 'components/molecules/AvatarUser/AvatarUser';

import * as S from './MenuMobile.styles';

export type MenuProps = {
  path: string;
} & AvatarUserProps;

export const MenuMobile = ({ path, username }: MenuProps) => (
  <S.Wrapper>
    <NavigationMenu.Root>
      <S.ListTextLink>
        <S.ItemTextLink>
          <Link href="/" passHref>
            <S.LinkTextLink active={path === '/'}>Home</S.LinkTextLink>
          </Link>
        </S.ItemTextLink>

        <S.ItemTextLink>
          <Link href="/" passHref>
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
          <Link href={!!username ? '/profile/me' : '/sign-in'} passHref>
            <Button size="large" as="a">
              {!!username ? 'View Profile' : 'Sign In'}
            </Button>
          </Link>
        </S.ItemTextLink>
      </S.ListTextLink>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  </S.Wrapper>
);
