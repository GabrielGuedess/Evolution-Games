import { render, screen } from '@testing-library/react';

import { Success } from './Success';

describe('<Success />', () => {
  it('should render the heading', () => {
    const { container } = render(<Success />);

    expect(
      screen.getByRole('heading', { name: /Success/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
