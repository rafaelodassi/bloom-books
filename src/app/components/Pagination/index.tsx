import { useLayout } from '../../context/LayoutContext';

import { Container, PaginationItem } from './styles';
interface Pagination {
  totalItems: number;
  perPage: number;
  currentPage: number;
}

const Pagination = ({ totalItems, perPage, currentPage }: Pagination) => {
  const { setCurrentPage } = useLayout();

  const numberOfPages = Math.ceil(totalItems / perPage);
  const arrayPages = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      {numberOfPages > 0 && (
        <PaginationItem onClick={handleClickPrev}>&lt;</PaginationItem>
      )}
      {arrayPages.map((page) => (
        <PaginationItem
          $isactive={currentPage === page}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </PaginationItem>
      ))}
      {numberOfPages > 0 && (
        <PaginationItem onClick={handleClickNext}>&gt;</PaginationItem>
      )}
    </Container>
  );
};

export { Pagination };
