import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  toggle: any;
}

export const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono">
      <Link to="/" className="pl-8 color-red">
        AVOCADOS
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/menu" className="p-4">
          Menu
        </Link>
      </div>
    </nav>
  );
};
