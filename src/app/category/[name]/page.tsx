import { Header } from '../../components/Header';
import { ListBooks } from '../../components/ListBooks';
import { Pagination } from '../../components/Pagination';

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <>
      <Header contextType='book' />
      <ListBooks name={name} />
      <Pagination />
    </>
  );
}
