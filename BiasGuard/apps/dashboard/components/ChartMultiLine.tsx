import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface MultiLineSeries {
  id: string;
  name: string;
  data: { date: Date; value: number }[];
}

export interface ChartMultiLineProps {
  /**
   * An array of series to plot. Each series should have a unique `id`,
   * a `name` for legend use, and an array of data points with `date` and
   * `value` properties.
   */
  series: MultiLineSeries[];
  width: number;
  height: number;
}

/**
 * Renders a multi‑line chart using D3.js. The component re‑computes scales
 * and redraws whenever the input series or dimensions change. Colours are
 * assigned deterministically based on the series index.
 */
const ChartMultiLine: React.FC<ChartMultiLineProps> = ({ series, width, height }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Flatten all dates across series to compute a common x scale
    const allDates = series.flatMap(s => s.data.map(d => d.date));
    const allValues = series.flatMap(s => s.data.map(d => d.value));

    const x = d3
      .scaleTime<Date, number>()
      .domain(d3.extent(allDates) as [Date, Date])
      .range([0, innerWidth]);

    const y = d3
      .scaleLinear<number, number>()
      .domain([d3.min(allValues) ?? 0, d3.max(allValues) ?? 1])
      .nice()
      .range([innerHeight, 0]);

    const colors = d3.schemeCategory10;

    const line = d3
      .line<{ date: Date; value: number }>()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(5)
          .tickFormat(d3.timeFormat('%b %d') as any),
      );
    g.append('g').call(d3.axisLeft(y));

    // Draw lines for each series
    series.forEach((s, idx) => {
      g.append('path')
        .datum(s.data)
        .attr('fill', 'none')
        .attr('stroke', colors[idx % colors.length])
        .attr('stroke-width', 2)
        .attr('d', line);

      // Optionally add circles for data points
      g.selectAll(`circle.series-${s.id}`)
        .data(s.data)
        .enter()
        .append('circle')
        .attr('class', `series-${s.id}`)
        .attr('cx', d => x(d.date))
        .attr('cy', d => y(d.value))
        .attr('r', 3)
        .attr('fill', colors[idx % colors.length]);
    });
  }, [series, width, height]);

  return <svg ref={ref} width={width} height={height} className="w-full h-auto" />;
};

export default ChartMultiLine;