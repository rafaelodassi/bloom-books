'use client';

import { useEffect, useMemo } from 'react';

import { ErrorText } from './components/ErrorText';
import { ListCategories } from './components/ListCategories';
import { Pagination } from './components/Pagination';
import { useLayout } from './context/LayoutContext';
import { useFetchData } from './hooks/useFetchData';
import { usePagination } from './hooks/usePagination';
import { useSearch } from './hooks/useSearch';
import { Category, ResponseCategories } from './services/types';

const Home = () => {
  const { perPage, currentPage, setTitle, setContextType, setSearchValue } =
    useLayout();

  const { data, error, loading } = useFetchData<ResponseCategories>({
    url: 'lists/names.json',
  });

  const results = useMemo(() => data.results || [], [data]);

  const { dataBySearch } = useSearch<Category[]>({
    data: results,
    keyToSearch: 'display_name',
  });

  useEffect(() => {
    setContextType('category');
    setTitle('Gêneros');
    setSearchValue('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { paginatedItems } = usePagination<Category[]>({
    perPage,
    currentPage,
    items: dataBySearch,
  });

  if (error) {
    return <ErrorText>Erro ao carregar os gêneros</ErrorText>;
  }

  return (
    <>
      <ListCategories data={paginatedItems} loading={loading} />
      <Pagination
        totalItems={dataBySearch.length}
        perPage={perPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Home;
