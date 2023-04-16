// Arreglo
var arr = [
    true,
    {
        nombre: "Fernando",
        apellido: "Herrera"
    },
    function () {
        console.log("Estoy viviendo en un arreglo.");
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.apellido);
    },
    [
        "Fernando",
        "Carlos",
        "Hernando",
        "Melissa",
        [
            "Juan",
            "Pedro",
            "Dilcia",
            function () {
                console.log(this);
            }
        ]
    ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

// Invocando a la funcion anonima
arr[2]();

// Posicion 3 - arreglo 1
arr[3](arr[1]);

// Posicion 4 - arreglo 3 - posicion 1
console.log(arr[4][4][1]);

var arreglo2 = arr[4][4];

arreglo2[1] = "Pedra!!";

console.log(arreglo2);
console.log(arr);
