'use client';

import { useParams } from 'next/navigation';

import { Header } from '../../components/Header';
import { ListBooks } from '../../components/ListBooks';
import { Pagination } from '../../components/Pagination';
import { useFetchData } from '../../hooks/useFetchData';
import { ResponseBooks } from '../../services/types';

const Page = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useFetchData<ResponseBooks>({
    url: `lists.json?list=${name}`,
  });

  const books = data.results || [];

  return (
    <>
      <Header contextType='book' />
      <ListBooks books={books} />
      <Pagination />
    </>
  );
};

export default Page;
