let valorCusto = 1; // Custo de produção em reais //
let valorVenda = 3; // Preço para consumidor final //

// Quanto de lucro a empresa terá ao vender 1000 desses produtos? //
if ( valorCusto < 0 || valorVenda < 0 ) {
  console.log("Erro!");
} else {
  let valorCustoTotal = valorCusto * 1.2;
  let valorLucroMil = (valorVenda - valorCustoTotal) * 1000;
  console.log(valorLucroMil);
};