
"use strict"; //mostrar errores

//uso de las funciones

//declaracion de la funcion

function suma(n1, n2) // primero declaramos   ---no se llama a la fincion no pasa nada
{
    console.log(n1 + n2);
};

suma(10, 20); //llamamos a la funcion


//crear fincion que se llame doblar, con argumentos de entrada 
//un numero y que muestre ese numero
//multiplicado por dos


function doblar(x) //x es el argumento que le doy
{
    console.log(x * x) //cuerpo: operaciones que hara
}

doblar(10, 2); //llamamos y le damos los valores


//EXPRESION DE LA FUNCION

const sumar2 = function (n3, n4) {
    console.log(n3 + n4);
}

sumar2(3, 9);


// diferencia metodo y funcion

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2));//parseInt ()es una funcion
console.log(numero1.toString());//.toString () es un metodo


/*crear una funcion que cunete los caracteres de un 
twit, y e diga si entra o no en el espacio que 280*/


function Tweet(textotweet) {
    console.log("longuitud del tweet es:", textotweet.length);

}
Tweet("texto de prueba que cuenta");
/* crear una function que yo le de una cadena de texto
y una palabra y me busque esa palabra en la cadena de 
texto*/

function buscar(texto, palabra) {
    console.log("buscamos la palabra en el texto:", texto.includes(palabra))
};

buscar("este texto vamos a buscar", "buscar");

//otro texto

buscar("texto donde voy a buscar", "rojo");

/* Otra funtion añadir y le povamos a pasar un array y un valor y añadimos 
ese valor al final del array*/

// function añadir(array,valor) 
// {
// console.log("array y añada un valor al final del array", array.push(valor))    
// }
// añadir(["a","b","n","d"],"c");

/* functiones que soluciono */

function ecuacionSegundo(A, B, C) {
    console.log("suma de los numero", (- B + Math.sqrt(B * B - 4 * A * C)) / (2 * A));
    console.log("resta de los numero", (- B - Math.sqrt(B * B - 4 * A * C)) / (2 * A));
};

ecuacionSegundo(2, 10, 1);

/* crear funcion que muestre los numero pares */

// function pares(numero,numero) 
// {
// console.log("numero pares",numero++ )    
// }


//RETURN


//CREE una funtion
//llame la funcion y le doy valores a los parametros 

function multiplicar(n1, n2) {
    return n1 * n2; //retorna el valor

};

let valorRetornado = multiplicar(2, 5);
console.log("el valor retornado es:", valorRetornado);

//funcion dividir 

function dividir(n3, n4) {
    return n3 / n4;
}
let Divisionees = dividir(9, 3);
console.log("la division es:", Divisionees);

//sume todo lo del carrito

let total = 0;

function agregarCarrtio(precio) {
    return total += precio
};

total = agregarCarrtio(200); //le doy valor a la variable total
total = agregarCarrtio(80);
total = agregarCarrtio(970);

console.log("total del carrito", total);


//crear funtion que calcule el total de impuestos 

let resultado = 0;

function carritoTotal(resultado, iva) {
    return resultado += resultado * (iva / 100);
}

resultado = carritoTotal(800, 10); //
resultado = carritoTotal(770, 20);
resultado = carritoTotal(990, 40);
resultado = carritoTotal(540, 50);

console.log("iva 1 10% es:", resultado) //te muestra la suma total de todos
//los impuestos de cada uno




//METODOS DE PROPIEDAD:



//REPRODUCTOR MUSICAL

let reproductor =  //objeto por {}
{
    reproducir: function (id) {
        console.log(`reproducioendo musica con id:${id}`)//template string
    },

    pausar: function () {
        console.log(`pausa cancion`)
    },
    crearPlaylist: function (nombre) {
        console.log(`creando plaYlist: ${nombre}`)
    }

}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("metal");

//añadir una propiedad a objetos  metodos de propiedad:

reproductor.borrarCancion = function (id) {
    console.log(`borrar cancion con id: ${id}`)
}

reproductor.borrarCancion(34); //llamarla

//ejercicio: 
//una funcion que se llame nombrecompleto: tres argumentos 
//nombre, apellidp uno y apellido 2
//y me va a mostrar por pantalla el nombre completo 


// function nombreCompleto(nombre , apellido , apellido2) 
// {
//     nombres : "carlos",
//     apellido : "Mendo",
//     apellido2 : "marin",
// }

// console.log(`nombre completo es: ${nombre}`);

function nombreCompleto(nombre, ape1, ape2) {
    console.log(`nombre completo: ${nombre} ${ape1} ${ape2}`)
};
nombreCompleto("carlos", "mendo", "marin");

//funciones de flecha

let triplicar = function (numero = 1) {
    console.log("valor de triplicar con expresion de la funcion:", numero * 3);

}
triplicar(13);

let triplicar2 = (numero = 1) => //si solo hay un argumento y no esta inicializado 
    console.log("valor de triplicar con expresion de la funcion 2 es:", numero * 3);
triplicar2(3);

//crear una funtion de flecha se llama aprendiendo
//argumento sin inicializar y el resultado debe ser
//ese argumento + 7 y debe almacenar en una variable
//llamada aprendiendo

let aprendiendo = numero =>
    numero + 7;
let resultadoAprendiendo = aprendiendo(14);
console.log("mi primera funcion de flecha:", resultadoAprendiendo);


//funcion de flecha llamada matricula, y esta hara 
//mostrar por pantalla la matricula que le e puesto 

let matricula = valor =>
    console.log("tu matricula es:", valor);

matricula("M875M");


// array y dentro tiene objetos 
let carrito =
    [
        {
            nombre: "tv",
            precio: 750
        },

        {
            nombre: "tablet",
            precio: 350
        },

        {
            nombre: "movil",
            precio: 550
        },
        {
            nombre: "pc",
            precio: 1750
        },

    ]

//metodos para arrays

let resultados = 0;

resultados = carrito.some(function (producto) {
    return producto.nombre === "tablet"
});

console.log("resultado de la funcion some ideal", resultados);

//tipo flecha



//no se pone let porque ya esta creada 
resultados = carrito.some(producto =>//se elimina el parametro
    producto.nombre === "tablet") //se quitan los corchetes

console.log("resultado de la funcion some ideal con arrow", resultados);//lamada



resultados = carrito.reduce(function (total, producto) //para iterar: recorrer
{ //total,producto: parametros 
    return total + producto.precio
}, 0); //el valor de aca es que no sume nada 
console.log("uso de reduce:", resultados);

//tipo flecha

resultados = carrito.reduce((total, producto) =>
    total + producto.precio, 0);
console.log("uso de reduce mas flecha", resultados);

//.filter =  para filtrar

resultados = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log("uso del filter", resultados);

//.filter con flecha

resultados = carrito.filter(producto =>
    producto.precio > 400);
console.log("uso de filter mas flecha", resultados);























































