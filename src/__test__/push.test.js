const push = require('../lib/push');

describe('testing filter method', () => {
  test('', () => {
    expect(push.add(4, 3)).toEqual(7);
  });
  test('', () => {
    expect(push.add('')).toEqual(null);
  });
});