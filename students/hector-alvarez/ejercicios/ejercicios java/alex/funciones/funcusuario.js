
let nom3 = localStorage.getItem('nombre');
let pass3 = localStorage.getItem('password');
console.log(nom3)
const h2 = document.getElementById('titulo');
h2.textContent = nom3;



const botoncerrar = document.getElementById('cerrar');

botoncerrar.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem('nombre');
    localStorage.removeItem('password');
    history.back();

});