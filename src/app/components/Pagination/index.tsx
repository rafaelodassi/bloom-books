import { Container, PaginationItem } from './styles';

const Pagination = () => (
  <Container>
    <PaginationItem>&lt;</PaginationItem>
    <PaginationItem isActive={true}>1</PaginationItem>
    <PaginationItem>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>4</PaginationItem>
    <PaginationItem>5</PaginationItem>
    <PaginationItem>6</PaginationItem>
    <PaginationItem>&gt;</PaginationItem>
  </Container>
);

export { Pagination };
