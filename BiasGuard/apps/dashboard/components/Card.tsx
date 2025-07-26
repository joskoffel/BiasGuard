import React from 'react';

export interface CardProps {
  /** Title or label for the KPI */
  title: string;
  /** Numeric or textual value to display */
  value: string | number;
}

/**
 * A simple card component for displaying a key performance indicator. Cards
 * are responsive and can be composed in a grid layout. Use this component
 * throughout the dashboard to maintain a consistent look and feel.
 */
const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col justify-between">
      <span className="text-sm text-gray-500 mb-1">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
};

export default Card;