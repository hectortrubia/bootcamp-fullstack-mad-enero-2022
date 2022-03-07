
import { helloModel } from "./hello.model.js";


export const helloCtrl = (req, res) => {

   const hello = helloModel() // res.json("hola mundo desde controller");
    res.send(hello)
};