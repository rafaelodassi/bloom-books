import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LayoutProvider } from '../../context/LayoutContext';
import { ListBooks } from './index';

describe('ListBooks', () => {
  it('loading', () => {
    render(
      <LayoutProvider>
        <ListBooks data={[]} loading={true} />
      </LayoutProvider>
    );

    expect(screen.getAllByTestId('skeleton')).toHaveLength(10);
  });

  it('empty', () => {
    render(
      <LayoutProvider>
        <ListBooks data={[]} loading={false} />
      </LayoutProvider>
    );

    expect(screen.getByText('Nenhum item foi encontrado')).toBeInTheDocument();
  });

  it('list', () => {
    render(
      <LayoutProvider>
        <ListBooks
          data={[
            {
              uuid: '1',
              title: 'title',
              contributor: 'contributor',
              description: 'description',
              publisher: 'publisher',
              rank: 'rank',
              price: '0.00',
            },
          ]}
          loading={false}
        />
      </LayoutProvider>
    );

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('contributor')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('publisher')).toBeInTheDocument();
    expect(screen.getByText('Rank rank')).toBeInTheDocument();
    expect(screen.getByText('Compre por R$ 0,00')).toBeInTheDocument();
  });
});
