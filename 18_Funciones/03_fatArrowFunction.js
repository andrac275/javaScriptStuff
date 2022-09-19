//Son funciones con dos beneficios respecto a las funciones normales:
//1. No hace falta usar la palabra reservada function
//2. Si la funcion tiene una unica linea, no hace falta pooner 'return', va implicito

const saludo = () => 'Hola mundo'
let resultado=saludo()
console.log(resultado)

const miFatArrowFunction = (a, b) => a + b
resultado = miFatArrowFunction(1,2)
console.log('El resultado es: ' , resultado)

const otraFatArrow = (a,b)=>{
    return a + b
}
resultado = otraFatArrow(5,3)
console.log('El resultado es: ' , resultado)