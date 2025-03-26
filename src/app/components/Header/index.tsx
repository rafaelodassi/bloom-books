import { useRouter } from 'next/navigation';

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
  BackIcon,
} from './styles';

interface Header {
  contextType: string;
}

const Header = ({ contextType }: Header) => {
  const router = useRouter();

  return (
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
        <TitleSubHeader>
          {contextType === 'book' && (
            <BackIcon
              size={24}
              color='#010311'
              onClick={() => router.push('/')}
            />
          )}
          Gêneros
        </TitleSubHeader>
        <ViewMode />
      </SubHeader>
    </Container>
  );
};

export { Header };
