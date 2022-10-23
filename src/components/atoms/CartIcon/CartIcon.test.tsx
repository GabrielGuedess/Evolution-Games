import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { CartIcon } from './CartIcon';

describe('<CartIcon />', () => {
  it('should render without quantity', () => {
    // Arrange
    const { container } = renderWithProviders(<CartIcon />);

    // Assert
    expect(screen.getByLabelText('Cart Icon')).toBeInTheDocument();
    expect(screen.queryByLabelText('Cart Items')).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without quantity', () => {
    renderWithProviders(<CartIcon quantity={1} />);

    // Assert
    expect(screen.getByLabelText('Cart Icon')).toBeInTheDocument();
    expect(screen.getByLabelText('Cart Items')).toBeInTheDocument();
  });
});
