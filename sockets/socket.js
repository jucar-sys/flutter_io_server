//Importamos la constante io del archivo index.js
const { io } = require('../index.js');

// Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    //client.on('event', data => { /* … */ });
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    /* Recibir y enviar mensajes */
    // Recibir mensaje
    client.on('mensaje', ( payload ) => {
        console.log('Mensaje del cliente recibido: ', payload);

        // Enviar respuesta a todos los clientes conectados
        io.emit('mensaje', {admin: 'Nuevo mensaje del servidor', msj: payload });
    });
});