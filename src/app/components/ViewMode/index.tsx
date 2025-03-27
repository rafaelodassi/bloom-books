import { useState } from 'react';

import {
  Container,
  Text,
  ListIcon,
  CardIcon,
  ViewerContainer,
  PerPageContainer,
  Select,
} from './styles';

interface ViewMode {
  onChangePerPage: (value: number) => void;
  onChangeView: (viewMode: string) => void;
}

const ViewMode = ({ onChangePerPage, onChangeView }: ViewMode) => {
  const [viewMode, setViewMode] = useState('list');

  const handleChangeViewMode = (viewMode: string) => {
    setViewMode(viewMode);
    onChangeView(viewMode);
  };

  return (
    <Container>
      <PerPageContainer>
        <Text $hidemobile={false}>Exibir</Text>
        <Select onChange={(e) => onChangePerPage(Number(e.target.value))}>
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
          onClick={() => handleChangeViewMode('list')}
        />
        <CardIcon
          size={24}
          color='#D0D3E2'
          $isactive={viewMode === 'card'}
          onClick={() => handleChangeViewMode('card')}
        />
      </ViewerContainer>
    </Container>
  );
};

export { ViewMode };
