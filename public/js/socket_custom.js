var socket = io();

// Escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Los envir son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Julian Andres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});