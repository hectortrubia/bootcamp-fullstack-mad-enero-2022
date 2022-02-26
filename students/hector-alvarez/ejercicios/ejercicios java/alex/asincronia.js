// console.log('Antes de crear la promesa'); // 1º
// const myPromise = new Promise((resolve, reject) => {
//     console.log('Durante el constructor. Antes del timeout'); // 2º
//     setTimeout(() => {
//         // aqui habrán pasado 5 segundos
//         console.log('Antes de resolver la promesa'); // 6º
//         resolve('Han pasado 5 segundos');
//     }, 5000);
//     console.log('Durante el constructor. Despues del timeout'); // 3º
// });

// console.log('Antes de suscribirme a los resultados de la promesa'); // 4º
// myPromise.then(
//     () => { /* CALLBACK PARA RESOLVE */
//         console.log('Cuando la promesa está FULFILLED'); // 7º
//     },
//     () => { /* CALLBACK PARA REJECT */
//         console.log('Cuando la promesa está REJECTED');
//     }
// );
// console.log('Despues de suscribirme a los resultados de la promesa'); // 5º


// ----------------------------------


// 1. Hello world. Crear una promesa que en su creación se resuelva con un string 'hola mundo'. Escuchar la resolución de la promesa y pintar el resultado por consola.


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Han pasado 5 segundos');
//     }, 5000);
// });
// myPromise.then(
//     () => {console.log('Hola mundo')},
// );


//2. Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Han pasado 5 segundos');
//     }, 5000);
// });

// myPromise.then(
//     () => { /* CALLBACK PARA RESOLVE */
//         console.log('Hola mundo aceptado'); // 7º
//     },
//     () => { /* CALLBACK PARA REJECT */
//         console.log('hola mundo rechazado');
//     }
// );


// 3. Crear una promesa que se resuelva con un numero aleatorio del 1-10. Escuchar el resultado y pintarlo en un p.
// let num = parseInt(prompt("diga un numero"));
// const numale = new Promise((resolve, reject) => {

//         if (num <= 10) {
//             resolve(num);
//         }
//         else { reject() };
// });
// numale.then(
//     () => { /* CALLBACK PARA RESOLVE */
//         const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = num;

//     },


//     () => { /* CALLBACK PARA REJECT */
//         const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = 'El numero debe estar entre 1 y 10';
//     }
// );



// 4. Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se resuelve la promesa con el numero. Si es impar se rechaza la promesa.


// let num = Math.round(Math.random()*10);

// const numale = new Promise((resolve, reject) => {

//         if (num %2 === 0) {
//             resolve(num);
//         }
//         else { reject() };
// });
// numale.then(
//     () => { /* CALLBACK PARA RESOLVE */
//         const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = num;

//     },


//     () => { /* CALLBACK PARA REJECT */
//         const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = 'El numero es impar';
//     }
// );

// 5. Crear una promesa que se resuelva a los 2 segundos con el texto 'Resuelta cuando pasaron 2 segundos'

// const doseg = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// });

// doseg.then(
//     () => { /* CALLBACK PARA RESOLVE */
//         console.log('Resuelta cuando pasaron 2 segundos');
//     },
// );



// 1.crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.

// setTimeout(() => {
// const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = 'hello timeout';

// }, 8000);


// 2.En la página anterior crear un intervalo que pinte un p cada 500 ms con el texto 'conectando...'



// setInterval(() => {
// const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = 'hello timeout';

// }, 500);


// 3.Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval.


// const btn = document.createElement('button');
// btn.classList.add("clasebutton");
// document.body.appendChild(btn);
// document.querySelector(".clasebutton");
// btn.textContent = 'pulsar';


// btn.addEventListener('click', e => {
//     e.preventDefault();
//     number = 0;
//     const inter = setInterval(() => {
//         const respuesta = document.createElement('p');
//         respuesta.classList.add("clasep");
//         document.body.appendChild(respuesta);
//         document.querySelector(".clasep");
//         respuesta.textContent = (number += 1);

//         if (number === 10) {
//             clearInterval(inter);
//         }

//     }, 500);

// });


// 4. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss


// const reloj = document.createElement('p');
// reloj.classList.add("clasep");
// document.body.appendChild(reloj);
// document.querySelector(".clasep");

// const watch = setInterval(() => {

//     let hoy = new Date();
//     let hora = hoy.getHours()
//     let minutos = hoy.getMinutes()
//     let segundos = hoy.getSeconds();



//     reloj.textContent = (`${hora} : ${minutos} : ${segundos}`);

// }, 1000);



// Widget de estado de bateria. Vamos a crear un widget que nos indique el estado de la batería. Las imágenes de los diseños deben quedar así. Para poder obtener la información de la batería necesitamos la función navigator.getBattery (https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery):
// https://dribbble.com/shots/5007024-Flash-Message-Battery-Status-Daily-UI-16
// Dribbble
// Flash Message - Battery Status  - Daily UI 16
// Flash Message - Battery Status - Daily UI 16 designed by Pakshep Girdhar. Connect with them on Dribbble; the global community for designers and creative professionals. (29 kB)

'use.strict'

let batteryIsCharging = true;
const batfin = document.querySelector(".nivel")
const chargfin = document.querySelector(".charg")
const piladown = document.querySelector(".pila_down")
const carga = document.querySelector(".carga")

navigator.getBattery().then(battery => {
    batteryIsCharging = battery.charging;
    batfin.textContent = battery.level * 100 + "%";
    chargfin.textContent = battery.charging;

    if (batteryIsCharging === true && battery.level === 1) {
        chargfin.textContent = "Su dispositivo está cargado, por favor retire el cargador";
        
        for (let i = 0; i < 4; i++) {

        const inter = setInterval(() => {

            
                const bloque = document.createElement('div');
                bloque.classList.add("carga");
                piladown.appendChild(bloque);
                document.querySelector(".carga");


                if (battery.level === 1) {
                    clearInterval(inter);
                }            
            
        }, 500);}
    }


    else { chargfin.textContent = "Por favor conecte el cargador" }
    console.log(battery)

});

    //   battery.addEventListener('chargingchange', function() {
    //     batteryIsCharging = battery.charging;


    //   });