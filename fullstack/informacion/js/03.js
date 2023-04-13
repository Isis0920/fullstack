
"use strict"; //te muestra el error















//que son los objetos?
//un tipo de variable que almacena muchas propiedades
//objeto es el elemento padre


// let nombreProducto = true; //palabras reservadas como true/false
// let precio = 50;
// let disponible = 60;

// console.log("nombrePrecio:", nombreProducto);
// console.log("precio: ", precio);
// console.log("disponible: ",disponible);

let producto = {
    nombrePoducto: "Reloj",
    precio: 65,
    disponible: true
}
// console.log(`Este es mi primer producto: ${producto}`, producto);
console.log("Mi Primer Producto", producto);
console.log("Uso de sintaxis de punto producto.precio:", producto.precio);

//taplate string
console.log(`Uso sintaxis de punto producto.precio ${producto.precio}`);

//añadir nueva propiedades a PRODUCTO
//si existe te lo puede modificar con esta sintaxis

producto.imagen = "imagen.jpg";
console.log("actualizacion", producto);

//ejercio añadir al objeto producto una propiedad que sea borrar tipo buleana

producto.borrar = false;
console.log("actualizacion para borrar", producto);

//NOTA!!!!!!!!!!!!
//caracteristica de javascrip no hay que decirle que tipo de dato le 
//debes de decir si es un objeto porque los valores definen que van a ser

//como se borran?

//uso del delete!!!!!!! y propiedad que queremos borrar

delete producto.borrar;
console.log(`VER EL BORRADOR BORRADO ${producto.borrar}`);
console.log("ver el borrar borrado", producto);

//modificar el precio del producto 

producto.precio = 800;
console.log("Modificacion el precio", producto);
console.log(`Modificacion ${producto}`, producto);

//crear variables a partir de las propiedades de un obejto 

let disponible = producto.disponible;
console.log("hola", disponible);

//propiedad nueva color

let color = "red"; //primero crear variable
producto.color = color; //luego agregarla al producto 

//ver l actualizacion

console.log(`Ver el color en el producto ${producto}`, producto);

//crear una variable con que se llame nombre y que almacene el valor 
//de la propiedad nombreProducto del objeto producto

let nombre;
nombre = producto.nombrePoducto;

console.log(`Valor que debe llevar es del nombreproducto: ${nombre}`);

//añadir propiedad categoria

producto.categoria = "hola";
console.log(producto);

//destructuring crea vaeiable, extrae el valor, la variable la 
//llama igual que la propiedad
//obtimiza crar variables a partir del valor de un objeto 


//destructuring

const { categoria } = producto;
//uso de llaves, para acceder interi de la propiedad
console.log(`Esta es la variable creada con estructuring: ${categoria}`);

//congelar un objeto

//metodo:freeze

Object.freeze(producto);
// producto.congelado = true;

// console.log(`Congelacion: ${producto}`);

//como saber si esta congelado
//metodo isfrozen

console.log("ver si esta congelado:", Object.isFrozen(producto));

//intentar modificar la propiedad dispobinle

// producto.disponible = false;
// console.log("INTENTAR MODIFICACION", producto);






//METODO OBJECT.SEAL:

//ejercicio: crear un objeto: Medidas y al objeto agregar 4 propiedades
//peso, alto, ancho, profundidad
//aplicar el metodo sea 
//a continuacion modificar una de esas propiedades


let medidas = {
    peso: 25,
    alto: 1.50,
    ancho: 40,
    profundidad: 600
}

Object.seal(medidas);
medidas.profundidad = 2;

console.log("Estas son las medias", medidas);

//unir todos los objetos en un nuevo objeto

const nuevoProducto = {...producto,...medidas};
console.log("nuevo objeto",nuevoProducto);