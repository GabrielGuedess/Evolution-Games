import { renderWithTheme } from 'utils/tests/helpers';

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
    const { container } = renderWithTheme(
      <SignUpUser
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        currentStep={0}
        setCurrentStep={setCurrentStep}
        userPhoto={null}
        setUserPhoto={setUserPhoto}
      />,
    );

    expect(
      screen.getByRole('heading', { name: /SignUpUser/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
