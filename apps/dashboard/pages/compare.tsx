import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ChartLine = dynamic(() => import('@/components/ChartLine'), { ssr: false });

/**
 * Comparison page allowing the user to select multiple outlets and compare
 * their bias over time. This simplified example uses a multi‑select
 * element with static options and generates mock data based on the
 * selections.
 */
const ComparePage: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const outlets = ['outlet1', 'outlet2', 'outlet3'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setSelected(options);
  };

  // Generate mock data for each selected outlet
  const series = selected.map(outlet => ({
    id: outlet,
    data: [
      { date: new Date(2025, 0, 1), value: Math.random() * 2 - 1 },
      { date: new Date(2025, 1, 1), value: Math.random() * 2 - 1 },
      { date: new Date(2025, 2, 1), value: Math.random() * 2 - 1 },
    ],
  }));

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Porovnanie médií</h1>
      <label className="block mb-2" htmlFor="outletSelect">
        Vyberte médiá na porovnanie:
      </label>
      <select
        id="outletSelect"
        multiple
        value={selected}
        onChange={handleChange}
        className="w-full md:w-1/2 border rounded p-2 mb-6"
      >
        {outlets.map(outlet => (
          <option key={outlet} value={outlet}>
            {outlet}
          </option>
        ))}
      </select>
      {series.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Porovnávací graf</h2>
          {/* Render a ChartLine for each selected outlet */}
          {series.map(s => (
            <div key={s.id} className="mb-4">
              <h3 className="font-medium mb-1">{s.id}</h3>
              <ChartLine data={s.data} width={700} height={300} />
            </div>
          ))}
        </div>
      ) : (
        <p>Vyberte aspoň jedno médium na zobrazenie grafu.</p>
      )}
    </main>
  );
};

export default ComparePage;