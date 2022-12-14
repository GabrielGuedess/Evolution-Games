/* eslint-disable import-helpers/order-imports */
import { renderWithProviders } from 'utils/tests/helpers';

import { QueryClient, QueryClientProvider } from 'react-query';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { filterItems } from 'components/organisms/ExplorerSidebar/mock';

import { Explorer } from './Explorer';

import { game } from './mock';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: { genre: ['sports'] },
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useInfiniteQuery = jest.spyOn(require('react-query'), 'useInfiniteQuery');

const fetchNextPage = jest.fn();

useInfiniteQuery.mockImplementation(() => ({
  data: {
    pages: [[game]],
  },
  isFetching: false,
  isLoading: false,
  fetchNextPage,
  hasNextPage: true,
  getNextPageParam: () => ({}),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock('templates/Base/Base', () => ({
  __esModule: true,
  Base: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>;
  },
}));

describe('<Explorer />', () => {
  it('should render the components correctly', () => {
    const { container } = renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Explorer filterItems={filterItems} />
      </QueryClientProvider>,
    );

    expect(screen.getByTestId('Base Mock')).toBeInTheDocument();
    expect(screen.getByLabelText('ExplorerSidebar Mock')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the RadioButton', async () => {
    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Explorer filterItems={filterItems} />
      </QueryClientProvider>,
    );

    await userEvent.click(screen.getByLabelText('Button Sort'));

    expect(
      screen.getByRole('radio', { name: 'Popularity' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: 'High to low' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: 'Low to high' }),
    ).toBeInTheDocument();
  });

  it('should change checked RadioButtons', async () => {
    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Explorer filterItems={filterItems} />
      </QueryClientProvider>,
    );

    await userEvent.click(screen.getByLabelText('Button Sort'));

    const radioPopularity = screen.getByRole('radio', { name: 'Popularity' });
    const radioHighToLow = screen.getByRole('radio', { name: 'High to low' });
    const radioLowToHigh = screen.getByRole('radio', { name: 'Low to high' });

    expect(radioPopularity).toBeChecked();

    await userEvent.click(radioHighToLow);

    expect(radioHighToLow).toBeChecked();

    await userEvent.click(radioLowToHigh);

    expect(radioLowToHigh).toBeChecked();

    await userEvent.click(radioPopularity);

    expect(radioPopularity).toBeChecked();
  });

  it('should open Explorer Sidebar when click in button', async () => {
    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Explorer filterItems={filterItems} />
      </QueryClientProvider>,
    );

    await userEvent.click(screen.getAllByLabelText('Button Action')[0]);

    expect(screen.getByLabelText('ExplorerSidebar Mock')).toHaveStyle({
      visibility: 'visible',
      'pointer-events': 'all',
    });
  });

  it('should render more games', async () => {
    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Explorer filterItems={filterItems} />
      </QueryClientProvider>,
    );

    await userEvent.click(screen.getAllByLabelText('Button Action')[1]);

    expect(fetchNextPage).toBeCalled();
  });

  it('should render query selected', () => {
    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Explorer filterItems={filterItems} />
      </QueryClientProvider>,
    );

    expect(screen.getByLabelText('active-filter: sports')).toBeInTheDocument();
  });
});
