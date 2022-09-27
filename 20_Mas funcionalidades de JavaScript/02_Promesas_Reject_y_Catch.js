//PArtiendo del ejemplo del fichero anterior...
//NOTA! Se prueba en la consola del navegador, con node no va. Mirar la 02_Promesas_Reject_y_Catch.jpg

//Si falla... el catch mostrara el error en consola. La siguiente no falla...
Promise.resolve(2)
    .then(valor => valor + 1)
    .then(valor=>console.log(valor))
    .catch(e =>console.error(e));

//Pero si se pone Promise.reject, se obliga a que falle.
//Sato: El reject obliga a pasar al .catch. Es interesante poner dicho catch si trabajamos
//con promesas.
Promise.reject(2)
    .then(valor => valor + 1)
    .then(valor=>console.log(valor))
    .catch(e =>console.error(e));

//Los errores pueden surgir si la API se cae o nos quedamos sin internet, en estos casos pueden saltar errores.