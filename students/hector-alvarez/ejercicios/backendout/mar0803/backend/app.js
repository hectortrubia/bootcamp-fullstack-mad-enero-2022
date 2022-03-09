import express from 'express';
import cors from 'cors';


// Hello middleware:
// Crear un middleware que imprima la ip de la petición y continúe al siguiente middleware. Asociar el middleware a toda la APP. Crear dos rutas get sin MVC. Una que devuelva 'hello' y otra que devuelva 'goodbye'. Verificar que llamando a una o llamando a la otra se registra la ip de la petición


const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4000;



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// let middleware = function (req, res, next){
//     console.log(req.ip)
//     console.log('LOGGED');
//     next();
// };
// app.use(middleware)



// app.get('/hello', (req, res) => {
//     res.send('hello');
// });


// app.get('/goodbye', (req, res) => {
//     res.send('goodbye');
// });


// let middle = function()


// 1. Crear un servidor http expressjs con una ruta GET en un router, que devuelva un texto que diga "Hola Router". Añadir a esa aplicación lo siguiente:
// 2. Un middleware de aplicación que pinte por consola en el servidor "Hola mundo App Middleware"
// 3. Un middleware de ruter que pinte por consola en el servidor "Hola mundo Router Middleware"




