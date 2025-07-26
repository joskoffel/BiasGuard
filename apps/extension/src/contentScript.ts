// The content script can inject UI elements into the web page to display
// bias scores. This example defines a function for adding a badge, which
// you could call after receiving a message from the background script.

// Insert a small badge into the bottom corner of the page showing the bias score.
export function insertBiasBadge(score: number) {
  const existing = document.getElementById('biasguard-badge');
  if (existing) {
    existing.textContent = `Bias: ${score.toFixed(2)}`;
    return;
  }
  const badge = document.createElement('div');
  badge.id = 'biasguard-badge';
  badge.textContent = `Bias: ${score.toFixed(2)}`;
  badge.style.position = 'fixed';
  badge.style.bottom = '10px';
  badge.style.right = '10px';
  badge.style.backgroundColor = '#fff';
  badge.style.color = '#000';
  badge.style.border = '1px solid #ccc';
  badge.style.padding = '4px 8px';
  badge.style.borderRadius = '4px';
  badge.style.zIndex = '2147483647';
  document.body.appendChild(badge);
}