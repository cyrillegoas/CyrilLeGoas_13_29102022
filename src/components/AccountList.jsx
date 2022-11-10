import React from 'react';
import { AccountDetails } from './AccountDetails';

export function AccountList() {
  return (
    <section className="flex flex-col items-center gap-8 mb-8">
      <h2 className="sr-only">Accounts</h2>
      <AccountDetails
        account={{
          name: 'Argent Bank Checking',
          id: 'x8349',
          balance: '2,082.79',
          balanceStatus: 'Available Balance',
        }}
      />
      <AccountDetails
        account={{
          name: 'Argent Bank Savings',
          id: 'x6712',
          balance: '10,928.42',
          balanceStatus: 'Available Balance',
        }}
      />
      <AccountDetails
        account={{
          name: 'Argent Bank Credit Card',
          id: 'x8349',
          balance: '184.30',
          balanceStatus: 'Current Balance',
        }}
      />
    </section>
  );
}
