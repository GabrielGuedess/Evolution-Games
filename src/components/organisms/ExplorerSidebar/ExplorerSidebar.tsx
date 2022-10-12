import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Range } from 'react-range';

import xor from 'lodash/xor';
import { ParsedUrlQueryInput } from 'querystring';

import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import { RadioButton } from 'components/atoms/RadioButton/RadioButton';

import * as S from './ExplorerSidebar.styles';

type Field = {
  title: string;
  name: string;
  icon?: JSX.Element;
};

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: ParsedUrlQueryInput;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onFilter: (values: ParsedUrlQueryInput) => void;
};

export const ExplorerSidebar = ({
  items,
  onFilter,
  isOpen,
  setIsOpen,
  initialValues = {},
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [prices, setPrices] = useState([0, 500]);

  const handleRadio = (name: string, value: boolean | string) => {
    setValues(state => ({ ...state, [name]: value }));
  };

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || [];

    setValues(state => ({ ...state, [name]: xor(currentList, [value]) }));
  };

  useEffect(() => {
    onFilter(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <S.WrapperContainer isOpen={isOpen} aria-label="ExplorerSidebar Mock">
      <S.Wrapper>
        <MediaMatch lessThan="medium">
          <CloseButton
            side="right"
            color="white"
            as="button"
            onClick={() => setIsOpen(!isOpen)}
          />
        </MediaMatch>

        <S.WrapperCategory>
          <S.Title>Price</S.Title>

          <S.WrapperRange>
            <S.WrapperOutput>
              <S.Output data-testid="output1" id="output">
                {Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(prices[0])}
              </S.Output>

              <S.Output data-testid="output2" id="output">
                {Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(prices[1])}
              </S.Output>
            </S.WrapperOutput>

            <Range
              step={1}
              min={0}
              max={500}
              values={prices}
              onChange={v => setPrices(v)}
              renderTrack={({ props, children }) => (
                <S.TrackPrice {...props}>{children}</S.TrackPrice>
              )}
              renderThumb={({ props }) => (
                <S.ThumbPrice aria-label="Price range" {...props} />
              )}
            />
          </S.WrapperRange>
        </S.WrapperCategory>

        {items.map(item => (
          <S.WrapperCategory key={item.title}>
            <S.Title>{item.title}</S.Title>

            <section>
              {item.type === 'checkbox' &&
                item.fields.map(({ title, name, icon }) => (
                  <Checkbox
                    key={name}
                    title={title}
                    name={name}
                    icon={icon}
                    isChecked={(values[item.name] as string[])?.includes(name)}
                    onCheck={() => handleCheckbox(item.name, name)}
                  />
                ))}

              {item.type === 'radio' &&
                item.fields.map(({ title, name }) => (
                  <RadioButton
                    title={title}
                    id={name}
                    value={name}
                    key={name}
                    name={item.name}
                    defaultChecked={String(name) === String(values[item.name])}
                    onChange={() => handleRadio(item.name, name)}
                  />
                ))}
            </section>
          </S.WrapperCategory>
        ))}
      </S.Wrapper>
    </S.WrapperContainer>
  );
};
