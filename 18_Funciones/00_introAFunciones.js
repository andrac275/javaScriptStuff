
function iterar(argumento1){
    for (let i = 0; i < argumento1.length; i++){
        console.log('El valor del elemento ', i, ' de la lista es: ', argumento1[i])
    }
}

let valores =[1,2,'hola',4,true]
let nombres = ['Andrac', 'Chanchito','Felipe']
iterar(valores)
console.log('---------------')
iterar(nombres)
