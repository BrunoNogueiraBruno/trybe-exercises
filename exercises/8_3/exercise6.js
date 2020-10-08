    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students) {
  let newArray = [];
  students.map((student, index) => {
    newArray.push({
      name: student,
      average: (notas[index].reduce((acc, curr) => acc + curr, 0) / notas[index].length),
    });
  });
  return newArray;
};

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(alunos), expected);