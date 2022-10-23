import { Envelope } from 'phosphor-react';
import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { InputForm } from './InputForm';

describe('<InputForm />', () => {
  it('should render the <InputForm />', () => {
    const { container } = renderWithProviders(<InputForm label="Senha" />);

    expect(screen.getByText('Senha')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the <InputForm /> with the indication of invalid values', () => {
    renderWithProviders(
      <InputForm
        isInvalid
        label="E-mail"
        icon={<Envelope size={20} />}
        errorMessage="Campo obrigatório"
      />,
    );

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
  });
});
