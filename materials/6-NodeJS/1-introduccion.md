# Introducción a NodeJS

Es una plataforma que nos permite ejecutar JS fuera del entorno del navegador. Utiliza el motor V8 de Chrome y te proporciona objetos/modulos para poder acceder al Sistema Operativo (que no existen en el navegador). Además no existe el BOM ni el DOM.

Los nuevos objetos que conoceremos son:

- El módulo de OS (Operating System)
- El módulo de `path` (para la gestión de las rutas de un SO)
- El módulo `process` (Que nos permite gestionar el proceso NodeJS ¿Que será esto?)
- El módulo `fs` (Modulo para el sistema de archivos del SO)
- ...

## Hello world en NodeJS

Para poder crear nodejs, utilizaremos archivos JS.

hello-world.js

```js
console.log('Hola Mundo');
```

¿Como lo ejecuto?

> node hello-world.js

## Sistema de Modulos en JavaScript

[Diferentes Módulos de JS](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

Hay que utilizar ESM siempre que se pueda.

Para poder instalar en NodeJS los ESM os dejo lo siguiente:

[Habilitar ESM en NodeJS](https://nodejs.org/api/esm.html#enabling)

Por defecto todavía NodeJS utiliza CJS (require + module.exports). Para cambiarlo tenemos dos opciones:

1. Cambiar las extensiones de archivo a `.mjs`
2. Cambiar el package.json el tipo de módulo (Recommended) ==> Necesario tener un proyecto npm (`npm init -y`)

## Procesos del SO

Un proceso (`process`) es una aplicación en ejecución. Depende de nuestra CPU podemos ejecutar X procesos en paralelo. Tambien se le conoce como `Thread` y otro "sinónimo" en castellano es `hilo`.

NodeJS nos proporciona un módulo que nos ayuda a ver la información del proceso actual.

[Process NodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/process.html)

## Elementos Core de NodeJS

- **OS**: Módulo para la gestión del Sistema Operativo [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)
- **Process**: Módulo para la gestión del proceso actual ene ejecución de NodeJS. [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/process.html)
- **DNS**: Módulo para solicitar y utilizar información del DNS actual de mi ordenador (Domain Name Server). [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/dns.html).
- **Objeto Global**: Es diferente al browser (era window). Aqui el objeto global tiene sus propias funciones. [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/globals.html)
- **Path**: Una serie de utilidades par trabajar con rutas en el SO. [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/path.html).
