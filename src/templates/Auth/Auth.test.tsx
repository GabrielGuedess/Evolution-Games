import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Auth } from './Auth';

describe('<Auth />', () => {
  it('should render the children', () => {
    // Arrange
    const { container } = renderWithTheme(<Auth>Auth</Auth>);

    // Assert
    expect(screen.getByText(/Auth/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
