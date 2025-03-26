'use client';

import { Header } from './components/Header';
import { ListCategories } from './components/ListCategories';
import { Pagination } from './components/Pagination';
import { useFetchData } from './hooks/useFetchData';
import { ResponseCategories } from './services/types';

const Home = () => {
  const { data } = useFetchData<ResponseCategories>({
    url: 'lists/names.json',
  });

  const categories = data.results || [];

  return (
    <>
      <Header contextType='category' />
      <ListCategories categories={categories} />
      <Pagination />
    </>
  );
};

export default Home;
