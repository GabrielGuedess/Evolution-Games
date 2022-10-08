import Link from 'next/link';

import * as Dialog from '@radix-ui/react-dialog';

import Button from 'components/atoms/Button/Button';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import {
  Platform,
  PlatformIcon,
} from 'components/atoms/PlatformIcon/PlatformIcon';
import { RadioButton } from 'components/atoms/RadioButton/RadioButton';
import { Title } from 'components/atoms/Title/Title';

import * as S from './FilterMobile.styles';

export type FilterMobileProps = {
  filterBy: Platform;
  setFilterBy: (filterBy: Platform) => void;
};

export const FilterMobile = ({ setFilterBy, filterBy }: FilterMobileProps) => (
  <S.Wrapper>
    <S.WrapperContent>
      <CloseButton side="right" color="white" as={Dialog.Close} />

      <Title size="large" textAlign="left" hasAnimation>
        Platforms
      </Title>

      <form>
        <RadioButton
          title="All"
          id="all"
          value="all"
          name="gameFilter"
          checked={filterBy === 'all'}
          icon={<PlatformIcon platform="all" size="small" />}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterBy(e.target.value as Platform)
          }
        />
        <RadioButton
          title="Playstation 5"
          id="ps5"
          icon={<PlatformIcon platform="ps5" size="small" />}
          value="ps5"
          name="gameFilter"
          checked={filterBy === 'ps5'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterBy(e.target.value as Platform)
          }
        />
        <RadioButton
          title="Xbox Series X|S"
          id="xs"
          value="xs"
          name="gameFilter"
          checked={filterBy === 'xs'}
          icon={<PlatformIcon platform="xs" size="small" />}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterBy(e.target.value as Platform)
          }
        />
        <RadioButton
          title="PC"
          id="pc"
          value="pc"
          name="gameFilter"
          checked={filterBy === 'pc'}
          icon={<PlatformIcon platform="pc" size="small" />}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterBy(e.target.value as Platform)
          }
        />
      </form>

      <S.FooterButton>
        <Link href="/explorer" passHref>
          <Button fullWidth as="a">
            Ver Todos
          </Button>
        </Link>
      </S.FooterButton>
    </S.WrapperContent>
  </S.Wrapper>
);
