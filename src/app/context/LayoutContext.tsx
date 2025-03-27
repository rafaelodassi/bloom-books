'use client';

import React, { createContext, useContext, useState } from 'react';

interface LayoutContext {
  viewMode: string;
  setViewMode: (viewMode: string) => void;
  perPage: number;
  changePerPage: (perPage: number) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

interface LayoutProvider {
  children: React.ReactNode;
}

const LayoutContext = createContext<LayoutContext | undefined>(undefined);

export const LayoutProvider = ({ children }: LayoutProvider) => {
  const [viewMode, setViewMode] = useState('list');
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const changePerPage = (perPage: number) => {
    setCurrentPage(1);
    setPerPage(perPage);
  };

  return (
    <LayoutContext.Provider
      value={{
        viewMode,
        setViewMode,
        perPage,
        changePerPage,
        currentPage,
        setCurrentPage,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
};
