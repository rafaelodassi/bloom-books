'use client';

import { useRouter } from 'next/navigation';

import { useLayout } from '../../context/LayoutContext';
import { useIsMobile } from '../../hooks/useMobile';
import { Drawer } from '../Drawer';
import { ListFavorites } from '../ListFavorites';
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
  FavoriteIconContainer,
} from './styles';

const Header = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const {
    setSearchValue,
    title,
    contextType,
    setOpenFavorites,
    openFavorites,
  } = useLayout();

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

  const handleOpenFavorites = () => {
    setOpenFavorites(!openFavorites);
  };

  const handleClose = () => {
    setOpenFavorites(false);
  };

  const renderFavoriteIcon = () => (
    <FavoriteIconContainer $isactive={openFavorites}>
      <FavoriteIcon
        color='#fff'
        size={24}
        fill='#fff'
        onClick={handleOpenFavorites}
      />
    </FavoriteIconContainer>
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
    <>
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
      <Drawer
        isOpen={openFavorites}
        onClose={handleClose}
        width={isMobile ? '80%' : 400}
        offsetTop={60}
      >
        <ListFavorites />
      </Drawer>
    </>
  );
};

export { Header };
