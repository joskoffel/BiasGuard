import React from 'react';
import clsx from 'clsx';

export interface ModalProps {
  /** Controls whether the modal is displayed */
  open: boolean;
  /** Called when the user clicks on the backdrop or close button */
  onClose: () => void;
  /** Modal content */
  children: React.ReactNode;
}

/**
 * A reusable modal component. It renders its children in a centred overlay
 * when `open` is true. The modal closes when the backdrop is clicked
 * or when the close button is pressed.
 */
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded shadow-lg p-4 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;