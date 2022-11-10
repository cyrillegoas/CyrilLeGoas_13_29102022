import React from 'react';
import { Layout } from '../components/Layout';
import { Greeting } from '../components/Greetings';

export function User() {
  return (
    <Layout bgColor="dark">
      <Greeting />
    </Layout>
  );
}
