//Parte I
// const obj = {};

// function createObj (obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// createObj (obj, 'name', 'Jefferson');

//Parte II
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

function readObj (obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  for (let index = 0; index < keys.length; index += 1) {
    console.log(`Nome da Habilidade: ${keys[index]}, Nível: ${values[index]}`);
  }
}

readObj (student);