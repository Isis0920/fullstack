"use strict"; //te muestra el error


const numero1 = 20;
const numero3 = 40;

// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

//try catch: intenta hacer esto de numerpo

console.log(numero1);


//te muestra el error
try {
    console.log(numero2)

} catch (error) {
    console.log("error")
}
//asi evitamos paralizar el codigo con el try/catch
console.log(numero3);


//promises:uso constante es autentificacion de usuario
//paso 1




//si son correctas la promesa se cumple y si no no se cumple


const usuarioAutenticado = new Promise((resolver, reject) => {
    const auth = false; //crear una constante evaluada (funcion)

    //si no se pone nada lo iguala a true
    if (auth) {
        resolver("ususrio correcto")
    } else {
        reject("intente de nuevo incorrecto")
    }
})

//mostrarlo por pantalla

console.log(usuarioAutenticado)


//then-cath: para que me de el resultado de la promesaa!!!
//paso 2:


usuarioAutenticado
    .then(function (resultado) { //ejecuta/promise se cumple
        console.log(resultado)//el parametro le podemos dar cualquier nombre
    })
    .catch(function (resultado) { //ejecuta/promise se cumple
        console.log(resultado)
    });



//documen..... acceder al elemento html
//querisel... acceder 

const boton = document.querySelector("#boton");

//agregar eventos con addEventListener

//darle dos valores (clicK y la funcion)
// boton.addEventListener("click", function () {
//     console.log("diste click")

// })

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk


//muestre notificacion
boton.addEventListener("click", function () {
    console.log("diste click");
    //requiere un permiso
    Notification.requestPermission()//ya es una promesa
        .then(resultado => console.log(`el resultado es ${resultado}`))
})

// if (Notification.permission == "granted") {
//     new Notification ("esta es una notificacion",{
//         icon: "C:\fullstack\informacion\img",
//         body: "notificacion tu carrera"
//     })//comprobar si fue acpetado

// }

setTimeout(function () {//una vez pasado 3s ejecuta el cuerpo de la funcion
    console.log("set time out actuando")

}, 3000) //milisegundos 


//una funcion 



function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descragando clientes.... espere..")

        setTimeout(() => {
            resolve("los clientes fueron descargados")
        }, 3000)

    });
}

async function app() { //await esperar a :
    const resultadoAsync = await descargarNuevosClientes();
    console.log(resultadoAsync)
} //declarando funcion 

//finalmente llamamos

app();

//hemos creado una funcion que tarde ne jecurtar 5s y luego otra funcion que depende d ela otra funcion y poara que se jecute, se debe terminar una y como se lo deicmos? con el asyng await y llamamos a
//la segunda que depende de la anterior 
//finalmente la llamamos.





//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// una funcion que me descrage los pedido y que me de 
//respuesta a los 3s que los pedidos se han descragado

function pedidoClientes() {
    return new Promise(() => {
        console.log("descargando pedidos.. espere..")

        setTimeout (()=>{
            console.log("pedidos descargadoss...!!")
        },5000)
    })
}
pedidoClientes();
 
// async function apps() {
//     const resultadoPedidos = await pedidoClientes();
//     console.log(resultadoPedidos)
// }

// apps();





