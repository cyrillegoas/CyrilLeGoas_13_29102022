import React from 'react';
import { test, expect, describe } from 'vitest';
import { getComponentTree } from './testUtils';
import { Footer } from '../components/Footer';

describe('footer', () => {
  const tree = getComponentTree(<Footer />);
  const year = new Date().getFullYear();
  const expectedCopyright = `Copyright ${year} Argent Bank`;

  test('to be a footer element', () => {
    expect(tree.type).toBe('footer');
  });

  test('to be not be empty', () => {
    expect(tree.children).not.toBeNull();
  });

  test('to not have a nested element', () => {
    tree.children.forEach((child) => {
      expect(child).toBeTypeOf('string');
    });
  });

  test('to have the correct syntax', () => {
    const copyright = tree.children.join('');
    expect(copyright).toBe(expectedCopyright);
  });
});
