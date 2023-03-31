/*let elemento = window;
console.log(elemento);*/
/*trabajar con un elemento HTML de forma directa en JS*/

/*let elemento = document.querySelector('h1');
console.log(elemento);*/

/* let elemento = document.links;
console.log(elemento);*/
/*
const elemento = document.getElementById('mensajes');
console.log(elemento);*/

/*const abuelo = document.querySelector('ul.listas-cursos > li.list');
console.log(abuelo.parentElement.parentElement);*/

/*const hermanos = document.querySelector('ul.listas-cursos > li.list');
console.log(hermanos.nextElementSibling);*/

/*const enviar = document.getElementById('mensaje');

function mensaje_uno() { alert('mensaje enviado') }

function mensaje_dos() {
    alert('mensaje guardado')

}*/
/*
function evento() {
    alert('el mouse esta en movimiento');
}*/
/*
const entrada = document.getElementById('input');
entrada.addEventListener('keydown', function(e) {
    console.log('presionaste la tecla: ' + e.key)
});*/
/*Elementos múltiples
const nodos = []
for (let i = 0; i < 80; i++) {
    const nodo = document.createElement('input');
    nodos.push(nodo)
}
document.body.append(...nodos)*/
const padre = document.getElementById('padre')
const nieto = document.getElementById('nieto-dos')
    //console.log(padre.children);
    //console.log(nieto.nextElementSibling)
console.log(padre.parentElement.parentElement)