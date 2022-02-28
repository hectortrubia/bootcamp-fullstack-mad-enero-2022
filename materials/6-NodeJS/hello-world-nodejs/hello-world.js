import os from 'os'; // version ESM
// const os = require('os'); // version CJS
import { cwd, pid, ppid } from 'process';

// console.log(`Current directory: ${cwd()}`);
console.log(`Current Process PID: ${pid}`);
console.log(`Current Process Parent PID: ${ppid}`);
console.log(`mi carpeta de home: ${os.homedir()}`);

setInterval(() => { // Mantengo el proceso vivo cada segundo
    console.log(`${pid}: Sigo vivo`);
},1000);

setTimeout(() => { // paro el proceso a los 10 segundos
    console.log('parando el proceso');
    process.exit();
},10000);
