# Introducción

## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se ejecuta en el navegador del usuario. Es un lenguaje interpretado, es decir, no necesita ser compilado para ser ejecutado. JavaScript es un lenguaje de programación orientado a objetos, es decir, que permite la creación de objetos y la manipulación de estos.

## Variables en JavaScript

En JavaScript, las variables son contenedores que almacenan valores. Estos valores pueden ser de cualquier tipo, como números, cadenas, arreglos, objetos, funciones, etc. Las variables se declaran con la palabra reservada var, let o const.

```javascript
var nombre = "Juan";
let apellido = "Perez";
const edad = 30;
```
## Objetos en JavaScript

Los objetos son una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, que se denomina método del objeto. En JavaScript, los objetos son dinámicos: los objetos existentes se pueden modificar; pueden agregarse nuevas propiedades; y pueden eliminarse propiedades existentes.

```javascript
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};
```
## Undefined y Null

En JavaScript, undefined y null son dos valores diferentes que representan la ausencia de valor. El valor undefined es el valor predeterminado de las variables que no tienen un valor asignado. El valor null es un valor especial que representa la ausencia intencional de un valor de un objeto.

```javascript
var nombre;
console.log(nombre); // undefined

var nombre = null;
console.log(nombre); // null
```

## Asincronismo en JavaScript

El asincronismo es una característica de JavaScript que permite ejecutar código de forma asíncrona. Esto significa que el código no se ejecuta en orden, sino que se ejecuta en el orden en que se completa la operación.

```javascript
console.log("Hola");
setTimeout(() => {
    console.log("Mundo");
}, 1000);
console.log("!");
```



