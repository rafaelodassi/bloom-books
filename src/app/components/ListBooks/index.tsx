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

const ListBooks = () => (
  <Container>
    <BookContainer>
      <BookImage />
      <BookInfo>
        <TitleContainer>
          <Title>WHILE JUSTICE SLEEPS</Title>
          <Author>
            by Stacey Abrams
            <FavoriteIcon size={16} color='#5062F0' />
          </Author>
        </TitleContainer>
        <Description>
          When Justice Wynn slips into a coma, his law clerk, Avery Keene, must
          unravel the clues of a controversial case.
        </Description>
        <Publisher>Editora Bloom</Publisher>
        <Rank>Rank</Rank>
        <ButtonBuy>Compre por R$16,90</ButtonBuy>
      </BookInfo>
    </BookContainer>
  </Container>
);

export { ListBooks };
