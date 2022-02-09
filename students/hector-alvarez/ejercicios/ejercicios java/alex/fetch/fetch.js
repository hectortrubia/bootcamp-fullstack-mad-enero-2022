





// 1- Crear una función que realice una petición a nuestro backend (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET) y pinte el resultado por pantalla. Realizar el ejercicio utilizando then. Responder a las siguientes preguntas:



// function geturl(){
//     return fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`)
//            .then(r => r.json())
//            .then(p => p);
// }
// console.log(geturl());

// 1. ¿Qué tipo de datos tiene la respuesta?

// Objeto en Json

// [[PromiseResult]]: Object
// hola: "mundo"

// Es un objeto en Json que contiene la propiedad hola con un string "mundo".


//2. ¿Cuál es la ip y el puerto de la petición?

//  52.85.187.7:443

//3. ¿Cuántos atributos tiene nuestra respuesta?

// la respuesta tiene el atributo hola


// 4. ¿Qué tipo de datos tiene esos atributos?

// Son datos de tipo string

//5. ¿Qué código http de respuesta hemos recibido?

// 200  (from disk cache)


// ------------------------------------------


// ejercicios 09/02/2022
// Método GET:
// Vamos a crear una app de Paises, para los ejercicios d nos traeremos de la siguiente url los datos de países usando la api  fetch, 'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'

// 1.Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.



// async function getdata(){
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const data = await r.json();
//     console.log(data.countries); 
//     return data.countries;
// }

// console.log(getdata());


// Este es el objeto de arrays con un sus propiedades 

// /countries: Array(242)
//  [0 … 99]
//      0:
// code: "AF"
// dial_code: "+93"
// name_en: "Afghanistan"
// name_es: "Afganistán"

// 2. Crea una función que pinte en tu Html todos los países que el nombre en ingles sea mayor a 5 caracteres.


// pinta un pais en el HTML

// function printuonecountry(objeto){
//     const container = document.createElement('div');
//     document.body.appendChild(container);
//     const countryone = document.createElement('p');
//     container.appendChild(countryone);
//     countryone.textContent = `${objeto.name_en}`;  
// }


// // pinte todos sus paises en el HTML

// function printallcountries(objetoArr){
// const May = objetoArr.filter(v => v.name_en.length > 5);
// May.forEach(o => printuonecountry(o));
// }


// async function startApp(){
//   const data = await getdata();
//   printallcountries(data);
// }

// startApp();


// 3. Pinta en tu html los paises con el nombre en español, código país y prefijo.



// async function getdata() {
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const data = await r.json();
//     console.log(data.countries);
//     return data.countries;
// }

// function printuonecountry(objeto) {
//     const container = document.createElement('div');
//     document.body.appendChild(container);
//     const countryone = document.createElement('p');
//     container.appendChild(countryone);
//     countryone.textContent = `${objeto.name_es} ${objeto.code} ${objeto.dial_code}`;
// }

// function printallcountries(objetoArr) {
//     const name = objetoArr.filter(v => v.name_es);
//     const code = objetoArr.filter(v => v.code);
//     const dial = objetoArr.filter(v => v.dial_code);
//     name.forEach(o => printuonecountry(o));
//     code.forEach(o => printuonecountry(o));
//     dial.forEach(o => printuonecountry(o));
// }

// async function startApp() {
//     const data = await getdata();
//     printallcountries(data);
// }

// startApp();



// 4. Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.


// async function getdata() {
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const data = await r.json();
//     console.log(data.countries);
//     return data.countries;
// }


//Aqui creamos el boton

// const button = document.createElement('button');
// button.classList.add('cambiar')
// document.body.appendChild(button);
// document.querySelector(".cambiar");
// button.textContent = "EN"



// function printuonecountry(objeto) {
//     const container = document.createElement('div');
//     document.body.appendChild(container);
//     const countryone = document.createElement('p');
//     container.appendChild(countryone);
//     countryone.textContent = `${objeto.name_es} ${objeto.code} ${objeto.dial_code}`;

// }

// function printallcountries(objetoArr) {
//     const name = objetoArr.filter(v => v.name_es);
//     const code = objetoArr.filter(v => v.code);
//     const dial = objetoArr.filter(v => v.dial_code);
//     name.forEach(o => printuonecountry(o));
//     code.forEach(o => printuonecountry(o));
//     dial.forEach(o => printuonecountry(o));


// }


// button.addEventListener('click', async () => {
//     const data = await getdata();
//     let parr = document.querySelectorAll ('p')
//     parr.forEach((o , i) => o.textContent = `${data[i].name_en} ${data[i].code} ${data[i].dial_code}`);

// })



// async function startApp() {
//     const data = await getdata();
//     printallcountries(data);
// }

// startApp();


// 5. Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.


async function getdata() {


        const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
        const data = await r.json();
        console.log(data.countries);
        return data.countries;
    }


    // Lo que pinte dentro de input tiene que ser igual a Arg o Arg. Si es asi sacar un listado de los nombres que empiecen por Arg y arg
    // en casellano.
    

    const inputs = document.createElement('input');
    inputs.classList.add('inputclass')
    document.body.appendChild(inputs);
    document.querySelector(".inputs");

    
function printuonecountry(objeto){
    const container = document.createElement('div');
    document.body.appendChild(container);
    const countryone = document.createElement('p');
    container.appendChild(countryone);
    countryone.textContent = `${objeto.name_en}`;  
}


// pinte todos sus paises en el HTML

function printallcountries(objetoArr){
const May = objetoArr.filter(v => v.name_en.length > 5);
May.forEach(o => printuonecountry(o));
}


async function startApp(){
  const data = await getdata();
  printallcountries(data);
}

startApp();
    





