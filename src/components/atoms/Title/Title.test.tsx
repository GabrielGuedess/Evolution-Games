import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';
import 'jest-styled-components';

import theme from 'styles/theme';

import { Title } from './Title';

describe('<Title />', () => {
  it('should render the <Title /> component at its default size and center-aligned', () => {
    const { container } = renderWithTheme(<Title>Bestsellers</Title>);
    // Arrange
    const heading = screen.getByRole('heading', {
      name: 'Bestsellers',
    });

    // Assert
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({ 'font-size': '1.6rem' });
    expect(heading).toHaveStyle({ 'text-align': 'center' });
    expect(heading).toHaveStyleRule('font-size', '2.8rem', {
      media: '(min-width: 768px)',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the <Title /> component left-aligned', () => {
    renderWithTheme(<Title textAlign="left">Bestsellers</Title>);
    // Arrange
    const heading = screen.getByRole('heading', {
      name: 'Bestsellers',
    });

    // Assert
    expect(heading).toHaveStyle({ 'text-align': 'left' });
  });

  it('should render the <Title /> component text large', () => {
    renderWithTheme(<Title size="large">Bestsellers</Title>);
    // Arrange
    const heading = screen.getByRole('heading', {
      name: 'Bestsellers',
    });

    // Assert
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.big,
    });
  });
});
