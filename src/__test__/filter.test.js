const filter = require('../lib/filter');

describe('testing filter method', () => {
  test('', () => {
    expect(filter.add(4, 3)).toEqual(7);
  });
  test('', () => {
    expect(filter.add('')).toEqual(null);
  });
});