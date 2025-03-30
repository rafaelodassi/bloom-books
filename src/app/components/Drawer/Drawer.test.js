import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Drawer } from './index';

describe('Drawer', () => {
  beforeAll(() => {
    const portalEl = document.createElement('div');
    portalEl.id = 'drawer-root';
    document.body.appendChild(portalEl);
  });

  it('render Drawer', () => {
    render(<Drawer isOpen={true}>Drawer</Drawer>);
    expect(screen.getByText('Drawer')).toBeInTheDocument();
  });
});
