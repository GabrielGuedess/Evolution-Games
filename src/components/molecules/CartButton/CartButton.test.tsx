import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { CartItems } from 'components/organisms/Navbar/mock';

import { CartButton } from './CartButton';

jest.mock('components/atoms/CartIcon/CartIcon', () => ({
  __esModule: true,
  CartIcon: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock CartIcon">{children}</div>;
  },
}));

describe('<CartButton />', () => {
  it('should render others components correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<CartButton items={CartItems} />);

    // Assert
    expect(screen.getByTestId('Mock CartIcon')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
