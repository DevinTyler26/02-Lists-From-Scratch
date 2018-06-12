const list = require('../lib/list');

describe('testing filter method', () => {
  test('', () => {
    expect(list.add(4, 3)).toEqual(7);
  });
  test('', () => {
    expect(list.add('')).toEqual(null);
  });
});