var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San Jose",
        edificio: {
            nombre: "Edificio Principal",
            telefono: "2222-3333"
        }
    }
};

console.log(persona.direccion.pais);
console.log(persona.direccion);

persona.direccion.zipcode = 10101;

console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio.telefono);

var edificio = persona.direccion.edificio;

edificio.nopiso = "8vo piso";

console.log(persona);


var campo = "edad";
console.log(persona[campo]);