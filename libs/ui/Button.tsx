import React from 'react';

export interface ButtonProps {
  /**
   * Content to be rendered inside the button
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * A simple reusable button component. This component lives in the `libs/ui` package
 * so it can be shared across both the dashboard and extension projects. You can
 * enhance this component with theming, icons or additional states as the product
 * evolves.
 */
export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors ${
        className || ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;