"use strict"; //te muestra el error

/*como seleccionar codigos html 3 formas con javascrip
queryselector

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk





queryselector 

me retorna uno o ninguno 
clases con .
id con #

*/

//primera seleccion de elemntos

const heading = document.querySelector ("h1")//seleccion 1 O NINGUN ELEMENTO
console.log(heading); //nos muestra la seleccion


//!!1 seleccionar y mostrar por pantalla el boton que creamos
//ayer

const botonis = document.querySelector ("#boton")//seleccion 1 O NINGUN ELEMENTO
console.log(botonis);



heading.textContent="nuevo titulo";

heading.classList.add("NuevaClaseDesVm");

const enlasesVm = document.querySelector("A");
console.log(enlasesVm);


const enlasesVm2 = document.querySelectorAll ("A");
console.log(enlasesVm2);

console.log(enlasesVm2[0]);


//modificacion del enlase 
enlasesVm2[2].href="https://lucasylola.es/";
enlasesVm2[2].textContent=("holis");

//ultima forma

const selecTiones = document.getElementById("boton");
console.log(selecTiones)


//////////////////////////////////////////////////////


//generar codigo desde java script

const nuevoEnlace = document.createElement("A");

nuevoEnlace.href = "#";

//agregar texto

nuevoEnlace.textContent = "nuevo enlace";

//agregar clases!!!!!!!!!



//(primero seleccion)

//nuevoEnlace.classList.add("") //le añado clases de informate
// console.log(nuevoEnlace)//debe tener el mismo selector

//ahora añadir primero tenemos que 

//agregamos al documento
//agregar a la derecha del boton informate

//(segundo actuamos )

const enlasesVm3 = document.querySelector("#row");
enlasesVm3.appendChild(nuevoEnlace);

//.appendchild


/*ejercicio!!!!!!!!!!!!!
crear un enlace con el mismo formato madrid alcobendas

que se llame pozuelo*/



const enlaseVm4 = document.createElement("A");
enlaseVm4.href = "#";
enlaseVm4.textContent = "pozuelo";  //creacion de enlace

// enlaseVm4.classList.add("ultimatum") //para agregar lo del css(estilos)

const conexion4 = document.querySelector(".ultimatum"); //creo una variable
//                                    aqui le digo que lo meta en este contenedos
conexion4.appendChild(enlaseVm4);
// a la variable que le haga un hijo (appendChild) y que le agregue 
//(enlasevm4 que es el enlace que e creado)



//eventos en java y que utilizamos

console.log(1);
//primero llamamos a windos:palabra reservada para un evento 
//segundo .addEventListener que sera un eveto

                         //tipo de eventos que se haran (load, clicK...)
window.addEventListener("load", function(){
    console.log(2);
});


//evento que se ejecuta cuando se carga el documento
document.addEventListener("DOMContentLoaded", function(){
    console.log(3);
});
console.log(4);

//tipo scroll

window.addEventListener("scroll", function(){
    console.log("scrolling...")
})

 
/*como aplicar un evento*/ 

//ejemplo

const botonNotificacion = document.querySelector("#boton");
//seleccionado el boton

botonNotificacion.addEventListener("click",function(evento){
    console.log(evento)
})

//eveto por teclado change y impiut



const nombre = document.querySelector("#nombre");
//seleccion

nombre.addEventListener("change", function(){
    console.log("escribiendo nombre con change...")

})

//hasta que no pinchas fuera no se ve 
//para verlo se cambia el evento


//en vez de change ponemos input
nombre.addEventListener("input", function(evento){
    console.log("escribiendo nombre con input...");
    console.log(evento);
    console.log(evento.target.value);
})

//se actualiza la variable nombre y muestra por consola, la actualizacion 



//evento de tipo submit: asociados a formularios

//solo se aplica en la etiqueta 
                                   //si hay varios forma con # o .
const formulario = document.querySelector("form");//seleccionamos etiqueta forma

formulario.addEventListener("submit", function(evento){
     evento.preventDefault();//evitar que la pagina se vaya hacia arriba(olvidar su comportamiento por defecto)
    console.log("enviando formulario...");
});

//submit para formularios, esta asociado al formulario en general
//clicK para otros botones


/* como organizar le codigo 

primero variables
depsues eventos
ultimo funciones*/








 

