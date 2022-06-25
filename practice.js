// // 3. Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // Але рахуватись мають лише позитивні числа!!!

const positiveSum = arr => {
  return arr.reduce((acc, element) => {
    if (element > 0) {
      return acc + element;
    }
    return acc;
    // console.log('Аккумулятор: ', acc);
    // console.log('элемент: ', element);
  });
};
console.log(positiveSum([0, -3, 5, 7]));
// positiveSum([2, 4, 6, 8]); // 20
positiveSum([0, -3, 5, 7]); // 12
