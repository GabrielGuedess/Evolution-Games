import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Empty } from './Empty';

describe('<Empty />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithProviders(
      <Empty title="No Teste" description="Testando..." />,
    );

    // Assert
    expect(screen.getByText('No Teste')).toBeInTheDocument();
    expect(screen.getByText('Testando...')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button', () => {
    renderWithProviders(
      <Empty title="No Teste" description="Testando..." hasLink />,
    );

    // Assert
    expect(screen.getByText('Voltar a Home')).toBeInTheDocument();
  });
});
