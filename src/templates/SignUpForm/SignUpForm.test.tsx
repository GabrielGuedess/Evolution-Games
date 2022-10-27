import { renderWithProviders } from 'utils/tests/helpers';

import { steps } from './mock';
import { SignUpForm } from './SignUpForm';

describe('<SignUpForm />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(<SignUpForm steps={steps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
