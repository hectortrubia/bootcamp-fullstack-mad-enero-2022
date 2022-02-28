// 1. Crear un programa en NodeJS que imprima por pantalla hola mundo y termine.

// console.log('hola mundo ');
// setTimeout(() => { // paro el proceso a los 10 segundos

//     process.exit();
// },0);



// 2. Añadir a este programa para que pinte el PID y el PPID en el hola mundo.

// import {pid, ppid } from 'process';

// console.log('hola mundo ');
// console.log(`Current Process PID: ${pid}`);
// console.log(`Current Process Parent PID: ${ppid}`);


// 3. Crear un programa en NodeJS que imprima por pantalla la versión del SO, la arquitectura, el nº de CPU's, la memoria libre, la ruta del directorio home y la lista de interfaces de red. De cada interfaz habrá que pintar nombre, dirección ipV4,  dirección ipv6 y dirección MAC. Hint: Toda la información se obtiene del módulo OS de NodeJS. Cuidado con los tipos de datos.

import os from 'os';

// console.log(`sitema operativo: ${os.hostname()}`);
// console.log(`aquitectura: ${os.arch()}`);
// console.log(`numero cpus:
//  ${os.cpus().length}`);
// console.log(`memoria libre: ${os.freemem()}`);
// console.log(`ruta directorio home: ${os.homedir()}`);



// console.log(Object.keys(os.networkInterfaces()).map(e =>(os.networkInterfaces()[e])));

// console.log(Object.keys(os.networkInterfaces()).map(e =>(os.networkInterfaces()[e].map(e => e))));




// 3. Crear un programa en NodeJS que solicite el la IP versión 4 para el DNS (www.google.com) y la pinte por pantalla. Hint: Utilizar el módulo de DNS. Metodo lookup. ¿Es síncrono o asíncrono?


// import dns from 'dns'

// const options = {
//     family: 4,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
//   };
//   dns.lookup('google.com', options, (err, address, family) =>
//     console.log( address, family));
  

    // 4. Los programas cuando los ejecutamos pueden recibir parámetros de entrada. Estos parámetros nos permiten configurar nuestra aplicación y se puede obtener su valor dentro del programa. Para obtener los parámetros de un programa utilizamos el array process.argv. Para poder pasar un parámetro de entrada a un programa NodeJS, tendremos que ejecutar el programa y con espaciós vamos pasando cada uno de los parámetros. EJ: node hello-world.js 3 adios este programa node le mandamos dos parámetros de entrada cuyo valor, en este caso, son "3" y "adios". Construir un programa en NodeJS que pinte por consola el valor del primer parámetro de entrada que se le pase.




    // import { argv } from 'process';

  

    // let params = process.argv[2]
    // console.log(params)


    // 5. Construir un programa en NodeJS, que reciba por parámetro el DNS y pinte por consola la IPv4 y la IPv6 de ese DNS.


    //   import dns from 'dns'
    //   let params = process.argv[2]

    //   const options4 = {
    //       family: 4,
    //       hints: dns.ADDRCONFIG | dns.V4MAPPED,
    //     };
    //     dns.lookup(`${params}`, options4, (err, address, family) =>
    //       console.log( address, family));
      
    //   const options6 = {
    //       family: 6,
    //       hints: dns.ADDRCONFIG | dns.V4MAPPED,
    //     };
    //     dns.lookup(`${params}`, options6, (err, address, family) =>
    //       console.log( address, family));
      


    // 5. Construir un programa en NodeJS que reciba por parámetro o una IPv4 o un DNS y pinte por consola IPv4, IPv6 y DNS

 