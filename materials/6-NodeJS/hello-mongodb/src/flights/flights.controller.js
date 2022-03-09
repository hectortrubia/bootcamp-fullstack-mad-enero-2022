// este archivo tendrá la declaración y lógica de los controllers, es decir, las funciones que gestionan la ruta
import {retrieveFlights, retrieveFlightById, createFlight} from './flights.model.js';
import { v4 as uuidv4 } from 'uuid';



export const getFlightsCtrl = async (req, res) => {
    // este controlador debe consultar en el modelo los vuelos y devolverlos al usuario
    const flights = await retrieveFlights();
    res.json(flights);
};

export const getFlightByIdCtrl = async (req, res) => {
    const  {id} = req.params;
    const flight = await retrieveFlightById(id);
    if(flight !== undefined) res.json(flight);
    else res.sendStatus(404);
}


export const createFlightCrtl = async (req,res) => {
    // recuperr el body
    const flight = {
        ...req.body,
        id: uuidv4()
    };
    await createFlight(flight);
    res.status(201).json(flight);
}