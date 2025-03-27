import { Category } from '../../services/types';

import {
  Container,
  LastPublished,
  OlderPost,
  Title,
  TitleContainer,
  Updated,
  CategoryContainer,
} from './styles';

interface ListCategories {
  categories: Category[];
  viewMode: string;
}

const ListCategories = ({ categories, viewMode }: ListCategories) => (
  <Container $viewmode={viewMode}>
    {categories.map((category, i) => (
      <CategoryContainer
        key={`${category.list_name_encoded}_${i}`}
        $viewmode={viewMode}
      >
        <TitleContainer $viewmode={viewMode}>
          <Title href={`/category/${category.list_name_encoded}`}>
            {category.display_name}
          </Title>
          <Updated>Atualizada em {category.updated}</Updated>
        </TitleContainer>
        <LastPublished>
          Última publicação: {category.newest_published_date}
        </LastPublished>
        <OlderPost>
          Publicação mais antiga: {category.oldest_published_date}
        </OlderPost>
      </CategoryContainer>
    ))}
  </Container>
);

export { ListCategories };
