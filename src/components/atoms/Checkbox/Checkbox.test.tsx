import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(<Checkbox title="test" />);

    // Assert
    expect(screen.getByText('test')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
