import '@testing-library/jest-dom';

import { renderHook } from '@testing-library/react';

import { usePagination } from './usePagination';

describe('usePagination', () => {
  it('render usePagination', () => {
    const { result } = renderHook(() =>
      usePagination({
        perPage: 2,
        currentPage: 1,
        items: [
          { uuid: '1' },
          { uuid: '2' },
          { uuid: '3' },
          { uuid: '4' },
          { uuid: '5' },
        ],
      })
    );

    expect(result.current.paginatedItems).toHaveLength(2);
  });
});
