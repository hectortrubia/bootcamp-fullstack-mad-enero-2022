import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { accessSync, constants, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';

const app = express();
app.use(express.json()) // for parsing application/json
app.use(cors());
const port = 4000;
const FILE_PATH = './data/users.json';

try {
    accessSync(FILE_PATH, constants.R_OK | constants.W_OK);
} catch (err) {
    console.info('No tenemos acceso al archivo', err);
    mkdirSync('./data');
    writeFileSync(FILE_PATH, '[]');
}

const users = JSON.parse(readFileSync(FILE_PATH, { encoding: 'utf8' }));

app.get('/users', (_req, res) => res.json(users)); // devolvemos la lista entera de usuarios

app.post('/users', (req, res) => {
    const { username } = req.body; // me quedo con el email para validar si existe o no
    if (users.some(u => u.username === username)) {
        // si el usuario existe mando un 409 de conflicto
        res.status(409).json({ error: 'El usuario ya existe en el sistema' });
    } else {
        const id = uuidv4(); // generamos el id
        const user = { // creamos el usuario
            id,
            ...req.body
        };
        users.push(user); // añadimos el usuario
        writeFile(FILE_PATH, JSON.stringify(users)); // actializamos el archivo
        res.status(201).json(user);
    }

});

app.get('/users/:id', (req, res) => {
    const { id } = req.params; // obtengo el id del path param
    const user = users.find(u => u.id === id); // busco el usuario
    if (user !== undefined) res.json(user); // devuelvo el usuario si existe
    else res.sendStatus(404); // devuelvo un 404
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params; // obtengo el id del path param
    const i = users.findIndex(u => u.id === id); // busco el índice del usuario
    if (i === -1) {
        res.sendStatus(404); // devolvemos 404 si no encontramos el usuario
    } else {
        users.splice(i, 1); // borramos el usuario
        writeFile(FILE_PATH, JSON.stringify(users)); // persistimos la información en el archivo
        res.sendStatus(204);
    }
});


app.patch('/users/:id', (req, res) => {
    const { id } = req.params; // obtengo el id del path param
    const i = users.findIndex(u => u.id === id); // busco el índice del usuario
    if (i === -1) {
        res.sendStatus(404); // devolvemos 404 si no encontramos el usuario
    } else {
        users[i] = { // hago un merge quedando como preferencia con el valor del body
            ...users[i],
            ...req.body
        };
        writeFile(FILE_PATH, JSON.stringify(users)); // persistimos la información en el archivo
        res.status(200).json(users[i]);
    }
});

app.listen(port, () => console.log(`servidor levantado en el puerto ${port}`));