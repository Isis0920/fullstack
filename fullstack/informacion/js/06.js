"use strict"; //muestre el error


//estructura de control


const puntaje = 900; //un solo igual asignar valor a variable
if (puntaje === 1000) //== dos iguales es una comparacion
{
    console.log("puntaje es 1000")
}
else { //si no se cumple
    console.log("puntaje no es 1000")
};


//ejercicio del cajero : pin y retirar

// const pin = 2565, retirar = 50;
// if (pin === 2565) {
//     console.log("PIN CORRECTO")
// } else {
//     console.log("PIN INCORRECTO")
// }
// if (retirar < 60) {
//     console.log("retirando")
// } else {
//     console.log("saldo insuficiente")
// } //esta mal DEJA SACRA DINERO!!!!!!!!!!!!!!!!!!!!!!!

function cajero(pin, retirar) {
    if (pin === 6565) {
        console.log("pin correcto:")
        if (retirar <= 49) {
            console.log("retirando dinero");
        } else {
            console.log("saldo insuficiente")
        }
    }
    else {
        console.log("pin incorrecto")
    }
}

cajero(6565, 10);

//ESLSE IF;

const rol = "editor"; //un solo igual damos valor 
if (rol === "administrador") {
    console.log("acceso a todo el sistema")
} else if (rol === "editor") {
    console.log("solo puedes editar, pero no crear")
} else {
    console.log("no tienes acceso")
}




//switch

const metodoPago = "tarjeta";
switch (metodoPago) {
    case "tarjeta": console.log("pagaste con tarjeta");

        break;
    case "en mano": console.log("pagaste en mano");
        break;
    case "bizum": console.log("pagaste con bizum");
        break;

    default: console.log("pendiente de pago");
        break;
}


//ejercio01 crear una funcion de flecha dado 2 
//parametros me de 10 veces la suma de
//ambos


let ejercicio01 = (n1, n2) =>
    console.log("resultado ejercicio01 es:", (n1 + n2) * 10);

ejercicio01(2, 3);

/* ejerciicio02 funcion de flecha y de parametro 
y que diga un que numero de caracteres
me doga el numero de ellos*/



let ejercicio02 = (t1, t2) =>
    console.log("ejercicio 2 es", (t1 + t2).length);

ejercicio02("jose", "valen");

/*crear una estructura de contral que compare si un el resultado
es menor que 100 */


let ejercicio3 = 12;
if (ejercicio3 * ejercicio3 < 100) {
    console.log("es menor que 100")
}
else if (ejercicio3 * ejercicio3 < 200) {
    console.log("menor de 200")
}
else {
    console.log("mayor e igual que 200")

};

/*crear estructura de control que compare si 
un numero + 10 es:
=9
=12
=15
=100
resto de posibilidades */

let ejerc04 = 90;
switch (ejerc04 + 10) {
    case 9: console.log("es igual a 9") //numeros no hace falta los "" son numeros
        break;
    case 12: console.log("es igual a 12")
        break;
    case 15: console.log("es igual a 15")
        break;
    case 100: console.log("es igual a 100")
        break;

    default: console.log("es mayor")
        break;
}


//FOR LOOP !!!!!!!!!!!!!!!!!!!!!!!! 

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// for (let i = 1; i <= 500; i++) {
//     console.log("500 primeros numeros", i);
// }

//mostrar en orden decendente desde el 100 
//hasta el 0 
//pero de 5 en 5 
//incluido ambos

// for (let f = 100;  Range={100,0}) {
//     console.log("muestra de 5 en 5", f);
// }

//1

// for (let f = 100 ; f >= 0; f -=5 ){
//     console.log("de 100 a 0 de 5 en 5", f)
// };



//2
//mostrar del 1 al 100 todos los numeros pares incluidos ambos

//  for (let h = 0; h<= 20; h++){ //<= menor igual
//     if(h%2===0){
//         console.log("numeros pares:",h)
//     } 
// };




//3
//ejercicio con for 


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
/*vamos a recorrer array carrito y mostrar cada uno de los objetos que tiene y mostrar
la propiedad nombre de cada uno */

// for (let b = 0; b < carrito.length; b++) {
//     console.log(carrito[b]);
//     console.log("nombre de ellos", carrito[b].nombre)
// };

//while = 

let h = 5;
while (h < 10) {
    console.log(h);
    h++;
}

let g = 20;
do {
    console.log("ejecuta la menos una vez", g);
    g++;
} while (g < 10);


//!!!!!!!!!ejercicio 8 
/* estructura de control  while */

let m = 1;
//numeros mayor igual que 20
while (m <= 20) {
    if (m % 10 === 0) { //condicion para que sean de dos en dos
        console.log("numero pares con while", m)//muestra la variable
    }
    m++;//actualizador
}

//otro ejercicio

/* crear una funcion que dado un argumento me diga
si es poristivo o negativo
es = 0 */

function tion9(nume) {
    if (nume > 0) {
        console.log("positivo", nume)
    } else if (nume < 0) {
        console.log("negativo", nume)
    } else {
        console.log("es 0:", nume)
    }
}
tion9(10);
tion9(9);
tion9(-10);


//otro ejercicio:

/*una funcion que dado un argumento (numero entero)
me haga la regrecion, que vaya restando de 1 en uno 
hasta llegar a cero */

//do while la funcion aparece una vez y no es correctp
//porque si muestra en legativo es falso
// function ones10(meros) {
//     while (meros >= 0) {
//         console.log("numero en regresiva es:", meros)
//         meros--;
//     }
// }

// ones10(4);

/*ejercicio 11*/

/*crear una funcion: que dado un argumento de estrada
n, me de la suma entre todos los numero 0 y n*/

// let ejerCio11 = 0;

//almacenamos en la variable al mismo tiempo que lo sumas


//una forma (esta es mas facil)
// function ejer11(n) {
//     while (n >= 0) {
//         ejerCio11 = n + ejerCio11;
//         n--
//     }
//     console.log("suma de datos:", ejerCio11)
// }

// ejer11(3)


//segunda forma














/*usando while, crear una funcion que dado un argumento
me muestre de manera regresiva, el numero/10 */

// function ejer12(mm) {
//     while (mm >= 0) {
//         console.log("cuenta regresiva", mm / 10);
//         mm--;
//     }

// }

// ejer12(5);


//una funcion que dado el aurgumento me calcule la 
//media de la suma de todos los valores

// let resul13 = 0;
// let conta13 = 0;
// function ejer13(ll) {
//     while (ll > 0) {
//         resul13 = ll + resul13;
//         ll--;
//         conta13++

//     }
//     console.log("ejewrcicio 13", resul13 / conta13);
// }

// ejer13(10);


//ejercicio crear una funcion con 2 argumentos 
//muestre solo los impares y la suma de ellos

// let resuul14 = 0;

// function ejer14(bb, vv) {
//     while (vv >= 0 && vv >= 0) {
//         resul13 = bb + vv;
//         resuul14++;
//     }
//     console.log("ejercicio 14 es:", resuul14);
// }
// ejer14(5, 5);

// let totalej12 = 0;
// let ejerc12 = (ajose, b) => {

//     for (ind = ajose;ind <= b; ind++){
//         console.log(ind)
//         if (ind % 2 === 1) {
//             // totalej12 += i
//             console.log(ind)
//         }
//     }
//     console.log("suma de los impares", totalej12)
// }
// ejerc12(2, 5);

//crear una funcion que dada 3 notas del examen
//me diga si el alumno esta apto o no apto

// let ejercic15 = (a,b,c) =>{
//     if ((a+b+c)/3>=4.01){
//         console.log("aprobado");
//     }else{
//         console.log("suspenso")
//     }

// }
// ejercic15(3,4,5.05);





// let x1 = 6;
// let x2 = 5;
// let x3 = 7;

// function ejer13 (sx){
//     while (sx >= 0) {
//         sx = x1 + x2 + x3 / 3;
//         sx++;
//     }
//     console.log("media",sx)
// }

// ejer13(2);



/*crear una funcion que introducido un mes me diga si tiene
28,30 o 31 dias */

let ejer17 = (nombre) => {
    if
        (nombre == "enero" || nombre == "marzo" || nombre == "mayo") {
        console.log("tiene 31 dias")
    } else if (nombre == "febrero") {
        console.log("tiene 28 dias")
    } else {
        console.log("tiene 30 dias")
    }
}

ejer17("diciembre");


// const meses = [

//     {enero:31},
//     {febrero:28},
//     {marzo:31},
//     {abril:30},
//     {mayo:31},
//     {junio:30},
//     {julio:31},
//     {agosto:31},
//     {septiembre:30},
//     {octubre:31},
//     {noviembre:30},
//     {diciembre:31},
// ];


// let ejer17 = (palabra)=>{
//     console.log("este mes tiene",[meses].includes(palabra))
// };
// ejer17(enero);




carrito.forEach ( producto => 
    console.log(producto, producto.nombre));


//metodo map: esta enfocado para crear nuevos arrays 
//y el foreach muestra informacion de esos arrays


    const arrayMap =carrito.map(producto=>
        producto.nombre);
        (console.log("uso del maps",arrayMap))