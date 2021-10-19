import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)
  useEffect(() => {
    console.log('call useEffect!')

    if (value > 1){
      document.title = `New message (${value})`
    }
  }, [value]) // Como segundo valor paso una lista
            // de los valores que al re-renderizarse activaran
            // el useEffect, en este caso el value al cambiar lo activara

  // Podemos usar multiples useEffect
  useEffect(() => {
    console.log('rererere')
  }, []) // Se activa solo cuando se carga la pagina
        // al principio
  
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>
      Click me!
    </button>
    <h1>{value2}</h1>
    <button className='btn' onClick={() => setValue2(value2 + 1)}>
      Click me!
    </button>
  </>;
};

export default UseEffectBasics;
