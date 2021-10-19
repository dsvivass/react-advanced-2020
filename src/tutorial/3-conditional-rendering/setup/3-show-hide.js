import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return <>
    <button className='btn' onClick={() => setShow(!show)}>
      show/hide
    </button>
    {show && <Item/>}
  </>;
};


const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checksize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checksize)

    return (
      window.removeEventListener('resize', checksize)
    )
  }, []) // Aqui no sera suficiente con ponerlo vacio []
    // debido al toggle

  return <div style={{marginTop: '2rem'}}>
    <h1>Window</h1>
    <h2>Size: {size}</h2>
  </div>
}

export default ShowHide;
