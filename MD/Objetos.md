# Profundizando en los objetos

## Arreglos

Los arreglos son una colección de elementos. Los elementos de un arreglo pueden ser de cualquier tipo, como números, cadenas, arreglos, objetos, funciones, etc. Los arreglos se declaran con corchetes `[]` y los elementos se separan con comas `,`.

```javascript
var numeros = [1, 2, 3, 4, 5];
var nombres = ["Juan", "Pedro", "Pablo"];
var mezcla = [1, "Juan", true, null, undefined];
```

Los arreglos son objetos, por lo que tienen propiedades y métodos. La propiedad `length` devuelve el número de elementos del arreglo.

```javascript
var numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // 5
```

### Métodos de los arreglos

#### push

El método `push` agrega un elemento al final del arreglo.

```javascript
var numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]
```

#### pop

El método `pop` elimina el último elemento del arreglo.

```javascript
var numeros = [1, 2, 3, 4, 5];
numeros.pop();
console.log(numeros); // [1, 2, 3, 4]
```

#### unshift

El método `unshift` agrega un elemento al inicio del arreglo.

```javascript
var numeros = [1, 2, 3, 4, 5];
numeros.unshift(0);
console.log(numeros); // [0, 1, 2, 3, 4, 5]
```

#### shift

El método `shift` elimina el primer elemento del arreglo.

```javascript
var numeros = [1, 2, 3, 4, 5];
numeros.shift();
console.log(numeros); // [2, 3, 4, 5]
```

#### indexOf

El método `indexOf` devuelve el índice del elemento que se le pasa como argumento. Si el elemento no existe, devuelve `-1`.

```javascript
var numeros = [1, 2, 3, 4, 5];
console.log(numeros.indexOf(3)); // 2
console.log(numeros.indexOf(6)); // -1
```

#### map

El método `map` ejecuta una función por cada elemento del arreglo y devuelve un nuevo arreglo con los resultados.

```javascript
var numeros = [1, 2, 3, 4, 5];
var dobles = numeros.map(function(numero) {
  return numero * 2;
});
console.log(dobles); // [2, 4, 6, 8, 10]
```

