//Funciones anonimas: Son funciones quen o vamos a volver a usar... asi que las pasamos directamente.
function suma(a , b, cb){
    let resultado= a + b
    cb(resultado)
}

//Se pasa directamente la funcion en el argumento al llamarla, en lugar de lo que se hizo en: 02_CallBack.js
suma(2,3, function (r){
        console.log('Soy una funcion anonima y mi resultado es: ' , r);
    }
)