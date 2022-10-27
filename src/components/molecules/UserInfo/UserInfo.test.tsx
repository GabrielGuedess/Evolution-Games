import * as Popover from '@radix-ui/react-popover';
import { renderWithProviders } from 'utils/tests/helpers';

import { UserInfo } from './UserInfo';

describe('<UserInfo />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithProviders(
      <Popover.Root>
        <UserInfo />
      </Popover.Root>,
    );

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
