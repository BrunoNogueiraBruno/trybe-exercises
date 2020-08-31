let numbers = [51, 90, 3, 18, 70, 9, 100, 29, 35, 27];
let numberAnalysis = "";
let numberIsOdd = 0;

for (i = 0; i < numbers.length; i += 1) {
  numberAnalysis = numbers[i] % 2;
  if (numberAnalysis != 0) {
    numberIsOdd += 1;
    console.log(numberIsOdd + " números ímpares");
  }
}

if (numberIsOdd > 0) {
  console.log("O array tem " + numberIsOdd + " número(s) ímpares!");
} else {
  console.log("Nenhum valor ímpar encontrado!");
}