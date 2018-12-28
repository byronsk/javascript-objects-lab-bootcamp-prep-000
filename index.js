
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

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({ 1 }, object);
  delete newObj[key];
  return newObj;
}

