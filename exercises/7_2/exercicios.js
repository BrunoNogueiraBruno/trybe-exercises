//Parte I
// const obj = {};

// function createObj (obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// createObj (obj, 'name', 'Jefferson');

//Parte II
// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// function readObj (obj) {
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);

//   for (let index = 0; index < keys.length; index += 1) {
//     console.log(`Nome da Habilidade: ${keys[index]}, Nível: ${values[index]}`);
//   }
// }

// readObj (student);

// Parte IV

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// function createObj (obj, key, value) {
//   obj[key] = value;
//   console.log(lesson2);
// }

// createObj (lesson2, 'turno', 'manhã');

// function listKeys (obj) {
//   let showKeys = Object.keys(obj);
//   console.log(showKeys);
// }

// listKeys (lesson2);

// function objLength (obj) {
//   let objLength = Object.keys(obj).length;
//   console.log(objLength);
// }

// objLength (lesson2);

// function listValues (obj) {
//   let showValues = Object.values(obj);
//   console.log(showValues);
// }

// listValues (lesson2);

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// function numberOfStudents (lesson1, lesson2, lesson3) {
//   let allStudents =  lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
//   console.log(allStudents);
// }

// numberOfStudents (lesson1, lesson2, lesson3);

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);