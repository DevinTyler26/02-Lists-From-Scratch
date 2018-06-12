const map = require('../lib/map');

describe('testing filter method', () => {
  test('', () => {
    expect(map.add(4, 3)).toEqual(7);
  });
  test('', () => {
    expect(map.add('')).toEqual(null);
  });
});