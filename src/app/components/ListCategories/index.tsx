import { Skeleton } from '../../components/Skeleton';
import { useLayout } from '../../context/LayoutContext';
import { Category } from '../../services/types';

import {
  Container,
  LastPublished,
  OlderPost,
  Title,
  TitleContainer,
  Updated,
  CategoryContainer,
  SkeletonContainer,
} from './styles';

interface ListCategories {
  data: Category[];
  loading?: boolean;
}

const ListCategories = ({ data, loading }: ListCategories) => {
  const { viewMode } = useLayout();

  if (loading) {
    return (
      <SkeletonContainer $viewmode={viewMode}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton width={'100%'} height={24} key={i} />
        ))}
      </SkeletonContainer>
    );
  }

  return (
    <Container $viewmode={viewMode}>
      {data.map((category) => (
        <CategoryContainer key={category.uuid} $viewmode={viewMode}>
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
};

export { ListCategories };
