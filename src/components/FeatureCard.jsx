import React from 'react';

export function FeatureCard({ image, title, desc }) {
  return (
    <div className="flex-1 flex items-center flex-col p-10 text-center">
      <img
        src={image.src}
        alt={image.alt}
        className="w-[152px] p-4 rounded-full border-[10px] border-accent"
      />
      <h3 className="text-[1.25rem] font-bold mb-2 mt-5 text-black">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
