// este archivo tendrá la declaración y lógica de los controllers, es decir, las funciones que gestionan la ruta
import {retrieveBooks, createBook, retrieveBookById } from './booksmodel.js';
// import { v4 as uuidv4 } from 'uuid';



export const getBooksCtrl = async (req, res) => {
    // este controlador debe consultar en el modelo los vuelos y devolverlos al usuario
    const books = await retrieveBooks();
    res.json(books);
};

export const getBookByIdCtrl = async (req, res) => {
    const  {ISBN} = req.params;
    const book = await retrieveBookById(ISBN);
    if(book !== undefined) res.json(book);
    else res.sendStatus(404);
}


export const createBookCrtl = async (req,res) => {
    // recuperr el body
    const book = {
        ...req.body,
    };
    await createBook(book);
    res.status(201).json(book);
}