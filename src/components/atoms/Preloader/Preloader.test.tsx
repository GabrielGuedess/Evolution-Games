import { render, screen } from '@testing-library/react';

import { Preloader } from './Preloader';

describe('<Preloader />', () => {
  it('should render the heading', () => {
    const { container } = render(<Preloader />);

    expect(screen.getByLabelText(/Loading/)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
