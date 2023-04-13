"use strict"; //te muestra el error


//crear primera consulta a la base de datos


//una forma de ver:

function obtenerEmpleados() {
    fetch("empleados.json")
        .then(resultado => {
            return resultado.json()
        })
        .then(datos => {
            console.log(datos);
            const{empleados} = datos;
            empleados.forEach(empleado => {
                console.log(empleado.nombre)
                
            });
        })
}
obtenerEmpleados();

//otra forma de ver:

async function obtenerEmpleados2() {
    const resultado = await fetch ("empleados.json");

    const datos = await resultado.json();

    console.log(datos)
}

obtenerEmpleados2();


