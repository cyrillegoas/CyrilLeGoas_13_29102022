import React from 'react';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export function Login() {
  return (
    <Layout bgColor="dark">
      <LoginForm />
    </Layout>
  );
}
