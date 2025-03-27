import { useLayout } from '../../context/LayoutContext';

import {
  Container,
  Text,
  ListIcon,
  CardIcon,
  ViewerContainer,
  PerPageContainer,
  Select,
} from './styles';

const ViewMode = () => {
  const { viewMode, setViewMode, changePerPage } = useLayout();

  return (
    <Container>
      <PerPageContainer>
        <Text $hidemobile={false}>Exibir</Text>
        <Select onChange={(e) => changePerPage(Number(e.target.value))}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </Select>
        <Text $hidemobile={true}>por vez</Text>
      </PerPageContainer>
      <ViewerContainer>
        <ListIcon
          size={24}
          color='#D0D3E2'
          $isactive={viewMode === 'list'}
          onClick={() => setViewMode('list')}
        />
        <CardIcon
          size={24}
          color='#D0D3E2'
          $isactive={viewMode === 'card'}
          onClick={() => setViewMode('card')}
        />
      </ViewerContainer>
    </Container>
  );
};

export { ViewMode };
