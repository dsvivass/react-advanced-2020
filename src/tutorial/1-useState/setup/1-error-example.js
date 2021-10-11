import React from 'react';

// En este ejemplo no podremos cambiar el titulo
// Es solo para ilustrar que no funciona
// Ver el 2

const ErrorExample = () => {
  var title = 'Random title'

  const handleClick = () => {
    title = 'Titulo cambiado'
    console.log(title)
  }

  return (
    <div>
      <h1>{ title }</h1>

      <button type="button" className="btn" onClick={handleClick}>Click on me!</button>
    </div>
  )
};

export default ErrorExample;
