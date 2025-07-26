import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React from 'react';

const ChartLine = dynamic(() => import('@/components/ChartLine'), { ssr: false });

/**
 * Detail page for a single news outlet. The slug is extracted from the
 * route parameter and used to fetch data (not implemented here). It
 * demonstrates how to set up dynamic routes in Next.js.
 */
const OutletDetailPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder data for the chart
  const data = [
    { date: new Date(2025, 0, 1), value: 0.1 },
    { date: new Date(2025, 1, 1), value: 0.3 },
    { date: new Date(2025, 2, 1), value: -0.2 },
  ];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detail média: {slug}</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Časový graf</h2>
        <ChartLine data={data} width={700} height={300} />
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">WordCloud</h2>
        {/* TODO: Insert WordCloud component here */}
        <p>Vizualizácia slovných frekvencií bude implementovaná neskôr.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Vysvetlenie XAI</h2>
        {/* TODO: Insert XAI explanation panel */}
        <p>XAI panel so SHAP atribúciami bude pridaný v budúcej verzii.</p>
      </section>
    </main>
  );
};

export default OutletDetailPage;