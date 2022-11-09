import React from 'react';

export function Hero() {
  return (
    <section className="bg-[url('/images/bank-tree_w_1650.jpg')] bg-[0_-50px] md:bg-[0%_33%] bg-cover bg-no-repeat h-[300px] md:h-[400px] flex justify-center md:justify-end items-start md:items-center pt-8 md:pt-0 md:pr-[82px]">
      <h2 className="sr-only">Promoted Content</h2>
      <div className="bg-white p-8 mx-4 w-[264px] md:w-[364px]">
        <p className="font-bold md:text-[1.5rem]">No fees.</p>
        <p className="font-bold md:text-[1.5rem]">No minimum deposit.</p>
        <p className="font-bold md:text-[1.5rem]">High interest rates.</p>
        <p className="text-[0.9rem] mt-[0.9rem] md:text-[1.2rem]">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </section>
  );
}
