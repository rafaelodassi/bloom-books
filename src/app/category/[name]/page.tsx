'use client';

import { useEffect, useMemo } from 'react';

import { useParams } from 'next/navigation';

import { ErrorText } from '../../components/ErrorText';
import { ListBooks } from '../../components/ListBooks';
import { Pagination } from '../../components/Pagination';
import { useLayout } from '../../context/LayoutContext';
import { useFetchData } from '../../hooks/useFetchData';
import { usePagination } from '../../hooks/usePagination';
import { useSearch } from '../../hooks/useSearch';
import { ResponseBooks, Book } from '../../services/types';

const Page = () => {
  const { name } = useParams<{ name: string }>();

  const { perPage, currentPage, setTitle, setContextType, setSearchValue } =
    useLayout();

  const { data, error, loading } = useFetchData<ResponseBooks>({
    url: `lists/current/${name}.json`,
  });

  const results = useMemo(() => data.results || {}, [data]);
  const books = useMemo(() => results.books || [], [results.books]);

  const { dataBySearch } = useSearch<Book[]>({
    data: books,
    keyToSearch: 'title',
  });

  useEffect(() => {
    setContextType('book');
    setTitle(results.display_name ?? '');
    setSearchValue('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { paginatedItems } = usePagination<Book[]>({
    perPage,
    currentPage,
    items: dataBySearch,
  });

  if (error) {
    return <ErrorText>Erro ao carregar os livros</ErrorText>;
  }

  return (
    <>
      <ListBooks data={paginatedItems} loading={loading} />
      <Pagination
        totalItems={dataBySearch.length}
        perPage={perPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Page;
