import { renderWithTheme } from 'utils/tests/helpers';

import { ArrowButtons } from './ArrowButtons';

describe('<ArrowButtons />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <ArrowButtons nextId="swiper-next-id" prevId="swiper-prev-id" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
