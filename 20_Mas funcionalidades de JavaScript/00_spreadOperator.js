const a = {b:12};
console.log('a:',a);
const b = a;
console.log('b:',b);

console.log('a===b, son el mismo item: ',a===b);
//Aunque se l e añade a 'b', como es un puntero, se le añade a 'a'
b.c =13;
console.log('a:',a);
console.log('b:',b);

// Esto es el SPREAD OPERATOR, los triple punto. Esto crea un nuevo objeto
//  que tiene una copia de cada uno de los elementos de 'a' y lo guarda en 'c'
// pero es un item nuevo, no es una referencia a 'a'
console.log('Creando c con spread operator...')
const c = {...a};
console.log('a:',a);
console.log('c:',c);
//aunque tienen el mismo valor a y c, no son el mismo item porque ya no es una referencia
console.log('a===c, son el mismo item? ',a===c);
c.d=20;
console.log('a:',a);
console.log('c:',c);