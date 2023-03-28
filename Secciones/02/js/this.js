var persona = {
    nombre: "Juan",
    apellido: "Perez",
    imprimirNombre: function () {
        console.log("Nombre Completo " + this.nombre + " " + this.apellido);

    },
    direccion: {
        pais: "Argentina",
        obtenerPais: function () {

            var self = this;

            var nuevaDireccion = function () {
                console.log(self);
                console.log("La direccion es en " + self.pais);
            }
            nuevaDireccion();
        }
    }
}
persona.imprimirNombre();

persona.direccion.obtenerPais();

