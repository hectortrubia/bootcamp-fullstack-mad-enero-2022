import { MongoClient } from 'mongodb'; // paso 4

// const URI = 'mongodb+srv://demo_bootcamp:demo_bootcamp@learning.c7hty.mongodb.net/?retryWrites=true&w=majority';
const URI = 'mongodb+srv://hectortru:FIJF8z0VKoLB6p1K@cluster0.7clpj.mongodb.net/Library?retryWrites=true&w=majority';
const DB_NAME = 'Library';
const COLLECTION_NAME = 'Books';
const client = new MongoClient(URI); // paso 5


// function que devuelve los libros
export const retrieveBooks = async (book) => {
    try {
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        // await booksCol.insertOne(book)
        // const opt = {
        //     projection: { _id:0 }
        // }
        // a partir de aqui ya puedo hacer operaciones con la collection
        const books = await booksCol.find().toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        return books;
    } catch (err) {
        console.error('Retrieve Books error: ', err);
    } finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};

export const retrieveBookById = async ISBN => {
    try {
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        const query = { ISBN: ISBN };
        // a partir de aqui ya puedo hacer operaciones con la collection
        const f = await booksCol.findOne(query);// paso 9 
        return f ?? undefined;
    } catch (err) {
        console.error('Retrieve Book By iSBN error: ', err);
    } finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const createBook = async (book) => {
    try {
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const booksCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
        await booksCol.insertOne(book);// paso 9 
    } catch (err) {
        console.error('Retrieve Book By SBN error: ', err);
    } finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}