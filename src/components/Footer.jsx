import React from 'react';

export function Footer() {
  return (
    <footer className="pt-8 pb-6 border-t-2 border-[#ccc] text-center">
      Copyright {new Date().getFullYear()} Argent Bank
    </footer>
  );
}
