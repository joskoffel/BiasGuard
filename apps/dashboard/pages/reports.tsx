import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { jsPDF } from 'jspdf';

interface ReportFormInputs {
  title: string;
  description: string;
  from: string;
  to: string;
}

/**
 * The reports page allows users to generate PDF reports summarising
 * bias statistics over a specified time period. This example uses
 * react‑hook‑form for form handling and jsPDF to create a simple PDF.
 */
const ReportsPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ReportFormInputs>();

  const onSubmit: SubmitHandler<ReportFormInputs> = data => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(data.title || 'Report', 10, 20);
    doc.setFontSize(12);
    doc.text(`Period: ${data.from} – ${data.to}`, 10, 30);
    doc.text(data.description || '', 10, 40);
    // TODO: add charts/tables to the PDF
    doc.save('biasguard-report.pdf');
    reset();
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Generovanie reportu</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1" htmlFor="title">
            Názov reportu
          </label>
          <input
            id="title"
            className="w-full border rounded p-2"
            {...register('title')}
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="description">
            Popis
          </label>
          <textarea
            id="description"
            className="w-full border rounded p-2"
            rows={4}
            {...register('description')}
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1" htmlFor="from">
              Od
            </label>
            <input
              id="from"
              type="date"
              className="w-full border rounded p-2"
              {...register('from', { required: true })}
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1" htmlFor="to">
              Do
            </label>
            <input
              id="to"
              type="date"
              className="w-full border rounded p-2"
              {...register('to', { required: true })}
            />
          </div>
        </div>
        <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white">
          Vygenerovať PDF
        </button>
      </form>
    </main>
  );
};

export default ReportsPage;