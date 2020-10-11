const assert = require('assert')

const myList = [1, 2, 3]

// a função swap deve retornar um novo array com primeiro e terceiro elementos trocados
// TUDO DEVE SER FEITO EM UMA LINHA SÓ!!!

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)