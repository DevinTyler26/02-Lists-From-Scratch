const forEach = require('../lib/forEach');

describe('testing filter method', () => {
  test('', () => {
    expect(forEach.add(4, 3)).toEqual(7);
  });
  test('', () => {
    expect(forEach.add('')).toEqual(null);
  });
});