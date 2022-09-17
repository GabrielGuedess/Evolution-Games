import * as Popover from '@radix-ui/react-popover';
import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { CloseButton } from './CloseButton';

describe('<CloseButton />', () => {
  it('should render correctly', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Popover.Root>
        <CloseButton />
      </Popover.Root>,
    );

    // Assert
    expect(screen.getByLabelText(/Close Action/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
