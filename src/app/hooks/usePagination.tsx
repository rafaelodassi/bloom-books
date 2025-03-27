interface UsePagination {
  perPage: number;
  currentPage: number;
  items: unknown[];
}

function usePagination<T>({ perPage, currentPage, items }: UsePagination) {
  return {
    paginatedItems: items.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    ) as T,
  };
}

export { usePagination };
