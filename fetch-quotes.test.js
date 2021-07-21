import fetchQuotes from './fetch-quotes.js';

describe('fetchQuotes', () => {
  it('Uses the Futurama Quote API http://futuramaapi.herokuapp.com to return a single quote with the format', async () => {
    const expected = await fetchQuotes();
    const actual = expect.any(Object);
    expect(expected).toEqual(actual);
  });

});
