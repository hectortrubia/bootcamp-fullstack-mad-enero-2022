
import express from 'express';
import { helloCtrl } from './hello.controller.js';



const router = express.Router();

router.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
 
    .get(helloCtrl)

export default router;