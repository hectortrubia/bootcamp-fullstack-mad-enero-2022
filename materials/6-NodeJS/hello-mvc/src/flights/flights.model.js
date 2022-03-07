// este será el encargado de ofrecer operaciones para gestionar/acceder al modelo
import {readFileSync, accessSync, mkdirSync, writeFileSync} from 'fs';

const FILE_PATH = './data/flights.json';

try {
    accessSync(FILE_PATH, constants.R_OK | constants.W_OK);
} catch (err) {
    console.info('No tenemos acceso al archivo', err);
    mkdirSync('./data');
    writeFileSync(FILE_PATH, '[]');
}

const flights = JSON.parse(readFileSync(FILE_PATH, { encoding: 'utf8' }));

// function que devuelve los vuelos
export const retrieveFlights = () => flights;

export const retrieveFlightById = id => {
    const flights = retrieveFlights();
    return flights.find(f => f.id === id);
}