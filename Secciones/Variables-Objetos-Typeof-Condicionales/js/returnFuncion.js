function obteneraleatorio() {
    return Math.random();
}

function obtenernombre() {
    return "Juan";
}

function esmayor05() {
    if (obteneraleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

if (esmayor05()) {
    console.log("Es mayor que 0.5");
} else {
    console.log("Es menor que 0.5");
}

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Juan", "Perez");

console.log(persona.nombre);
console.log(persona.apellido);

function creaFuncion() {

    return function (nombre) {
        console.log("Me crearon "+nombre);

        return function () {
            console.log("Segunda funcion");
        }
    }
}
var nuevaFuncion = creaFuncion();

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();