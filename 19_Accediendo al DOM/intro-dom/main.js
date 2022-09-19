//La func window onload espera a que se cargue todo el html antes de empezar a ejecutar el script
//es interesante usarla por si se carga algun id despues del script. Esto se soluciona cargando el 
//html al final del documento html, para que este todo cargado.
window.onload = () =>{
    //Del fichero coge aquello que tenga de id  text275
    const parrafo = document.getElementById('text275') 
    //Muestra el contenido de lo que ha cogido por la consola
    console.log(parrafo.innerHTML)

    //MANIPULAR TEXTO
    //Asi se puede asignar de manera dinamica cambios al TEXTO de la pag web. Se ha cambiado el valor del parrafo
    parrafo.innerText = 'hola hola! Se ha cambiado el contenido!'

    //MANIPULAR HTML
    parrafo.innerHTML = '<li> elemento 1 </li> <li> elemento 2 </li>'

}
    