import * as Dialog from '@radix-ui/react-dialog';
import { renderWithTheme } from 'utils/tests/helpers';

import { fireEvent, screen } from '@testing-library/react';

import { FilterMobile, FilterMobileProps } from './FilterMobile';

let props: FilterMobileProps;

describe('<FilterMobile />', () => {
  beforeEach(() => {
    props = {
      filterBy: 'all',
      setFilterBy: jest.fn(),
    };
  });

  it('should render the component correctly', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Dialog.Root>
        <Dialog.Trigger>Abrir</Dialog.Trigger>
        <FilterMobile {...props} />
      </Dialog.Root>,
    );

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Abrir' }));

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change check radio input', () => {
    renderWithTheme(
      <Dialog.Root open>
        <FilterMobile {...props} />
      </Dialog.Root>,
    );

    // Arrange
    const playstation = screen.getByTestId('ps5');
    const xbox = screen.getByTestId('xs');
    const pc = screen.getByTestId('pc');

    // Act
    fireEvent.click(playstation);
    fireEvent.click(pc);
    fireEvent.click(xbox);

    // Assert
    expect(props.setFilterBy).toHaveBeenCalledTimes(3);
  });

  it('should change the default check radio input', () => {
    renderWithTheme(
      <Dialog.Root open>
        <FilterMobile {...props} filterBy="ps5" />
      </Dialog.Root>,
    );

    // Arrange
    const all = screen.getByTestId('all');

    // Act
    fireEvent.click(all);

    // Assert
    expect(props.setFilterBy).toHaveBeenCalledTimes(1);
  });
});
