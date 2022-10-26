import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { steps } from './mock';
import { SignUpForm } from './SignUpForm';

describe('<SignUpForm />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SignUpForm steps={steps} />);

    expect(
      screen.getByRole('heading', { name: /SignUpForm/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
