import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from './Home';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
}));

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
