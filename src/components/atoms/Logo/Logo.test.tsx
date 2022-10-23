import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import theme from 'styles/theme';

import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render with default settings', () => {
    renderWithProviders(<Logo />);

    // Arrange
    const labelText = screen.getByLabelText(/Evolution/i);

    // Assert
    expect(labelText).toBeInTheDocument();

    expect(labelText.parentElement).toHaveStyle({
      color: theme.colors.white,
      height: '2rem',
      width: '8.6rem',
    });
  });
});
