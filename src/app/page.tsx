import { Header } from './components/Header';
import { ListCategories } from './components/ListCategories';
import { Pagination } from './components/Pagination';

const Home = () => (
  <>
    <Header contextType='category' />
    <ListCategories />
    <Pagination />
  </>
);

export default Home;
