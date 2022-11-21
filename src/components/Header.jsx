import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserIcon } from './UserIcon';
import { logout } from '../actions';

export function Header() {
  const { firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-between px-5 py-[0.3125rem] flex-wrap xs:flex-nowrap">
      <Link to="/">
        <img
          src="/logos/argentBankLogo.png"
          alt="Argent Bank Logo"
          className="w-[200px]"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <nav className="mr-2 flex gap-2 basis-full justify-end xs:basis-auto">
        {firstName ? (
          <>
            <Link to="/profile" className="flex items-center gap-2 font-bold">
              <UserIcon />
              {firstName}
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 font-bold"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <img src="/icons/icon-logout.svg" alt="" className="w-[16px]" />
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="flex items-center gap-2 font-bold">
            <UserIcon />
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
}
