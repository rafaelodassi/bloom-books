import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LayoutProvider } from '../../context/LayoutContext';
import { Header } from './index';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Header', () => {
  it('render Header', () => {
    const { container } = render(
      <LayoutProvider>
        <Header />
      </LayoutProvider>
    );

    expect(screen.getByText('Bloom Books')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pesquise aqui...')).toBeInTheDocument();
    expect(container.getElementsByTagName('svg')).toHaveLength(4);
  });
});
