



//  1. Describe los siguientes permisos:

//  101 111 110    El dueño del archivo puede leer,no escribir y ejecutar. Cualquier usuario que pertenezca al grupo del dueño del archivo, puede leer escribir y ejecutar. Y el resto pueden leer, escribir y no ejecutar.

//  001 010 110  El dueño del archivo no puede leer,no escribir y ejecutar. Cualquier usuario que pertenezca al grupo del dueño del archivo,no puede leer  si escribir y no ejecutar. Y el resto pueden leer, escribir y no ejecutar.

//  100 101 011 El dueño del archivo puede leer,no escribir y no ejecutar. Cualquier usuario que pertenezca al grupo del dueño del archivo,puede leer, no escribir y si ejecutar. Y el resto no pueden leer,si escribir y si ejecutar.

//  101 112 001 El dueño del archivo puede leer,no escribir y si ejecutar. Cualquier usuario que pertenezca al grupo del dueño del archivo,puede leer, si escribir y el 2 no es binario. Y el resto no pueden leer, no escribir y si ejecutar.

//  2. Representación Octal

//  Binario	Octal
// 000	0
// 001	1
// 010	2
// 011	3
// 100	4
// 101	5
// 110	6
// 111	7


//  465 -  100 110 101  -
//  El dueño - Leer si, Escribir no , Ejecutar no.
//  El usuario del grupo - Leer si, Escribir si , Ejecutar no.
//  El resto del mundo - Leer si, Escribir no , Ejecutar si.

//  666 -  110 110 110

//  El dueño - Leer si, Escribir no , Ejecutar no.
//  El usuario del grupo - Leer si, Escribir si , Ejecutar no.
//  El resto del mundo - Leer si, Escribir no , Ejecutar si.

//  755 -  111 101 101

//  El dueño - Leer si, Escribir si , Ejecutar si.
//  El usuario del grupo - Leer si, Escribir no , Ejecutar si.
//  El resto del mundo - Leer si, Escribir no , Ejecutar si.


//  500 -  101 000 000

//  El dueño - Leer si, Escribir no , Ejecutar si.
//  El usuario del grupo - Leer no, Escribir no , Ejecutar no.
//  El resto del mundo - Leer no, Escribir no , Ejecutar no.

// -----------------------
// 2. Crear un app en nodejs que realice las siguientes operaciones:

// Crear un archivo vacío con el nombre hello.json

// import {writeFile} from 'fs/promises'

// await writeFile('./filecreated.json','');

// ----------------------------------

// 3. Leer el archivo package.json y pintar por consola el name

// import { mkdir } from 'fs';

import { appendFile } from 'fs';
import { readFile } from 'fs/promises'

// const data = await readFile('./package.json');
// const dataObj = JSON.parse(data);
// // console.log(data.toString());
// console.log(dataObj.name); //accede a la propiedad name

// --------------------------------

// 4. Escribir en el archivo hello.json el siguiente objeto ({"name":"hello-world-nodejs","version":"1.0.0"} )

import { writeFile } from 'fs/promises';

const myObj =
{
    "name": "hello-world-nodejs",
    "version": "1.0.0",
}

// await writeFile('./hello.json', JSON.stringify(myObj)); // sobreescribe un fichero

// --------------------------------

// 5. Crear una carpeta con el nombre mi-primera-carpeta

// import {mkdir} from 'fs/promises';

// await mkdir('mi-primera-carpeta');


// 6. Añadir al archivo hello.json el texto texto añadido a un JSON

// import {appendFile} from 'fs/promises';

// await appendFile('./hello.json', JSON.stringify('texto añadido a un json'));

// -----------------------------------

// 7. Borrar el archivo hello.json

// import {rm} from 'fs/promises';

// rm('./hello.json');


// ---------------------------------------------------------------


// 3. Descargar con el navegador el siguiente archivo JSON (https://github.com/PeterNotenboom/SwiftCodes/blob/master/AllCountries/ES.json). Si estáis siguiendo las noticias estos días, veréis que se habla de desconectar a Rusia del sistema bancario Swift. Este sistema es una unión internacional de bancos que permite las transacciones entre países. El JSON descargado contiene la info de las entidades españolas para el sistema bancario SWIFT.


// const bank = await readFile('bank.json',{ encoding: 'utf-8' }); // lectura de un archivo
// const bankObj = JSON.parse(bank);
// console.log(bankObj.list.length)



// 1. Crear una app en NodeJS que lea el JSON y pinte por consola lo siguiente:
// Numero de entidades españolas en SWIFT.

const bank = await readFile('bank.json', { encoding: 'utf-8' }); // lectura de un archivo
const bankObj = JSON.parse(bank);
// console.log(bankObj.list.length)

// -------------------------------------

// 2. Nombre + codigo swift de las entidades malagueñas.

// const malaga = bankObj.list.filter(e=>e.city==='MALAGA')
// malaga.map(c => {
//     console.log(c.bank, c.swift_code)
// })

// 3. Nombre + codigo swift de las entidades cuyo código swift sea superior a 8 caracteres.


// const malaga = bankObj.list.filter(e=>e.swift_code.length > 8)
// malaga.map(c => {
//     console.log(c)
// })


//4. Si hay alguna entidad onubense o no

// const huelva = bankObj.list.filter(e=>e.city==='HUELVA')
//     console.log(huelva.length!==0)


// ---------------------------------

// 4. Existe un API que dada una IP nos permite saber mucha información de conexión de la misma. Ese API es https://ip-api.com/. Para llamar al API debemos hacer una petición HTTP GET a la siguiente url (http://ip-api.com/json/) y esto nos devolverá un JSON con la información de NUESTRA conexión. Como en NodeJS no tenemos fetch (está en camino) podemos instalarlo utilizando una librería npm llamada node-fetch



// 1. Escriba en un archivo connection.json la información que devuelve el API.

import fetch from 'node-fetch';

const response = await fetch('http://ip-api.com/json/');
const data = await response.json();

console.log(data);


// 2.Escriba en un archivo connection.json la información que devuelve el API.


await writeFile('./connection.json', JSON.stringify(data));


// 3. Contestar a las siguientes preguntas:

// ¿Cuál es nuestra IP de conexión en Internet?  '83.97.159.57'
// ¿Qué es el ISP? ¿Cuál es nuestro ISP? 'R Cable y Telecable Telecomunicaciones, S.A.U.'



// 3. Modificar el programa para que se le pueda pasar por argumento una lista de IP's separadas por espacio y se guarde en el archivo un array con la info de nuestra conexión mas la info de la lista de IP's. Para obtener la info de una IP debemos llamar al API con la IP en la URL. Por ejemplo Si queremos obtener la infor de la ip 80.59.55.55 debemos llamar a la siguiente URL (http://ip-api.com/json/80.59.55.55)


let IPs = [" " , "208.80.152.201", "8.8.8.8", "24.48.0.1"]
let arr = []

IPs.map(c => {
    
    fetch(`http://ip-api.com/json/${c}`)
        .then(r => r.json())
        .then(data => {
            arr.push(data)
            console.log(typeof arr)
            writeFile('./connection.json', JSON.stringify(arr), (err) => {
                if (err) throw err
            })
        })

})

await writeFile('./connection.json', JSON.stringify(data));




// Modificar el programa para que se le pueda pasar por argumento una lista de IP's separadas por espacio



    // let params = process.argv[1]

    // console.log(params)


// const response = await fetch('http://ip-api.com/json/ ');
// const data = await response.json();

// console.log(data);


