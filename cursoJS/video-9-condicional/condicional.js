//IF
let a = 10;
if (a > 5) {
    console.log('SI ES MAYOR');
}
//ELSE
if (a < 5) {
    console.log('SI ES MAYOR');

} else {
    console.log('NO ES MAYOR');
}
//ELSE IF 
var c = 20;
var b = 20;
if (c > b) {
    console.log(`${c} es mayor a: ${b}`);
} else if (c = b) {
    console.log(`${c} es igual a: ${b}`);
} else {
    console.log(`${c} es menor a: ${b}`);
}
//switch se usa para menús

let curso = "python";

switch (curso) {
    case 'java':
        console.log("Java");
        break;
    case 'PHP':
        console.log("php");
        break;
    case 'javascript':
        console.log("javascript");
        break;
    default:
        console.log("No existe")
        break;
}


// &&(y)deben cumplirse todas las codiciones o dara un falso
//|| (o)si se cumple una condición ya da verdadero