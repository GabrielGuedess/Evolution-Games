import { renderWithTheme } from 'utils/tests/helpers';

import { fireEvent, screen } from '@testing-library/react';

import { cartItems } from 'components/organisms/Navbar/mock';

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
    const { container } = renderWithTheme(<CartButton items={cartItems} />);

    // Act
    fireEvent.click(screen.getByTestId('Mock CartIcon'));

    // Assert
    expect(screen.getByTestId('Mock CartIcon')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
