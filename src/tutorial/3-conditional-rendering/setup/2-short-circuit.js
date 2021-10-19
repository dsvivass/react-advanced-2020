import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(true)

  // const firstValue = text || 'hello world'; // Retorna el segundo si esta vacio
  // const secondValue = text && 'hello world'; // Retorna el primero si esta vacio

  return <>
    {/* <h1>{firstValue}</h1>
    <h2>Value: {secondValue}</h2> */}

    {/* Sirve como para manejar valores por defecto */}
    <h1>{text || 'Bienvenido al servicio'}</h1> 

    {/* El and && se usa diferente, si encontramos el valor de text */}
    {/* Entonces retornamos un h1 con algun contenido */}
    {text && <h1>Bienvenido</h1>}

    {!text && <h1>Logueate</h1>}
    
    <button className='btn' onClick={
      () => {
        setIsError(!isError)
        setText('Juan')
      }
      }>
      Toggle Error
    </button>
    
    {isError && <h1>Error...</h1>}
    {isError ? <p>There is an error...</p> : <div>
        There is no error!!!
      </div>}
  </>;
};

export default ShortCircuit;
