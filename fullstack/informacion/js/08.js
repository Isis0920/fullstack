"use strict";

//crear una instancia

//crear un objeto con el object constructor
/*llamado fecha con propiedades, año, mes y dia 
4 valores distintos */



/*crear un objeto contructor Libro con propiedades nombre, precio, isbn 
y generar una instancia al menos */

class Libro {
    constructor(nombre, precio, isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}

const libroObjeto = new Libro("valens", 120, 4635);
console.log(libroObjeto);

//herencias


//copiar propiedades de la calse

//extends sirve para copai y seguido el nombre de la clase ya creada
//en el constructor se debe poner parametros que vas a copiar y los que vas a crear
//en el super las propiedades de la clase que vas a copai 
//this.categoria, la estas creando y su vez le das valos a esa propiedad


class categoria extends Libro {
    constructor(nombre, categoria, precio, isbn) {
        super(nombre, precio, isbn);
        this.categoria = categoria;

    }
    formatearProducto3() { //funcion dentro de la calse categoria
        console.log(`el producto ${this.nombre}pertenece a la ategoria
        ${this.categoria}`)
    }
}

const libroObjeto3 = new categoria("curso fullstac",120,8676,"progrmacion");
console.log(libroObjeto3);
console.log(libroObjeto3.formatearProducto3());









/*obeject contructor con una clase que se llame 
coche y las propiedades
marca, año, motor, y matricula 
una funcion que me diga el numero años que tiene el coche
instancia con los datos del coche*/

class Coche{
    constructor(marca,año,motor,matricula){
        this.marca=marca;
        this.año=año;
        this.motores=motor;
        this.matricula=matricula;
    }
    datosAgregados(){
        console.log(`la edad del coche ${this.marca} es 
        ${2023-this.año} años `)//aca se hacen las operaciones
    }
}

//instancia:
const descripciCoche = new Coche("mercedes",2000,"13caballos",
"jh653");
console.log(descripciCoche);
console.log(descripciCoche.datosAgregados());
//otra instancia
const cochePepa = new Coche("mini morris", 1200, "65njj","32ddg");
console.log(cochePepa);




