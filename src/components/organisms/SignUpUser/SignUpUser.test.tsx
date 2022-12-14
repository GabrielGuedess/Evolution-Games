import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { SignUpUser } from './SignUpUser';

const userInputs = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const setUserInputs = jest.fn();
const setCurrentStep = jest.fn();
const setUserPhoto = jest.fn();

describe('<SignUpUser />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(
      <SignUpUser
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        currentStep={0}
        setCurrentStep={setCurrentStep}
        userPhoto={null}
        setUserPhoto={setUserPhoto}
      />,
    );

    expect(screen.getByRole('form')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
