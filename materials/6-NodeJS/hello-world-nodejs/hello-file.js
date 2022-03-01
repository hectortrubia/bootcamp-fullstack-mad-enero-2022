import { readFile, writeFile, rm, mkdir  } from 'fs/promises';
import { readFileSync } from 'fs';

const data = await readFile('./package.json', { encoding: 'utf-8' }); // lectura de un archivo
const dataObj = JSON.parse(data);
dataObj.keywords.push('Hola', 'Adios', 'Bootcamp');

await writeFile('./package.json', JSON.stringify(dataObj)); // sobreescribe un fichero

// await rm('./hello.txt'); // elimina un archivo

await writeFile('./hello.md', '# hello'); // crea el archivo si no existe

const dataSync = readFileSync('./hello.md', { encoding: 'utf8'})
console.log(dataSync);

await mkdir('other');
writeFile('./other/hello.txt', '# hello');