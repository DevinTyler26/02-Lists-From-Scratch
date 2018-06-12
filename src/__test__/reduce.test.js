const reduce = require('../lib/reduce');

describe('testing filter method', () => {
  test('', () => {
    expect(reduce.add(4, 3)).toEqual(7);
  });
  test('', () => {
    expect(reduce.add('')).toEqual(null);
  });
});