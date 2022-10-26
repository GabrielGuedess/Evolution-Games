import { Envelope } from 'phosphor-react';
import { renderWithTheme } from 'utils/tests/helpers';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import theme from 'styles/theme';

import { InputForm } from './InputForm';

describe('<InputForm />', () => {
  it('should render the <InputForm />', () => {
    // Arrange
    const { container } = renderWithTheme(<InputForm label="Senha" />);

    // Assert
    expect(screen.getByText('Senha')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the <InputForm /> with the indication of invalid values', () => {
    renderWithTheme(
      <InputForm
        isInvalid
        placeholder="E-mail"
        label="E-mail"
        labelFor="email"
        icon={<Envelope size={20} />}
        errorMessage="Campo obrigatório"
      />,
    );

    // Assert
    expect(screen.getByLabelText('email')).toHaveStyle({
      color: theme.colors.gameBad,
    });

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
  });

  it('should change colors with invalid email', async () => {
    renderWithTheme(
      <InputForm
        isInvalid
        placeholder="E-mail"
        label="E-mail"
        labelFor="email"
        icon={<Envelope size={20} />}
        errorMessage="Campo obrigatório"
      />,
    );

    // Arrange
    const inputEmail = screen.getByPlaceholderText(
      'E-mail',
    ) as HTMLInputElement;

    // Act
    await userEvent.type(inputEmail, 'test');

    // Assert
    waitFor(() => {
      expect(screen.getByLabelText('email')).toHaveStyle({
        color: theme.colors.primary,
      });
    });
  });
});
