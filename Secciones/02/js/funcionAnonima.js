(function () {
    var a = 10;

    console.log(a);

    function cambiarA(params) {
        a = 20;
    }

    cambiarA();

    console.log(a);

})();

function ejecutarFuncion(fn) {
    if (fn() === 1) {
        return true;
    } else {
        return false;
    }
};

console.log(

    ejecutarFuncion(function () {
        console.log("Funcion anonima ejecutada");
        return 1;
    })
);



