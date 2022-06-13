function getEvenNumbers(start, end) {
  // Change code below this line
  const evenNumberArray = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumberArray.push(i);
    }
  }
  console.log(evenNumberArray);
  return evenNumberArray;

  // Change code above this line
}

getEvenNumbers(3, 11);
