# Contexto en React

Hasta ahora habíamos como a través de props comunicábamos (mandamos info) un padro con su hijo y un hijo con su padre. Además esto nos ayudaba a comunicar hermanos directos (hijo --> Padre, Padre --> Otro Hijo).

_¿Que pasa si quiero comunicar un componente (de nivel 100) con otro padre que esté en nivel 50?_

Lo primero que se nos ocurre es empezar a hacer comunicación hijo-padre desde el nivel 100 de profundidad hasta el nivel 50 (50 props de tipo función que se van añadiendo en cada nivel). **ESTO ES UNA LOCURAAA**

Me hago dos preguntas

_¿Puedo tener un mecanismo para comunicarme directamente?_ _¿Puedo mandar un "Evento" y quien quiera lo escuche?_

La respuesta es SI y react nos proporciona un mecanismo llamado `Context`.

## Pasos para crear un contexto y usar su value

1. En un archivo exportamos una constante que sea lo que devuelve la función `React.createContext(_default_value_)`

   ```js
   import { createContext } from "react";

   export const CurrencyContext = createContext("$"); // creamos un contexto de currency. A partir de aqui ya existirá el contexto y lo podré usar
   ```

2. El contexto devuelto es un objeto que dentro de su propiedad `Provider` tiene un Componente react que proporciona valor al contexto para los hijos de este. Asi que tendremos que crear el Provider como padre de los hijos que necesiten el contexto. Si es global es muy habitual ponerlo como padre en el App.js

App.js

```jsx
import { CurrencyContext } from "RUTA/currency.context";

function App() {
  return (
    <>
      {/* El value, es el valor que obtendrán los hijos cuando usen el contexto */}
      <CurrencyContext.Provider value="$">
        {/*TODO EL DOM HIJO QUE NECESITE ACCEDER A ESTE CONTEXTO*/}
        <BrowserRoute>
          <CurrencyContext.Provider value="€">
            <Header></Header> {/* Si header accede al contexto, el valor que obtendrá es €*/}
          </CurrencyContext.Provider>
          <Routes>
            <Route></Route>
            {/*...*/}
          </Routes>
          <Footer></Footer> {/* Si footer accede al contexto, el valor que obtendrá es $*/}
        </BrowserRoute>
      </CurrencyContext.Provider>
    </>
  );
}
```

3. En el componente en el que queramos el valor del provider, debemos usar un hook de react que se llama `useContext`. Como parámetro de entrada del hook, debemos pasarle la constante del punto 1. El hook al ejecutarse devuelve el `value` del `Provider` ascendente más cercano.

Header

```jsx
import { useContext } from "react";
import { CurrencyContext } from "RUTA/currency.context";

function Header() {
  const currency = useContext(CurrencyContext); // el value en este componente es €

  return <h1>Currency {currency}</h1>;
}

// en otro archivo

function Footer() {
  const currency = useContext(CurrencyContext); // el value en este componente es $

  return <h1>Currency {currency}</h1>;
}
```

## Como actualizo el value de un context para que reaccionen el resto de componentes

1. Es crear un nuevo componente envoltorio (Wrapper), donde definamos el Provider del contexto y pintemos sus children.

```jsx
import { CurrencyContext } from "RUTA/currency.context";

function CurrencyProvider({ children }) {
  // deconstruyo el children para pintar sus hijos

  return (
    <CurrencyContext.Provider value="$">
      {children}
      {/* Envuelvo los hijos de este componente en un provider del context */}
    </CurrencyContext.Provider>
  );
}
```

Esto que acabo de hacer me permite modicar el App.js como sigue

```jsx
import { CurrencyProvider } from "RUTA/currency.provider";

function App() {
  return (
    <CurrencyProvider>
      <BrowserRoute>
        <Header></Header> 
        <Routes>
          <Route></Route>
          {/*...*/}
        </Routes>
        <Footer></Footer>
      </BrowserRoute>
    </CurrencyProvider>
  );
}
```

2. Dar la posibilidad en nuestro Wrapper de poder actualizarse utilizando un useState

Modificamos el CurrencyProvider

```jsx
import { CurrencyContext } from "RUTA/currency.context";

function CurrencyProvider({ children }) {
  // deconstruyo el children para pintar sus hijos
  // obtenemos currency, en vez de fijo, de un state
  const contextState = useState('$'); 

  return (
      <>
        {/*Al pasar como value el array del useState, permito que cualquier hijo
           pueda llamar a al funcion de actualización de estao y por tanto refrescar
           este provider (y como consecuencia todos sus hijos con el nuevo valor)*/}
        <CurrencyContext.Provider value={contextState}>
        {children}
        {/* Envuelvo los hijos de este componente en un provider del context */}
        </CurrencyContext.Provider>
    </>
  );
}
```

3. Tendremos dos tipos de componente hijo, los consumidores y los actualizadores del valor o los dos a la vez. Tambien existen componentes que ignorarán el context

Consumidor.jsx

```jsx

import { useContext } from "react";
import { CurrencyContext } from "RUTA/currency.context";

function Consumer(){
    // ahora en vez de guardarlo como variable directa, deconstruyo el array, 
    // quedándome con el primer elemento que es el valor
    const [currency] = useContext(CurrencyContext);

    return <h1>Moneda: {currency}</h1>
}


function Updater(){ // este componente SOLO actualiza
    // necesita solo la función de actualización (Segundo parámetro)
    const [,updateCurrency] = useContext(CurrencyContext);

    // es como tener un useState y llamo a su función de actualización
    return <button onClick={() => updateCurrency('€')}>Actualizar a Euros</button>
}


function ConsumerUpdater(){ // este componente actualiza y consume
    // necesita los dos elementos
    const [currency,updateCurrency] = useContext(CurrencyContext);

    // es como tener un useState y llamo a su función de actualización
    return <button onClick={() => updateCurrency('€')}>Actualizar a Euros (Actualmente{currency})</button>
}


```
