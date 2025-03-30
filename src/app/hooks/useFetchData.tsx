import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { api } from '../services/config';

interface UseFetchData {
  url: string;
}

function useFetchData<T>({ url }: UseFetchData) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await api.get<T>(url);
        const responseData = response as T & {
          results: T[] & Record<string, unknown>;
        };
        const results = responseData.results;
        const books = results.books as Record<string, unknown>[] | undefined;

        if (books) {
          setData({
            ...responseData,
            results: {
              ...results,
              books: books.map((book) => ({
                ...book,
                uuid: uuidv4(),
              })),
            },
          });
        } else {
          setData({
            ...responseData,
            results: results.map((result) => ({ ...result, uuid: uuidv4() })),
          });
        }
      } catch (error) {
        setError(!!error);
      }

      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export { useFetchData };
