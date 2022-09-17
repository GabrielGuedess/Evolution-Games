import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { CartIcon } from './CartIcon';

describe('<CartIcon />', () => {
  it('should render without quantity', () => {
    // Arrange
    const { container } = renderWithTheme(<CartIcon />);

    // Assert
    expect(screen.getByLabelText('Cart Icon')).toBeInTheDocument();
    expect(screen.queryByLabelText('Cart Items')).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without quantity', () => {
    renderWithTheme(<CartIcon quantity={1} />);

    // Assert
    expect(screen.getByLabelText('Cart Icon')).toBeInTheDocument();
    expect(screen.getByLabelText('Cart Items')).toBeInTheDocument();
  });
});
