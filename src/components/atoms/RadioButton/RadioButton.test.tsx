import { renderWithProviders } from 'utils/tests/helpers';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton } from './RadioButton';

describe('<RadioButton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(<RadioButton title="Radio" />);

    expect(screen.getByText(/Radio/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();
    renderWithProviders(
      <RadioButton title="Radio" onCheck={onCheck} value="anyValue" />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText('Radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('anyValue');
  });
});
