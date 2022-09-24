import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { ScrollDown } from './ScrollDown';

describe('<ScrollDown />', () => {
  it('should render the ScrollDown', () => {
    const { container } = renderWithTheme(<ScrollDown />);

    expect(screen.getByLabelText('Scroll Button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
