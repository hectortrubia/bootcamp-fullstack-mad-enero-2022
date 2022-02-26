/*

1. Crear una función que devuelva la resta de dos números. Llamad a la función 3 veces con valores distintos y pintar los resultados en un p cada uno

*/


/*
// Con funciones tradicionales con nombre
function substract(a,b){
    return a-b;
 }

 // con arrow function
 const substract = (a,b) => a-b;
 
 document.write(`<p>${substract(3,4)}</p>`);
 document.write(`<p>${substract(6,1)}</p>`);
 document.write(`<p>${substract(88888,88888)}</p>`);
 
 */

/*
 Martes 25/01 Alex:

 1. (Easy) crear una función que dado un número del 1 al 100 indique el porcentaje de contaminación de Madrid.


*/
/* primera parte

 let dato = prompt("introduce el porcentaje de contaminacion");

 function nivcont (x) {

     if (x <=100){
     document.write (`Hoy en Madrid hay un nivel de contaminación del ${x}%`);
        }
     else { document.write ("Por favor indique un dato de contaminación entre 1 y 100");
        }
    }

 nivcont (dato)
 
 /* segunda parte :  Ayuso ha dicho en rueda de prensa esta mañana que cuando la contaminación supere el 40%, los coches no podrán superar los 90km/h. Si la contaminacion supera el 75% los coches no podrán superar los 70km/. La velocidad normal de una autopista es de 120km/h. Crear una función que dado un porcentaje de contaminación me indique la velocidad a la que puede ir un coche.



 let dato = prompt("introduce el porcentaje de contaminacion");


 function nivcont (x) {

    if (x >=0 && x <=40){
        document.write (`La velocida maxima permitida es de 120Km/h`);}   

    if (x >40 && x <=75){
        document.write (`La velocida maxima permitida es de 90Km/h`);}

    if (x >75 && x <=100){
            document.write (`La velocida maxima permitida es de 70Km/h`);}

    if (x >100){ document.write ("Por favor indique un nivel de contaminación entre 1 y 100");
        }

       }
    nivcont (dato)

    /*

    ------------------------------------------

    2.  (Easy) Modificar el ejercicio anterior para que solicite al usuario el porcentaje de contaminación. Añadir una nueva función que pinte la imagen de la señal con la velocidad máxima permitida. Sacar la imagen de internet.
   

    let dato = prompt("introduce el porcentaje de contaminacion");

    function nivcont (x) {

    if (x >=0 && x <=40){
        document.write (`<img src="cientoveinte.jpg" alt="">`);}   

    if (x >40 && x <=75){
        document.write (`<img src="noventa.jpg" alt="">`);}

    if (x >75 && x <=100){
            document.write (`<img src="setenta.jpg" alt="">`);}

    if (x >100){ document.write ("Por favor indique un nivel de contaminación entre 1 y 100");
        }

       }
    nivcont (dato)


    ------------------------------------

    3. (Easy) Crear una función que dado un string me devuelva el caracter que hay en la mitad (o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o

  


    let dato = prompt("introduce una palabra");

    function nivcont (x) {

      let a= x.charAt(parseInt((x.length -1) / 2));
       document.write (a)
    }

        nivcont (dato)


  ------------------------


4. (Easy) Crear una función que dado un string me devuelva un string invertido. Solicitar el string al usuario. EJ: hola -> aloh



let dato = prompt("introduce una palabra");

function invertir (x) { 
    let reverse = "";
    for (let i = x.length ; i>=0 ; i--) {
        reverse += x.charAt (i) 
    }
    return reverse;
    
}

document.write (invertir(dato));


5. (Easy) Crear una funcion que dado un string me devuelva si es palíndromo o no. Un string palíndromo es aquel que se lee igual de izquierda a derecha como de derecha a izquierda. EJ: radar. Pista: Utilizar la función del ejercicio 4.
*/
/*
let dato = prompt("introduce una palabra");


function palin (x) {

    let norm = dato
    function invertir (j) { 
        let reverse = "";
        for (let i = j.length ; i>=0 ; i--)
            reverse += j.charAt (i);
            return reverse;
            }

    if ( invertir (dato) === norm ) { document.write("es un palindromo");    
        }
        
    else {document.write("no es un palindromo");
    }
  
}

palin (dato);


----------------------



7. (Medium) Escribir una funcion que recorra los enteros de un entero que solicitemos al usuario y vaya imprimendo por pantalla si esos son pares o impares


let dato = parseInt (prompt("introduce el número"));

function entero (x) {

            for (let i = 0 ; i<=x ; i++) {
                if (i % 2 === 0) {
                            document.write(`<p>El número ${i} es par </p>`);}
                else {document.write(`<p>El número ${i} es impar </p>`);}
                        }
            
                    }
entero (dato)

----------------------------------------




8. (Medium) Escribir una función que dado un numero, devuelva el número al revés. Solicitar el número al usuario




let dato = parseInt(prompt("introduce una palabra"));

    function reves (x) { 
        let reverse = "";
        for (let i = x.length ; i>=0 ; i--) {
            reverse += x.charAt (i)
            return reverse;
                }
            }
    
            document.write (reves (dato));

----------------------------------------------

(Medium) 9. Escribir una función que dado un número, indique si este es capicua o no. Un numero es capicua si se lee igual de izquierda a derecha que de derecha a izquierda. EJ. 1221
*/

/*

let dato = prompt("introduce un numero");


function palin (x) {

    let norm = dato
    function invertir (j) { 
        let reverse = "";
        for (let i = j.length ; i>=0 ; i--)
            reverse += j.charAt (i);
            return reverse;
            }

    if ( invertir (dato) === norm ) { document.write("es capicua");    
        }
        
    else {document.write("no es un capicua");
    }
  
}

palin (dato);




------------- ARRAYS --------------------------



1.Crea un array de números por prompt e imprimelo por pantalla.(easy).





let arr = [prompt(),prompt(),prompt()];
document.write (arr[0]);


-------------------------


2. Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)



let arr1 = ["hola"];
let arr2 = ["people"];

function strin (x,y) {

    document.write(x + y);
}

strin(arr1,arr2);

--------------

3.Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], luego un array de los géneros musicales [rock, pop, country] en el array de los géneros musicales 'rock' será el array de subgéneros de música rock, luego crea un array de banda que contenga un string "metallica" y el array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)



let rock = ["punk" , "metal" , "hardcore"]

let generos = [ rock, "pop" , "country"]

let banda = ["metallica" , generos]


document.write (banda[0], rock[1]);



----------------------

4. Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)



let arr = 2;

function bol(x) {

const b = [];

if (typeof(x) === typeof(b))
{
   document.write ("true")
}else {
    document.write ("false")
}
}

bol(arr);

----------------------------

5. Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)



let arr = [11, 2, 13, 14, 15, 16, 17, 18, 19, 20]

function comp(x) {
    let counter = true;
    for (let i = 0; i <10; i++){
        if (x[i]<10){  
            counter=false;
        } 
    }
    document.write(counter);
}

comp(arr)


--------------------------------------

6.Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o no dentro del array.(easy)




let arr = ["hola que tal", "otra vez"];



function comp(x,y) {
    let counter = false;
    for (let i = 0; i <arr.length; i++){
        if (x[i]===y){  
            counter=true;
        } 
    }
    document.write(counter);
}


comp(arr,"otra vez")

---------------

7. Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)





let arr = [2, 4, 6, 81, 1, 6, 7, 3, 5, 9]

function maydiez(x) {

    for (let i = 0; i <x.length; i++){
        if (x[i]>10){  
            document.write(x[i]);}
    }
}

maydiez(arr)

-------------------

8. Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)




let bandas = ["punk" , "metal" , "hardcore"]


function mayus(x) {

    for (let i = 0; i <x.length; i++){  
            document.write(x[i]);}
}


maydiez(bandas)


--------------------------------

## METODOS ARRAY



1.Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)



// const array1 = ['hola', 'que', 'tal'];
// const array2 = ['y ', 'tu', 'que'];

// const array3 = array1.concat(array2);
// document.write(array3)



----------------------------

2.Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato, ver metodos de array!.(easy)


let array1 = 5;

document.write(Array.isArray(array1));

--------------------

3. Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario (hay un metodo de array para esto empieza por E...).(easy)

const array2 = [25 , 37, 14];

const allValues = array2.every(v => v>=10); // true. todos los elementos son mayor de diez.
document.write(allValues)


--------------------

4. Crea una función que reciba un array y una palabra e imprima true o false si palabra existe o no dentro del array (ver metodo empieza por i).(easy)


const array2 = ['hola', 'pepe'];

let ok = array2.includes( 'pepe' );
document.write(ok)

--------------------

5.Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)




var arr = [ 300, 1, 201, 200 ];

function comparar ( a, b )
    { return b - a; }

    document.write(arr.sort( comparar ));  // [ 1, 5, 40, 200 ]


    --------------------

6. Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)


const arr= [ 7, 300, 1, 201, 200, 17, 25 ];

document.write(newArr = arr.filter(v => v>10)); 


--------------------

7. Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized, ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)



const arr = ['jose','maca','jorge'];

arr.forEach((v,i,array) => {
    array[i]=array[i].charAt(0).toUpperCase()+array[i].substring(1,array[i].length);
});
document.write(arr)



--------------------

8. Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)



var num = [ 5, 1, 3, 200 ];

function pos(x,y) { 
    const foundedIndex = x.findIndex((v) => y === v)
    document.write(foundedIndex)
}

 pos(num,17);

 ----------------------------

 9.Crear una función que reciba un array,  deberá mostrar en el navegador el array tantas veces como elementos contiene  y en cada una de ellas eliminará el último elemento: El output visualizado debe ser el siguiente:   // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'                                                                                              // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'                                                                                                                                                                                  // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'                                                                                                                                                                                         // 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript',    etc..(medium)






/*viernes 28/01 por la mañana

. Solicitar al usuario un número. A continuación solicitar al usuario tantas palabras como haya indicado en el primer número y guardarlas en un array de palabras. Con ese array tenemos que:
Ordenar las palabras de menor a mayor longitud.
Imprimir con un P si hay alguna palabra con más de una letra 't'
Imprimir con un p si todas las palabras contienen al menos una 'a'
Imprimir con un p la primera palabra que empiece por 'h' o el mensaje "no hay palabras que empiecen por h"
Generar un nuevo array con las palabras dadas la vuelta
Imprimir con una p cuántas palabras son infinitivos (terminan en ar er o ir)




let num = parseInt(prompt("inserte un numero"));

const pal = [];

    for (let i = 0; i < num ; i++) {
       pal.push(prompt("inserte otra palabra");
  
  }



 
  1- Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true para 'hello'

    */

//   const person = { // esto es un objeto con una propiedad/característica
//     demo: 'hola',
//     hello : true,
// }


// // 2. Cambiar el valor de 'hello' a false 

// const person = { // esto es un objeto con una propiedad/característica
//     demo: 'hola',
//     hello : false,
// }

// 3. Crear un objeto que represente el Pais España con las propiedades ( nombre, capital, continente y SMI (en $)). Crear otros 4 países (EEUU, China, Nueva Zelanda y Andorra).
//            Añadir los objetos a un array.
//            Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
//            Mostrar en una lista de HTML los países que pertenecen a europa (editado) 




    // const españa = {

    // nombre: 'españa',
    // capital: 'madrid',
    // continente: 'europa',
    // SMI: 1200,

    //     };

    // const eeuu = {

    // nombre: 'eeuu',
    // capital: 'washington',
    // continente: 'america',
    // SMI: 1800,

    //     };

    // const china = {

    // nombre: 'china',
    // capital: 'pekin',
    // continente: 'asia',
    // SMI: 1800,

    //     };

    // const nuevazelanda = {

    // nombre: 'nueva zelanda',
    // capital: 'wellington',
    // continente: 'oceania',
    // SMI: 2100,

    //     };

    // const andorra = {

    // nombre: 'andorra',
    // capital: 'andorra',
    // continente: 'europa',
    // SMI: 2000,

    //     };


//            Añadir los objetos a un array.

// const paises = [españa,eeuu,china,nuevazelanda,andorra];


//            Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$


// const smimay = paises.filter(npais => npais.SMI >= 1500);


//     let htmloutput = `<ul>`
//     for (let i = 0; i < smimay.length; i++) {
//         htmloutput +=`<li>${smimay[i].nombre} </li>`;
// }
// htmloutput += `</ul>`

// document.write(htmloutput);


//            Mostrar en una lista de HTML los países que pertenecen a europa (editado) 


// const smimay = paises.filter(npais => npais.continente === 'europa');


//     let htmloutput = `<ul>`
//     for (let i = 0; i < smimay.length; i++) {
//         htmloutput +=`<li>${smimay[i].nombre} </li>`;
// }
// htmloutput += `</ul>`

// document.write(htmloutput);



// --------------------------------------------------------

// 1.Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprimelo por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy)


// const miob = {

//     edad: 18,
//     genero: 'hombre',
//     casado: true,
//     profesion:["tecnico","administrativo"],

// }

// document.write (miob.profesion);

// --------------------------------

// 2.Crea una función que dado un objeto y un string que represente el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto.(easy)

// const ob = {

//     edad: 18,
// }

// let pal = 'peso'
// function eliminar (x,y) {
//     delete x[y];
// }

// eliminar (ob, pal);
// document.write (ob.edad);


// 2.Crea una función que reciba por parámetro un objeto y una propiedad, y devuelva true o false si esa propiedad existe o no dentro del objeto pista (hasOwn...).(easy)


// const ob = {

//         edad: 18,
//     }

// let pal = "eda";

//     function prop (x,y) {
//         document.write (x.hasOwnProperty(y));  
//     }

//    prop (ob, pal);

//    ---------------

//    4.Crea una función que imprima por pantalla el 'nombre: valor' de cada objeto (buscar mertodos de objeto ejmp Object Keys).(easy)


// const china = {

//     nombre: 'china',
//     capital: 'pekin',
//     continente: 'asia',

//         };

//     document.write (Object.entries(china));


// 5.Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)


// let str = [prompt("escribe la hora")];

// const horatr = {

// hora:[],
// minutos:[],
// segundos:[]


// function hora(a) {
//     let arr = a.split(':')
//     let objHora = {
//         hora: arr[0],
//         minutos: arr[1],
//         segundos: arr[2],
//     }
//     document.write(Object.entries(objHora))
// }

// hora(str)

// ----------------------------------------------


// ### DOM ###


/* <body>
   <p class="text">hola</p>
   <div class="container">
      <h1 class="text">Titulo</h1>
   </div>
   <button class="text" id="MY_BUTTON">Demo</button>
</body> */


// 1. pintar  por la consola JS (console.log) el body.

// console.log(document.body)

// console.log(mostrarbody.parentElement());

// 2.recuperar el primer p y pintarlo por consolaJS

// onsole.log(document.body)



// ----------------------------------------

// Jose
// 1. En un documento html vacio, crea un H2, luego ponle un texto y luego una clase que cambie de color, usando los métodos del objeto Document.


// const h2 = document.createElement('h2');

// h2.textContent = 'Hola';
// document.body.appendChild(h2);
// h2.classList.add('color');



// 2.El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)



// // const div1 = document.createElement('div')


// // document.body.appendChild(div1);

// // div1.appendChild(h2);


// // 3. En un documento html vacío, añadir un div el cual tendrá dentro un enlace a  Google, un párrafo y una  lista de marca de coches ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....).(easy)


// const div = document.createElement('div');

// document.body.appendChild(div);

// const enlace = document.createElement('a');

// enlace.innerHTML = `<a href= "https://www.forocoches.com"> ir a foro coches </a>`;

// div.appendChild(enlace);

// const parrafo = document.createElement('p');


// div.appendChild(parrafo);

// const lista = document.createElement('ul');

// div.appendChild(lista);

// const seat = document.createElement('li');

// seat.textContent = 'seat';

// lista.appendChild(seat);

// const ford = document.createElement('li');

// ford.textContent = 'ford';

// lista.appendChild(ford);

// const citroen = document.createElement('li');

// citroen.textContent = 'citroen';

// lista.appendChild(citroen);



// 4. En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", un LI tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". El ejercicio será el siguiente, en tu pagina js:(medium)
// Recuperar todos los li de la página y muéstralos por consola.
// Recuperar todos los elementos con class "item" y muéstralos por consola.
// Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.
// Recuperar los elementos que tengan atributo  data-demo y muéstralo por consola (getAtribu....).
// Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".
// Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.
// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.


// const lin = document.getElementById('cuarto_elemento');


// console.log(lin);

// const ul2 = document.querySelector("ul");
// const rr = ul2.getAttribute("dom-demo");


// console.log(rr);


// Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".


// const specialtodos = document.querySelectorAll('.special');

// for (let i = 0; i < specialtodos.length; i++) {
//     specialtodos[i].textContent = 'texto special cambiado';
    
// }
// console.log(specialtodos);


// Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.



// const domtodo = document.querySelector('[dom-demo]');

// domtodo.style = "font-size: 100px";

    
// console.log(domtodo);


// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.


// ------------------------------------------------


// ###Eventos###

// ---------------------------------------



// 1. crear un archivo HTML que tenga un div vacío y un boton (añadir). Cada vez que pulse en el botón se debe añadir un p con el texto añadido desde JS dentro del div.

// const btn = document.querySelector("button");

// btn.addEventListener('click', e => {
// 
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const p = document.createElement('p');
//     p.textContent = 'Hola sala';
//     div.appendChild(p);
// });

// -------------------------------------------

// 2. Contador: Crear un HTML con un botón  (-), un Parrafo y otro botón (+). El p inicialmente mostrará 0. Cuando pulse en el "+" se deberá sumar uno al valor del p. Cuando pulse en el "-" se deberá restar 1.

// const btnsum = document.querySelector(".sumar");
// const btnrest = document.querySelector(".restar");
// const parr = document.querySelector("p");
// console.log(parr);
// let counter = 0;


// btnsum.addEventListener('click', e => {
// counter++;
// parr.textContent = counter;

// });

// btnrest.addEventListener('click', e => {
//     counter--;
//     parr.textContent = counter;
    
// });


// 3. Crea un input que capture el evento del teclado (buscar eventos del teclado, keyD...) y muestre en un P debajo del input  las teclas que estas escribiendo.




// 4. Crea el siguiente formulario ahora vamos a recuperar sus datos, cuando terminemos de llenar el formulario y le demos al boton de submit, se debe mostrar debajo en tres P, el nombre, el email y el número, para esto es necesario que cancelemos el evento en nuestra función (usar e.preventDefault() ). (editado) 


// const nombre = document.getElementById('nombre');
// const correo = document.getElementById('correo');
// const telefono = document.getElementById('telefono');
// const botonenviar = document.getElementById('botonenviar');
// const puno = document.querySelector(".puno");
// const pdos = document.querySelector(".pdos");
// const ptres = document.querySelector(".ptres");

// botonenviar.addEventListener('click', e => {
//     e.preventDefault();
//     puno.textContent = nombre.value;
//     pdos.textContent = correo.value;
//     ptres.textContent = telefono.value;
    
// });

// -------------------------------------

// ### Almacenamiento ###

// 1. Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  y mánda un value al localstorage y otro al session storage


// const nombre = document.getElementById('nombre');
// const apellido = document.getElementById('apellido');
// const botonenviar = document.getElementById('botonenviar');



// En tu pagina html pinta en un P por pantalla el valor que tienes en el session storage.


// botonenviar.addEventListener('click', e => {
//     e.preventDefault();
//     let valuenom = nombre.value;
//     let valueap = apellido.value;
//     localStorage.setItem('nombre', valuenom);
//     sessionStorage.setItem('apellido', valueap);

//     let ape3 = sessionStorage.getItem('apellido');
//     const puno = document.querySelector(".puno");
//     puno.textContent = ape3;
    
// });


// 3.Obtener coordenadas mediante la api de  geolocalizacion, con los datos de la geolocalizacion mostrar en tu html   un enlace a googlemap que te lleve directo a tu posición actual.

// function success (position){
//     let latitud = position.coords.latitude;
//     let longitud = position.coords.longitude;
//     let enlace = document.createElement('a');
//     enlace.textContent = 'Mi posicion';
//     enlace.href ='https://www.google.es/maps/search/43.3641-5.855/@43.3376576,-5.9726935,15z'
//     console.log(latitud)
//     console.log(longitud)
//     document.body.appendChild(enlace);
// }
// navigator.geolocation.getCurrentPosition(success, function(msg){
// console.error('acepta');});
// ---------------------------------------------------

// 4 .Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres  input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History).



// const nombre = document.getElementById('nombre');
// const password = document.getElementById('password');
// const botonenviar = document.getElementById('botonenviar');


// botonenviar.addEventListener('click', e => {
//     e.preventDefault();
//     let valuenom = nombre.value;
//     let valueap = password.value;
//     localStorage.setItem('nombre', valuenom);
//     localStorage.setItem('password', valueap);
//     location.href = "./usuario.html";

    
// });




// 1. Crea un array de objetos que tenga dos propiedades : description (un string cualquiera que nos inventemos) y votes: un number con el contador de votaciones.


    // const pp = { 
    //     description: 'pp',
    //     votes: 0,
    // };

    // const psoe = { 
    //     description: 'psoe',
    //     votes: 0,
    // };

    // const vox = { 
    //     description: 'vox',
    //     votes: 0,
    // };

    // const podemos = { 
    //     description: 'podemos',
    //     votes: 0,
    // };

    // const arr = [];


//    2. Pintar en el HTML una lista con el array de objetos. Cada elemento de la lista tienen que mostrar la descripción y un botón que tenga el tenga el icono de thumbs-up y dentro del botón también se muestre el número de votos.

// document.getElementById('ppid');
// document.getElementById('psoeid');
// document.getElementById('voxid');
// document.getElementById('podemosid');

// ppid.textContent = pp.description;
// psoeid.textContent = psoe.description;
// voxid.textContent = vox.description;
// podemosid.textContent = podemos.description;

// document.getElementById('votospp');
// document.getElementById('votospsoe');
// document.getElementById('votosvox');
// document.getElementById('votospodemos');

// votospp.textContent = pp.votes;
// votospsoe.textContent = psoe.votes;
// votosvox.textContent = vox.votes;
// votospodemos.textContent = podemos.votes;


// 3.Cuando se pulse el botón, añadir uno a las votaciones actualizando el HTML


// let ppcounter =0;

// votospp.addEventListener('click', e => {
    
//     ppcounter++;
//     votospp.textContent = ppcounter;

// });


// let psoecounter =0;

// votospsoe.addEventListener('click', e => {
    
//     psoecounter++;
//     votospsoe.textContent = psoecounter;

// });


// let voxcounter =0;

// votosvox.addEventListener('click', e => {
    
//     voxcounter++;
//     votosvox.textContent = voxcounter;
    
//     });


// let podemoscounter =0;

// votospodemos.addEventListener('click', e => {
 
//     podemoscounter++;
//     votospodemos.textContent = podemoscounter;
        
//     });


// 4. Añadir un input y un botón para poder crear un nuevo objeto para votar. En este punto podemos vaciar el array de objetos inicial, ya que los temas de votación los introduciremos desde la interfaz.



//     const arr = [];



//     const inputpartido = document.createElement('input');
//     document.body.appendChild(inputpartido);
//     inputpartido.classList.add("inputclass");
//      const infoinput = document.querySelector(".inputclass");




//     const botonenviar = document.createElement('button');
//     botonenviar.classList.add("botonclase");
//     document.body.appendChild(botonenviar);
//     document.querySelector(".botonclase");

    
//     botonenviar.textContent = "votar";


    
// botonenviar.addEventListener('click', () => {
    
//   const parti = {
//       descripcion: infoinput.value,
//       voto: 0,
//     }
//     console.log(parti);
// });
// ------------------------------------------------------------------------

// <!-- ## poo ( oop) programacion orientada a objetos -->



// <!-- 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()). -->


// class Dog {

//     constructor(name,age,legs,color,) {
       
//         this.name = name;
//         this.age = age;
//         this.legs = legs;
//         this.color = color;
//     }

//     makesound(){
//             return 'guau guau';
//         }
//     }



    // 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())

    // class Cat {

    //     constructor(name,age,legs,color,) {
           
    //         this.name = name;
    //         this.age = age;
    //         this.legs = legs;
    //         this.color = color;
    //     }
    
    //     makesound(){
    //             return 'miau miau';
    //         }
    //     }


// ---------------------------------------------------------------

// 3- Crear un objeto de cada clase e imprimir el sonido que hace.

// const garfield = new Cat('garfield', 13, 4, 'orange'); 
// console.log(garfield);


// const pluto = new Dog('pluto', 8, 4, 'black'); 
// console.log(pluto);

// console.log(garfield.makesound());
// console.log(pluto.makesound());

// 4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido())


        
    // class Animal {

    //     constructor(name,age,legs,color,) {
           
    //         this.name = name;
    //         this.age = age;
    //         this.legs = legs;
    //         this.color = color;
    //     }
    
    //     makesound(){
    //             return 'sonidoanimal';
    //         }
    //     }


    // 5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y muestra por consola el sonido.

    // class Cow extends Animal { // esto permite que la clase perro herede propiedades y métodos del Animal

    //     constructor(name,age,legs,color,type){
    //         super(name,age,legs,color); 
    //         this.type=type;
    //     }
    
    //     makesoundvaca(){
    //         return 'muuuu';
    //     }
        
    // }

    // const milka = new Cow('milka', 3, 4, 'black'); 
    //     console.log(milka.makesoundvaca());


    // 6. Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase Koala y muéstralo por consola.


    // class Koala extends Animal { 

    //     constructor(name,age,legs,color,){
    //         super(name,age,legs,color); 
    //     }
    
    //     saludaranimal(){
    //         return `hola, soy el Koala ${this.name} y tengo ${this.age} años`;
    //     }
        
    // }

    // const koly = new Koala('koly', 10, 4, 'grey'); 
    //     console.log(koly.saludaranimal());


// 7- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro. Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre el eje Y


// class Circulo {

//     constructor(radio,color,) {
       
//         this.radio = radio;
//         this.color = color;

//     }
    
//     calcularArea = function() {
//         return Math.PI * Math.pow(this.radio,2);
//       }

//     calcularPerimetro = function() {
//         return Math.PI * this.radio * 2;
//      }

    

//     }

//     const cir1 = new Circulo(2,'green');

//     const cir2 = new Circulo(15,'red');

//     console.log(cir1.calcularArea());
//     console.log(cir2.calcularArea());




// Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre el eje Y
    


    // pintarCirculo = function(ob) {
    //     const pcirculo = document.createElement('div');
    //     pcirculo.style= `background-color:${ob.color}; width:${ob.radio *2}cm ; height:${ob.radio *2}cm; border-radius:50%;`;
    //     document.body.appendChild(pcirculo);
    //   }

    // pintarCirculo(cir1);



// ----------------------------------------------------


/* 1-Crea una clase de tipo producto que contenga nombre, imagen  y precio. */

class Product {

        constructor(name,image,price) {
           
            this.name = name;
            this.image = image;
            this.price = price;
    
        }
    }

// 2. luego crea varios productos de la clase Producto.


const chocolate = new Product('milka', 'https://m.media-amazon.com/images/I/815LKytPiZS._AC_SL1500_.jpg' , 3);

const tomate = new Product('orlando', 'https://distribucionesplata.com/tienda/18550-thickbox_default/tomate-frito-orlando-brik-780-gr.jpg' , 4);

const patatas = new Product('lays', 'https://m.media-amazon.com/images/I/71VaXGXPXGS._AC_SX342_.jpg' , 2);


// 3- Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  el descuento, la cuenta global, y un método de agregar productos el cual sumara productos al array e ira sumando al precio total.




class Carrito {

    constructor(products,total,discount,global) {
       
        this.products = products = []
        this.total = ;
        this.price = price;

    }
}


