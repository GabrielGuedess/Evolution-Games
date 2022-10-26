import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { SignUpData } from './SignUpData';

const dataInputs = {
  name: '',
  lastName: '',
  cpf: '',
  cellphone: '',
  date: '',
};

const setDataInputs = jest.fn();
const setCurrentStep = jest.fn();

describe('<SignUpData />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <SignUpData
        dataInputs={dataInputs}
        setDataInputs={setDataInputs}
        currentStep={0}
        setCurrentStep={setCurrentStep}
      />,
    );

    expect(
      screen.getByRole('heading', { name: /SignUpData/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
