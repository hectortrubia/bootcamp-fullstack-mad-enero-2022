import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import { readFileSync, writeFileSync, mkdirSync, accessSync, constants } from 'fs';

const FILE_PATH = './data/products.json';
const app = express();
const port = 4000;
app.use(express.json()); // esto procesa el body en formato JSON y asi lo puedo leer en la request

// inicializar el archivo si NO existe
try {
    accessSync(FILE_PATH, constants.R_OK | constants.W_OK);
} catch (err) {
    console.warn('Error al acceder al archivo: ', err);
    console.warn('Creando un archivo con un array de productos vacio...');
    mkdirSync('data');
    writeFileSync(FILE_PATH, '[]');
}

const products = JSON.parse(readFileSync(FILE_PATH, { encoding: 'utf8' }));


app.get('/products', (req, res) => res.json(products));

app.post('/products', async (req, res) => {
    //1. proceso el body (gracias al express.json()) req.body NO es undefined
    if (typeof req.body.price !== 'number') {
        res.status(400).json({ error: 'El precio debe ser un número' });
    } else {
        //2. creo un nuevo producto
        const id = uuidv4();
        const product = {
            ...req.body,
            id // esto es lo mismo que poner id:id
        }
        //3. añado el producto al array
        products.push(product);
        await fs.writeFile(FILE_PATH, JSON.stringify(products));
        //4. devolver el producto creado
        res.json(product);
    }

})

const server = app.listen(port, () => {
    console.log(`Servidor escuchan en el puerto ${port}`);
});