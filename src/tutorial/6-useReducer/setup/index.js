import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name){
      const newItem = {
        id: new Date().getTime().toString(),
        name
      }

      dispatch({type: 'ADD_ITEM', payload: newItem}) // Lo de adentro es el action
                  // Es comun usar estas convenciones (payload), pero no es regla
                  // y el tipo en MAYUSCULAS_SEPARADO_POR_RAYA_AL_PISO
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  return <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type="text" value={name} 
          onChange={(e) => setName(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
    {state.people.map((person) => {
      const {id, name} = person
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => dispatch({
            type: 'REMOVE_ITEM',
            payload: id
            })}>Remove</button>
        </div>
      )
    })}
  </>;
};

export default Index;
