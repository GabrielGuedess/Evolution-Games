import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: 'Categorias' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Sobre' })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Destaques' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Siga a Evolution' }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
