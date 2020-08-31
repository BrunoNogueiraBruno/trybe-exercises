let numbers = [50, 9, 3, 19, 700, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) { //Segundo número//
  for (let j = 0; j < i; j += 1) { //Primeiro número//

    if (numbers[i] < numbers[j]) { //Bubble sort//

      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;

    }
  }
}

console.log(numbers);