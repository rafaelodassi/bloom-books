import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LayoutProvider } from '../../context/LayoutContext';
import { Pagination } from './index';

describe('Pagination', () => {
  it('render Pagination', () => {
    render(
      <LayoutProvider>
        <Pagination totalItems={10} perPage={5} currentPage={1} />
      </LayoutProvider>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
