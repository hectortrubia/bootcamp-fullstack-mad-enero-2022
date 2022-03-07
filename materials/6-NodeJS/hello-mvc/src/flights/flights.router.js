import express from 'express';
import {getFlightsCtrl, getFlightByIdCtrl} from './flights.controller';

const router = express.router();

router.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .get(getFlightsCtrl)

router.route('/:id')
    .get(getFlightByIdCtrl)


export default router;