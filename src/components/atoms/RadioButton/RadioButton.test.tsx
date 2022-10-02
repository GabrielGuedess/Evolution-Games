import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { RadioButton } from './RadioButton';

describe('<RadioButton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<RadioButton title="Radio" />);

    expect(screen.getByText(/Radio/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
