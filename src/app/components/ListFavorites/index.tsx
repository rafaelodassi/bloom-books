import Image from 'next/image';

import { useLayout } from '../../context/LayoutContext';

import {
  Container,
  FavoriteContent,
  BookImage,
  BookIcon,
  FavoriteIcon,
  BookTitle,
  Author,
  BookInfo,
  Title,
  Overflow,
  EmptyText,
} from './styles';

const ListFavorites = () => {
  const { favorites, removeFavorite } = useLayout();

  const isFavorite = (uuid: string) =>
    !!favorites.find((favorite) => favorite.uuid === uuid);

  const handleRemoveFavorite = (uuid: string) => {
    removeFavorite(uuid);
  };

  return (
    <Container>
      <Title>Favoritos</Title>
      {!favorites.length && (
        <EmptyText>Nenhum livro adicionado aos favoritos</EmptyText>
      )}
      <Overflow>
        {favorites.map((favorite) => (
          <FavoriteContent key={favorite.uuid}>
            {favorite.book_image ? (
              <Image
                src={favorite.book_image}
                width={65}
                height={100}
                alt={favorite.title}
              />
            ) : (
              <BookImage>
                <BookIcon size={24} color='#5062F0' />
              </BookImage>
            )}
            <BookInfo>
              <BookTitle>{favorite.title}</BookTitle>
              <Author>
                {favorite.contributor}
                <FavoriteIcon
                  size={16}
                  color='#5062F0'
                  onClick={() => handleRemoveFavorite(favorite.uuid)}
                  $isfavorite={isFavorite(favorite.uuid)}
                />
              </Author>
            </BookInfo>
          </FavoriteContent>
        ))}
      </Overflow>
    </Container>
  );
};

export { ListFavorites };
