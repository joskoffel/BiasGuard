import React from 'react';

/**
 * Placeholder component for a word cloud visualisation. In the future you
 * could integrate a D3 or Canvas implementation to display the most
 * frequently used words in an outlet's articles. For now this component
 * simply renders a container with a message.
 */
const WordCloud: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <p className="text-gray-500">Word cloud visualization coming soon…</p>
    </div>
  );
};

export default WordCloud;