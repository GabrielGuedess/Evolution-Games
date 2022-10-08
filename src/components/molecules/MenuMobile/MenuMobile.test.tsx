import * as Popover from '@radix-ui/react-popover';
import { renderWithTheme } from 'utils/tests/helpers';

import { fireEvent, screen } from '@testing-library/react';

import { MenuMobile } from './MenuMobile';

describe('<MenuMobile />', () => {
  it('should render user logged', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Popover.Root>
        <Popover.Trigger>
          <div data-testid="Click" />
        </Popover.Trigger>
        <MenuMobile path="/" username="Gabriel" />
      </Popover.Root>,
    );

    // Act
    fireEvent.click(screen.getByTestId('Click'));

    // Assert
    expect(screen.getByText('View Profile')).toBeInTheDocument();
    expect(screen.queryByText('Sign In')).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render user not logged', () => {
    renderWithTheme(
      <Popover.Root>
        <Popover.Trigger>
          <div data-testid="Click" />
        </Popover.Trigger>
        <MenuMobile path="/" />
      </Popover.Root>,
    );

    // Act
    fireEvent.click(screen.getByTestId('Click'));

    // Assert
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.queryByText('View Profile')).not.toBeInTheDocument();
  });
});
