    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA(listOfNames) {
  // retornar quantos "a" (maiusculos ou minusculos) aparecem nos nomes do array
  const result = listOfNames.reduce((numberOfA, eachName) => {
    const arrayOfLengths = eachName.match(/A/gi).length;
    numberOfA += arrayOfLengths;

    return numberOfA;
  }, 0);

  return result;
}

assert.deepEqual(containsA(names), 20);