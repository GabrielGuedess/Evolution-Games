import { ParsedUrlQueryInput } from 'querystring';

import { ItemProps } from 'components/organisms/ExplorerSidebar/ExplorerSidebar';

type ParseArgs = {
  queryString: ParsedUrlQueryInput;
  filterItems: Pick<ItemProps, 'name' | 'type'>[];
};

export const parseQueryStringToWhere = ({
  queryString,
  filterItems,
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  Object.keys(queryString)
    .filter(item => item !== 'sort')
    .forEach(key => {
      const item = filterItems?.find(itemUrl => itemUrl.name === key);

      const isCheckbox = item?.type === 'checkbox';

      obj[key] = !isCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] };
    });

  return obj;
};

export const parseQueryStringToFilter = ({
  queryString,
  filterItems,
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  Object.keys(queryString).forEach(key => {
    const item = filterItems?.find(itemUrl => itemUrl.name === key);

    const isCheckbox = item?.type === 'checkbox';

    const isArray = Array.isArray(queryString[key]);

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key];
  });

  return obj;
};
