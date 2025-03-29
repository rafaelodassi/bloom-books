import { ReactNode } from 'react';

import { Container } from './styles';

interface ErrorText {
  children: ReactNode;
}

const ErrorText = ({ children }: ErrorText) => (
  <Container>{children}</Container>
);

export { ErrorText };
