import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { userInfo } from 'templates/Home/mock';

import { AvatarUser } from './AvatarUser';

describe('<AvatarUser />', () => {
  it('should render the photo user', () => {
    // Arrange
    const { container } = renderWithTheme(<AvatarUser {...userInfo} />);

    // Assert
    expect(screen.getByLabelText('User Photo Button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without the photo user', () => {
    renderWithTheme(<AvatarUser />);

    // Assert
    expect(screen.getByLabelText('Link for Login')).toBeInTheDocument();
  });
});
