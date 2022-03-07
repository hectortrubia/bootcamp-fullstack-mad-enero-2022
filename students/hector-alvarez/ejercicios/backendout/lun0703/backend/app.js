import express from 'express';
import cors from 'cors';
import router from './src/helloworld/hello.router.js'


// Ya hemos aprendido a organizar mejor nuestra aplicación en express, ahora vamos a ponerlo en practica:
// Vamos a crear app en express levantada en el puerto 4000 que tenga una ruta "/", esta ruta estará desde una carpeta de rutas,  la cual debe tener un método get que devuelva un "hola mundo desde el router ".
// Ahora vamos a crearnos una carpeta Controller donde debemos tener una función que devuelva un "hola mundo desde el controller", de nuestra ruta "/" con el método Get.
// Ya tenemos nuestra carpeta de router y de controller ahora vamos a crearnos la carpeta de model la cual debe tener una función que devuelva un "hola mundo desde el model".


const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4000;


app.use('/', router); // asocio el router de los vuelos al app

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



