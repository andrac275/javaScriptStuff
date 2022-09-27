//Promise.resolve asegura que algo se resolvera, para este ejemplo que devuelva un '2'
//el .then sirve para... Una vez se ha resuelto la promesa, qué hacer. En este caso la promesa
//se resuelve en 'valor' y lo imprimimos por pantlla.
console.log('Promesa de que se devolvera un 2...');
Promise.resolve(2)
    .then(valor=>console.log(valor));

//Las promesas se pueden encadenar...
console.log('Encadenar promesas...');
Promise.resolve(2)
    .then(valor => valor + 1)
    .then(valor=>console.log(valor));
//Los prints no coinciden porque las promesas se resuelven mas tarde
console.log('Mira los prints...')

