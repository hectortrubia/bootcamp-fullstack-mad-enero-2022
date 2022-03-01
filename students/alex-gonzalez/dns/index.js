import { argv } from 'process';
import { lookup, reverse } from 'dns';

const param = argv[2]; // obtengo el DNS
const options = {
    all: true
}


const paramSplitted = param.split('.');
if(paramSplitted.length === 4 && !paramSplitted.some(e => isNaN(parseInt(e)))){
// if(/\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/.test(param)){ // esto sustituye a la linea 11 y 10
    // Aqui hemos identificado que es una ipV4
    reverse(param, (err, hostnames) => {
        console.log(hostnames)
        lookup(hostnames[0], options, (err, address) => console.log(address));
    });
}else{
    lookup(param, options, (err, address) => console.log(address));
}

