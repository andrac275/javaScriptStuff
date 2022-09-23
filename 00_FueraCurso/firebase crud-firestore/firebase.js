// Import the functions you need from the SDKs you need        
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getFirestore, 
    collection, 
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use       
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
const firebaseConfig = {
  apiKey: "AIzaSyC-lVL188orayki3BSSL_LNQM5xxruVJHA",         
  authDomain: "fir-javascript-crud-e8a8f.firebaseapp.com",     
  projectId: "fir-javascript-crud-e8a8f",
  storageBucket: "fir-javascript-crud-e8a8f.appspot.com",       
  messagingSenderId: "345788095599",     
  appId: "1:345788095599:web:30ed22c8d737da9ba5419a"      
};

// Initialize Firebase          
const app = initializeApp(firebaseConfig);     

const db =getFirestore();

//Guardar un dato en firestore
export const saveTask = (title, description) =>{
    addDoc(collection(db, 'tasks'), {title, description})
}

//Obtener datos
export const getTasks = () => getDocs(collection(db,'tasks'));

//Obtener tareas (para refrescar tras añadir una nueva)
export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'), callback);

//Borrar Tarea
export const deleteTask = (id) =>deleteDoc(doc(db,'tasks', id));

//Obtener una unica tarea
export const getTask = (id) => getDoc(doc(db,"tasks",id));

//Actualizar una tarea
export const updateTask = (id,newFields) => updateDoc(doc(db,"tasks",id),newFields);
