let n = 5;
let square = "";

if (n > 1) {
  for (w = 0; w < n; w += 1) { //definindo que largura (w) = n//
    square += "*"; //largura do quadrado = "*" n vezes//
  }
  for (h = 1; h <= n; h += 1) { //definindo que altura (h) = n//
    console.log(square);
  }
}