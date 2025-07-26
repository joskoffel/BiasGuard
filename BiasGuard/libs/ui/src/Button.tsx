import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary';
}

/**
 * A reusable button component with support for primary and secondary
 * variants. Additional styles can be passed via the `className` prop.
 */
const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  return (
    <button
      className={clsx('px-4 py-2 rounded transition-colors duration-150', styles, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;