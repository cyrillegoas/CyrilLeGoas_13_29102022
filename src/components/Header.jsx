import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from './UserIcon';

export function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-[0.3125rem] w-screen">
      <Link to="/">
        <img
          src="/logos/argentBankLogo.png"
          alt="Argent Bank Logo"
          className="w-[200px]"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <nav className="mr-2">
        <Link to="/login" className="flex items-center gap-2 font-bold">
          <UserIcon />
          Sign In
        </Link>
      </nav>
    </header>
  );
}
