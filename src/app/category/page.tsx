import { Header } from '../components/Header';
import { ListBooks } from '../components/ListBooks';
import { Pagination } from '../components/Pagination';

export default async function Page() {
  return (
    <>
      <Header />
      <ListBooks />
      <Pagination />
    </>
  );
}
