import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { SignUpLocation } from './SignUpLocation';

const locationInputs = {
  cep: '',
  logradouro: '',
  numero: '',
  complemento: '',
  referencia: '',
  bairro: '',
  cidade: '',
  uf: '',
};

const setLocationInputs = jest.fn();
const setCurrentStep = jest.fn();

describe('<SignUpLocation />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(
      <SignUpLocation
        locationInputs={locationInputs}
        setLocationInputs={setLocationInputs}
        currentStep={0}
        setCurrentStep={setCurrentStep}
      />,
    );

    expect(screen.getByRole('form')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
