'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { Header } from '../../components/Header';
import { ListBooks } from '../../components/ListBooks';
import { Pagination } from '../../components/Pagination';
import { useFetchData } from '../../hooks/useFetchData';
import { ResponseBooks } from '../../services/types';

const Page = () => {
  const { name } = useParams<{ name: string }>();
  const [books, setBooks] = useState<ResponseBooks['results']>([]);
  const { data } = useFetchData<ResponseBooks>({
    url: `lists.json?list=${name}`,
  });

  useEffect(() => {
    setBooks(data.results || []);
  }, [data]);

  const handleSearch = (value: string) => {
    let results = data.results || [];

    if (value) {
      results = books.filter(
        (book) =>
          book.book_details[0].title
            .toLowerCase()
            .search(value.toLowerCase()) !== -1
      );
    }

    setBooks(results);
  };

  return (
    <>
      <Header
        contextType='book'
        title={books[0]?.list_name}
        onSearch={handleSearch}
      />
      <ListBooks books={books} />
      <Pagination numberOfItems={50} numberPerPage={5} currentPage={1} />
    </>
  );
};

export default Page;
