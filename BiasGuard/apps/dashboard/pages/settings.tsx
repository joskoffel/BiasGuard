import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

/**
 * Settings page for managing configuration such as OAuth tokens. This
 * implementation persists the token in `localStorage`; in a real
 * application you may want to store it securely via your back‑end.
 */
export default function SettingsPage() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Load any saved token when the page mounts
    const saved = typeof window !== 'undefined' ? localStorage.getItem('oauthToken') : null;
    if (saved) setToken(saved);
  }, []);

  const saveToken = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('oauthToken', token);
    }
    alert('Token uložený.');
  };

  return (
    <>
      <Navbar />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Nastavenia</h1>
        <label className="block">
          <span className="text-sm font-medium">OAuth token</span>
          <input
            type="text"
            value={token}
            onChange={e => setToken(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
            placeholder="Zadajte token"
          />
        </label>
        <button
          onClick={saveToken}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Uložiť
        </button>
      </main>
    </>
  );
}