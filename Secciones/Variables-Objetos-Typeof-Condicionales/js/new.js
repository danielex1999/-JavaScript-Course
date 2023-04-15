function Persona() {
    this.nombre = "Juan";
    this.apellido = "Perez";
    this.edad = 20;

    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

var juan = new Persona();

console.log(juan);
console.log(juan.nombreCompleto());