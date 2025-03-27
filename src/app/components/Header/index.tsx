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
  title: string;
  contextType: string;
  onSearch: (value: string) => void;
  onChangePerPage: (value: number) => void;
  onChangeView: (viewMode: string) => void;
}

const Header = ({
  title,
  contextType,
  onSearch,
  onChangePerPage,
  onChangeView,
}: Header) => {
  const router = useRouter();

  return (
    <Container>
      <MainHeader>
        <TitleMainHeader>Bloom Books</TitleMainHeader>
        <SearchContainer>
          <SearchInputContainer>
            <SearchIcon color='#0B1A8E' size={24} />
            <SearchInput
              placeholder='Pesquise aqui...'
              onChange={(e) => onSearch(e.target.value)}
            />
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
          {title}
        </TitleSubHeader>
        <ViewMode
          onChangePerPage={onChangePerPage}
          onChangeView={onChangeView}
        />
      </SubHeader>
    </Container>
  );
};

export { Header };
