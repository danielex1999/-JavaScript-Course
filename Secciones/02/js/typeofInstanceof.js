function identifica(params) {

    console.log(typeof params);
    console.log(params instanceof Persona);


}

function Persona() {
    this.nombre = "Juan";
    this.edad = 20;
}

var Juan = new Persona();

identifica(Juan);