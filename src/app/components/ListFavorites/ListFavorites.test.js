import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LayoutContext, LayoutProvider } from '../../context/LayoutContext';
import { ListFavorites } from './index';

describe('ListFavorites', () => {
  it('render ListFavorites', () => {
    render(
      <LayoutProvider>
        <LayoutContext.Provider
          value={{
            favorites: [
              {
                uuid: '1',
                title: 'Title',
                contributor: 'Contributor',
              },
            ],
          }}
        >
          <ListFavorites />
        </LayoutContext.Provider>
      </LayoutProvider>
    );

    expect(screen.getByText('Favoritos')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Contributor')).toBeInTheDocument();
  });
});
