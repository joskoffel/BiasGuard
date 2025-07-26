/* eslint-disable no-restricted-globals */
/**
 * Background service worker for the BiasGuard extension. It listens for
 * messages from the popup or content scripts and forwards inference
 * requests to the dashboard API. This file is written in TypeScript; you
 * should compile it to JavaScript as part of your build step.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'FETCH_BIAS') {
    // Forward the text to the dashboard API hosted on your domain or on
    // localhost during development. Adjust the URL as needed.
    fetch('https://your-dashboard-domain/api/infer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: request.text }),
    })
      .then(res => res.json())
      .then(data => sendResponse({ score: data.score }))
      .catch(err => sendResponse({ error: err.message }));
    return true; // keep message channel open for async response
  }
});