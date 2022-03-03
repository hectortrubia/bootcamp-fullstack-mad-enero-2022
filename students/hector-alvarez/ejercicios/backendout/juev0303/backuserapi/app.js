import express from 'express';
import cors from 'cors';

let params = process.argv[2]
const app = express()
const port = 4000 //?? params

app.use(express.json())
app.use(cors())

app.listen(params ? params : port, () => {
    console.log(`Example app listening on port ${params ? params : port}`)
})


