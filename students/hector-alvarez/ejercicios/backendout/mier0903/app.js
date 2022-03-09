
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const id = uuidv4();
app.use(cors());


const port = process.env.PORT || 4000;




app.listen(port, () => {
    console.log(`servidor levantado en puerto: ${port}`)
})