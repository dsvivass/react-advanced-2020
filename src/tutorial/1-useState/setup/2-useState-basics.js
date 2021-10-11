import React, { useState } from 'react';

const UseStateBasics = () => {

  // useState es como un setter, que me devuelve un valor por defecto
  // o que me permite cambiar el valor

  // useState debe estar dentro del componente

  // Creo que useState no se puede usar como validacion en un condicional
  // if (useState ...... )

  // console.log(useState()) // Aqui veo que devuelve una lista con valor y funcion

  // const value = useState('Hola')[0]
  // const handler = useState('Hola')[1] // La funcion que la controla

  // console.log(value)
  // console.log(handler)

  // Por convencion se nombra <value>, set<value>
  const [text, setText] = useState('random Title')

  const handleClick = () => {
    if( text === 'random Title' ){
      setText('hello World from handler') // Aqui invoco el setText

    } else {
      setText('random Title') // Aqui invoco el setText

    }
    
  }

  return (
    <div>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Click to change title!
      </button>
    </div>
  )
};

export default UseStateBasics;
