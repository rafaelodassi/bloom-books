'use client';

import { useFetchData } from '../../hooks/useFetchData';
import { ResponseBooks } from '../../services/types';

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
} from './styles';

const ListBooks = () => {
  const { data } = useFetchData<ResponseBooks>({
    url: 'lists.json?list=hardcover-fiction',
  });

  const books = data.results || [];

  const getBookDetails = (
    bookDetails: ResponseBooks['results'][0]['book_details']
  ) => bookDetails[0];

  return (
    <Container>
      {books.map((book, i) => (
        <BookContainer key={`${getBookDetails(book.book_details).title}_${i}`}>
          <BookImage />
          <BookInfo>
            <TitleContainer>
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
            <ButtonBuy>
              Compre por R${getBookDetails(book.book_details).price}
            </ButtonBuy>
          </BookInfo>
        </BookContainer>
      ))}
    </Container>
  );
};

export { ListBooks };
