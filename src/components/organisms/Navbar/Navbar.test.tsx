import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import theme from 'styles/theme';

import { Navbar } from './Navbar';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  asPath: '/',
  route: '/',
}));

describe('<Navbar />', () => {
  it('should render the Navbar correctly', () => {
    // Arrange
    const { container } = renderWithProviders(<Navbar />);

    // Assert
    expect(screen.getByText('Home')).toHaveStyle({
      color: theme.colors.primary,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
