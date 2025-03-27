'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { Header } from '../../components/Header';
import { ListBooks } from '../../components/ListBooks';
import { Pagination } from '../../components/Pagination';
import { useFetchData } from '../../hooks/useFetchData';
import { usePagination } from '../../hooks/usePagination';
import { ResponseBooks } from '../../services/types';

type Books = ResponseBooks['results'];

const Page = () => {
  const { name } = useParams<{ name: string }>();

  const [booksFound, setBooksFound] = useState<Books>([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('list');

  const { data } = useFetchData<ResponseBooks>({
    url: `lists.json?list=${name}`,
  });

  const { paginatedItems } = usePagination<Books>({
    perPage,
    currentPage,
    items: booksFound,
  });

  const title = data.results?.[0].display_name ?? '';

  useEffect(() => {
    setBooksFound(data.results || []);
  }, [data]);

  const handleSearch = (value: string) => {
    let results = data.results || [];

    if (value) {
      results = results.filter(
        (bookFound) =>
          bookFound.book_details[0].title
            .toLowerCase()
            .search(value.toLowerCase()) !== -1
      );
    }

    setCurrentPage(1);
    setBooksFound(results);
  };

  const handleChangePerPage = (value: number) => {
    setCurrentPage(1);
    setPerPage(value);
  };

  return (
    <>
      <Header
        contextType='book'
        title={title}
        onSearch={handleSearch}
        onChangePerPage={handleChangePerPage}
        onChangeView={setViewMode}
      />
      <ListBooks books={paginatedItems} viewMode={viewMode} />
      <Pagination
        totalItems={booksFound.length}
        perPage={perPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </>
  );
};

export default Page;
