
// Intancie um PROMISE | array com dez aleatórios de 1 a 50 (todos ao quadrado)
// If some de todos inferior a 8000 a promise deve ser resolvida
// Else ela deve ser rejeitada
// Acrescentar then e catch com qualquer coisa

const getRandomNum = () => {
  const newArr = [];
  for (i = 1; i <= 50; i += 1) {
    const randomNum = Math.floor(Math.random() * 50);
    newArr.push(randomNum * randomNum);
  }
  return newArr.reduce((acc, cur) => acc + cur);
}

const fetchPromise = () => {
  const xablau = new Promise((resolve, reject) => {
    let arrNum = getRandomNum();
    (arrNum > 8000) ? resolve(console.log(`Soma: ${arrNum}`)) : reject(`error: soma maior que 8000`);
  });
  xablau
  .then(console.log('Xablau'))
  .catch(console.log('xablauzão'));
}

fetchPromise();