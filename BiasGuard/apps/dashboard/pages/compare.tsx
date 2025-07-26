import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

// Dynamically import the multi‑line chart component
const ChartMultiLine = dynamic(() => import('@/components/ChartMultiLine'), { ssr: false });

// Sample series data for three outlets. Each series contains an array of
// data points with `date` and `value`. In practice you would compute this
// data from your API based on selected outlets.
const seriesData = [
  {
    id: 'outlet‑a',
    name: 'Outlet A',
    data: [
      { date: new Date(2025, 0, 1), value: 0.1 },
      { date: new Date(2025, 1, 1), value: 0.2 },
      { date: new Date(2025, 2, 1), value: 0.15 },
    ],
  },
  {
    id: 'outlet‑b',
    name: 'Outlet B',
    data: [
      { date: new Date(2025, 0, 1), value: -0.05 },
      { date: new Date(2025, 1, 1), value: 0.0 },
      { date: new Date(2025, 2, 1), value: 0.05 },
    ],
  },
  {
    id: 'outlet‑c',
    name: 'Outlet C',
    data: [
      { date: new Date(2025, 0, 1), value: 0.3 },
      { date: new Date(2025, 1, 1), value: 0.25 },
      { date: new Date(2025, 2, 1), value: 0.2 },
    ],
  },
];

/**
 * Comparison page allowing users to select multiple outlets and view their
 * bias scores on a shared timeline. This example uses static data and
 * demonstrates how to display several series on one chart.
 */
export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(seriesData.map(s => s.id));

  // Filter the data based on selected outlets
  const filteredSeries = seriesData.filter(s => selectedIds.includes(s.id));

  return (
    <>
      <Navbar />
      <main className="p-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Porovnanie outletov</h1>
        {/* Simple multi‑select list to choose which outlets to display */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Zvolte si outlet(y):</label>
          <div className="flex flex-wrap gap-2">
            {seriesData.map(series => (
              <label key={series.id} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(series.id)}
                  onChange={e => {
                    setSelectedIds(current =>
                      e.target.checked
                        ? [...current, series.id]
                        : current.filter(id => id !== series.id),
                    );
                  }}
                />
                <span>{series.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow overflow-auto">
          <ChartMultiLine series={filteredSeries} width={800} height={300} />
        </div>
      </main>
    </>
  );
}