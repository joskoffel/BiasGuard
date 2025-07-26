import React, { useState } from 'react';

/**
 * The settings page allows users to manage API tokens (e.g. for Twitter) and
 * configure incremental static regeneration (ISR) settings. For brevity,
 * this implementation stores values in local component state. In a real
 * application you would persist these settings to a database or secure
 * storage and apply them in your API routes or fetch functions.
 */
const SettingsPage: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [revalidate, setRevalidate] = useState<number>(86400);

  const saveSettings = () => {
    // TODO: Persist settings to backend or local storage
    alert(`Token saved: ${token}\nRevalidate interval: ${revalidate} seconds`);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nastavenia</h1>
      <div className="max-w-md space-y-4">
        <div>
          <label className="block mb-1" htmlFor="token">
            OAuth token pre API (napr. Twitter)
          </label>
          <input
            id="token"
            type="text"
            value={token}
            onChange={e => setToken(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Zadajte token"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="revalidate">
            Interval revalidácie (s)
          </label>
          <input
            id="revalidate"
            type="number"
            value={revalidate}
            onChange={e => setRevalidate(Number(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          onClick={saveSettings}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          Uložiť nastavenia
        </button>
      </div>
    </main>
  );
};

export default SettingsPage;