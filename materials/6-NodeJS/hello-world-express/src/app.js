import express from 'express'; // importamos express para poder usarlo
import cors from 'cors'; // importamos la gestión del cors
import fs from 'fs/promises';

const app = express(); // creamos la app
const port =  3001; // definimos el puerto

app.use(cors()); // habilitamos el cors para poder llamar desde nuestra app de reactJS

// definimos las rutas http (necesitamos para un endpoint el METODO + PATH)

app.get('/hello', (req, res) => {
    // esta función se va a ejecutar cada vez que un cliente llame por GET a la URL  '/hello'
    // res.send(JSON.stringify({hola: 'mundo'}));
    res.json({hola: 'mundo'});
});

app.post('/hello', (req, res) => {
    // esta función se va a ejecutar cada vez que un cliente llame por GET a la URL  '/hello'
    // res.send(JSON.stringify({hola: 'mundo'}));
    res.json({hola: 'mundo post'});
});

app.get('/pikachu', async (req, res) => {
    const pikachu = await fs.readFile('./data/pikachu.json', {encoding: 'utf8'});
    res.json(JSON.parse(pikachu));
});

// una vez que defino todas las rutas, ahora pongo a funcionar el server
app.listen(port, () => {
    console.log(`El proceso del SO es ${process.pid}`);
    console.log(`Servidor escuchando en el puerto ${port}`);
});