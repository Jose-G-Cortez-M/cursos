//MÉTODO FOREACH
var numero = [1, 2, 3, 4, 5, 6, 7, 8];

numero.forEach((element) => {
    console.log(element);
});

console.log('-------------');

for (var element = 0; element < numero.length; element++) {
    console.log(numero[element]);
}


//MÉTODO SOME(verificar si uno de los datos dentro del array cumple una condición), EVERY

let numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros.some((value) => {
    return (value % 2 == 0);
}));

//every es lo contrario a some y muestra el valor a true cuando todos sus elemento cumplen la condición si existe uno que no cumpla muetrsa un false.

let numeros1 = [1, 2, 3, 4, 5, 6];
console.log(numeros1.every((value) => {
    return (value == 5);
}));

//MÉTODO MAP, FILTER ,REDUCE
let numeros2 = [1, 2, 3, 4, 5, 6];
let duplicar = numeros2.map((value) => {
    return value * 2;
})
console.log(duplicar);

//Filter se filtra através de una condición
let numeros3 = [1020, 3340, 7046, 2550, 1092];

let numeros_grandes = numeros3.filter((value) => {
    return (value > 2500);
});
console.log(numeros_grandes);

//reduce método para buscar valores y generar nuevos elementos

let numero4 = [1, 2, 3, 4, 5, 6, 7];
let respuesta = numero4.reduce((sumar, dato_actual) =>
    sumar + dato_actual, 0);
console.log(respuesta);