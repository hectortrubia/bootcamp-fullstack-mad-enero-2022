# Ficheros y Directorios

Un fichero es un elemento del sistema operativo que nos ayuda a almacenar información incluso cuando el ordenador se apague. Tiene una serie de características:

- nombre
- extensión: Lo que va despues del ultimo '.' y nos ayuda a conocer el formato en el que está escrito ese fichero.
- path: la ruta del Sistema Operativo donde se encuentra alojado ese fichero.
- Metainformación: fecha de creación / modificación, usuario, etc
- datos: la información que contiene el archivo.
- permisos: indican que operaciones puede hacer con el archivo cada usuario

**No puede existir en un mismo SO, dos archivos que tengan la misma combinación de path+nombre+extensión**

## Permisos

Hay 3 operaciones básicas:

- Lectura (r)
- Escritura (w)
- Ejecución (x)

Hay 3 grupos de usuarios en el cual se especica si se puede o no realizar alguna de las operaciones.

- Owner
- Grupo Owner
- El resto del mundo

Por tanto tengo que especificar 9 combinaciones posibles:

  O   G   A
 rwx rwx rwx
 111 100 000 -> El dueño del archivo puede leer, escribir y ejecutar. Cualquier usuario que pertenezca al grupo del dueño del archivo, puede leerlo pero no escribir y ejecutar. Y el resto no pueden ni leer ni escribir ni ejecutar.

Para representar los permisos se utiliza la base Octal. Los permisos del ejemplo serían **740**

## Como gestiono archivos/directorios en NodeJS

NodeJS dispone de un módulo para la gestión del file system. Este módulo es el [`fs`](https://nodejs.org/docs/latest/api/fs.html)
