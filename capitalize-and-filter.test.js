import capitalizeAndFilter from './capitalize-and-filter.js';

describe('capitalizeAndFilter', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
    const letters = ['a', 'c', 'd', 'f'];
    const expected = ['A', 'C', 'D'];
    const actual = capitalizeAndFilter(letters);
    expect(expected).toEqual(actual);
  });
  
});

