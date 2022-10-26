import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { SignUpFinally } from './SignUpFinally';

describe('<SignUpFinally />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SignUpFinally name="Gabriel" />);

    expect(
      screen.getByRole('heading', { name: /SignUpFinally/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
