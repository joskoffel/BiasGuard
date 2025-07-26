import React from 'react';
import Link from 'next/link';

/**
 * Vertical sidebar navigation. On larger screens this can be displayed on
 * the left side of the dashboard. The sidebar is hidden on smaller
 * screens. Currently unused but provided as a building block for future
 * layouts.
 */
const Sidebar: React.FC = () => (
  <aside className="hidden md:block w-60 bg-white border-r p-4 space-y-2">
    <h2 className="text-xl font-bold mb-4">BiasGuard</h2>
    <nav className="flex flex-col space-y-1">
      <Link href="/" className="hover:underline">Dashboard</Link>
      <Link href="/compare" className="hover:underline">Porovnanie</Link>
      <Link href="/reports" className="hover:underline">Reporty</Link>
      <Link href="/settings" className="hover:underline">Nastavenia</Link>
    </nav>
  </aside>
);

export default Sidebar;