import express from 'express';


const router = express.router();

router.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .get()


export default router;