//DEFINICION DE VARIABLES:
// Tenemos estos tres tipos de variables: var, let y const

// var: Forma 'antigua' de definir variables en JS. var  no la usaremos... var se coloca al inicio del archivo, puede 
// dar problemas de que despues las variables no tengan los valores esperados
//     Ej: var miPrimeraVariable='kaka'

//let: usaremos el let porque no da problemas como el var.
let miPrimeraVariable='Mi primera variable!!!'
console.log(miPrimeraVariable)
//cambiar valor a variables: Este termino de reasignar variables se llama MUTABILIDAD
miPrimeraVariable='El valor de la variable ha cambiado'
console.log(miPrimeraVariable)

//const: para que el contenido de las variables no cambie.
const variableConstante = 'variable contenido constante'
console.log(variableConstante)
//La linea siguiente comentada daria error porque no se puede cambiar el valor.
//variableConstante = 'asdadf'

//variables con boolean
let booleanVerdadero = true
let booleanFalso = false

//variables con numeros
let numero1 = 0
let numero2 = 12
let numero3= -258

console.log(numero1, numero2, booleanVerdadero,miPrimeraVariable)

//Variable indefinida, se sabe porque no tiene variable = ALGO
let undef
console.log(undef)

//Variable nula. Aqui la variable si tiene valor, pero es un valor nulo. No es lo mismo que undefined
let variableNula = null
console.log(variableNula)
//tanto undefined como null, ambas evaluan en 'false' si se le pregunta con un if.

