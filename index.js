
var recipes = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {(key:value)})
}
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }