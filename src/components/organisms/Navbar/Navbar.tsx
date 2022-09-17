import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import { Squash as Hamburger } from 'hamburger-react';
import { Heart } from 'phosphor-react';

import { Logo } from 'components/atoms/Logo/Logo';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import {
  AvatarUser,
  AvatarUserProps,
} from 'components/molecules/AvatarUser/AvatarUser';
import { CartButton } from 'components/molecules/CartButton/CartButton';
import { MenuMobile } from 'components/molecules/MenuMobile/MenuMobile';

import { CartItems } from './mock';
import * as S from './Navbar.styles';

export type MenuProps = {
  loading?: boolean;
} & AvatarUserProps;

export const Navbar = ({ loading = false, ...props }: MenuProps) => {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <Logo />

      <MediaMatch greaterThan="medium">
        <NavigationMenu.Root>
          <S.ListTextLink>
            <S.ItemTextLink>
              <Link href="/" passHref>
                <S.LinkTextLink active={asPath === '/'}>Home</S.LinkTextLink>
              </Link>
            </S.ItemTextLink>

            <S.ItemTextLink>
              <Link href="/games" passHref>
                <S.LinkTextLink active={asPath === '/games'}>
                  Explorer
                </S.LinkTextLink>
              </Link>
            </S.ItemTextLink>

            <S.ItemTextLink>
              <Link href="/games" passHref>
                <S.LinkTextLink active={asPath === '/games'}>
                  Contact
                </S.LinkTextLink>
              </Link>
            </S.ItemTextLink>

            <NavigationMenu.Indicator />
          </S.ListTextLink>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </MediaMatch>

      {!loading && (
        <>
          <S.WrapperIcons>
            <Link href="/favorites" passHref>
              <S.HeartLink aria-label="Link Favorites">
                <Heart size={24} />
              </S.HeartLink>
            </Link>

            <CartButton items={CartItems} />

            <MediaMatch greaterThan="medium">
              <AvatarUser {...props} />
            </MediaMatch>
          </S.WrapperIcons>

          <MediaMatch lessThan="medium">
            <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
              <Popover.Trigger>
                <Hamburger
                  size={23}
                  duration={0.5}
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </Popover.Trigger>
              <Popover.Anchor />
              <MenuMobile path={asPath} {...props} />
            </Popover.Root>
          </MediaMatch>
        </>
      )}
    </S.Wrapper>
  );
};
