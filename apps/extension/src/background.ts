// The background service worker listens for messages from the popup or
// content script and proxies requests to the BiasGuard API. This keeps
// sensitive API calls out of the page context and allows you to add
// authentication headers if needed.

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'FETCH_BIAS') {
    fetch('/api/infer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: request.text }),
    })
      .then(res => res.json())
      .then(data => sendResponse(data))
      .catch(err => sendResponse({ error: err.message }));
    return true; // Keep the message channel open for async response
  }
});