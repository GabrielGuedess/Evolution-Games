import * as Popover from '@radix-ui/react-popover';
import { renderWithTheme } from 'utils/tests/helpers';

import { MenuMobile } from './MenuMobile';

describe('<MenuMobile />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Popover.Root>
        <MenuMobile path="/" />
      </Popover.Root>,
    );

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
