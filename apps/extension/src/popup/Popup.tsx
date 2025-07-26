import React, { useEffect, useState } from 'react';

/**
 * Popup component for the BiasGuard browser extension. When the user opens
 * the popup it displays the current tab URL and provides a button to
 * analyse the page content for bias. The result is obtained by sending
 * a message to the background service worker, which calls the API route
 * in the dashboard.
 */
const Popup: React.FC = () => {
  const [url, setUrl] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // Retrieve the active tab URL when the popup is opened
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tab = tabs[0];
      if (tab?.url) {
        setUrl(tab.url);
      }
    });
  }, []);

  const analysePage = () => {
    setLoading(true);
    // Extract visible text from the page via the scripting API
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const tab = tabs[0];
      if (!tab?.id) return;
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => document.body.innerText,
        },
        (results) => {
          const text = results?.[0]?.result || '';
          // Send message to background service worker to call API
          chrome.runtime.sendMessage(
            { type: 'FETCH_BIAS', text },
            response => {
              if (response?.score !== undefined) {
                setScore(response.score);
              }
              setLoading(false);
            },
          );
        },
      );
    });
  };

  return (
    <div style={{ padding: '1rem', minWidth: '300px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>BiasGuard</h1>
      <p style={{ fontSize: '0.8rem', wordBreak: 'break-all' }}>{url}</p>
      <button
        onClick={analysePage}
        disabled={loading}
        style={{ marginTop: '0.5rem', padding: '0.4rem 0.8rem', borderRadius: '4px', backgroundColor: '#2563eb', color: '#fff', border: 'none' }}
      >
        {loading ? 'Analyzujem…' : 'Analyzovať zaujatost'}
      </button>
      {score !== null && (
        <div style={{ marginTop: '0.5rem' }}>
          <strong>Bias skóre:</strong> {score.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Popup;