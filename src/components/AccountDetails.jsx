import React from 'react';
import { Button } from './Button';

export function AccountDetails({ account }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center border border-black bg-white w-[80%] p-6 ">
      <div>
        <h3>
          {account.name} ({account.id})
        </h3>
        <p className="text-[2.5rem] font-bold">${account.balance}</p>
        <p>{account.balanceStatus}</p>
      </div>
      <div>
        <Button
          text="View transactions"
          onClick={() => console.log('to transactions')}
          className="w-full text-[1.1rem]"
        />
      </div>
    </div>
  );
}
