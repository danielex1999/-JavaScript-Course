function Persona(params) {
    this.nombre= "Juan";
    this.apellido="Cavero";
    this.edad=24;
    this.pais="Costa Rica";
    
}
Persona.prototype.imprimirinfo = function(){
    console.log(this.nombre+" "+this.apellido+" ("+this.edad+")")
}

var dan = new Persona();

Number.prototype.esPostivo= function () {
    if(this>0){
        return true;
    }else{
        return false;
    }
}