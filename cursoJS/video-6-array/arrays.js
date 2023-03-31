//arrays

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros);
var estudiantes = ['Maria', 'Pepe', 'Carlos'];
console.log(estudiantes);
console.log(estudiantes[2]);
//logitud del arreglo
console.log(estudiantes.length);
//ver el arreglo al revés 
console.log(estudiantes.reverse());
//ordenar el arreglo
console.log(estudiantes.sort());
//añadir un elemento al arreglo
console.log(estudiantes.push('Luis'));
//eliminar elemento del arreglo
console.log(estudiantes.shift());
//eliminar último elemento del arreglo
console.log(estudiantes.pop());
//buscar posición
console.log(estudiantes.indexOf("Pepe"));
//añadir elemetos al inicio del array
console.log(estudiantes.unshift("Sara"));
console.log(estudiantes);

var grupo_a = [1, 2, 3];
var grupo_b = [4, 5, 6];
console.log(grupo_a.concat(grupo_b));