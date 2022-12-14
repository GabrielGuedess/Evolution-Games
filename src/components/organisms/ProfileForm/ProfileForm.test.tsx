import { render, screen } from '@testing-library/react';

import { ProfileForm } from './ProfileForm';

describe('<ProfileForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileForm />);

    expect(
      screen.getByRole('heading', { name: /ProfileForm/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
