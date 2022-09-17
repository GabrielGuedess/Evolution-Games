import { renderWithTheme } from 'utils/tests/helpers';

import { Navbar } from './Navbar';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
}));

describe('<Navbar />', () => {
  it('should render the Navbar correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Navbar />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
