'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { ErrorText } from '../../components/ErrorText';
import { ListBooks } from '../../components/ListBooks';
import { Pagination } from '../../components/Pagination';
import { useLayout } from '../../context/LayoutContext';
import { useFetchData } from '../../hooks/useFetchData';
import { usePagination } from '../../hooks/usePagination';
import { ResponseBooks } from '../../services/types';

type Books = ResponseBooks['results'];

const Page = () => {
  const { name } = useParams<{ name: string }>();
  const [dataBySearch, setDataBySearch] = useState<Books>([]);
  const {
    perPage,
    currentPage,
    setCurrentPage,
    searchValue,
    setTitle,
    setContextType,
  } = useLayout();

  const { data, error, loading } = useFetchData<ResponseBooks>({
    url: `lists.json?list=${name}`,
  });

  const results = data.results || [];

  useEffect(() => {
    setContextType('book');
    setTitle(results[0]?.display_name ?? '');
    setDataBySearch(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    let filteredData = results;

    if (searchValue) {
      filteredData = filteredData.filter(
        (bookFound) =>
          bookFound.book_details[0].title
            .toLowerCase()
            .search(searchValue.toLowerCase()) !== -1
      );
    }

    setCurrentPage(1);
    setDataBySearch(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const { paginatedItems } = usePagination<Books>({
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
