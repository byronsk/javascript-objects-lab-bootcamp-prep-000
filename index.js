
var recipes = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function deleteFromObjectByKey(object, key, value) {
  delete Object[key];
  return Object;
} 