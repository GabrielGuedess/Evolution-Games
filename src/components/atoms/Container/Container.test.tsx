import { renderWithProviders } from 'utils/tests/helpers';

import theme from 'styles/theme';

import { Container } from './Container';

describe('<Container />', () => {
  it('Deve renderizar o componente <Container />', () => {
    // Arrange
    const { container } = renderWithProviders(<Container />);

    // Assert
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
