import * as Popover from '@radix-ui/react-popover';
import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { cartItems } from 'components/organisms/Navbar/mock';

import { CartDropDown } from './CartDropDown';

jest.mock('components/molecules/GameCartDrop/GameCartDrop', () => ({
  __esModule: true,
  GameCartDrop: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameCartDrop">{children}</div>;
  },
}));

describe('<CartDropDown />', () => {
  it('should render the GameCartDrop', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Popover.Root>
        <CartDropDown items={cartItems} />
      </Popover.Root>,
    );

    // Assert
    expect(screen.getAllByTestId('Mock GameCartDrop')).toHaveLength(
      cartItems.length,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
