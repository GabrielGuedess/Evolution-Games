import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import theme from 'styles/theme';

import { PlatformIcon } from './PlatformIcon';

describe('<PlatformIcon />', () => {
  it('should render the playstation icon', () => {
    const { container } = renderWithProviders(<PlatformIcon platform="ps4" />);

    // Arrange
    const icon = screen.getByLabelText('PlayStation Icon');

    // Assert
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveStyle({ color: theme.colors.white });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render selected playstation icon', () => {
    const { container } = renderWithProviders(
      <PlatformIcon platform="ps4" hasTitle isActive />,
    );

    // Arrange
    const icon = screen.getByLabelText('PlayStation Icon');
    const label = screen.getByLabelText('PlayStation 4');

    // Assert
    expect(label.parentElement).toHaveStyle({
      color: theme.colors.primary,
    });

    expect(icon.parentElement).toHaveStyle({
      color: theme.colors.primary,
    });

    expect(icon).toHaveStyle({
      height: '1.8rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render pc icon in secondary color', () => {
    const { container } = renderWithProviders(
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

  it('should render in in medium size', () => {
    const { container } = renderWithProviders(
      <PlatformIcon platform="pc" color="secondary" hasTitle size="medium" />,
    );

    // Arrange
    const label = screen.getByLabelText('Personal computer');

    // Assert
    expect(label).toHaveStyle({
      fontSize: theme.font.sizes.medium,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render in in small size', () => {
    const { container } = renderWithProviders(
      <PlatformIcon platform="pc" color="secondary" hasTitle size="small" />,
    );

    // Arrange
    const label = screen.getByLabelText('Personal computer');

    // Assert
    expect(label).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
