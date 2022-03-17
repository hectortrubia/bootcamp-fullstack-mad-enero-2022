
import express from 'express';
import {getBooksCtrl, createBookCrtl, getBookByIdCtrl} from './bookscontroller.js';
import {validateBook} from './booksmiddleware.js';

const router = express.Router();

router.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .get(getBooksCtrl)
    .post(validateBook, createBookCrtl)

router.route('/:ISBN')
    .get(getBookByIdCtrl)


export default router;