import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Features } from '../components/Featues';

export function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
