import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface LineDataPoint {
  date: Date;
  value: number;
}

export interface ChartLineProps {
  /** Array of data points to render. The `date` field should be a Date
   * instance and `value` a numeric measurement (e.g. bias score). */
  data: LineDataPoint[];
  /** Width of the chart in pixels */
  width: number;
  /** Height of the chart in pixels */
  height: number;
}

/**
 * A reusable line chart component built with D3.js. It demonstrates how to
 * integrate D3 in a React component by manipulating the DOM inside a
 * `useEffect` hook. The chart scales and axes are re‑calculated whenever
 * the `data`, `width` or `height` props change.
 */
const ChartLine: React.FC<ChartLineProps> = ({ data, width, height }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    // Clear any previous drawings
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Define scales
    const x = d3
      .scaleTime<Date, number>()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, innerWidth]);

    const y = d3
      .scaleLinear<number, number>()
      .domain([
        d3.min(data, d => d.value) ?? 0,
        d3.max(data, d => d.value) ?? 1,
      ])
      .nice()
      .range([innerHeight, 0]);

    // Define line generator
    const line = d3
      .line<LineDataPoint>()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Create group for chart elements
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(5)
          .tickFormat(d3.timeFormat('%b %d') as any),
      );

    // Y axis
    g.append('g').call(d3.axisLeft(y));

    // Chart line
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#2563eb')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Optionally draw dots on each point
    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 3)
      .attr('fill', '#2563eb');
  }, [data, width, height]);

  return <svg ref={ref} width={width} height={height} className="w-full h-auto" />;
};

export default ChartLine;