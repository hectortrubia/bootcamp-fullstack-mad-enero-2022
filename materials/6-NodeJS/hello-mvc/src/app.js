import express from 'express';
import flightsRouter from './flights/flights.router';

/**
 * 1. Crear una carpeta por cada recurso de mi app (vuelos, productos, usuarios, aviones, ...)
 * 2. Dentro de esa carpeta debemos hacer como una mini-app:
 *     - Archivo _resource_.router.js ==> definimos el router y las rutas asociadas a su controlador
 *     - Archivo _resource_.controller.js ==> definimos cada uno de los controladores del recurso. 
 *                                           Estos controladores acceden al modelo para operar CRUD con los datos
 *     - Archivo _resource_.model.js ==> implementa funciones CRUD para operar con el recurso, abstrayendo la forma de gestión
 *                                       de los datos
 * 
 * 3. Debemos asociar el router del recurso al app con un path de primer nivel. Para ello se utiliza el 
 *      app.use('PATH', router)
 */


const app = express();
const port = 4000;

app.use('/flights', flightsRouter); // asocio el router de los vuelos al app

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));