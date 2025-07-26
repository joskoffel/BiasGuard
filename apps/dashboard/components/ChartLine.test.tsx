import React from 'react';
import { render } from '@testing-library/react';
import ChartLine from './ChartLine';

describe('ChartLine', () => {
  it('renders an SVG element', () => {
    const data = [
      { date: new Date(2025, 0, 1), value: 0.1 },
      { date: new Date(2025, 1, 1), value: 0.3 },
    ];
    const { container } = render(<ChartLine data={data} width={400} height={200} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});