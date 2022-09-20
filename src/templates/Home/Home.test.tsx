import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Home } from './Home';

jest.mock('components/organisms/Navbar/Navbar', () => ({
  __esModule: true,
  Navbar: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Navbar">{children}</div>;
  },
}));

jest.mock('components/organisms/Slider/Slider', () => ({
  __esModule: true,
  Slider: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Slider">{children}</div>;
  },
}));

describe('<Home />', () => {
  it('should render the Home correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Home />);

    // Assert
    expect(screen.getByTestId('Navbar')).toBeInTheDocument();
    expect(screen.getByTestId('Slider')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
