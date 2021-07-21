import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const quotes = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const body = await quotes.json();
  const randomBody = body[Math.floor(Math.random() * body.length)];
  return randomBody;
};

export default fetchQuotes;
