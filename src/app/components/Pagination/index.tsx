import { Container, PaginationItem } from './styles';

interface Pagination {
  totalItems: number;
  perPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  totalItems,
  perPage,
  currentPage,
  onChangePage,
}: Pagination) => {
  const numberOfPages = Math.ceil(totalItems / perPage);
  const arrayPages = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  const handleClickPrev = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < numberOfPages) {
      onChangePage(currentPage + 1);
    }
  };

  return (
    <Container>
      <PaginationItem onClick={handleClickPrev}>&lt;</PaginationItem>
      {arrayPages.map((page) => (
        <PaginationItem
          $isactive={currentPage === page}
          key={page}
          onClick={() => onChangePage(page)}
        >
          {page}
        </PaginationItem>
      ))}
      <PaginationItem onClick={handleClickNext}>&gt;</PaginationItem>
    </Container>
  );
};

export { Pagination };
