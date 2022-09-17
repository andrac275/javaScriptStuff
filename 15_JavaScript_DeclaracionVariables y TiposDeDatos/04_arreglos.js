//Un 'arreglo' es similar a una lista pero tiene diferencias sutiles.
const miObjeto = {
    unNumero: 12,
    unString: 'cadena de caracteres',
    condicion: true,
}


//Un arreglo puede contener distintos tipos de datos. numeros, strings, otros objetos...
const arregloVacio = []
const arreglo = [1,2,'Hola','Mundo',miObjeto]

console.log(arregloVacio)
console.log(arreglo)

//Insertar elementos a un arreglo
console.log('-----------------------------')
let nombre = 'me llamo Andrac'
arregloVacio.push('elemento insertado') //string
arregloVacio.push(275)  //numero
arregloVacio.push(true) //true o false
arregloVacio.push(nombre)   //variable
console.log(arregloVacio)

