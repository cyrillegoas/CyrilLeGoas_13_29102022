import React from 'react';
import { Layout } from '../components/Layout';
import { Greeting } from '../components/Greetings';
import { AccountList } from '../components/AccountList';

export function User() {
  return (
    <Layout bgColor="dark">
      <Greeting />
      <AccountList />
    </Layout>
  );
}
