import React from 'react';
import dynamic from 'next/dynamic';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';

// Dynamically import the ChartLine component because it relies on D3,
// which should only run on the client side. The `ssr: false` option
// ensures that this component is not rendered during server side rendering.
const ChartLine = dynamic(() => import('@/components/ChartLine'), { ssr: false });

// Example data to feed into the line chart. In a real application
// this data would be fetched from your back‑end API or computed from
// live articles. Values are intentionally simplified for demonstration.
const sampleData = [
  { date: new Date(2025, 0, 1), value: 0.2 },
  { date: new Date(2025, 1, 1), value: -0.1 },
  { date: new Date(2025, 2, 1), value: 0.3 },
  { date: new Date(2025, 3, 1), value: 0.05 },
  { date: new Date(2025, 4, 1), value: 0.15 },
];

/**
 * Home page for the BiasGuard dashboard. It lays out key performance
 * indicators in a responsive grid and renders a line chart of bias scores
 * over time. Additional sections such as top lists or word clouds can be
 * inserted below the chart.
 */
const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="p-8 space-y-8">
        <h1 className="text-3xl font-bold mb-4">BiasGuard Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Priemerné skóre zaujatosti" value="0.12" />
          <Card title="Celkový počet článkov" value="120" />
          <Card title="Posledná aktualizácia" value={new Date().toLocaleDateString('sk-SK')} />
        </div>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Časová línia zaujatosti</h2>
          <div className="bg-white p-4 rounded shadow overflow-auto">
            {/* Provide explicit width/height to the chart; wrap in a div to allow horizontal scrolling on small screens */}
            <ChartLine data={sampleData} width={800} height={300} />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;