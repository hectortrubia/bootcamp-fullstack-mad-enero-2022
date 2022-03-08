import express from 'express';


const app = express();
const port  = 4000;

/**
 * Para una ruta en NodeJS se pueden encadenar funciones handlers entre medias de la función 
 * handler final (lo que hemos llamado controller). De tal manera que la petición va pasando entre 
 * esas funciones intermedias. A estas funciones se les conoce como `middlewares`. 
 * 
 * Middleware === función que recibe 3 parámetros de entrada (req, res, next). El último parámetro next
 *                es una función que pasa el testigo de la petición al siguiente handler registrado
 * 
 * Los middleware se utilizan mucho para validaciones o procesamientos generales de la request
 * 
 * https://expressjs.com/en/guide/writing-middleware.html
 * https://expressjs.com/en/guide/using-middleware.html 
 * 
 */

app.get('/',
 (req, res, next)=> {
    console.log('Esto es un middleware');
    // puedo editar la request y a partir de aquí los siguientes manejadores tienen la propiedad bootcamp en la request
    req.bootcamp = 'Estoy editando la request desde un middleware';
    const {q} = req.query;
    if(q === 'exit'){
        res.status(400).send('Exit en el middleware'); // puedo cortar la cadena de handlers en cualquier momento
    }else{
        next();// le paso el testigo al siguiente handler
    }
 }
,(req, res) => {
    console.log('hello');
    console.log(req.bootcamp);
    res.send('Hello World');
});


app.listen(port, () => console.log(`Server started on port ${port}`));