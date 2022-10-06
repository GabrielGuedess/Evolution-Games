import { render, screen } from '@testing-library/react';

import { Base } from './Base';

jest.mock('components/organisms/Navbar/Navbar', () => ({
  __esModule: true,
  Navbar: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Navbar Mock">{children}</div>;
  },
}));

jest.mock('components/organisms/Footer/Footer', () => ({
  __esModule: true,
  Footer: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Footer Mock">{children}</div>;
  },
}));

describe('<Base />', () => {
  it('should render component correctly', () => {
    // Arrange
    const { container } = render(<Base>Test</Base>);

    // Assert
    expect(screen.getByTestId('Navbar Mock')).toBeInTheDocument();
    expect(screen.getByTestId('Footer Mock')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component with margin', () => {
    render(<Base hasMarginTop>Test</Base>);

    // Assert
    expect(screen.getByLabelText('Content')).toHaveStyle({
      'margin-top': '7.8rem',
    });
  });

  it('should render component with circle blur', () => {
    render(<Base hasColors>Test</Base>);

    // Assert
    expect(screen.getByLabelText('Circle left blur')).toBeInTheDocument();
    expect(screen.getByLabelText('Circle right blur')).toBeInTheDocument();
  });
});
