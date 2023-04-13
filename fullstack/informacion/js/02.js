
//tres formas de crear tipo: string
const producto1 = "holaa";
const producto2 = String("hola2");
const producto3 = new String("hola3");

// console.log("holaa",producto1);
// console.log("hola2",producto2);
// console.log("hola3",producto3);

//typeof para ver el tipo de de dato que tiene una variable 
console.log("TYPEOF PRODUCTO1:", typeof producto1);
console.log("TYPEOF PRODUCTO2", typeof producto2);
console.log("TYPEOF PRODUCTO3", typeof producto3);


let numero100 = 100;
let numero200 = "200";

console.log("numero100:", numero100);
console.log("numero200:", numero200);

console.log("TYPEOF numero100:", typeof numero100); //typeof te dice en pantalla el tipo al que pertenece
console.log("TYPEOF numero200:", typeof numero200); //a veces se puede poner numeros con tipo strin

//metodos: son funciones que se utilizan PARA VARIAR DE UN DATO A OTRA



//PARA DETERMINAR LA LONGUITUD DE LA VARIABLE: METODO LENGTH
console.log("METODO LENGTH:", producto1.length);


// METODO INDEXOF: ME BUSCA SI UNA PALABRA EXISTE EN EL TEXTO O NO; SI EXISTE VALORES POSITIVOS Y SI NO NEGATIVOS
//0 o positico si existe en la cadena de texto o -negativo no existe
console.log("METODO INDEXOF:", producto1.indexOf("holaa"));


//include retorna true o false 
console.log("METODO INCLUDES:", producto1.includes("holaa"));

let numero1 = 7;
let numero2 = 3;
let numero3 = "200"; //tipo string por eso las comillas dobles
let numero4 = 2 / 3;

console.log(" NUMERO1", 100);
console.log(" NUMERO2", 200.25);
console.log(" NUMERO3", 200);
console.log(" NUMERO3", 2 / 3);


console.log("TYPEOF NUMERO1", typeof 100);
console.log("TYPEOF NUMERO2", typeof 200.25);
console.log("TYPEOF NUMERO3", typeof 200);
console.log("TYPEOF NUMERO3", typeof 2 / 3);


//como se obtimizar 
console.log("NUMERO1 Y TYPEOF NUMERO1", numero1, typeof 100, numero1.length);
console.log("NUMERO1 Y TYPEOF NUMERO2", numero2, typeof 200.25);
console.log("NUMERO1 Y TYPEOF NUMERO3", numero3, typeof 200);
console.log("NUMERO Y TYPEOF NUMERO3", numero4, typeof 2 / 3);


//ejemplo de suma 
console.log("SUMA NUMERO1 Y NUMERO2", numero1 + numero2);
console.log("SUMA NUMERO1 Y NUMERO1", numero1 + numero3);

//color negro son string
//color azul tipo numero (number)

//se puede todas las operaciones matematicas las basicas 
//modulo: %  es el modulo del residuo de la division 



console.log("NUMERO1%MODULO2",numero1%numero2); 

//metodo math: operaciones matematicas

//math.random

let resultado = Math.random();
console.log("RESULTADO", resultado);

//math.pi
//math.round
//math.ceil
//math.floor
//math.sqrt
//math.abs
//math.min
//math.max
//math.floor(math.random()*30);
 

//dos formas de realizar 

//primera
// let resultado2;
// resultado2 = math.floor(math.random()*30);

//segunda: mas implificasa
// let resultad = math.floor(math.random()*30);

//ejercicio: tengo dos variables una ares y otro diametro y debemos hacer que le numero sea a partir del diametro

let diametro = 20;
let radio = diametro / 2;
let area = Math.PI * Math.pow(radio,2);

console.log("este es el area a partir del diametro",area);

let redondear = Math.round(area); //para redondear sin decimales
console.log("para redondear",redondear);


//numero entre 2 y 3
let aletorio =Math.random()+2;
console.log("aleatorio",aletorio);

//ejemplo entre 3 y 6
let alternativo =3*Math.random()+3;
console.log("entre 3 y 6",alternativo);


//ejercico crear un dado entre 1 y 6
let  dado = Math.round(1+Math.random()*5);
console.log("resultado dado",dado);

//prioridades matematicas
// ()
// */
//+ -



//ejercicio 3 prendas: tengo 3 prendas, aplica la promocion del blacriday
let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let ahorro = 40
let carrito = prenda1 + prenda2 + prenda3;

let descuento = (carrito ) * ahorro/100;
console.log("descuento", descuento );

let totalaPagar = (carrito) - descuento;
console.log("total a pagar", totalaPagar);


//incrementos!!!!!!

//ejemplo

let meGusta = 0;
// meGusta++;
console.log("Uso de incrementos: ", meGusta +=15 );//el uso del ++ te incrementa 1 y luego actualiza 
console.log("Uso del incremento 2: ",meGusta)



//concatenacion:

//eje:
let nombre = "valentina";
let email = "valenmarin802@gmail.com";

console.log( "mi nombre: ",nombre);
console.log( "mi email: ",email);

//para mostrar de manera agrupada

console.log("NOMBRE Y EMAIL CONCATENADOS:", nombre,email);
//SE PONE JUNTO Y PARA SEPARAR

console.log("NOMBRE Y EMAIL CONCATENADOS 2:",nombre +" "+ email);

 //template string
//forma de abreviar el console.log


 console.log(`nombre Cliente: ${nombre} email cliente: ${email}`);


 //BOLEANOS!!!!!!!!!!!!!!!!!
 //son los que tomas los true/false


 let bolean1 = true;//true
 let bolean2 = false;//flase
 let bolean3 = "true";// true tipo string
 
 console.log("TYPEOF BOLEANO1:", typeof bolean1);
 console.log("TYPEOF BOLEANO2:",  typeof bolean2);
 console.log("TYPEOF BOLEANO3", typeof bolean3); //tipo string

 //otra forma de crear boleanos

 let bolean4 = new Boolean(true);
 console.log("OTRO TIPO DE BOELANO4", typeof bolean4);


















