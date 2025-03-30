import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { LayoutProvider } from '../../context/LayoutContext';
import { ViewMode } from './index';

describe('ViewMode', () => {
  it('render ViewMode', () => {
    const { container } = render(
      <LayoutProvider>
        <ViewMode />
      </LayoutProvider>
    );

    expect(container.getElementsByTagName('select')).toHaveLength(1);
    expect(container.getElementsByTagName('svg')).toHaveLength(2);
  });
});
