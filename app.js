import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//conexion a base de datos 
//import mongoose from './db/db.js'; //ruta al archivo
import connectToDatabase from './db/db.js';



const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.send('<h1>En funcionanmiento...</h1>');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);


setTimeout(() => {
  app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port: '+ app.get('puerto') + ' y tambien esta tu hermana');
  });
}, 1000);

connectToDatabase();


//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
//const path = require('path');
//const { connect } = require('http2');

//const app = express();



//instalar json y urlencoded 

/* 
 Morgan : nos permite pintar las peticiones http request 
 que llegan a nuestra app
 cors 
  Intercambio de Recursos de Origen Cruzado (CORS) es una característica de seguridad del navegador 
  que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador
*/
  
/*
  Incorporamos un directorio publico por lo tanto
  se puede crear un archivo index.html para mostrar un resultado
  de igual forma configuraremos nuestro archivo app.js

*/
//aqui le digo que cuando en el navegador se llame al localhost:3000
//le digo que debe mostar el mensaje si esta escuchando peticiones



//modo history vue.js

//asignamos puerto automatico



