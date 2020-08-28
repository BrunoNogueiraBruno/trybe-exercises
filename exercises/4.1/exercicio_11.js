let salarioBruto = 1800.50;
let aliquotaINSS;
let aliquotaIR;

//Calculando INSS//
if ( salarioBruto <= 1556.94 ) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556,95 && salarioBruto <= 2594.92 ) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.92 && salarioBruto <= 5189.82 ) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
};

//Calculando IR//
if ( salarioBruto <= 1903.98 ) {
  aliquotaIR = 0;
} else if (salarioBruto >= 1903.98 && salarioBruto <= 2826.65 ) {
  aliquotaIR = (salarioBruto * 0.075) - 142.80;
} else if (salarioBruto >= 2826.65 && salarioBruto <= 3751.05 ) {
  aliquotaIR = (salarioBruto * 0.15) - 354.80;
} else if (salarioBruto >= 3751.05 && salarioBruto <= 4664.68 ) {
  aliquotaIR = (salarioBruto * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBruto * 0.275) - 869.36;
};

let salarioLiquido = salarioBruto - (aliquotaINSS + aliquotaIR);
console.log(salarioLiquido);