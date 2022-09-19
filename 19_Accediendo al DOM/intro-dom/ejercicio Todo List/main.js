//El local storage se utiliza para dar persistencia. tiene un metodo setItem para guardar y otro getItem para obtener
//Esta linea cortocircuita... Si tiene algo, carga ese algo, que es el localStorage. Si no tiene nada, carga un arreglo vacio []
//Peeeeero.... localStorage trabaja con strings y nosotros no queremos eso, asi que hay que usar el JSON.parse
const todos = JSON.parse(localStorage.getItem('todos')) || [];

//Esta funcion se usa para que cuando se elimine un elemento, el cual tambien se borra de 'todos', que actualice los indices
    //Para poder borrarlos todos.
const render = () =>{
    const todoList = document.getElementById('todo-list');
        const todosTemplate = todos.map(t => '<li>' + t + '</li>')
        todoList.innerHTML = todosTemplate.join('');

        //Busca todos los elementos que cumplan la condicion de dentro del querySelectorAll
            //Se usa un # para buscar un id del html, en este caso el todo-list
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach((elemento, i)=>{      
                //Escuchamos el evento click de dicho elemento       
                elemento.addEventListener('click', ()=>{
                //Un padre puede eliminar a los hijos...
                elemento.parentNode.removeChild(elemento);
                //Eliminar de la lista de 'todos' el elemento al que le hemos hecho click
                todos.splice(i,1);   //<- Esto contando des del elemento 'i' (que esl el que hemos hecho click,
                    // borra 1 elemento de mas)    
                actualizaTodos(todos)            
                render();
             })
        })
}

const actualizaTodos = (todos) =>{
    //Convertir a un string para poder guardar...
    const todoStrings = JSON.stringify(todos)
    //Guarda en la constante string del principio del codigo 'todos' el JSON
    localStorage.setItem('todos',todoStrings)
    //Renderizar de nuevo
}

window.onload = () =>{
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) =>{
        //preventDefault es para evitar que la app se refresque al dar click al submit.
            //es que los forms por defecto refrescan la pagina, y eso no lo queremos.
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos)
        render();
    }
}
    