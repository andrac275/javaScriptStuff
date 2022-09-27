//Probar esto en la consola del navegador...

//En cualquier momento se puede interrumpir una cadena de promesas metiendo un reject.
//Mirar lineas 7 y 11. Probar esto en la consola del navegador.
Promise.resolve(2)
    .then(valor => valor + 1)
    .then(valor=>Promise.reject(valor))
    .catch(e =>console.error(e));

Promise.resolve(2)
    .then(valor => Promise.reject(1))
    .then(valor=>valor +2)
    .catch(e =>console.error(e));