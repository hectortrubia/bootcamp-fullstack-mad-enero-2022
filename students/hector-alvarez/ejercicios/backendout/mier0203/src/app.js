import express from 'express'; // importamos express para poder usarlo
import { argv } from 'process';
import process from 'process';
import {readFileSync, rm} from 'fs'
import {writeFile} from 'fs'
import { v4 as uuidv4 } from 'uuid';



// Vamos a añadir a nuestra aplicación express funcionalidad. Queremos permitir que nuestro backend tenga la posibilidad de añadir productos. Un producto tiene la siguiente estructura (name, description y price). La información se debe almacenar en algún lado que quede registrada incluso cuando se pare el servidor express y se vuelva a levantar. De momento el único método que conocemos es el de ficheros, asi que nuestra app debe almacenar la información en un fichero llamado products.json. Por tanto debemos hacer un CRUD. Para ello realizaremos lo siguiente:
// Crear un método GET en el path '/products' que devuelva la lista de productos existente.
// Crear un método POST en el path '/products' que añada un producto a nuestro backend. El producto lo introduce el cliente en formato JSON en el body. Nuestra ruta deberá generar un id aleatorio y guardarlo en un archivo que contenga el array de productos.
// Hint: Para poder recuperar el body de una petición en express debemos leer su API (https://expressjs.com/en/4x/api.html#req.body)
// Hint 2: Para generar un ID aleatorio (se conoce como UUID) podemos usar la siguiente librería (https://www.npmjs.com/package/uuid)
// Probar con POSTMAN nuestros dos enpoints. Si creamos un producto con post, luego el get mostrará ese nuevo producto en la lista junto con el resto

let params = process.argv[2]
const app = express()
const port = 4000 //?? params

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/products', (req, res) => {
    const data = readFileSync('./products.json', { encoding: 'utf-8' },);
    const obj = JSON.parse(data);
    res.send(obj)
})

app.post('/products',(req, res)=>{
    const id = uuidv4();
    const product = {
        name: req.body.name,
        description : req.body.description,
        price: req.body.price,
        id: id
    }
    const nameJson = readFileSync('./products.json',{encoding: 'utf8'});
    const obj= JSON.parse(nameJson)
    obj.push(product)
    writeFile('./products.json',JSON.stringify(obj),()=>{})
    console.log(product)
    res.send('Recibido')
})


app.listen(params ? params : port, () => {
    console.log(`Example app listening on port ${params ? params : port}`)
})




// 3. Vamos ahora a gestionar la información de los productos de forma individual. Para ello necesitamos devolver la información de un producto concreto por ID, la posibilidad de borrar un producto por id y la posibilidad de editar un producto existente. Estos métodos deben ser genéricos para cualquier producto, por lo que utilizaremos lo mismo que con las páginas de detalle un reactJS, los conocidísimos path params:
// Para aprender a definir y obtener el valor de un path param, debemos leer el API. Tenemos un tutorial en express.js de como hacerlo (https://expressjs.com/en/guide/routing.html#route-parameters)
// Crear un endpoint GET con path params para los productos (/products/:id). Este endpoint deberá devolver el objeto de la información del producto que tenga el id o 404 si no existe el producto.
// Crear un endpoint DELETE con path params para los productos (/products/:id). Este endpoint deberá eliminar el objeto de la lista de productos del producto que tenga el id o 404 si no existe el producto.
// Crear un endpoint PATCH con path params para los productos (/products/:id). Este endpoint recuperará del body la información parcial que se quiere editar, buscará el producto en la lista y modificará las cosas que hayan cambiado del producto que tenga el id o 404 si no existe el producto.
// Hint: para devolver un status customizado en la respuesta debemos utilizar el api de la response status (https://expressjs.com/en/4x/api.html#res.status) (editado) 


app.get('/products/:id', (req, res) => {
    const products = readFileSync('./products.json',{encoding: 'utf8'});
    const arrProducts= JSON.parse(products);
    const filteredProducts = arrProducts.filter(c => c.id===req.params.id);
    // console.log(req.params)
    res.send(filteredProducts? filteredProducts:'error 404')
})



app.delete('/products/:id', (req, res)=> {
    const products = readFileSync('./products.json',{encoding: 'utf8'});
    const arrProducts= JSON.parse(products);
    const filteredProducts = arrProducts.filter(c => c.id!==req.params.id);
    writeFile('./products.json',JSON.stringify(filteredProducts),()=>{})


    res.send('peticion de borrado recibida');
  });
  

  app.patch('/products/:id', function (req, res) {
    const products = readFileSync('./products.json',{encoding: 'utf8'});
    const arrProducts= JSON.parse(products);
    const someProduct = arrProducts.some(c => c.id===req.params.id);

    if (someProduct){
        const product ={
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            id: req.params.id
        }
        const filteredProducts = arrProducts.filter(c => c.id!==req.params.id);
        filteredProducts.push(product)
    
        writeFile('./products.json',JSON.stringify(filteredProducts),()=>{});
        res.send('Got a DELETE request at /user');
    }else{
        res.send('error 404')
    }
   
});
