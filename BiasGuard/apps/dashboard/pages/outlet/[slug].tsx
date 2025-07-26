import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const ChartLine = dynamic(() => import('@/components/ChartLine'), { ssr: false });

// Placeholder data for the outlet detail page. In a real application you
// would fetch the bias score history and other analytics for the given slug.
const sampleData = [
  { date: new Date(2025, 0, 1), value: 0.1 },
  { date: new Date(2025, 1, 1), value: 0.0 },
  { date: new Date(2025, 2, 1), value: 0.25 },
  { date: new Date(2025, 3, 1), value: 0.15 },
  { date: new Date(2025, 4, 1), value: 0.05 },
];

/**
 * Detail page for a single news outlet. The slug from the URL is used to
 * customise the page title. Additional charts such as word clouds and
 * explainability panels could be rendered here.
 */
export default function OutletDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Navbar />
      <main className="p-8 space-y-6">
        <h1 className="text-2xl font-bold">Outlet detail: {slug}</h1>
        <section>
          <h2 className="text-xl font-semibold mb-2">Bias over time</h2>
          <div className="bg-white p-4 rounded shadow overflow-auto">
            <ChartLine data={sampleData} width={800} height={300} />
          </div>
        </section>
        {/* TODO: Insert word cloud, data table and explainability panels */}
      </main>
    </>
  );
}