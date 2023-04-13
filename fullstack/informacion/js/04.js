
"use atrict"; //muestra los fallos


//ARRAYS

//CREAR PRIMERA ARRAYS

const numero = [10, 20, 30, 40, 50];
console.log("Mi primero ARRAY", numero);


//COMO MOSTRAR EN FORMATO TABLA EN VEZ SE CONSOLE.LOG 
//CONSOLE.TABLE

console.table(numero); //no se comenta para poder ver tabla


//ejercicio crear array que se llame mese y que contenga los meses del año
//y se muentre en pantalla en formato tabla


const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

console.table(meses);


//podermos crear tambien con newARRAY

//const meses = newarray (propidades);

//desntro del arrary podemos tener valores de mcuhos tipos

/*para que lea una sola propiedad */

console.table(meses[2]);

console.log("Numeros de elementos", meses.length);


/* Crear tres objetops, tipo numero string y bolean*/
//agregar propiedades tipo array con los dias de la semana
//  crear un destucturing con cada una de las propiedades

let ejercicio5 =
{
    texto: "string",
    nuemro: 20,
    boolean: true,
}

//ARRAY

ejercicio5.diasSemana =
    [
        "lunes", "martes", "miercoles", "jueves"
    ]

//destructuring

const { texto, nuemro, bolean, diasSemana } = ejercicio5;

//mostrar pantalla

console.log("RESULTADO EJERCICIO5", texto, numero, bolean, diasSemana);


/* CREAR 3 VARIABLES
variablea
variableb
variablec


crear objeto ejercicio06 vacio
vamos a crear propiedades a este objeto a partir de las variables
mostramos en panta el obejto*/

let variablea = "varA";
let variableb = "varB";
let variablec = "varC";

let ejercicio06 = {};
//creacr propiedades a partir de las variables
ejercicio06.variablea = variablea;
ejercicio06.variableb = variableb;
ejercicio06.variablec = variablec;

//mostrar

console.log(ejercicio06);


console.log(numero);
numero[5] = 600;

console.log(numero);

numero[2] = 120;
console.log(numero);

//metodo push añade elementos al final del array

numero.push(700);
numero.push(8000, 110); //se pueden agregar varios datos
console.log(numero);

//agrega al array al principio


numero.unshift(-999);
console.log(nuemro);

//eliminar elemntos del array

console.table(numero);






//copia del anterior (numeros) y se le agrega un nuevo (1540)
const nuevoArreglo = [...numero, 1540];
console.table("nuevo arreglo", nuevoArreglo);



//ejercios crar una array que se llame estaciones
//va a tener el valor de verano

const estaciones =
    [
        "verano"
    ]

//añadir primavera verano atoño invierno en ese orden

estaciones.unshift("primavera");
estaciones.push("otoño");
estaciones.push("invierno");

console.table(estaciones);


/*crear array carrito, crear dentro 4 objetos
con propiedades, nombre y precio cada uno */

let carrito =
    [
        {
            nombre: "tv",
            precio: 550,
        },

        {
            nombre: "movil",
            precio: 676,
        },

        {
            nombre: "table",
            precio: 88,
        },
        {
            nombre: "camiseta",
            precio: 98,
        },

    ]

console.table(carrito);


console.table(meses);

//funcion forEach

meses.forEach(function (mes){console.log(mes);}); 





















