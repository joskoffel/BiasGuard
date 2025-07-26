import React from 'react';
import dynamic from 'next/dynamic';
import { format } from 'date-fns';
import { sk } from 'date-fns/locale';

// Dynamically import the ChartLine component because it relies on D3,
// which should only run on the client side. The `ssr: false` option
// ensures that this component is not rendered during server side rendering.
const ChartLine = dynamic(() => import('@/components/ChartLine'), { ssr: false });

/**
 * Example data to feed into the line chart. In a real application
 * this data would be fetched from your back‑end API or computed from
 * live articles. Values are intentionally simplified for demonstration.
 */
const sampleData = [
  { date: new Date(2025, 0, 1), value: 0.2 },
  { date: new Date(2025, 1, 1), value: -0.1 },
  { date: new Date(2025, 2, 1), value: 0.3 },
  { date: new Date(2025, 3, 1), value: 0.05 },
  { date: new Date(2025, 4, 1), value: 0.15 },
];

const HomePage: React.FC = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">BiasGuard Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {/* KPI Cards – these could be separate components in the `components` directory */}
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold">Priemerné skóre zaujatosti</h2>
          <p className="text-2xl mt-2 font-bold">0.12</p>
        </div>
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold">Celkový počet článkov</h2>
          <p className="text-2xl mt-2 font-bold">120</p>
        </div>
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold">Posledná aktualizácia</h2>
          <p className="text-2xl mt-2 font-bold">{format(new Date(), 'd. M. yyyy', { locale: sk })}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Časová línia zaujatosti</h2>
        <ChartLine data={sampleData} width={700} height={350} />
      </section>

      {/* Additional sections like top lists or word clouds can be inserted here */}
    </main>
  );
};

export default HomePage;