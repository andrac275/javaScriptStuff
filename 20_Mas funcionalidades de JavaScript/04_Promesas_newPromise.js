//Esto es para hacerlo asincrono... Despues de 1000ms (1 segundo) devolvera un 2.
//Con el timeout simulamos el delay de una API y que esta puede funcionar y 'resolve' la peticion
//o fallar y 'reject' la peticion es por eso que... 
//newPromise recibe siempre en la funcion un 'resolve' y un 'reject'

//Probar este codigo en la consola del navegador. Devuelve 2 tras 1 segundo
new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(2),1000);
})
.then(x=> console.log(x))
.catch(e=> console.error(e));

//Y este tambien con el error... Devuelve error tras 1 segundo, como si la api hubiera fallado
new Promise((resolve, reject)=>{
    setTimeout(()=>reject(2),1000);
})
.then(x=> console.log(x))
.catch(e=> console.error(e));