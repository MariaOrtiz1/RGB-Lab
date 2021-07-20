const capitalizeAndFilter = (letters) => {
  const newLetters = letters; 
  const filteredLetters = newLetters.filter(item => item[0].toLowerCase() !== 'f');
  const bigLetters = filteredLetters.map(item => item.toUpperCase());
  return bigLetters;
};
    
export default capitalizeAndFilter;
