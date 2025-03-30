import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LayoutProvider } from '../../context/LayoutContext';
import { ListCategories } from './index';

describe('ListCategories', () => {
  it('loading', () => {
    render(
      <LayoutProvider>
        <ListCategories data={[]} loading={true} />
      </LayoutProvider>
    );

    expect(screen.getAllByTestId('skeleton')).toHaveLength(5);
  });

  it('empty', () => {
    render(
      <LayoutProvider>
        <ListCategories data={[]} loading={false} />
      </LayoutProvider>
    );

    expect(screen.getByText('Nenhum item foi encontrado')).toBeInTheDocument();
  });

  it('list', () => {
    render(
      <LayoutProvider>
        <ListCategories
          data={[
            {
              uuid: '1',
              list_name_encoded: 'list_name_encoded',
              display_name: 'display_name',
              updated: 'updated',
              newest_published_date: 'newest_published_date',
              oldest_published_date: 'oldest_published_date',
            },
          ]}
          loading={false}
        />
      </LayoutProvider>
    );

    expect(screen.getByText('display_name')).toBeInTheDocument();
    expect(screen.getByText('Atualizada em updated')).toBeInTheDocument();
    expect(
      screen.getByText('Última publicação: newest_published_date')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Publicação mais antiga: oldest_published_date')
    ).toBeInTheDocument();
  });
});
