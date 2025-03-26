import {
  Container,
  LastPublished,
  OlderPost,
  Title,
  TitleContainer,
  Updated,
  CategoryContainer,
} from './styles';

const ListCategories = () => (
  <Container>
    <CategoryContainer>
      <TitleContainer>
        <Title>Combined Print & E-Book Fiction</Title>
        <Updated>Atualizada em 00/00/00</Updated>
      </TitleContainer>
      <LastPublished>Última publicação: 00/00/00</LastPublished>
      <OlderPost>Publicação mais antiga: 00/00/00</OlderPost>
    </CategoryContainer>
  </Container>
);

export { ListCategories };
