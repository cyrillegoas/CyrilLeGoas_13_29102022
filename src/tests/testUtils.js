import renderer from 'react-test-renderer';
import { expect } from 'vitest';

export function getComponentTree(component) {
  const result = renderer.create(component).toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result;
}
