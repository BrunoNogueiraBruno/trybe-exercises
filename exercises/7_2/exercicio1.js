const obj = {};

function createObj (obj, key, value) {
  obj[key] = value;
  return obj;
}

createObj (obj, 'name', 'Jefferson');