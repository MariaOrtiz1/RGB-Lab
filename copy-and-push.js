const copyAndPush = (Array, pushed) => {
  const newArray = Array; 
  newArray.push(pushed);
  return newArray;
};
  
export default copyAndPush;
