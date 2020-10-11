const express = require('express');
const path = require('path');
require('dotenv').config();

// App de express
const app = express();

// Node Server
const server = require('http').createServer(app);
// Exportamos el io ya que lo utilizamos en el archivo de mensajes (sockets.js)
module.exports.io = require('socket.io')(server);
// Conectamos el archivo que contiene la lógica de los mensajes
require('./sockets/socket.js');

// Path publico
const publicPath = path.resolve(__dirname, 'public');
// Conectar app al html
app.use(express.static(publicPath));


// Ejecutamos un escuchador, Parametros: Puerto de conexion, Callback
server.listen(process.env.PORT, (err) => {

    // Si el listen retorna un error mostrar en consola dicho error
    if(err) throw new Error(err);

    // Si no lanza el error
    console.log(`Servidor conectado en puerto:`, process.env.PORT);

});