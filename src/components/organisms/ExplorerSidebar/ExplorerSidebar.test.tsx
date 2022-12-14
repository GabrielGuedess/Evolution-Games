import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExplorerSidebar } from './ExplorerSidebar';
import { filterItems } from './mock';

describe('<ExplorerSidebar />', () => {
  it('should render the headings', () => {
    // Arrange
    const { container } = renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={() => jest.fn()}
        setIsOpen={() => jest.fn()}
        initialValues={{}}
      />,
    );

    // Assert
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('Platforms')).toBeInTheDocument();
    expect(screen.getByText('Notas')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should check initial values that are passed', () => {
    renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={() => jest.fn()}
        setIsOpen={() => jest.fn()}
        initialValues={{ platforms: ['ps4', 'ps5'] }}
      />,
    );

    // Assert
    expect(
      screen.getByRole('checkbox', { name: /Playstation 4/i }),
    ).toBeChecked();
    expect(
      screen.getByRole('checkbox', { name: /Playstation 5/i }),
    ).toBeChecked();
  });

  it('should filter with initial values', () => {
    // Arrange
    const onFilter = jest.fn();

    renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={onFilter}
        setIsOpen={() => jest.fn()}
        initialValues={{ platforms: ['ps4', 'ps5'] }}
      />,
    );

    // Assert
    expect(onFilter).toBeCalledWith({
      platforms: ['ps4', 'ps5'],
    });
  });

  it('should filter with checked values', async () => {
    // Arrange
    const onFilter = jest.fn();

    renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={onFilter}
        setIsOpen={() => jest.fn()}
      />,
    );

    // Act
    await userEvent.click(
      screen.getByRole('checkbox', { name: 'Playstation 4' }),
    );
    await userEvent.click(
      screen.getByRole('checkbox', { name: 'Playstation 5' }),
    );

    // Assert
    expect(onFilter).toHaveBeenCalledTimes(3);

    expect(onFilter).toBeCalledWith({
      platforms: ['ps4', 'ps5'],
    });
  });

  it('should alternation between radio options', async () => {
    // Arrange
    const onFilter = jest.fn();

    const filterPlatforms = {
      title: 'Platforms',
      name: 'platforms',
      type: 'radio',
      fields: [
        {
          title: 'Playstation 4',
          name: 'ps4',
        },
        {
          title: 'Playstation 5',
          name: 'ps5',
        },
      ],
    };

    renderWithProviders(
      <ExplorerSidebar
        items={[filterPlatforms]}
        isOpen
        onFilter={onFilter}
        setIsOpen={() => jest.fn()}
      />,
    );

    // Act
    await userEvent.click(screen.getByLabelText('Playstation 4'));
    await userEvent.click(screen.getByLabelText('Playstation 5'));

    // Assert
    expect(onFilter).toBeCalledWith({
      platforms: 'ps5',
    });
  });

  it('should close explorer sidebar in mobile', async () => {
    // Arrange
    const setIsOpen = jest.fn();

    renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={jest.fn()}
        setIsOpen={setIsOpen}
      />,
    );

    // Act
    await userEvent.click(screen.getByLabelText('Close Action'));

    // Assert
    expect(setIsOpen).toBeCalledWith(false);
  });

  it('should change close styles explorer sidebar in mobile', () => {
    renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen={false}
        onFilter={jest.fn()}
        setIsOpen={jest.fn()}
      />,
    );

    // Assert
    expect(screen.getByLabelText('ExplorerSidebar Mock')).toHaveStyle({
      visibility: 'hidden',
      'pointer-events': 'none',
    });
  });

  it('should render default price with range', () => {
    // Arrange
    const { container } = renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={jest.fn()}
        setIsOpen={jest.fn()}
      />,
    );

    const output1 = container.querySelectorAll('#output')[0];
    const output2 = container.querySelectorAll('#output')[1];

    // Assert
    expect(output1).toHaveTextContent('R$ 0,00');
    expect(output2).toHaveTextContent('R$ 500,00');
  });

  it('should change price with range on keyboard', async () => {
    // Arrange
    const { container } = renderWithProviders(
      <ExplorerSidebar
        items={filterItems}
        isOpen
        onFilter={jest.fn()}
        setIsOpen={jest.fn()}
      />,
    );

    const output1 = container.querySelectorAll('#output')[0];
    const range = screen.getAllByLabelText('Price range')[0];

    // Act
    await userEvent.type(range, '{arrowright}');

    // Assert
    expect(output1).toHaveTextContent('R$ 1,00');
  });
});
