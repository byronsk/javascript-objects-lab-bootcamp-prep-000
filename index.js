
var recipes = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj)
}
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }