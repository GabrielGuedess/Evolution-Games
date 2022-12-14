import { Funnel } from 'phosphor-react';
import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import theme from 'styles/theme';

import Button from './Button';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    // Arrange
    const { container } = renderWithProviders(<Button>Buy now</Button>);

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveStyle({
      fontSize: theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithProviders(<Button size="small">Buy now</Button>);

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveStyle({
      fontSize: theme.font.sizes.xsmall,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.small}`,
    });
  });

  it('should render the large size', () => {
    renderWithProviders(<Button size="large">Buy now</Button>);

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveStyle({
      fontSize: theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
    });
  });

  it('should render a fullWidth version', () => {
    renderWithProviders(<Button fullWidth>Buy now</Button>);

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    renderWithProviders(
      <Button icon={<Funnel data-testid="icon" />}>Buy now</Button>,
    );

    // Assert
    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a disabled Button', () => {
    renderWithProviders(<Button disabled>Buy now</Button>);

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      },
    );
  });

  it('should render Button as a link', () => {
    renderWithProviders(
      <Button as="a" href="/link">
        Buy now
      </Button>,
    );

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveAttribute(
      'href',
      '/link',
    );
  });

  it('should render Button as minimal', () => {
    renderWithProviders(<Button minimal>Buy now</Button>);

    // Assert
    expect(screen.getByLabelText('Button Action')).toHaveStyle({
      background: 'transparent',
      color: theme.colors.secondary,
    });
  });
});
