import requestFake from 'utils/requestFake';
import { renderWithProviders } from 'utils/tests/helpers';

import { screen, act, fireEvent, waitFor } from '@testing-library/react';

import { SignIn } from './SignIn';

jest.mock('utils/requestFake', () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: true })),
}));

describe('<FormSingIn />', () => {
  beforeEach(() => {
    (requestFake as jest.Mock).mockClear();
    renderWithProviders(<SignIn />);
  });

  it('should render the <FormSingIn />', () => {
    // Arrange
    const form = screen.getByRole('form');
    const inputEmail = screen.getByPlaceholderText('Insira seu e-mail');
    const inputPassword = screen.getByPlaceholderText('Insira sua senha');

    // Assert
    expect(form).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect((inputPassword as HTMLInputElement).type).toBe('password');
  });

  it('should check all input values', () => {
    // Arrange
    const inputEmail = screen.getByPlaceholderText(
      'Insira seu e-mail',
    ) as HTMLInputElement;
    const inputPassword = screen.getByPlaceholderText(
      'Insira sua senha',
    ) as HTMLInputElement;

    // Act
    act(() => {
      fireEvent.change(inputEmail, {
        target: { value: 'rafaabatistas@gmail.com' },
      });

      fireEvent.change(inputPassword, {
        target: { value: '12345678' },
      });
    });

    // Assert
    expect(inputEmail.value).toBe('rafaabatistas@gmail.com');
    expect(inputPassword.value).toBe('12345678');
  });

  it('should check the interleaving of password field types', () => {
    // Arrange
    const iconShowPass = screen.getByLabelText('Mostrar senha');
    const inputPassword = screen.getByPlaceholderText(
      'Insira sua senha',
    ) as HTMLInputElement;

    // Act
    act(() => {
      fireEvent.click(iconShowPass);
    });

    // Assert
    expect(inputPassword.type).toBe('text');
  });

  it('should verify that the email is valid', () => {
    // Arrange
    const inputEmail = screen.getByPlaceholderText(
      'Insira seu e-mail',
    ) as HTMLInputElement;

    // Act
    act(() => {
      fireEvent.change(inputEmail, {
        target: { value: 'rafaabatistas' },
      });
    });

    // Assert
    expect(screen.getByText('E-mail inválido')).toBeInTheDocument();
  });

  it('should required complete the form', () => {
    // Arrange
    const button = screen.getByRole('button');
    const inputEmail = screen.getByPlaceholderText('Insira seu e-mail');
    const inputPassword = screen.getByPlaceholderText('Insira sua senha');

    act(() => {
      fireEvent.click(button);
    });

    // Assert
    expect(inputEmail).toBeRequired();
    expect(inputPassword).toBeRequired();
  });

  it('should check the submit function', async () => {
    (requestFake as jest.Mock).mockResolvedValue({ data: true });

    // Arrange
    const button = screen.getByRole('button');
    const inputEmail = screen.getByPlaceholderText(
      'Insira seu e-mail',
    ) as HTMLInputElement;
    const inputPassword = screen.getByPlaceholderText(
      'Insira sua senha',
    ) as HTMLInputElement;

    // Act
    act(() => {
      fireEvent.change(inputEmail, {
        target: { value: 'rafaabatistas@gmail.com' },
      });

      fireEvent.change(inputPassword, {
        target: { value: '12345678' },
      });

      fireEvent.click(button);
    });

    // Assert
    await waitFor(() => {
      expect(inputEmail.value).toBe('');
      expect(inputPassword.value).toBe('');
    });
  });

  it('should validate errors in submit function', async () => {
    (requestFake as jest.Mock).mockRejectedValue({
      error: 'Internal server error',
    });

    // Arrange
    const button = screen.getByRole('button');
    const inputEmail = screen.getByPlaceholderText(
      'Insira seu e-mail',
    ) as HTMLInputElement;
    const inputPassword = screen.getByPlaceholderText(
      'Insira sua senha',
    ) as HTMLInputElement;

    // Act
    act(() => {
      fireEvent.change(inputEmail, {
        target: { value: 'rafaabatistas@gmail.com' },
      });

      fireEvent.change(inputPassword, {
        target: { value: '12345678' },
      });

      fireEvent.click(button);
    });

    // Assert
    await waitFor(() => {
      expect(inputEmail.value).toBe('');
      expect(inputPassword.value).toBe('');
    });
  });
});
