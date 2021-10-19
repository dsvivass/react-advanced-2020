import React, { useEffect } from 'react';

const Modal = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.closeModal()
    }, 3000)
  })

  return <div className='modal'>{props.modalContent}</div>;
};

export default Modal;
