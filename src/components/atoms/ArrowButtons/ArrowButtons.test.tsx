import { renderWithProviders } from 'utils/tests/helpers';

import { ArrowButtons } from './ArrowButtons';

describe('<ArrowButtons />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(
      <ArrowButtons nextId="swiper-next-id" prevId="swiper-prev-id" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
