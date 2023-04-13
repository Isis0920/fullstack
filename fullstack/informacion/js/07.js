"use strict";


// let reserva = {
//     nombre: "valentina",
//     apellido: "mendo",
//     total: 22,
//     pagado: true,
// }

// console.log(reserva);

// reserva.informacion = function () {
//     console.log(`el cliente ${this.nombre} con apellidpos ${this.apellido} su reserva es ${this.pagado}
//     con total ${this.total}`)
// };

// console.log(informacion);

/*crear un objeto con nombre fecha, y va a recibir 4 propiedades
una que sra año
otra mes
otra dia y la ultima que sera faltantes y sera esta una
funcion  y esa funcion me dira 
los dias que quedan para cabar le mes
suponiendo que tienes 31 dias*/

let fecha = {
    año: 2023,
    mes: 3,
    dia: 21,
    faltantes: function () {
        console.log(`faltan ${31 - this.dia} dias para acabar el mes`);
        console.log(`faltan ${12 - this.mes} meses para acabar el año`);
    }
}

fecha.faltantes();


