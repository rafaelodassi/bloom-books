'use client';

import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { ListCategories } from './components/ListCategories';
import { Pagination } from './components/Pagination';
import { useFetchData } from './hooks/useFetchData';
import { usePagination } from './hooks/usePagination';
import { ResponseCategories } from './services/types';

type Categories = ResponseCategories['results'];

const Home = () => {
  const [categoriesFound, setCategoriesFound] = useState<Categories>([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('list');

  const { data } = useFetchData<ResponseCategories>({
    url: 'lists/names.json',
  });

  const { paginatedItems } = usePagination<Categories>({
    perPage,
    currentPage,
    items: categoriesFound,
  });

  useEffect(() => {
    setCategoriesFound(data.results || []);
  }, [data]);

  const handleSearch = (value: string) => {
    let results = data.results || [];

    if (value) {
      results = results.filter(
        (categoryFound) =>
          categoryFound.display_name
            .toLowerCase()
            .search(value.toLowerCase()) !== -1
      );
    }

    setCurrentPage(1);
    setCategoriesFound(results);
  };

  const handleChangePerPage = (value: number) => {
    setCurrentPage(1);
    setPerPage(value);
  };

  return (
    <>
      <Header
        contextType='category'
        title='Gêneros'
        onSearch={handleSearch}
        onChangePerPage={handleChangePerPage}
        onChangeView={setViewMode}
      />
      <ListCategories categories={paginatedItems} viewMode={viewMode} />
      <Pagination
        totalItems={categoriesFound.length}
        perPage={perPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </>
  );
};

export default Home;
