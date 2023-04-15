# Variables, Objetos, Typeof y Condicionales

## Tipos primitivos

En JavaScript, los tipos de datos primitivos son los siguientes:

- `number`: Números enteros y decimales.
- `string`: Cadenas de texto.
- `boolean`: Valores booleanos.
- `undefined`: Valores indefinidos.
- `null`: Valores nulos.

## Por valor y por referencia

En JavaScript, los tipos de datos primitivos son por valor, es decir, que cuando se asigna un valor a una variable, se crea una copia del valor en la variable. Por ejemplo:

```javascript
var a = 10;
var b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
```

## Funciones

En JavaScript, las funciones son objetos. Esto significa que las funciones pueden tener propiedades y métodos. Por ejemplo:

```javascript
function sumar(a, b) {
    return a + b;
}
sumar.nombre = "Sumar";
sumar.version = "1.0.0";
console.log(sumar(2, 3)); // 5
console.log(sumar.nombre); // Sumar
console.log(sumar.version); // 1.0.0
```

## Metodo This

El método `this` hace referencia al objeto actual. Por ejemplo:

```javascript
var juan = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}
console.log(juan.nombreCompleto()); // Juan Perez
```

## Funciones anónimas

Las funciones anónimas son funciones sin nombre. Por ejemplo:

```javascript
var juan = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    nombreCompleto: function() {
        var self = this;
        setTimeout(function() {
            console.log(self.nombre + " " + self.apellido);
        }, 1000);
    }
}
juan.nombreCompleto(); // Juan Perez
```

## Funciones Typeof e instanceof

La función `typeof` devuelve el tipo de dato de una variable. Por ejemplo:

```javascript
var a = 10;
var b = "Hola";
var c = true;
var d = {};
var e = [];
var f = null;
var g;
console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // object
console.log(typeof e); // object
console.log(typeof f); // object
console.log(typeof g); // undefined
```

La función `instanceof` devuelve `true` si un objeto es instancia de un tipo de dato. Por ejemplo:

```javascript
var a = 10;
var b = "Hola";
var c = true;
var d = {};
var e = [];
var f = null;
var g;
console.log(a instanceof Number); // false
console.log(b instanceof String); // false
console.log(c instanceof Boolean); // false
console.log(d instanceof Object); // true
console.log(e instanceof Array); // true
console.log(f instanceof Object); // false
console.log(g instanceof undefined); // false
```

