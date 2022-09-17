import * as Popover from '@radix-ui/react-popover';
import { renderWithTheme } from 'utils/tests/helpers';

import { UserInfo } from './UserInfo';

describe('<UserInfo />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Popover.Root>
        <UserInfo />
      </Popover.Root>,
    );

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
