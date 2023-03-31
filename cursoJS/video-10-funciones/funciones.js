//FUNCIÓN CON ARGUMENTOS
function suma(num1, num2) {
    var suma = num1 + num2;
    console.log('La suma es: ' + suma);
}
suma(9, 2);

//FUNCIÓN CON RETORNO
function resta(num3, num4) {
    var resta = num3 - num4;
    return resta;
}
console.log('la resta es:' + resta(4, 8));

//FUNCIÓN DE FLECHA O FUNCIONES ANÓNIMAS
//FORMA LARGA DE LA FUNCIÓN ANÓNIMA
var multiplicacion = function(n1, n2) { return n1 * n2 }
console.log('La multiplicación es: ' + multiplicacion(7, 8));
//FORMA CORTA DE LA FUNCIÓN ANÓNIMA o LLAMADA FUNCIÓN FECHA
var division = (n1, n2) => n1 / n2;
console.log('El resultao de la división es: ' + division(8, 2));

//OTRO EJEMPLO:
var nombre = function() { return 'José' }
console.log(nombre());

//FUNCIÓN ANIDADA
function operacion() {
    const PI = 3.14;

    function area(radio) {
        var area = PI * radio * radio;
        console.log('El área del circulo es: ' + area)
    }
    operacion.area = area;
}

var radio = 4;
operacion();
operacion.area(radio);