import { Books, ResponseBooks } from '../../services/types';

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
} from './styles';

interface ListBooks {
  books: Books[];
  viewMode: string;
}

const ListBooks = ({ books, viewMode }: ListBooks) => {
  const getBookDetails = (
    bookDetails: ResponseBooks['results'][0]['book_details']
  ) => bookDetails[0];

  const handleClickBuy = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Container $viewmode={viewMode}>
      {books.map((book, i) => (
        <BookContainer
          key={`${getBookDetails(book.book_details).title}_${i}`}
          $viewmode={viewMode}
        >
          <BookImage>
            <BookIcon size={48} color='#5062F0' />
          </BookImage>
          <BookInfo>
            <TitleContainer $viewmode={viewMode}>
              <Title>{getBookDetails(book.book_details).title}</Title>
              <Author>
                {getBookDetails(book.book_details).contributor}
                <FavoriteIcon size={16} color='#5062F0' />
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
