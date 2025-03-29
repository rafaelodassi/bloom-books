import { Skeleton } from '../../components/Skeleton';
import { useLayout } from '../../context/LayoutContext';
import { Book } from '../../services/types';

import {
  Container,
  BookContainer,
  BookImage,
  BookInfo,
  Title,
  Description,
  Publisher,
  ButtonBuy,
  Rank,
  Author,
  TitleContainer,
  FavoriteIcon,
  BookIcon,
  SkeletonContainer,
  SkeletonInfoContainer,
  SkeletonContent,
} from './styles';

interface ListBooks {
  data: Book[];
  loading?: boolean;
}

const ListBooks = ({ data, loading }: ListBooks) => {
  const { viewMode, addFavorite, favorites } = useLayout();

  const getBookDetails = (bookDetails: Book['book_details']) => bookDetails[0];

  const handleClickBuy = (url: string) => {
    window.open(url, '_blank');
  };

  const handleClickFavorite = (book: Book) => {
    addFavorite(book);
  };

  const isFavorite = (uuid: string) =>
    !!favorites.find((favorite) => favorite.uuid === uuid);

  if (loading) {
    return (
      <SkeletonContainer $viewmode={viewMode}>
        {[1, 2].map((i) => (
          <SkeletonContent key={i}>
            <Skeleton width={130} height={167} />
            <SkeletonInfoContainer>
              <Skeleton width={'100%'} height={20} />
              <Skeleton width={'100%'} height={20} />
              <Skeleton width={'100%'} height={20} />
              <Skeleton width={130} height={32} />
            </SkeletonInfoContainer>
          </SkeletonContent>
        ))}
      </SkeletonContainer>
    );
  }

  return (
    <Container $viewmode={viewMode}>
      {data.map((book) => (
        <BookContainer key={book.uuid} $viewmode={viewMode}>
          <BookImage>
            <BookIcon size={48} color='#5062F0' />
          </BookImage>
          <BookInfo>
            <TitleContainer $viewmode={viewMode}>
              <Title>{getBookDetails(book.book_details).title}</Title>
              <Author>
                {getBookDetails(book.book_details).contributor}
                <FavoriteIcon
                  size={16}
                  color='#5062F0'
                  onClick={() => handleClickFavorite(book)}
                  $isfavorite={isFavorite(book.uuid)}
                />
              </Author>
            </TitleContainer>
            <Description>
              {getBookDetails(book.book_details).description}
            </Description>
            <Publisher>{getBookDetails(book.book_details).publisher}</Publisher>
            <Rank>Rank {book.rank}</Rank>
            <ButtonBuy onClick={() => handleClickBuy(book.amazon_product_url)}>
              Compre por R${getBookDetails(book.book_details).price}
            </ButtonBuy>
          </BookInfo>
        </BookContainer>
      ))}
    </Container>
  );
};

export { ListBooks };
