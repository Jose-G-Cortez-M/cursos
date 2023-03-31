/*const formulario = document.getElementById('form');
formulario.addEventListener('submit', function(e) {
    e.preventDefault;
    let mail = document.getElementById('email-form').value;
    console.log(mail);
});*/
/* eventos especiales
const formulario = document.getElementById('form')
const checkbox = document.getElementById(activador)
checkbox, addEventListener('change', e => {
    if (e.target.checked) {
        console.log('solicitud aceptada')
    } else {
        console.log('active la solicitud por favor')
    }
}); */
/*Eventos de formulario*/
const video_mp4 = document.getElementById('video'),
    boton_play = document.getElementById('play'),
    boton_pause = document.getElementById('pause');
boton_play.addEventListener('click', () => {
    video_mp4.play()
})
boton_pause.addEventListener('click', () => {
    video_mp4.pause()
})

const nuevo = document.createElement('a'); //creación de la etiqueta
//agregar atributos
nuevo.className = 'clase'
nuevo.id = 'nuevo_id'
nuevo.setAttribute('href', '#')
nuevo.textContent = 'nuevo elemento'

//crear la constante donde voy agregar la etiqueta
const nuevo_elemento = document.getElementById('barra')

//montar el elemento dentro del navbar
nuevo_elemento.appendChild(nuevo)