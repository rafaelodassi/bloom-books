'use client';

import { useEffect, useState } from 'react';

import { ListCategories } from './components/ListCategories';
import { Pagination } from './components/Pagination';
import { useLayout } from './context/LayoutContext';
import { useFetchData } from './hooks/useFetchData';
import { usePagination } from './hooks/usePagination';
import { ResponseCategories } from './services/types';

type Categories = ResponseCategories['results'];

const Home = () => {
  const [dataBySearch, setDataBySearch] = useState<Categories>([]);
  const { perPage, currentPage, setCurrentPage, searchValue } = useLayout();

  const { data } = useFetchData<ResponseCategories>({
    url: 'lists/names.json',
  });

  const results = data.results || [];

  useEffect(() => {
    setDataBySearch(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    let filteredData = results;

    if (searchValue) {
      filteredData = filteredData.filter(
        (categoryFound) =>
          categoryFound.display_name
            .toLowerCase()
            .search(searchValue.toLowerCase()) !== -1
      );
    }

    setCurrentPage(1);
    setDataBySearch(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const { paginatedItems } = usePagination<Categories>({
    perPage,
    currentPage,
    items: dataBySearch,
  });

  return (
    <>
      <ListCategories data={paginatedItems} />
      <Pagination
        totalItems={dataBySearch.length}
        perPage={perPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Home;
