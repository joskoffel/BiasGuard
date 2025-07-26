import React, { useEffect, useState } from 'react';

/**
 * Popup component displayed when the user clicks the BiasGuard icon in the
 * browser toolbar. It queries the active tab, sends a message to the
 * background service worker to obtain a bias score, and renders the
 * result. During development you may need to adjust permissions in the
 * manifest to allow access to tabs.
 */
const Popup: React.FC = () => {
  const [url, setUrl] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Query the active tab when the popup mounts
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tab = tabs[0];
      if (tab?.url) {
        setUrl(tab.url);
        // Send a message to the background script to fetch a bias score
        chrome.runtime.sendMessage({ type: 'FETCH_BIAS', text: tab.url }, response => {
          if (chrome.runtime.lastError) {
            setError(chrome.runtime.lastError.message);
            return;
          }
          if (response?.error) {
            setError(response.error);
          } else if (typeof response?.score === 'number') {
            setScore(response.score);
          } else {
            setError('Unexpected response');
          }
        });
      }
    });
  }, []);

  return (
    <div className="p-4 w-64 space-y-2">
      <h1 className="font-bold text-lg">BiasGuard</h1>
      <p className="text-xs text-gray-600 break-all">{url}</p>
      {error && <p className="text-red-500 text-sm">Chyba: {error}</p>}
      {score !== null ? (
        <p className="text-sm">Bias skóre: <span className="font-semibold">{score}</span></p>
      ) : !error ? (
        <p className="text-sm text-gray-500">Načítavam…</p>
      ) : null}
    </div>
  );
};

export default Popup;