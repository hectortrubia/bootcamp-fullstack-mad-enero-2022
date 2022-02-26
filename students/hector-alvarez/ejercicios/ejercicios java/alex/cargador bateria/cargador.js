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
const numbloq = 5;

navigator.getBattery().then(battery => {
    batteryIsCharging = battery.charging;
    batfin.textContent = battery.level * 100 + "%";
    chargfin.textContent = battery.charging;


    /*Esto me dice que esta cargando si esta enchufado y que no esta cargado si no esta enchufado*/

    if (batteryIsCharging === true) {
        chargfin.textContent = "Cargando";
    }
    else { chargfin.textContent = "Cargador desconectado" }

    /*Esto va a crear los bloques en funcion del porcentaje de carga*/
    setInterval(() => {
        if (battery.level <= 0.2) {

            for (let i = 0; i < 1; i++) {

                const bloque = document.createElement('div');
                bloque.classList.add("carga");
                piladown.appendChild(bloque);
            }

        } else if (battery.level > 0.2 && battery.level <= 0.4) {

            for (let i = 0; i < 2; i++) {

                const bloque = document.createElement('div');
                bloque.classList.add("carga");
                piladown.appendChild(bloque);
            }
        } else if (battery.level > 0.4 && battery.level <= 0.6) {

            for (let i = 0; i < 3; i++) {

                const bloque = document.createElement('div');
                bloque.classList.add("carga");
                piladown.appendChild(bloque);
            }
        } else if (battery.level > 0.6 && battery.level <= 0.8) {

            for (let i = 0; i < 4; i++) {

                const bloque = document.createElement('div');
                bloque.classList.add("carga");
                piladown.appendChild(bloque);
            }

        } else if (battery.level > 0.8) {

            for (let i = 0; i < 5; i++) {

                const bloque = document.createElement('div');
                bloque.classList.add("carga");
                piladown.appendChild(bloque);
            }

        }
    }, 2000);

});


// battery.addEventListener('chargingchange', function () {
//     batteryIsCharging = battery.charging;


// });


// else if (counter === 4) {
//     document.querySelectorAll(bloque)
//     bloque.forEach(c => c.remove());
//     counter = 1;