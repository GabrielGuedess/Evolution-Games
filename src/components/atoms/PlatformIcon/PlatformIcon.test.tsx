import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import theme from 'styles/theme';

import { PlatformIcon } from './PlatformIcon';

describe('<PlatformIcon />', () => {
  it('should render the playstation icon', () => {
    const { container } = renderWithTheme(
      <PlatformIcon platform="playstation" />,
    );

    // Arrange
    const icon = screen.getByLabelText('PlayStation Icon');

    // Assert
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveStyle({ color: theme.colors.white });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render selected playstation icon', () => {
    const { container } = renderWithTheme(
      <PlatformIcon platform="playstation" hasTitle isActive />,
    );

    // Arrange
    const icon = screen.getByLabelText('PlayStation Icon');
    const label = screen.getByLabelText('PlayStation');

    // Assert
    expect(label.parentElement).toHaveStyle({
      color: theme.colors.primary,
    });

    expect(icon.parentElement).toHaveStyle({
      color: theme.colors.primary,
    });

    expect(icon).toHaveStyle({
      height: '2.8rem',
      width: '2.8rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render pc icon in secondary color', () => {
    const { container } = renderWithTheme(
      <PlatformIcon platform="pc" color="secondary" hasTitle />,
    );

    // Arrange
    const icon = screen.getByLabelText('PC Icon');
    const label = screen.getByLabelText('Personal computer');

    // Assert
    expect(label.parentElement).toHaveStyle({
      color: theme.colors.secondary,
    });

    expect(icon.parentElement).toHaveStyle({
      color: theme.colors.secondary,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
