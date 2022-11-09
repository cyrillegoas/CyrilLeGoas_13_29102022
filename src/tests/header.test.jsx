import React from 'react';
import { test, expect, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { getComponentTree } from './testUtils';
import { Header } from '../components/Header';

describe('header', () => {
  // a router was added due to the nav using react-router Link components
  const tree = getComponentTree(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  test('to be a header element', () => {
    expect(tree.type).toBe('header');
  });

  test('to be have 2 children', () => {
    expect(tree.children.length).toBe(2);
  });

  const [logo, nav] = tree.children;

  describe('logo', () => {
    test('to be an anchor element', () => {
      expect(logo.type).toBe('a');
    });

    test('to have 2 children', () => {
      expect(logo.children.length).toBe(2);
    });

    const [image, title] = logo.children;

    describe('image', () => {
      test('to be an img element', () => {
        expect(image.type).toBe('img');
      });

      test('to have an alt text on the image', () => {
        expect(image.props.alt).not.toBeUndefined();
        expect(image.props.alt.length).not.toBe(0);
      });
    });

    describe('title', () => {
      test('to be an h1 element', () => {
        expect(title.type).toBe('h1');
      });

      test('to have a screen reader only class', () => {
        expect(title.props.className).toBe('sr-only');
      });
    });
  });

  describe('nav', () => {
    test('to be a nav element', () => {
      expect(nav.type).toBe('nav');
    });

    test('to not be empty', () => {
      expect(nav.children).not.toBeNull();
    });

    test('to only have anchor element children', () => {
      nav.children.forEach((child) => {
        expect(child.type).toBe('a');
      });
    });
  });
});
