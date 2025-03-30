import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Skeleton } from './index';

describe('Skeleton', () => {
  it('render Skeleton', () => {
    render(<Skeleton />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});
