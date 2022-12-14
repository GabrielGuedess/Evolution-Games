import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { SignUpFinally } from './SignUpFinally';

describe('<SignUpFinally />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(<SignUpFinally name="Gabriel" />);

    expect(
      screen.getByText(
        'Você completou a integração, você pode começar a usar a Evolution!',
      ),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
