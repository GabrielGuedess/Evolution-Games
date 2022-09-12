import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from './Home';

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
