import React from 'react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <section className="flex flex-col md:flex-row">
      <h2 className="sr-only">Features</h2>
      <FeatureCard
        image={{ src: '/icons/icon-chat.png', alt: 'Chat Icon' }}
        title="You are our #1 priority"
        desc="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureCard
        image={{ src: '/icons/icon-money.png', alt: 'Money Icon' }}
        title="More savings means higher rates"
        desc="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureCard
        image={{ src: '/icons/icon-security.png', alt: 'Security Icon' }}
        title="Security you can trust"
        desc="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}
