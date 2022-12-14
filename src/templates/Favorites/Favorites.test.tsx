import { render, screen } from '@testing-library/react';

import { Favorites } from './Favorites';

describe('<Favorites />', () => {
  it('should render the heading', () => {
    const { container } = render(<Favorites />);

    expect(
      screen.getByRole('heading', { name: /Favorites/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
