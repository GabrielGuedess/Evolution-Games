import { screen } from '@testing-library/react';

import theme from 'styles/theme';

import { renderWithTheme } from 'utils/tests/helpers';

import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render with default settings', () => {
    renderWithTheme(<Logo />);

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
