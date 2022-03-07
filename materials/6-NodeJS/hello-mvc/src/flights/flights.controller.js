// este archivo tendrá la declaración y lógica de los controllers, es decir, las funciones que gestionan la ruta
import {retrieveFlights, retrieveFlightById} from './flights.model';



export const getFlightsCtrl = (req, res) => {
    // este controlador debe consultar en el modelo los vuelos y devolverlos al usuario
    const flights = retrieveFlights();
    res.json(flights);
};

export const getFlightByIdCtrl = (req, res) => {
    const  {id} = req.params;
    const flight = retrieveFlightById(id);
    if(flight !== undefined) res.json(flight);
    else res.sendStatus(404);
}