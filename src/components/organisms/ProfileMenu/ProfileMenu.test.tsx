import { render, screen } from '@testing-library/react';

import { ProfileMenu } from './ProfileMenu';

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileMenu />);

    expect(
      screen.getByRole('heading', { name: /ProfileMenu/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
