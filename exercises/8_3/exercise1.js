    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arrayOfArrays) {
  //concatenar as três arrays em uma só
  const justOneArray = arrayOfArrays.reduce((a, b) => {
    return a.concat(b);
  });
  console.log(justOneArray);
  // baseado em: https://stackoverflow.com/questions/29158723/javascript-flattening-an-array-of-arrays-of-objects
}

flatten(arrays)
// assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);