//Operadores logicos
//or (||), and(&&) , not(!)

//Or busca trues. En el momento que encuentra uno, lo deja a true y para mas comrpobaciones
console.log('or: false || true ->', false || true)
console.log('or: false || false ->', false || false)
//Curiosidad... Los strings, objetos, etc... evaluan a true, excepto el 0 que evalua a falso, por tanto
// si se printea un string...
let curiosidad =false || false || 'hola' || 'mundo'
//Printea hola porque es el primer true que se encuentra
console.log('Curiosidad... : ', curiosidad)
console.log('---------------------')

//And lo contrario, busca false. En el momento que encuentra un false, se para
console.log('and: false && true ->', false && true)
console.log('and: false && false ->', false && false)
console.log('and: true && true ->', true && true)
console.log('and: true && true && true && true && false) ->', true && true && true && true && false)
console.log('---------------------')

//not con !
console.log('!false: ', !false)
console.log('!true: ', !true)

