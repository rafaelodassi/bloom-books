import { Container } from './styles';

interface Skeleton {
  width: string | number;
  height: string | number;
}

const Skeleton = ({ width, height }: Skeleton) => (
  <Container width={width} height={height} data-testid='skeleton' />
);

export { Skeleton };
