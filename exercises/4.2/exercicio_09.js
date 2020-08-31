let numbers = [];
let number_division = [];
let division = 0;

for (i=1; i<=26; i += 1) {
  division = i -1;
  numbers.push(i);
  number_division = numbers[division] / 2;
  console.log(number_division);
}
