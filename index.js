
var recipes = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)

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
  delete newObj[key];
  return newObj;
}

