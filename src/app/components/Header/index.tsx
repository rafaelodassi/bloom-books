import { ListCategories } from '../ListCategories';
import { Pagination } from '../Pagination';
import { ViewMode } from '../ViewMode';

import {
  Container,
  MainHeader,
  SubHeader,
  TitleMainHeader,
  SearchInput,
  SearchContainer,
  SearchInputContainer,
  SearchIcon,
  FavoriteIcon,
  TitleSubHeader,
} from './styles';

const Header = () => (
  <Container>
    <MainHeader>
      <TitleMainHeader>Bloom Books</TitleMainHeader>
      <SearchContainer>
        <SearchInputContainer>
          <SearchIcon color='#0B1A8E' size={24} />
          <SearchInput placeholder='Pesquise aqui...' />
        </SearchInputContainer>
      </SearchContainer>
      <FavoriteIcon color='#fff' size={24} fill='#fff' />
    </MainHeader>
    <SubHeader>
      <TitleSubHeader>Gêneros</TitleSubHeader>
      <ViewMode />
    </SubHeader>
    <ListCategories />
    <Pagination />
  </Container>
);

export { Header };
