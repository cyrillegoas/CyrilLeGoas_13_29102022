import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children, bgColor = 'light' }) {
  return (
    <>
      <Header />
      <main
        className={`flex-1 ${bgColor === 'dark' ? 'bg-dark' : 'bg-current'}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
