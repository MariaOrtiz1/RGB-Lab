import copyAndPush from './copy-and-push.js';

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 4);
    expect(expected).toEqual(actual);
  });
  
});
