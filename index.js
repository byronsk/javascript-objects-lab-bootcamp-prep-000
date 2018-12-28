
var recipes = { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  delete Object[key];
  return Object;
} 

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

