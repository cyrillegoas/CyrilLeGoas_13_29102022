import React from 'react';

export function Button({
  isSubmit = false,
  variant = 'default',
  text,
  onClick,
  className = '',
}) {
  const variants = {
    default: 'bg-accent text-white border-accent',
    danger: 'bg-red text-white border-red',
  };

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className={`${variants[variant]} p-[10px] font-bold leading-[1.2] text-[0.833rem] border-2 [border-style:outset] active:[border-style:inset] ${className}`}
    >
      {text}
    </button>
  );
}
