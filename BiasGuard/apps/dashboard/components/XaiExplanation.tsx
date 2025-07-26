import React from 'react';

export interface ExplanationProps {
  /** Free‑form explanatory text or HTML produced by the ML model */
  explanation: string;
}

/**
 * Component for displaying an explainability summary returned from the bias
 * inference model. In the future this could include interactive SHAP
 * visualisations or highlighted text. For now it simply renders the
 * provided explanation string.
 */
const XaiExplanation: React.FC<ExplanationProps> = ({ explanation }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-2">XAI vysvetlenie</h3>
      <p className="text-sm text-gray-700 whitespace-pre-line">{explanation}</p>
    </div>
  );
};

export default XaiExplanation;