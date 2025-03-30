import Image from 'next/image';

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

  if (!data.length) {
    return <Container $viewmode={'list'}>Nenhum item foi encontrado</Container>;
  }

  return (
    <Container $viewmode={viewMode}>
      {data.map((book) => (
        <BookContainer key={book.uuid} $viewmode={viewMode}>
          {book.book_image ? (
            <Image
              src={book.book_image}
              width={100}
              height={160}
              alt={book.title}
            />
          ) : (
            <BookImage>
              <BookIcon size={48} color='#5062F0' />
            </BookImage>
          )}
          <BookInfo>
            <TitleContainer $viewmode={viewMode}>
              <Title>{book.title}</Title>
              <Author>
                {book.contributor}
                <FavoriteIcon
                  size={16}
                  color='#5062F0'
                  onClick={() => handleClickFavorite(book)}
                  $isfavorite={isFavorite(book.uuid)}
                />
              </Author>
            </TitleContainer>
            <Description>{book.description}</Description>
            <Publisher>{book.publisher}</Publisher>
            <Rank>Rank {book.rank}</Rank>
            <ButtonBuy onClick={() => handleClickBuy(book.amazon_product_url)}>
              Compre por R$ {book.price?.replace(/\./g, ',')}
            </ButtonBuy>
          </BookInfo>
        </BookContainer>
      ))}
    </Container>
  );
};

export { ListBooks };
