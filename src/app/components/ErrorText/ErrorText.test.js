import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ErrorText } from './index';

describe('ErrorText', () => {
  it('render ErrorText', () => {
    render(<ErrorText>Error</ErrorText>);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
