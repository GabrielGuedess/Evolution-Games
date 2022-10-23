import { renderWithProviders } from 'utils/tests/helpers';

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
    const { container } = renderWithProviders(<CartButton />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
