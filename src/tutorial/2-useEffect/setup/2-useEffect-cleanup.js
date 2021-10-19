import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    // return () => { // Aunque en este caso no es necesario, porque
                    // el componente siempre se mostrara, se usa bastante
                    // cuando los componentes aparecen y desaparecen
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])

  return <>
    <h1>window</h1>
    <h2>{size} PX</h2>
  </>;
};

export default UseEffectCleanup;
