import { MongoClient } from 'mongodb'; // paso 4

const URI = 'mongodb+srv://demo_bootcamp:demo_bootcamp@learning.c7hty.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'demo-driver';
const COLLECTION_NAME = 'flights';
const client = new MongoClient(URI); // paso 5


// function que devuelve los vuelos
export const retrieveFlights = async () => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const flightsCol = db.collection(COLLECTION_NAME); // paso 8
        const opt = {
            projection: { _id:0 }
        }
        // a partir de aqui ya puedo hacer operaciones con la collection
        const flights = await flightsCol.find({}, opt).toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        return flights;
    }catch(err){
        console.error('Retrieve Flights error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};

export const retrieveFlightById = async id => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const flightsCol = db.collection(COLLECTION_NAME); // paso 8
        const opt = {
            projection: { _id:0 }
        }
        const query = { id };
        // a partir de aqui ya puedo hacer operaciones con la collection
        const f = await flightsCol.findOne(query, opt);// paso 9 
        return f ?? undefined;
    }catch(err){
        console.error('Retrieve Flight By id error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const createFlight = async (flight) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const flightsCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
        await flightsCol.insertOne(flight);// paso 9 
    }catch(err){
        console.error('Retrieve Flight By id error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}