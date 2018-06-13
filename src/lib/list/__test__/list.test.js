'use strict';

const List = require('../lib/list');

describe('this will test methods of the list class', () => {
  let theList;

  beforeEach(() => {
    theList = new List();
    theList.push(0, 1, 2, 3, 4, 5);
  });

  afterEach(() => {
    theList = null;
  });

  test('Testing Push, this should add new items to the array', () => {
    expect(theList).toHaveLength(6);
    theList.push(6);
    expect(theList).toHaveLength(7);
    theList.push();
    expect(theList).toHaveLength(7);
    expect(theList[theList.length - 1]).toEqual(6);
    expect(theList.push(7, 8, 9)).toEqual(10);
  });

  test('Testing Map, this should throw an err if empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('Testing Map, this should throw an err if a function in put in', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map('not a function');
    }).toThrow();
  });

  test('Testing Map, this should return a new list', () => {
    const newList = theList.map((num) => {
      return num * 2;
    });
    expect(newList).toHaveLength(theList.length);
    for (let i = 0; i < newList.length; i++) {
      expect(newList[i] / 2).toEqual(theList[i]);
    }
  });

  test('Testing Reduce, this should reduce the elm in the list to one elm with no acc', () => {
    const product = theList.reduce((acc, curr) => {
      return acc * curr;
    });
    expect(product).toEqual(0);
  });

  test('Testing Reduce, this should reduce the elm in the list to one elm while adding 10 acc', () => {
    const sum = theList.reduce((acc, curr) => {
      return acc + curr;
    }, 10);
    expect(sum).toEqual(25);
  });

  test('Testing reduce, this should throw an err if empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.reduce(e => e);
    }).toThrow();
  });

  test('Testing reduce, this should throw an err if a function in put in', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.reduce('not a function');
    }).toThrow();
  });

  test('Testing filter, this should filter out elm that are below 3', () => {
    const newList = theList.filter((item) => {
      return item > 3;
    });
    expect(newList.length).toEqual(2); /*eslint-disable-line*/
  });

  test('Testing filter, this should throw an err if empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.filter(e => e);
    }).toThrow();
  });

  test('Testing filter, this should throw an err if a function in put in', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.filter('not a function');
    }).toThrow();
  });

  test('Testing forEach, this should add 3 to each elm in array', () => {
    const newList = [0, 1, 2, 3, 4, 5];
    theList.forEach((item, i) => {
      expect(theList[i]).toEqual(newList[i]);
    });
  });
  test('Testing forEach, this should throw an err if empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.forEach(e => e);
    }).toThrow();
  });

  test('Testing forEach, this should throw an err if a function in put in', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.forEach('not a function');
    }).toThrow();
  });
});
