import express from 'express';
import flightsRouter from './flights/flights.router.js';

/**
 * 1. En Atlas (cloud de mongo) crear la base de datos y las collections (vacias) de cada entidad
 * 2. Instalar en nuestro proyecto el driver de la BBDD (librería que conecta con Mongodb). 
 *      > npm i mongodb
 * 3. Tener la docu a mano. para nodejs (https://docs.mongodb.com/drivers/node/current/)
 * 4. Importar la clase MongoClient de la librería
 *      > import { MongoClient } from 'mongodb';
 * 5. Crear una instancia de cliente de conexión.
 *      > const client = new MongoClient('URL_CONEXION_OBTENIDA_DE_ATLAS');
 * 6. Ya cuando queramos hacer una peticion a la BBDD, realizaremos una conexión con el cliente
 *      > await client.connect()
 * 7. Seleccionamos la BBDD de la conexión
 *      > const db = client.db('nombre_bbdd');
 * 8. Seleccionar la collection con la que queremos operar
 *      > const collection = db.collection('nombre_collection');
 * 9. Realizamos la operacion que queramos hacer dentro del CRUD
 *     - Ejemplo para obtener un elemento
 *          const query = { title: 'Back to the Future' };
            const document = await collection.findOne(query);
   10. Muy importante el finally con el cierre de la conexión
        finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }

    ¿Qué funciones existen para hacer el CRUD?

    - Crear --> 
        * insertOne ==> Crea un nuevo documento en la collection. (https://docs.mongodb.com/drivers/node/current/usage-examples/insertOne/)
        * insertMany ==> Crea varios documentos nuevos a la vez. (https://docs.mongodb.com/drivers/node/current/usage-examples/insertMany/)
    - leer --> 
        * findOne ==> Obtiene el primer documento que cumpla la query (https://docs.mongodb.com/drivers/node/current/usage-examples/findOne/)
        * find ==> devuelve la lista de documentos que cumpla la query. (https://docs.mongodb.com/drivers/node/current/usage-examples/find/)
                   Para tener un array JS debemos acompañarlo del método toArray()
        * countDocuments ==> Devuelve el número de documentos que cumplan una query. (https://docs.mongodb.com/drivers/node/current/usage-examples/count/)
                             Es util cuando queremos saber un total sin tener que obtener TODOS los documentos
        * distinct ==> Devuelve los valores distintos de un campo que existan en una collection. Se puede especificar
                       una query que se quiera cumplir. (https://docs.mongodb.com/drivers/node/current/usage-examples/distinct/)
    - borrar --> Las operaciones de borrado devuelven un atributo (deleteCount) con el número de documentos que ha borrado la operación
        * deleteOne ==> Borra el primer documento que cumpla con una query. (https://docs.mongodb.com/drivers/node/current/usage-examples/deleteOne/)
        * deleteMany ==> Borra todos los documentos que cumplan la query. (https://docs.mongodb.com/drivers/node/current/usage-examples/deleteMany/)
    
    - actualizacion --> 
        * updateOne => https://docs.mongodb.com/drivers/node/current/usage-examples/updateOne/
        * updateMany => https://docs.mongodb.com/drivers/node/current/usage-examples/updateMany/
        * replaceOne => https://docs.mongodb.com/drivers/node/current/usage-examples/replaceOne/
 */

const app = express();
const port = 4000;
app.use(express.json());
app.use('/flights', flightsRouter); // asocio el router de los vuelos al app

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));