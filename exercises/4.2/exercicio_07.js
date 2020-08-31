let numbers = [50, 9, 3, 19, 700, 8, 100, 2, 35, 27];
let firstNumber = "";
let secondNumber = "";
let smallestNumber;

for (i = 0; i < numbers.length; i += 1) {
  firstNumber = numbers[i];

  for (j = 1; j < numbers.length; j += 1) {
    secondNumber = numbers[j];

    if (smallestNumber < firstNumber && smallestNumber < secondNumber) {
    } else {
      if (firstNumber < secondNumber) {
        smallestNumber = firstNumber;
      } else {
        smallestNumber = secondNumber;
      }
    }

  }
}

console.log("o menor número é " + smallestNumber);