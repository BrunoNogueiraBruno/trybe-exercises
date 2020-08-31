let numbers = [50, 9, 3, 19, 700, 8, 100, 2, 35, 27];
let firstNumber = "";
let secondNumber = "";
let biggestNumber = "";

for (i = 0; i < numbers.length; i += 1) {
  firstNumber = numbers[i];

  for (j = 1; j < numbers.length; j += 1) {
    secondNumber = numbers[j];

    if (biggestNumber > firstNumber && biggestNumber > secondNumber) {
      
    } else {
      if (firstNumber > secondNumber) {
        biggestNumber = firstNumber;
  
      } else {
        biggestNumber = secondNumber;
      }
    }
  }
}

console.log("o maior número é " + biggestNumber);