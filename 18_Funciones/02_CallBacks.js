//Un callback es una funcion  que se ejecuta al final de una funcion

function suma(a , b, cb){
    let resultado= a + b
    cb(resultado)
}

function callback(resultado){
    console.log('Resultado: ', resultado)
}

suma(2,3,callback)