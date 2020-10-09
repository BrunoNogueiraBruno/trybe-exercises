const assert = require("assert");

const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
];

// escreva filterPeople abaixo
const filterPeople = (people) => {
  const newObj = [];
  people.forEach((objects) => {
    const { name, bornIn, nationality } = objects;
    if (bornIn > 1900 && bornIn < 2000) {
      if (nationality === "Australian") {
        newObj.push({
          name,
          bornIn,
          nationality,
        });
      }
    }
  });
  return newObj;
};

const filteredPeople = filterPeople(people);

assert.deepEqual(filteredPeople[0], {
  name: "Nicole",
  bornIn: 1992,
  nationality: "Australian",
});
assert.deepEqual(filteredPeople[1], {
  name: "Toby",
  bornIn: 1901,
  nationality: "Australian",
});
