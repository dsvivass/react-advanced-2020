import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    // setTimeout(() => {setValue(value + 1)}, 2000) // Asi hagamos 10 clicks en ese lapso 
                                            // solo incrementa uno
    setTimeout(() => { // Si hacemos 10 clicks, incrementa el
                    // valor 10 veces despues de 2 seg
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(0)}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value -1)}>
          Decrease
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>

      <section style={{ margin: '4rem 0'}}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => complexIncrease()}>
          Complex increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
