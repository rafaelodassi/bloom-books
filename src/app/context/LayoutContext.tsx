'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContext {
  viewMode: string;
  setViewMode: (viewMode: string) => void;
  perPage: number;
  changePerPage: (perPage: number) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  title: string;
  setTitle: (title: string) => void;
  contextType: string;
  setContextType: (contextType: string) => void;
  openFavorites: boolean;
  setOpenFavorites: (openFavorites: boolean) => void;
}

interface LayoutProvider {
  children: ReactNode;
}

const LayoutContext = createContext<LayoutContext | undefined>(undefined);

export const LayoutProvider = ({ children }: LayoutProvider) => {
  const [viewMode, setViewMode] = useState('list');
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [title, setTitle] = useState('');
  const [contextType, setContextType] = useState('');
  const [openFavorites, setOpenFavorites] = useState(false);

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
        title,
        setTitle,
        contextType,
        setContextType,
        openFavorites,
        setOpenFavorites,
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
