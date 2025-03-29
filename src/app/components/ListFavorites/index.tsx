import { useLayout } from '../../context/LayoutContext';
import { Book } from '../../services/types';

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
} from './styles';

const ListFavorites = () => {
  const { favorites, removeFavorite } = useLayout();

  const getBookDetails = (bookDetails: Book['book_details']) => bookDetails[0];

  const isFavorite = (uuid: string) =>
    !!favorites.find((favorite) => favorite.uuid === uuid);

  const handleRemoveFavorite = (uuid: string) => {
    removeFavorite(uuid);
  };

  return (
    <Container>
      <Title>Favoritos</Title>
      {favorites.map((favorite) => (
        <FavoriteContent key={favorite.uuid}>
          <BookImage>
            <BookIcon size={24} color='#5062F0' />
          </BookImage>
          <BookInfo>
            <BookTitle>{getBookDetails(favorite.book_details).title}</BookTitle>
            <Author>
              {getBookDetails(favorite.book_details).contributor}
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
    </Container>
  );
};

export { ListFavorites };
