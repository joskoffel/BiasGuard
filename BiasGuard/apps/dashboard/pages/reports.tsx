import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

/**
 * Page for generating PDF reports. At the moment this page collects text
 * input from the user and displays a placeholder action when the form is
 * submitted. In a production implementation you could use jsPDF or a
 * server‑side function to generate a customised report.
 */
export default function ReportsPage() {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    // TODO: implement PDF generation using jsPDF
    alert('Generovanie PDF zatiaľ nie je implementované.');
  };

  return (
    <>
      <Navbar />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Generovanie reportu</h1>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Zadajte obsah reportu..."
          rows={6}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generovať PDF
        </button>
      </main>
    </>
  );
}