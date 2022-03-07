import express from 'express';
import cors from 'cors';
import {readFileSync, rm} from 'fs'
import {writeFile} from 'fs'
import { v4 as uuidv4 } from 'uuid';


const app = express()
const port = 4003 //?? params

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    const data = readFileSync('./users.json', { encoding: 'utf-8' },);
    const obj = JSON.parse(data);
    res.send(obj)
})


app.post('/',(req, res)=>{
    const id = uuidv4();
    const user = {
        name: req.body.name,
        lastname : req.body.lastname,
        username: req.body.username,
        country:req.body.country,
        img: req.body.img,
        id: id
    }

    const nameJson = readFileSync('./users.json',{encoding: 'utf8'});
    const obj= JSON.parse(nameJson)
    obj.push(user)
    writeFile('./users.json',JSON.stringify(obj),()=>{})
    console.log(user)
    res.send('Recibido')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




