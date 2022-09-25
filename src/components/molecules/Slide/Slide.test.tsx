import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Slide, SlideProps } from './Slide';

const props: SlideProps = {
  srcSlideImage: '/img/games/theLastOfUs.jpg',
  altSlideImage: 'The Last Of Us',
  srcHighlightImage: '/img/games/highlightName/nameTheLastOfUs.png',
  altHighlightImage: 'The Last Of Us Highlight',
};

describe('<Slide />', () => {
  it('should render the Image background and highlight name', () => {
    // Arrange
    const { container } = renderWithTheme(<Slide {...props} />);

    // Assert
    expect(
      screen.getByRole('img', { name: props.altSlideImage }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: props.altHighlightImage }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
