import express from 'express';
import {getFlightsCtrl, getFlightByIdCtrl, createFlightCrtl} from './flights.controller.js';
import {validateFlight} from './flights.middleware.js';

const router = express.Router();

router.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .get(getFlightsCtrl)
    .post(validateFlight, createFlightCrtl)

router.route('/:id')
    .get(getFlightByIdCtrl)


export default router;