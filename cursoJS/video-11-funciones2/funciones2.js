function area() {
    const PI = 3.14;
    var radio = document.getElementById('radio').value;
    var resultado = PI * radio * radio;
    document.getElementById('resultado').value = resultado;
}

//eval evalua una expresión
var a = 10;
var b = 20;
var x = eval("a+b");
var y = eval("3+4");
var z = eval("a+8");
var respuesta = a + z;
console.log(x);
console.log(respuesta);
console.log(x + a);
console.log(x + y);

//parsefloat convierte una cadena en un valor flotante si tienes parte númerica y alfabética puedes separar con esté
var a = parseFloat("10");
var b = parseFloat("20curso");
var c = parseInt("10curso");

console.log(a);
console.log(b);
console.log(c);

//date.parse() da como resultado el tiempo exato desde 1 enero de 1970 hasta a fecha que le pasamos (con precisión a milisegundos)
//1 enero de 1970;
var dato = "april 26,2020 1:30 PM";
var resultado = Date.parse(dato);
console.log(resultado);