import getName from './get-name.js';

describe('getName', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expected = 'spot';
    const actual = getName(spot);
    expect(expected).toEqual(actual);
  });

});

