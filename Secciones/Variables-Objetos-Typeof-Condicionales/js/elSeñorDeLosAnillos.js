
function jugador(nombre) {

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo) {

        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        } else {
            console.info(this.nombre + " no tiene SP");
        }
        this.estado(jugadorObjetivo);
    }

    this.tirarflecha = function (jugadorObjetivo) {
        if(jugadorObjetivo.pv>40){
            jugadorObjetivo.pv -=40;
        }else{
            jugadorObjetivo.pv=0;
            console.error(jugadorObjetivo.nombre+" ha muerto")
        }
        this.estado(jugadorObjetivo)
    }

    this.estado = function (jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var gandalf = new jugador("Gandalf");
var legolas = new jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);
