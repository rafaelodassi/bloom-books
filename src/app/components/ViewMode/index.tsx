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
}

const ViewMode = ({ onChangePerPage }: ViewMode) => (
  <Container>
    <PerPageContainer>
      <Text>Exibir</Text>
      <Select
        onChange={(e) => {
          onChangePerPage(Number(e.target.value));
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
      </Select>
      <Text>por vez</Text>
    </PerPageContainer>
    <ViewerContainer>
      <ListIcon size={24} color='#D0D3E2' $isactive />
      <CardIcon size={24} color='#D0D3E2' />
    </ViewerContainer>
  </Container>
);

export { ViewMode };
