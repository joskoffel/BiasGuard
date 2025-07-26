import React from 'react';
import Link from 'next/link';

/**
 * A simple horizontal navigation bar. It uses Next.js `<Link>` components
 * for client‑side navigation between the dashboard pages. Feel free to
 * extend this component with active link styling or additional UI.
 */
const Navbar: React.FC = () => (
  <nav className="bg-white shadow sticky top-0 z-10">
    <div className="max-w-screen-xl mx-auto px-4 py-3 flex space-x-4">
      <Link href="/" className="hover:underline">
        Dashboard
      </Link>
      <Link href="/compare" className="hover:underline">
        Porovnanie
      </Link>
      <Link href="/reports" className="hover:underline">
        Reporty
      </Link>
      <Link href="/settings" className="hover:underline">
        Nastavenia
      </Link>
    </div>
  </nav>
);

export default Navbar;