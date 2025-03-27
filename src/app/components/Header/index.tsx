'use client';

import { useRouter } from 'next/navigation';

import { useLayout } from '../../context/LayoutContext';
import { useIsMobile } from '../../hooks/useMobile';
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
  MainHeaderIsMobile,
} from './styles';

interface Header {
  title?: string;
  contextType?: string;
}

const Header = ({ title, contextType }: Header) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { setSearchValue } = useLayout();

  const renderSearchContainer = () => (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIcon color='#0B1A8E' size={24} />
        <SearchInput
          placeholder='Pesquise aqui...'
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </SearchInputContainer>
    </SearchContainer>
  );

  const renderTitleMainHeader = () => (
    <TitleMainHeader>Bloom Books</TitleMainHeader>
  );

  const renderFavoriteIcon = () => (
    <FavoriteIcon color='#fff' size={24} fill='#fff' />
  );

  const renderMainHeaderContent = () => {
    if (isMobile) {
      return (
        <>
          <MainHeaderIsMobile>
            {renderTitleMainHeader()}
            {renderFavoriteIcon()}
          </MainHeaderIsMobile>
          {renderSearchContainer()}
        </>
      );
    }

    return (
      <>
        {renderTitleMainHeader()}
        {renderSearchContainer()}
        {renderFavoriteIcon()}
      </>
    );
  };

  return (
    <Container>
      <MainHeader>{renderMainHeaderContent()}</MainHeader>
      <SubHeader>
        <TitleSubHeader title={title}>
          {contextType === 'book' && (
            <BackIcon
              size={24}
              color='#010311'
              onClick={() => router.push('/')}
            />
          )}
          {title}
        </TitleSubHeader>
        <ViewMode />
      </SubHeader>
    </Container>
  );
};

export { Header };
