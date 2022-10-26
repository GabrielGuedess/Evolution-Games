import { renderWithTheme } from 'utils/tests/helpers';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(<Checkbox title="test" />);

    // Assert
    expect(screen.getByText('test')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render dispatch onCheck when status change', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox title="checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toBeCalledWith(true);
  });
});
